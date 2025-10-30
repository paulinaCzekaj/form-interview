import styled from 'styled-components';

export const StyledDataCard = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  padding: 16px;
  justify-content: space-between;
  align-items: start;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow:
    0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  & > div {
    overflow: hidden;
  }
`;

export const StyledIconLabel = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  svg {
    margin-right: 4px;
  }
`;
