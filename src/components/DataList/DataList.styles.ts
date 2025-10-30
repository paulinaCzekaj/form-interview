import styled from 'styled-components';

export const StyledDataList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 24px;
  align-content: start;
  row-gap: 12px;
`;

export const StyledDataListHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0 4px 4px;
  font-weight: 700;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledEmpty = styled.div`
  flex: 1;
  margin-top: 24px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.base};
`;
