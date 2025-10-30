import { DataContext } from '../../contexts/DataContext';
import { DataItem } from '../DataItem/DataItem';
import {
  StyledDataList,
  StyledDataListHeader,
  StyledEmpty,
} from './DataList.styles';
import { useContext } from 'react';

export const DataList = () => {
  const { data } = useContext(DataContext);

  if (data.length === 0) {
    return <StyledEmpty>Zapisz dane, aby je wyświetlić</StyledEmpty>;
  }

  return (
    <StyledDataList>
      <StyledDataListHeader>E-mail</StyledDataListHeader>
      <StyledDataListHeader>Imię</StyledDataListHeader>
      <StyledDataListHeader>Numer</StyledDataListHeader>
      <StyledDataListHeader />
      {data.map((item) => (
        <DataItem key={item.id} data={item} />
      ))}
    </StyledDataList>
  );
};
