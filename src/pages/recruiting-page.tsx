import CountdownTimer from '@/widgets/recruiting/count-down-timer/count-down-timer';
import DDayCounter from '@/widgets/recruiting/dday-counter/dday-counter';

const RecruitingPage = () => {
  return (
    <div>
      <CountdownTimer deadline="2026-12-31T23:59:59Z" />
      <DDayCounter startDate="2026-12-31T23:59:59Z" />
    </div>
  );
};

export default RecruitingPage;
