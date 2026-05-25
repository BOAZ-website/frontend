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
  // githubUrl,
  slideshareUrl,
}: CardProps) => {
  const cardContent = (
    <article className={styles.cardContainer}>
      <div className={styles.imageSection}>
        <img src={imageSrc} alt={title} className={styles.cardImage} />
      </div>

      <div className={styles.contentSection}>
        <span className={styles.subTitle}>{subTitle || 'Project'}</span>
        <h3 className={styles.title} title={title}>
          {title}
        </h3>

        <div className={styles.bottomInfo}>
          <div className={styles.tagContainer}>
            <Tag>{category}</Tag>
            <Tag>{generation}</Tag>
          </div>
        </div>
      </div>
    </article>
  );

  if (slideshareUrl) {
    return (
      <a href={slideshareUrl} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  return cardContent;
};

export default ProjectCard;
