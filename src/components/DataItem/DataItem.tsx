import type { FormData } from '../../types/types';
import { Button } from '../Button/Button';
import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import { StyledDataItem } from './DataItem.styles';

interface DataItemProps {
  data: FormData;
}

export const DataItem = ({ data }: DataItemProps) => {
  const { removeData } = useContext(DataContext);

  const handleRemove = () => {
    removeData(data.id);
  };

  return (
    <>
      <StyledDataItem>{data.email}</StyledDataItem>
      <StyledDataItem>{data.name}</StyledDataItem>
      <StyledDataItem>{data.number}</StyledDataItem>
      <StyledDataItem>
        <Button
          text="Usuń"
          type="button"
          onClick={handleRemove}
          size="small"
          variant="error"
        />
      </StyledDataItem>
    </>
  );
};
