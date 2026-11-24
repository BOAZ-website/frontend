import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { ARCHIVE_QUERY_OPTIONS } from '@/widgets/archive/model/query-option';
import GenerationFilterOverlay from '@/widgets/archive/ui/generation-filter/generation-filter';
import SearchOverlay from '@/widgets/archive/ui/search-overlay/search-overlay';
import TrackFilterOverlay from '@/widgets/archive/ui/track-filter/track-filter';
import type { ArchiveTrack } from '@/shared/api/archive';
import type { ArchiveItemResponse } from '@/shared/api/types';
import ActiveCard from '@/shared/components/archive/active-card';
import BlogCard from '@/shared/components/archive/blogcard';
import ProjectCard from '@/shared/components/archive/project-card';
import Pagination from '@/shared/components/pagination/pagination';
import { useDebounce } from '@/shared/hooks/use-debounce';
import { getTrackLabel } from '@/shared/utils/track-label';

import * as styles from './archive-page.css';

type ArchiveTab = 'PROJECT' | 'BLOG' | 'ACTIVITY';

type ArchiveLinks = {
  github?: string;
  slideshare?: string;
  medium?: string;
  instagram?: string;
  web?: string;
};

/** 자료 카드의 부문 이름. 분석 부문은 그 자료의 기수로 정한다(27기 이하·기수 모름은 분석, 28기 이후는 AI). */
const archiveTrackLabel = (track: ArchiveTrack | undefined, term: number | undefined): string =>
  !track || track === 'ALL' ? '전체' : getTrackLabel(track, term);

const formatTerm = (term: number) => (term === 0 ? '7기 이전' : `${term}기`);

const PAGE_SIZE: Record<ArchiveTab, number> = {
  PROJECT: 12,
  BLOG: 6,
  ACTIVITY: 12,
};

const TABS: { id: ArchiveTab; label: string }[] = [
  { id: 'PROJECT', label: '프로젝트' },
  { id: 'BLOG', label: '블로그' },
  { id: 'ACTIVITY', label: '활동사진' },
];

const ArchivePage = () => {
  const [activeTab, setActiveTab] = useState<ArchiveTab>('PROJECT');
  const [inputValue, setInputValue] = useState('');
  const [selectedTrack, setSelectedTrack] = useState<ArchiveTrack | undefined>();
  const [selectedTerm, setSelectedTerm] = useState<number | undefined>();
  const [currentPage, setCurrentPage] = useState(1);

  const debouncedKeyword = useDebounce(inputValue, 300);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentPage(1);
  }, [debouncedKeyword]);

  const handleTabChange = (tab: ArchiveTab) => {
    if (tab === activeTab) {
      return;
    }
    setActiveTab(tab);
    setInputValue('');
    setSelectedTrack(undefined);
    setSelectedTerm(undefined);
    setCurrentPage(1);
  };

  const handleTrackChange = (track: ArchiveTrack | undefined) => {
    setSelectedTrack(track);
    setCurrentPage(1);
  };

  const handleTermChange = (term: number | undefined) => {
    setSelectedTerm(term);
    setCurrentPage(1);
  };

  const keyword = debouncedKeyword || undefined;

  const { data: projectsData } = useQuery({
    ...ARCHIVE_QUERY_OPTIONS.PROJECTS({
      track: selectedTrack,
      term: selectedTerm,
      keyword,
      page: currentPage,
      size: PAGE_SIZE.PROJECT,
    }),
    enabled: activeTab === 'PROJECT',
  });

  const { data: blogsData } = useQuery({
    ...ARCHIVE_QUERY_OPTIONS.BLOGS({
      track: selectedTrack,
      keyword,
      page: currentPage,
      size: PAGE_SIZE.BLOG,
    }),
    enabled: activeTab === 'BLOG',
  });

  const { data: activitiesData } = useQuery({
    ...ARCHIVE_QUERY_OPTIONS.ACTIVITIES({
      term: selectedTerm,
      keyword,
      page: currentPage,
      size: PAGE_SIZE.ACTIVITY,
    }),
    enabled: activeTab === 'ACTIVITY',
  });

  const { data: termsData } = useQuery(ARCHIVE_QUERY_OPTIONS.TERMS());
  const termOptions = termsData?.terms ?? [];

  const activeData = { PROJECT: projectsData, BLOG: blogsData, ACTIVITY: activitiesData }[
    activeTab
  ];

  const posts = activeData?.posts ?? [];
  const totalPages = activeData?.total_pages ?? 0;

  const showTrackFilter = activeTab === 'PROJECT' || activeTab === 'BLOG';
  const showTermFilter = activeTab === 'PROJECT' || activeTab === 'ACTIVITY';

  const renderCards = (items: ArchiveItemResponse[]) => {
    if (activeTab === 'PROJECT') {
      return items.map((item) => {
        const links = (item.links as ArchiveLinks) ?? {};
        return (
          <ProjectCard
            key={item.id}
            imageSrc={item.image_url}
            subTitle={item.team_name}
            title={item.title ?? ''}
            generation={formatTerm(item.term ?? 0)}
            category={archiveTrackLabel(item.track, item.term)}
            githubUrl={links.github}
            slideshareUrl={links.slideshare}
          />
        );
      });
    }

    if (activeTab === 'BLOG') {
      return items.map((item) => {
        const links = (item.links as ArchiveLinks) ?? {};
        const card = (
          <BlogCard
            category={archiveTrackLabel(item.track, item.term)}
            title={item.title ?? ''}
            date={item.content_date ?? ''}
            imageSrc={item.image_url}
          />
        );
        return links.medium ? (
          <a
            key={item.id}
            href={links.medium}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.blogLink}
          >
            {card}
          </a>
        ) : (
          <div key={item.id}>{card}</div>
        );
      });
    }

    return items.map((item) => {
      const links = (item.links as ArchiveLinks) ?? {};
      return (
        <ActiveCard
          key={item.id}
          imageSrc={item.image_url}
          title={item.title ?? ''}
          date={item.content_date ?? ''}
          generation={formatTerm(item.term ?? 0)}
          href={links.instagram ?? links.web}
        />
      );
    });
  };

  return (
    <main className={styles.page}>
      <div className={styles.section}>
        <div className={styles.tabRow}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={styles.tab[tab.id === activeTab ? 'active' : 'default']}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.filterBar}>
          <SearchOverlay value={inputValue} onChange={setInputValue} />
          <div className={styles.filterGroup}>
            {showTrackFilter && (
              <TrackFilterOverlay value={selectedTrack} onChange={handleTrackChange} />
            )}
            {showTermFilter && (
              <GenerationFilterOverlay
                value={selectedTerm}
                onChange={handleTermChange}
                options={termOptions}
              />
            )}
          </div>
        </div>

        {posts.length === 0 ? (
          <div className={styles.emptyState}>검색 결과가 없습니다.</div>
        ) : (
          <div className={activeTab === 'BLOG' ? styles.blogGrid : styles.cardGrid}>
            {renderCards(posts)}
          </div>
        )}

        <div className={styles.paginationWrapper}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </main>
  );
};

export default ArchivePage;
