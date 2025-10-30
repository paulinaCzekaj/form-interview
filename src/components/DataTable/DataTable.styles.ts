import styled from 'styled-components';

export const StyledDataTable = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 24px;
    align-content: start;
    row-gap: 12px;
  }
`;

export const StyledDataTableHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0 4px 4px;
  font-weight: 700;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.primary};
`;
