import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: end;
`;

export const Item = styled.li`
  width: 250px;
  margin: 0 auto;
  text-align: left;
`;

export const Text = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
`;
