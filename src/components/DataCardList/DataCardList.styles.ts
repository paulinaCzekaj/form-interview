import styled from 'styled-components';

export const StyledDataCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
