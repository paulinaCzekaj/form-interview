import {
  StyledLabel,
  StyledInput,
  StyledLabelInput,
  StyledError,
} from './LabelInput.styles';
import type { FieldError, UseFormRegister } from 'react-hook-form';
import type { FormValues } from '../../types/schema';

interface LabelInputProps {
  label: string;
  id: keyof FormValues;
  type: 'text' | 'email' | 'number';
  valueAsNumber?: boolean;
  error?: FieldError;
  register: UseFormRegister<FormValues>;
  helperText?: string;
}

export const LabelInput = ({
  label,
  id,
  type,
  register,
  error,
  valueAsNumber,
  helperText,
}: LabelInputProps) => {
  return (
    <StyledLabelInput>
      <StyledInput
        id={id}
        type={type}
        placeholder={label}
        {...register(id, { valueAsNumber })}
        aria-invalid={!!error}
      />
      <StyledLabel>{label}</StyledLabel>
      {(helperText || error) && (
        <StyledError>{error?.message || helperText}</StyledError>
      )}
    </StyledLabelInput>
  );
};
