import { SectionTitle } from './SectionTitle/SectionTitle';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

const TITLES = {
  feedback: 'Please leave feedback',
  statistics: 'Statictics',
};

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackHandler = evt => {
    switch (evt.target.textContent) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const total = good + bad + neutral;

  const positiveFeedbackPercentage = ((good / total) * 100).toFixed(2);

  return (
    <>
      <SectionTitle title={TITLES.feedback}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={feedbackHandler}
        />
      </SectionTitle>
      <SectionTitle title={TITLES.statistics}>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback yet!" />
        )}
      </SectionTitle>
    </>
  );
};