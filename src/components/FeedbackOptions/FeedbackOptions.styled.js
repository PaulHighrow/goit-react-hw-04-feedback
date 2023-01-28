import styled from 'styled-components';

export const OptionBox = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
`;

export const OptionButton = styled.button`
  width: 80px;
  padding: 5px;

  font-size: 21px;
  text-transform: capitalize;

  border: 1px solid #b5b5b5;
  border-radius: 5px;
  background-color: #d5e3e1;
  transition: var(--animation-global);

  &:hover,
  &:focus,
  &:active {
    background-color: #f3f5ce;
  }
`;
