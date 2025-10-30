import type { FormData } from '../../types/types';
import { useContext, useCallback } from 'react';
import { DataContext } from '../../contexts/DataContext';
import { StyledDataItem } from './DataItem.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { StyledButtonIcon } from '../ButtonIcon/ButtonIcon.styles';

interface DataItemProps {
  data: FormData;
}

export const DataItem = ({ data }: DataItemProps) => {
  const { removeData } = useContext(DataContext);

  const handleRemove = useCallback(() => {
    removeData(data.id);
  }, [data.id, removeData]);

  return (
    <>
      <StyledDataItem>{data.email}</StyledDataItem>
      <StyledDataItem>{data.name}</StyledDataItem>
      <StyledDataItem>{data.number}</StyledDataItem>
      <StyledDataItem>
        <StyledButtonIcon
          onClick={handleRemove}
          aria-label={`Usuń ${data.name}`}
        >
          <FontAwesomeIcon icon={faTrash} />
        </StyledButtonIcon>
      </StyledDataItem>
    </>
  );
};
