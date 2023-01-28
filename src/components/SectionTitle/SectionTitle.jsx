import PropTypes from 'prop-types';
import { Section, Title } from './SectionTitle.styled';

export const SectionTitle = ({ title, children }) => (
  <Section>
    <Title>{title}</Title>
    {children}
  </Section>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
