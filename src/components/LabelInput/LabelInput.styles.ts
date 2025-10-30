import { styled } from 'styled-components';

export const StyledLabelInput = styled.div`
  position: relative;
`;

export const StyledInput = styled.input<{ hasError: boolean }>`
  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? `${theme.colors.error} !important` : theme.colors.border};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.base};
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  transition:
    border-color 0.1s ease-in-out,
    outline-width 0.1s ease-in-out;
  outline-width: ${({ hasError }) => (hasError ? '0 !important' : '0')};

  &:hover {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    border-color: ${({ theme }) => theme.colors.focus};
    & + label {
      color: ${({ theme }) => theme.colors.focus};
    }
  }

  &:focus {
    outline-width: 0;
    border-color: ${({ theme }) => theme.colors.focus};
    & + label {
      color: ${({ theme }) => theme.colors.focus};
    }
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -10px;
    font-size: 0.9rem;
  }
`;

export const StyledLabel = styled.label<{ hasError: boolean }>`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.border};
  position: absolute;
  left: 8px;
  padding: 0 4px;
  font-weight: 500;
  top: 14px;
  transition:
    top 0.1s ease-in-out,
    font-size 0.1s ease-in-out;
  font-size: 1rem;
  color: ${({ theme, hasError }) =>
    hasError ? `${theme.colors.error} !important` : theme.colors.border};
`;

export const StyledHelperText = styled.p<{ hasError: boolean }>`
  font-size: 0.75rem;
  color: ${({ theme, hasError }) =>
    hasError ? theme.colors.error : theme.colors.base};
  margin-top: 4px;
  height: 18px;
`;
