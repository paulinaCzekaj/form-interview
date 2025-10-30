import { useContext } from 'react';
import {
  StyledConfirmDialog,
  StyledConfirmDialogContent,
  StyledButtonsWrapper,
} from './ConfirmDialog.styles';
import { DataContext } from '../../contexts/DataContext';
import { Button } from '../Button/Button';

interface ConfirmDialogProps {
  idToRemove: string | null;
  setIdToRemove: (id: string | null) => void;
}

export const ConfirmDialog = ({
  idToRemove,
  setIdToRemove,
}: ConfirmDialogProps) => {
  const { removeData } = useContext(DataContext);

  if (!idToRemove) return null;

  const handleCancel = () => {
    setIdToRemove(null);
  };

  const handleRemove = () => {
    removeData(idToRemove);
    setIdToRemove(null);
  };

  return (
    <StyledConfirmDialog>
      <StyledConfirmDialogContent role="dialog" aria-modal="true">
        <h2>Usuwanie</h2>
        <p>Czy na pewno chcesz usunąć te dane?</p>
        <StyledButtonsWrapper>
          <Button onClick={handleCancel} text="Anuluj" />
          <Button onClick={handleRemove} text="Usuń" variant="error" />
        </StyledButtonsWrapper>
      </StyledConfirmDialogContent>
    </StyledConfirmDialog>
  );
};
