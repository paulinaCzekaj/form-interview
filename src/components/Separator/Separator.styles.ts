import styled from 'styled-components';

export const Separator = styled.div`
  background-color: ${({ theme }) => theme.colors.border};
  width: 2px;
  align-self: stretch;
  margin: 8px 0;
  border-radius: 100%;
`;
