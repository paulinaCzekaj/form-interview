import { DataContext } from '../../contexts/DataContext';
import { StyledDataTable, StyledDataTableHeader } from './DataTable.styles';
import { DataTableItem } from '../DataTableItem/DataTableItem';
import { useContext, useState } from 'react';
import { ConfirmDialog } from '../ConfirmDialog/ConfirmDialog';

export const DataTable = () => {
  const { data } = useContext(DataContext);
  const [idToRemove, setIdToRemove] = useState<string | null>(null);

  const handleRemove = (id: string) => {
    setIdToRemove(id);
  };

  return (
    <StyledDataTable>
      <StyledDataTableHeader>E-mail</StyledDataTableHeader>
      <StyledDataTableHeader>Imię</StyledDataTableHeader>
      <StyledDataTableHeader>Numer</StyledDataTableHeader>
      <StyledDataTableHeader />
      {data.map((item) => (
        <DataTableItem key={item.id} data={item} handleRemove={handleRemove} />
      ))}
      <ConfirmDialog idToRemove={idToRemove} setIdToRemove={setIdToRemove} />
    </StyledDataTable>
  );
};
