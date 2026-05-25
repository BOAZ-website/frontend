import { VALUE_ITEMS } from '@/widgets/recruiting/model/value-items';
import Section from '@/shared/components/section/section';

import ValueCard from './value-card/value-card';

import * as styles from './value-section.css';

const ValueSection = () => {
  return (
    <Section subTitle="Values" title="보아즈의 인재상">
      <div className={styles.cardList}>
        {VALUE_ITEMS.map((item) => (
          <ValueCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default ValueSection;
