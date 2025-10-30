import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 32px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  gap: 56px;
  height: ${({ theme }) => theme.heights.wrapper};
  width: 100%;
  max-width: ${({ theme }) => theme.widths.wrapper};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 24px;
    height: auto;
  }
`;
