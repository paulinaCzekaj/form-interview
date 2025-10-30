import { DataContext } from '../../contexts/DataContext';
import { DataTable } from '../DataTable/DataTable';
import { StyledSectionName } from '../SectionName/SectionName.styles';
import { StyledWrapperItem } from '../Wrapper/Wrapper.styles';
import { StyledEmpty } from './DataList.styles';
import { useContext } from 'react';
import { DataCardList } from '../DataCardList/DataCardList';

export const DataList = () => {
  const { data } = useContext(DataContext);

  return (
    <StyledWrapperItem>
      <StyledSectionName>Lista</StyledSectionName>
      {data.length > 0 ? (
        <>
          <DataTable />
          <DataCardList />
        </>
      ) : (
        <StyledEmpty>Zapisz dane, aby je wyświetlić</StyledEmpty>
      )}
    </StyledWrapperItem>
  );
};
