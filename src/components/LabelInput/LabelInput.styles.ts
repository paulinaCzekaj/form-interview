import { styled } from 'styled-components';

export const StyledLabelInput = styled.div`
  position: relative;
`;

export const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.base};
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  transition:
    border-color 0.1s ease-in-out,
    outline-width 0.1s ease-in-out;
  outline-width: 0;
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
`;

export const StyledLabel = styled.label`
  font-size: 0.9rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.border};
  position: absolute;
  left: 8px;
  top: -10px;
  padding: 0 4px;
  font-weight: 500;
`;

export const StyledError = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.base};
  margin-top: 4px;
`;
