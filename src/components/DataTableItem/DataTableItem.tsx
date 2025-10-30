import type { FormData } from '../../types/types';
import { useContext, useCallback } from 'react';
import { DataContext } from '../../contexts/DataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { StyledButtonIcon } from '../ButtonIcon/ButtonIcon.styles';
import { StyledDataTableItem } from './DataTableItem.styles';

interface DataItemProps {
  data: FormData;
}

export const DataTableItem = ({ data }: DataItemProps) => {
  const { removeData } = useContext(DataContext);

  const handleRemove = useCallback(() => {
    removeData(data.id);
  }, [data.id, removeData]);

  return (
    <>
      <StyledDataTableItem>{data.email}</StyledDataTableItem>
      <StyledDataTableItem>{data.name}</StyledDataTableItem>
      <StyledDataTableItem>{data.number}</StyledDataTableItem>
      <StyledDataTableItem>
        <StyledButtonIcon
          onClick={handleRemove}
          aria-label={`Usuń ${data.name}`}
        >
          <FontAwesomeIcon icon={faTrash} />
        </StyledButtonIcon>
      </StyledDataTableItem>
    </>
  );
};
