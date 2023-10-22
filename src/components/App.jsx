import React, { useState } from "react";
import Feedback from './Feedback/Feedback';
import Sections from './Section/Section';
import Notification from './Notification/Notifications';
import Statistic from './Statistics/Statistics';
import { MainSection } from "./App.styled";
export const App = () => {
  const [statistics, setStatistics] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const countFeedbacks = (button) => {
    if (!(button in statistics)) {
      return
    };

    setStatistics(prevStatistics => ({
      ...prevStatistics,
      [button]: prevStatistics[button] + 1
    }));
  };

  const values = Object.keys(statistics);
  const isfeedBack = Object.values(statistics).every(value => value === 0);
  
  return (
    <MainSection>
      <Sections title="Please leave feedback">
        <Feedback values={values} countFeedbacks={countFeedbacks} />
      </Sections>

      {!isfeedBack ? (
        <Sections title="Statistic">
          <Statistic
            good={statistics.good}
            neutral={statistics.neutral}
            bad={statistics.bad}
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