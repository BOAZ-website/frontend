import * as styles from './review-card.css';

interface ReviewCardProps {
  title: string;
  generation: string;
  track: string;
  description: React.ReactNode; // HTML 태그(span 등)를 포함하기 위해 Node 사용
}

const ReviewCard = ({ title, generation, track, description }: ReviewCardProps) => {
  return (
    <>
      <div className={styles.cardWrapper}>
        <header className={styles.cardHeader}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.subTitle}>
            {generation} {track}
          </span>
        </header>
        
        <article className={styles.descriptionText}>
          {description}
        </article>
      </div>
    </>
  );
};

export default ReviewCard;