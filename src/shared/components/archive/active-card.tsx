import * as styles from './active-card.css';

interface CardProps {
  imageSrc?: string;
  title: string;
  date: string;
  generation: string;
}

const ActiveCard = ({ imageSrc, title, date, generation }: CardProps) => {
  return (
    <article className={styles.cardContainer}>
      {imageSrc ? (
        <img src={imageSrc} alt={title} className={styles.imageSection} />
      ) : (
        <div className={styles.imageSection} />
      )}

      <div className={styles.contentSection}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.bottomInfo}>
          <span className={styles.date}>{date}</span>
          <button className={styles.tagButton}>{generation}기</button>
        </div>
      </div>
    </article>
  );
};

export default ActiveCard;
