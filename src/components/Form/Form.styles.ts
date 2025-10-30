import { styled } from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 23px;
  flex: 1;
  & > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
