import { styled } from 'styled-components';

export const StyledLabelInput = styled.div``;

export const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray};
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
`;

export const StyledLabel = styled.label`
  font-size: 16px;
`;
