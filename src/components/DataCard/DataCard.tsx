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
  handleRemove: (id: string) => void;
}

export const DataCard = ({ data, handleRemove }: DataCardProps) => {
  return (
    <StyledDataCard>
      <div>
        <h5>{data.name}</h5>
        <StyledIconLabel>
          <FontAwesomeIcon icon={faEnvelope} />
          <span title={data.email}>{data.email}</span>
        </StyledIconLabel>
        <StyledIconLabel>
          <FontAwesomeIcon icon={faPhone} />
          <span title={data.number.toString()}>{data.number}</span>
        </StyledIconLabel>
      </div>
      <StyledButtonIcon
        onClick={() => handleRemove(data.id)}
        aria-label={`Usuń ${data.name}`}
      >
        <FontAwesomeIcon icon={faTrash} size="lg" />
      </StyledButtonIcon>
    </StyledDataCard>
  );
};
