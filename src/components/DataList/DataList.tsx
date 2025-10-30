import { DataContext } from '../../contexts/DataContext';
import { DataItem } from '../DataItem/DataItem';
import { StyledSectionName } from '../SectionName/SectionName.styles';
import { StyledWrapperItem } from '../Wrapper/Wrapper.styles';
import {
  StyledDataList,
  StyledDataListHeader,
  StyledEmpty,
} from './DataList.styles';
import { useContext } from 'react';

export const DataList = () => {
  const { data } = useContext(DataContext);

  return (
    <StyledWrapperItem>
      <StyledSectionName>Lista</StyledSectionName>
      {data.length > 0 ? (
        <StyledDataList>
          <StyledDataListHeader>E-mail</StyledDataListHeader>
          <StyledDataListHeader>Imię</StyledDataListHeader>
          <StyledDataListHeader>Numer</StyledDataListHeader>
          <StyledDataListHeader />
          {data.map((item) => (
            <DataItem key={item.id} data={item} />
          ))}
        </StyledDataList>
      ) : (
        <StyledEmpty>Zapisz dane, aby je wyświetlić</StyledEmpty>
      )}
    </StyledWrapperItem>
  );
};
