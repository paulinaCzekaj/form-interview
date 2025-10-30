import styled from 'styled-components';

export const StyledConfirmDialog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => `${theme.colors.base}80`};
  z-index: 1000;
  justify-content: center;
  align-items: center;
`;

export const StyledConfirmDialogContent = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 16px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 400px;
  }
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  margin-top: 16px;
  width: 100%;

  button {
    width: 100%;
  }
`;
