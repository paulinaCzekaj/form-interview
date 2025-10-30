import { styled } from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-weight: 400;
`;
