import {
  StyledLabel,
  StyledInput,
  StyledLabelInput,
  StyledHelperText,
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
        placeholder=""
        {...register(id, { valueAsNumber })}
        aria-invalid={!!error}
        hasError={!!error}
      />
      <StyledLabel htmlFor={id} hasError={!!error}>
        {label}
      </StyledLabel>
      <StyledHelperText hasError={!!error}>
        {error?.message || helperText}
      </StyledHelperText>
    </StyledLabelInput>
  );
};
