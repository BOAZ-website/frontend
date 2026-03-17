import * as styles from './form-header.css';

interface FormHeaderProps {
  title: string;
  description?: string;
}

const FormHeader = ({ title, description }: FormHeaderProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {description && <span className={styles.description}>{description}</span>}
    </div>
  );
};

export default FormHeader;
