import { SectionTitle } from './SectionTitle/SectionTitle';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Component } from 'react';


const TITLES = {
  feedback: 'Please leave feedback',
  statistics: 'Statictics',
};

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackHandler = evt => {
    this.setState(prevState => {
      return {
        [evt.target.textContent]: prevState[evt.target.textContent] + 1,
      };
    });
  };

  countTotalFeedback = state =>
    Object.values(state).reduce((acc, value) => acc + value, 0);

  countPositiveFeedbackPercentage = ({ good }) =>
    ((good / this.countTotalFeedback(this.state)) * 100).toFixed(2);

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <SectionTitle title={TITLES.feedback}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.feedbackHandler}
          />
        </SectionTitle>
        <SectionTitle title={TITLES.statistics}>
          {this.countTotalFeedback(this.state) ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.state
              )}
            />
          ) : (
            <Notification message="There is no feedback yet!" />
          )}
        </SectionTitle>
      </>
    );
  }
}

