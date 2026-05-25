import { TARGET_ITEMS } from '@/widgets/recruiting/model/target-items';
import Section from '@/shared/components/section/section';

import TargetCard from './target-card/target-card';

import * as styles from './target-section.css';

const TargetSection = () => {
  return (
    <Section subTitle="Target" title="모집 대상">
      <div className={styles.cardList}>
        {TARGET_ITEMS.map((item) => (
          <TargetCard key={item.id} icon={item.icon} text={item.text} />
        ))}
      </div>
    </Section>
  );
};

export default TargetSection;
