import styled from 'styled-components';

export const StyledDataTable = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 24px;
    align-content: start;
    row-gap: 12px;
    overflow-y: auto;
    margin-right: -12px;
    padding-right: 12px;
  }
`;

export const StyledDataTableHeader = styled.div`
  padding: 0 4px 4px;
  font-weight: 700;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.primary};
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
