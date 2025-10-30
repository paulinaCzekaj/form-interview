import { styled } from 'styled-components';

export const StyledButtonIcon = styled.button`
  color: ${({ theme }) => theme.colors.error};
  border: none;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.6);
  }
`;
