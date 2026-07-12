import ArrowWhite from '@/shared/assets/icons/ic_arrow_right.svg?react';
import ArrowBlack from '@/shared/assets/icons/ic_arrow_right_black.svg?react';
import Button from '@/shared/components/button/button';

import * as styles from './button-capture-page.css';

/**
 * Design-system 문서화용 임시 캡처 페이지.
 * components/button 의 11개 preset + compoundVariants(hasIcon/responsive) + color 상태를
 * 실제 recipe 스타일 그대로 한 화면에 모아 스크린샷으로 남기기 위한 용도.
 * 스크린샷 촬영 후 라우트/파일은 제거합니다.
 */

const PRESETS: Array<{
  preset: Parameters<typeof Button>[0]['preset'];
  variant: string;
  color: string;
  text: string;
}> = [
  { preset: 'wide_primary', variant: 'wide', color: 'primary', text: '와이드 버튼' },
  { preset: 'large_white', variant: 'large', color: 'white', text: '지원하기' },
  { preset: 'large-round_primary', variant: 'large-round', color: 'primary', text: '지원하기' },
  { preset: 'medium_primary', variant: 'medium', color: 'primary', text: '지원하기' },
  { preset: 'medium_white', variant: 'medium', color: 'white', text: '지원하기' },
  { preset: 'medium-icon_white', variant: 'medium-icon*', color: 'white', text: '더보기' },
  { preset: 'medium-round_primary', variant: 'medium-round', color: 'primary', text: '지원하기' },
  { preset: 'small-round_primary', variant: 'small-round', color: 'primary', text: '더보기' },
  { preset: 'small-round_outlined', variant: 'small-round', color: 'outlined', text: '더보기' },
  { preset: 'small-round_glass', variant: 'small-round', color: 'glass', text: '더보기' },
  { preset: 'mini_outlined', variant: 'mini', color: 'outlined', text: '더보기' },
];

const ButtonCapturePage = () => {
  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Button — Preset 시스템 캡처</h1>
        <p className={styles.pageSubtitle}>
          components/button · preset(&quot;variant_color&quot;) 11종 + compoundVariants 7종 전체
          캡처
        </p>
      </header>

      {/* 1. 11종 preset 전체 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>정의된 preset 11종</h2>
        <p className={styles.sectionDesc}>
          ButtonProps 유니온에 정의된 모든 preset의 기본(default) 상태
        </p>
        <div className={styles.grid}>
          {PRESETS.map(({ preset, variant, color, text }) => (
            <div className={styles.card} key={preset}>
              <div className={styles.presetLabel}>{preset}</div>
              <div className={styles.demoArea}>
                <Button preset={preset}>{text}</Button>
              </div>
              <div className={styles.meta}>
                variant: {variant} · color: {color}
              </div>
              {preset === 'medium-icon_white' && (
                <div className={styles.warning}>
                  ⚠ recipe variants에 &quot;medium-icon&quot;이 정의되어 있지 않아 base 스타일만
                  적용됨 (padding 없음). 실제 사용은 preset=&quot;medium_white&quot; hasIcon 조합
                  권장.
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 2. compoundVariants - hasIcon */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>compoundVariants — hasIcon 보정</h2>
        <p className={styles.sectionDesc}>
          medium / small-round variant에서 hasIcon=true일 때 padding·border가 어떻게 보정되는지 비교
        </p>

        <div className={styles.pairRow}>
          <div className={styles.stateGroup}>
            <div className={styles.stateGroupTitle}>medium_white</div>
            <div className={styles.stateItem}>
              <span className={styles.stateItemLabel}>기본</span>
              <Button preset="medium_white">자세히 보기</Button>
            </div>
            <div className={styles.stateItem}>
              <span className={styles.stateItemLabel}>hasIcon</span>
              <Button preset="medium_white" hasIcon>
                자세히 보기
                <ArrowBlack width={16} height={16} />
              </Button>
            </div>
          </div>

          <div className={styles.stateGroup}>
            <div className={styles.stateGroupTitle}>small-round_primary</div>
            <div className={styles.stateItem}>
              <span className={styles.stateItemLabel}>기본</span>
              <Button preset="small-round_primary">더보기</Button>
            </div>
            <div className={styles.stateItem}>
              <span className={styles.stateItemLabel}>hasIcon</span>
              <Button preset="small-round_primary" hasIcon>
                더보기
                <ArrowWhite width={14} height={14} />
              </Button>
            </div>
          </div>

          <div className={styles.stateGroup}>
            <div className={styles.stateGroupTitle}>small-round_glass</div>
            <div className={styles.stateItem}>
              <span className={styles.stateItemLabel}>기본</span>
              <Button preset="small-round_primary">더보기</Button>
            </div>
            <div className={styles.stateItem}>
              <span className={styles.stateItemLabel}>glass</span>
              <Button preset="small-round_glass">더보기</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. color 상태 - hover / disabled */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>color 상태 — hover / disabled</h2>
        <p className={styles.sectionDesc}>
          hover는 실제 :hover 의사클래스를 캡처 시 마우스 오버로 재현, 나머지 색상은 hover 배경색을
          hex로 표기. outlined/glass는 disabled 스타일이 정의되어 있지 않음(비활성 필요 시 별도 처리
          필요).
        </p>
        <div className={styles.stateRow}>
          <div className={styles.stateGroup}>
            <div className={styles.stateGroupTitle}>primary</div>
            <div className={styles.stateItem}>
              <span className={styles.stateItemLabel}>기본</span>
              <Button preset="medium_primary">지원하기</Button>
            </div>
            <div className={styles.stateItem} data-hover-target="primary">
              <span className={styles.stateItemLabel}>hover</span>
              <Button preset="medium_primary">지원하기</Button>
            </div>
            <div className={styles.stateItem}>
              <span className={styles.stateItemLabel}>disabled</span>
              <Button preset="medium_primary" disabled>
                지원하기
              </Button>
            </div>
          </div>

          <div className={styles.stateGroup}>
            <div className={styles.stateGroupTitle}>white</div>
            <div className={styles.stateItem}>
              <span className={styles.stateItemLabel}>기본</span>
              <Button preset="medium_white">지원하기</Button>
            </div>
            <div className={styles.stateItem}>
              <span className={styles.stateItemLabel}>hover</span>
              <span className={styles.hexChip}>gray100</span>
            </div>
            <div className={styles.stateItem}>
              <span className={styles.stateItemLabel}>disabled</span>
              <Button preset="medium_white" disabled>
                지원하기
              </Button>
            </div>
          </div>

          <div className={styles.stateGroup}>
            <div className={styles.stateGroupTitle}>outlined</div>
            <div className={styles.stateItem}>
              <span className={styles.stateItemLabel}>기본</span>
              <Button preset="mini_outlined">더보기</Button>
            </div>
            <div className={styles.stateItem}>
              <span className={styles.stateItemLabel}>hover</span>
              <span className={styles.hexChip}>gray900 배경</span>
            </div>
            <div className={styles.stateItem}>
              <span className={styles.stateItemLabel}>disabled</span>
              <span className={styles.hexChip}>정의 안 됨</span>
            </div>
          </div>

          <div className={styles.stateGroup}>
            <div className={styles.stateGroupTitle}>glass</div>
            <div className={styles.stateItem}>
              <span className={styles.stateItemLabel}>기본</span>
              <Button preset="small-round_glass">더보기</Button>
            </div>
            <div className={styles.stateItem}>
              <span className={styles.stateItemLabel}>hover</span>
              <span className={styles.hexChip}>rgba(208,207,249,.20)</span>
            </div>
            <div className={styles.stateItem}>
              <span className={styles.stateItemLabel}>disabled</span>
              <span className={styles.hexChip}>정의 안 됨</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. responsive - 반드시 mobile viewport(<=768px)에서 캡처 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>responsive — mobile(≤768px) compoundVariants</h2>
        <p className={styles.sectionDesc}>
          아래 4개는 이 뷰포트가 768px 이하일 때만 시각적으로 달라집니다. 모바일 캡처는 별도
          스크린샷으로 촬영하세요.
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.presetLabel}>medium_white + responsive</div>
            <div className={styles.demoArea}>
              <Button preset="medium_white" responsive>
                자세히 보기
              </Button>
            </div>
            <div className={styles.meta}>
              mobile: body3_bd_18, 0.9rem 2.2rem, radius 4px, width 100%
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.presetLabel}>medium_white + hasIcon + responsive</div>
            <div className={styles.demoArea}>
              <Button preset="medium_white" hasIcon responsive>
                자세히 보기
                <ArrowBlack width={16} height={16} />
              </Button>
            </div>
            <div className={styles.meta}>
              mobile: text_bd_8, 0.9rem 2.2rem, radius 4px, width 100%
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.presetLabel}>medium-round_primary + responsive</div>
            <div className={styles.demoArea}>
              <Button preset="medium-round_primary" responsive>
                지원하기
              </Button>
            </div>
            <div className={styles.meta}>mobile: body6_rg_10, 0.8rem 1.6rem</div>
          </div>
          <div className={styles.card}>
            <div className={styles.presetLabel}>small-round_primary + responsive</div>
            <div className={styles.demoArea}>
              <Button preset="small-round_primary" responsive>
                더보기
              </Button>
            </div>
            <div className={styles.meta}>mobile: h5_bd_16, 0.9rem 2.9rem</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ButtonCapturePage;
