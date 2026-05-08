import GithubIcon from '@/shared/assets/icons/ic_github.svg?react';
import SlideShareIcon from '@/shared/assets/icons/ic_project_slideshare.svg?react';
import Tag from '@/shared/components/tag/tag';

import * as styles from './project-card.css';

interface CardProps {
  imageSrc?: string;
  subTitle?: string;
  title: string;
  generation: string;
  category?: string;
  githubUrl?: string;
  slideshareUrl?: string;
}

const ProjectCard = ({
  imageSrc,
  subTitle,
  title,
  generation,
  category,
  githubUrl,
  slideshareUrl,
}: CardProps) => {
  return (
    <article className={styles.cardContainer}>
      <div className={styles.imageSection}>
        <img src={imageSrc} alt={title} className={styles.cardImage} />
      </div>

      <div className={styles.contentSection}>
        <span className={styles.subTitle}>{subTitle || 'Project'}</span>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.bottomInfo}>
          <div className={styles.tagContainer}>
            <Tag>{category}</Tag>
            <Tag>{generation}기</Tag>
          </div>

          <div className={styles.iconContainer}>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconItem}
            >
              <GithubIcon width={24} height={24} />
            </a>
            <a
              href={slideshareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconItem}
            >
              <SlideShareIcon width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
