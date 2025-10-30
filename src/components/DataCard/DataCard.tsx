import { useCallback, useContext } from 'react';
import { StyledDataCard, StyledIconLabel } from './DataCard.styles';
import { DataContext } from '../../contexts/DataContext';
import type { FormData } from '../../types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { StyledButtonIcon } from '../ButtonIcon/ButtonIcon.styles';

interface DataCardProps {
  data: FormData;
}

export const DataCard = ({ data }: DataCardProps) => {
  const { removeData } = useContext(DataContext);

  const handleRemove = useCallback(() => {
    removeData(data.id);
  }, [data.id, removeData]);

  return (
    <StyledDataCard>
      <div>
        <h5>{data.name}</h5>
        <StyledIconLabel>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>{data.email}</span>
        </StyledIconLabel>
        <StyledIconLabel>
          <FontAwesomeIcon icon={faPhone} />
          <span>{data.number}</span>
        </StyledIconLabel>
      </div>
      <StyledButtonIcon onClick={handleRemove} aria-label={`Usuń ${data.name}`}>
        <FontAwesomeIcon icon={faTrash} size="lg" />
      </StyledButtonIcon>
    </StyledDataCard>
  );
};
