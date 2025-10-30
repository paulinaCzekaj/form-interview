import styled from 'styled-components';

export const StyledEmpty = styled.div`
  flex: 1;
  margin-top: 24px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.base};
`;
