import React, { useState } from "react";
import Feedback from './Feedback/Feedback';
import Sections from './Section/Section';
import Notification from './Notification/Notifications';
import Statistic from './Statistics/Statistics';
import { MainSection } from "./App.styled";
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const countFeedbacks = button => {
    switch (button) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
    }
  }
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return Math.round((good / totalFeedback) * 100);
  };

  const values = Object.keys({ good, neutral, bad });
  const isfeedBack = Object.values({ good, neutral, bad }).every(value => value === 0);
  return (
    <MainSection>
      <Sections title="Please leave feedback">
        <Feedback values={values} countFeedbacks={countFeedbacks} />
      </Sections>

      {!isfeedBack ? (
        <Sections title="Statistic">
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedback={countPositiveFeedbackPercentage}
          />
        </Sections>
      ) : (
        <Sections>
          <Notification message="Click the button and share your experience using this app." />
        </Sections>
      )}
    </MainSection>
  );
};