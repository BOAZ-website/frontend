import type { ReactNode } from 'react';

import SectionHeader from '../section-header/section-header';

import * as styles from './section.css';

interface SectionProps {
  subTitle: string;
  title: string;
  children: ReactNode;
}

const Section = ({ title, subTitle, children }: SectionProps) => {
  return (
    <section className={styles.container}>
      <SectionHeader subTitle={subTitle} title={title} />
      {children}
    </section>
  );
};

export default Section;
