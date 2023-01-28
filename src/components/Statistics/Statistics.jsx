import PropTypes from 'prop-types';
import { List, Item, Text } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <List>
    <Item>
      <Text>Good: {good}</Text>
    </Item>
    <Item>
      <Text>Neutral: {neutral}</Text>
    </Item>
    <Item>
      <Text>Bad: {bad}</Text>
    </Item>
    <Item>
      <Text>Total: {total}</Text>
    </Item>
    <Item>
      <Text>Positive feedback: {positivePercentage}%</Text>
    </Item>
  </List>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
}