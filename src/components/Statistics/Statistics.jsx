import { StatisticContainer, StatisticName, StatisticResult } from "./Statistics.styled";

const Statistic = ({ good, neutral, bad }) => {
   const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedback = () => {
    const totalFeedback = countTotalFeedback();
    return Math.round((good / totalFeedback) * 100);
  };
  return (
    <StatisticContainer>
      <StatisticName>
        Good: <StatisticResult>{good}</StatisticResult>
      </StatisticName>
      <StatisticName>
        Neutral: <StatisticResult>{neutral}</StatisticResult>
      </StatisticName>
      <StatisticName>
        Bad: <StatisticResult>{bad}</StatisticResult>
      </StatisticName>
      <StatisticName>
        Total: <StatisticResult>{countTotalFeedback()}</StatisticResult>
      </StatisticName>
      <StatisticName>
        Positive feedback: <StatisticResult>{countPositiveFeedback()}</StatisticResult>
      </StatisticName>
    </StatisticContainer>
  );
};

export default Statistic;