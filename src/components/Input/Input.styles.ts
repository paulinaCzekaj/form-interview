import { styled } from 'styled-components';

export const StyledInputWrapper = styled.div`
  position: relative;
`;

export const StyledInput = styled.input<{ $hasError: boolean }>`
  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.border};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.base};
  width: 100%;
  padding: 16px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  font-size: 16px;
  transition:
    border-color 0.1s ease-in-out,
    outline-width 0.1s ease-in-out;
  outline: 0 solid ${({ theme }) => theme.colors.focus};

  &:hover:not(:focus) {
    outline: ${({ $hasError, theme }) =>
      $hasError ? 0 : `2px solid ${theme.colors.focus}`};
  }

  &:focus {
    outline-width: 0;
  }

  &:focus,
  &:hover {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.focus};

    & + label {
      color: ${({ theme, $hasError }) =>
        $hasError ? theme.colors.error : theme.colors.focus};
    }
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -10px;
    font-size: 0.9rem;
  }
`;

export const StyledLabel = styled.label<{ $hasError: boolean }>`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme, $hasError }) =>
    $hasError ? theme.colors.error : theme.colors.border};
  position: absolute;
  left: 16px;
  padding: 0 4px;
  font-weight: 500;
  top: 14px;
  transition:
    top 0.1s ease-in-out,
    font-size 0.1s ease-in-out,
    color 0.1s ease-in-out;
  font-size: 1rem;
`;

export const StyledHelperText = styled.p<{ $hasError: boolean }>`
  font-size: 0.75rem;
  color: ${({ theme, $hasError }) =>
    $hasError ? theme.colors.error : theme.colors.base};
  margin-top: 4px;
  height: 18px;
`;
