import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import { DataCard } from '../DataCard/DataCard';
import { StyledDataCardList } from './DataCardList.styles';

export const DataCardList = () => {
  const { data } = useContext(DataContext);

  return (
    <StyledDataCardList>
      {data.map((item) => (
        <DataCard key={item.id} data={item} />
      ))}
    </StyledDataCardList>
  );
};
