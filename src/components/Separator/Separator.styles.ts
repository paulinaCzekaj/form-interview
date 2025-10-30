import styled from 'styled-components';

export const Separator = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
    background-color: ${({ theme }) => theme.colors.border};
    width: 1px;
    align-self: stretch;
    margin: 8px 0;
  }
`;
