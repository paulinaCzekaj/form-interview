import { styled } from 'styled-components';

export const StyledButton = styled.button<{ size: 'small' | 'medium' }>`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0 ${({ size }) => (size === 'small' ? '12px' : '16px')};
  display: flex;
  align-items: center;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: ${({ size }) => (size === 'small' ? '0.8rem' : '1rem')};
  height: ${({ size }) => (size === 'small' ? '24px' : '48px')};
  transition: filter 0.1s ease-in-out;
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.6);
  }
`;
