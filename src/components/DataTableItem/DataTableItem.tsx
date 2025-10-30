import type { FormData } from '../../types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { StyledButtonIcon } from '../ButtonIcon/ButtonIcon.styles';
import { StyledDataTableItem } from './DataTableItem.styles';

interface DataItemProps {
  data: FormData;
  handleRemove: (id: string) => void;
}

export const DataTableItem = ({ data, handleRemove }: DataItemProps) => {
  return (
    <>
      <StyledDataTableItem title={data.email}>
        <span>{data.email}</span>
      </StyledDataTableItem>
      <StyledDataTableItem title={data.name}>
        <span>{data.name}</span>
      </StyledDataTableItem>
      <StyledDataTableItem>{data.number}</StyledDataTableItem>
      <StyledDataTableItem>
        <StyledButtonIcon
          onClick={() => handleRemove(data.id)}
          aria-label={`Usuń ${data.name}`}
        >
          <FontAwesomeIcon icon={faTrash} size="sm" />
        </StyledButtonIcon>
      </StyledDataTableItem>
    </>
  );
};
