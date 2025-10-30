import { styled } from 'styled-components';

export const StyledButton = styled.button<{ variant: 'primary' | 'error' }>`
  background-color: ${({ theme, variant }) =>
    variant === 'error' ? theme.colors.error : theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0 16px;
  align-items: center;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  height: ${({ theme }) => theme.heights.mediumButton};
  transition: filter 0.1s ease-in-out;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: auto;
  }

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.6);
  }
`;
