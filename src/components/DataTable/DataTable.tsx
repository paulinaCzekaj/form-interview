import { DataContext } from '../../contexts/DataContext';
import { StyledDataTable, StyledDataTableHeader } from './DataTable.styles';
import { DataTableItem } from '../DataTableItem/DataTableItem';
import { useContext } from 'react';

export const DataTable = () => {
  const { data } = useContext(DataContext);

  return (
    <StyledDataTable>
      <StyledDataTableHeader>E-mail</StyledDataTableHeader>
      <StyledDataTableHeader>Imię</StyledDataTableHeader>
      <StyledDataTableHeader>Numer</StyledDataTableHeader>
      <StyledDataTableHeader />
      {data.map((item) => (
        <DataTableItem key={item.id} data={item} />
      ))}
    </StyledDataTable>
  );
};
