import { useContext, useState } from 'react';
import { DataContext } from '../../contexts/DataContext';
import { DataCard } from '../DataCard/DataCard';
import { StyledDataCardList } from './DataCardList.styles';
import { ConfirmDialog } from '../ConfirmDialog/ConfirmDialog';

export const DataCardList = () => {
  const { data } = useContext(DataContext);
  const [idToRemove, setIdToRemove] = useState<string | null>(null);

  const handleRemove = (id: string) => {
    setIdToRemove(id);
  };

  return (
    <StyledDataCardList>
      {data.map((item) => (
        <DataCard key={item.id} data={item} handleRemove={handleRemove} />
      ))}
      <ConfirmDialog idToRemove={idToRemove} setIdToRemove={setIdToRemove} />
    </StyledDataCardList>
  );
};
