import styled from 'styled-components';

export const StyledDataList = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  align-content: start;
  row-gap: 12px;
`;

export const StyledDataListHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0 4px 4px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledEmpty = styled.div`
  flex: 1;
  margin-top: 24px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;
