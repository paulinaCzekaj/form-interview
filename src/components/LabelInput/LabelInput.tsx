import {
  StyledLabel,
  StyledInput,
  StyledLabelInput,
} from './LabelInput.styles';

interface LabelInputProps {
  label: string;
  id: string;
  type: 'text' | 'email' | 'number';
}

export const LabelInput = ({ label, id, type }: LabelInputProps) => {
  return (
    <StyledLabelInput>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput id={id} type={type} />
    </StyledLabelInput>
  );
};
