import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 32px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  gap: 48px;
  height: auto;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: ${({ theme }) => theme.widths.wrapper};
    height: ${({ theme }) => theme.heights.wrapper};
    flex-direction: row;
    gap: 32px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 56px;
  }
`;

export const StyledWrapperItem = styled.div`
  flex: 1;
`;
