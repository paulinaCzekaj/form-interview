import styled from 'styled-components';

export const StyledDataTableItem = styled.div`
  padding: 0 4px 8px;
  font-size: 0.9rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: inline-flex;
  height: 32px;
  overflow: hidden;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
