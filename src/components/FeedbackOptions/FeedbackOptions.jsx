import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { OptionBox, OptionButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionBox>
    {options.map(option => (
      <OptionButton key={nanoid()} type="button" onClick={onLeaveFeedback}>
        {option}
      </OptionButton>
    ))}
  </OptionBox>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
