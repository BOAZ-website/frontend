import GithubIcon from '@/shared/assets/icons/ic_github.svg?react';
import SlideShareIcon from '@/shared/assets/icons/ic_project_slideshare.svg?react';

import * as styles from './project-card.css';

interface CardProps {
  imageSrc?: string;
  subTitle?: string;
  title: string;
  generation: string;
  category?: string;
}

const ProjectCard = ({ imageSrc, subTitle, title, generation, category }: CardProps) => {
  return (
    <article className={styles.cardContainer}>
      <div className={styles.imageSection}>
        {imageSrc && (
          <img
            src={imageSrc}
            alt={title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}
      </div>

      <div className={styles.contentSection}>
        <span className={styles.subTitle}>{subTitle || 'Project'}</span>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.bottomInfo}>
          <div className={styles.tagContainer}>
            {category && (
              <button className={styles.tagButton({ variant: 'mini', color: 'outlined' })}>
                {category}
              </button>
            )}
            <button className={styles.tagButton({ variant: 'mini', color: 'outlined' })}>
              {generation}기
            </button>
          </div>

          <div className={styles.iconContainer}>
            <GithubIcon width={24} height={24} />
            <SlideShareIcon width={24} height={24} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
