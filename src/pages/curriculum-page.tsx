import CurriculumBox from '@/shared/components/curriculum-box/curriculum-box';
import * as styles from '@/shared/components/curriculum-box/curriculum-box.css';

// 나중에 백엔드 API에서 받을 데이터의 예상 구조
const CURRICULUM_DATA = [
  { id: 1, text: "딥러닝 기초 : ANN, DNN, CNN" },
  { id: 2, text: "딥러닝 기초 : ANN, DNN, CNN" },
  { id: 3, text: "딥러닝 기초 : ANN, DNN, CNN" },
  { id: 4, text: "딥러닝 기초 : ANN, DNN, CNN" },
];

const CurriculumPage = () => {
  return (
    <main className={styles.pageWrapper}>
      {CURRICULUM_DATA.map((item) => (
        <CurriculumBox key={item.id} content={item.text} />
      ))}
    </main>
  );
};

export default CurriculumPage;