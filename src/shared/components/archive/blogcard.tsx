import Tag from '../tag/tag';

import * as styles from './blogcard.css';

interface BlogCardProps {
  category: string;
  title: string;
  description?: string;
  date: string;
  imageSrc?: string;
}

const BlogCard = ({ category, title, description, date, imageSrc }: BlogCardProps) => {
  return (
    <article className={styles.cardContainer}>
      <div className={styles.textSection}>
        <div className={styles.tagWrapper}>
          <Tag>{category}</Tag>
        </div>

        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>

        <time className={styles.date}>{date}</time>
      </div>

      <div className={styles.imageSection}>
        {imageSrc && <img src={imageSrc} alt={title} className={styles.cardImage} />}
      </div>
    </article>
  );
};

export default BlogCard;
