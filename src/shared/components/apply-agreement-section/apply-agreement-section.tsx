import * as styles from './apply-agreement-section.css';

interface ApplyAgreementSectionProps {
  title: string;
  description: string;
  link?: {
    label: string;
    href: string;
  };
}

const ApplyAgreementSection = ({ title, description, link }: ApplyAgreementSectionProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        {link && (
          <a className={styles.link} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        )}
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ApplyAgreementSection;
