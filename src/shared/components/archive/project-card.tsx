import GithubIcon from '@/shared/assets/icons/ic_github.svg?react';
import SlideShareIcon from '@/shared/assets/icons/ic_project_slideshare.svg?react';

import * as styles from './project-card.css';

interface CardProps {
  imageSrc?: string;
  subTitle?: string;
  title: string;
  generation: string;
  category?: string;
  githubUrl?: string;
  slideShareUrl?: string;
}

const ProjectCard = ({
  imageSrc,
  subTitle,
  title,
  generation,
  category,
  githubUrl,
  slideShareUrl,
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
            {category && <button className={styles.tagButton}>{category}</button>}
            <button className={styles.tagButton}>{generation}기</button>
          </div>

          <div className={styles.iconContainer}>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <GithubIcon width={24} height={24} />
            </a>
            <a href={slideShareUrl} target="_blank" rel="noopener noreferrer">
              <SlideShareIcon width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
