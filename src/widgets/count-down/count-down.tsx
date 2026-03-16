import { CountdownDisplay } from './count-down-display';

const MOCK_DEADLINE = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString();

const CountDown = () => {
  return <CountdownDisplay deadline={MOCK_DEADLINE} />;
};

export default CountDown;
