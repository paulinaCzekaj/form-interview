import {
  StyledLabel,
  StyledInput,
  StyledHelperText,
  StyledInputWrapper,
} from './Input.styles';
import type { FieldError, UseFormRegister } from 'react-hook-form';
import type { FormValues } from '../../types/schema';

interface InputProps {
  label: string;
  id: keyof FormValues;
  type: 'text' | 'email' | 'number';
  valueAsNumber?: boolean;
  error?: FieldError;
  register: UseFormRegister<FormValues>;
  helperText?: string;
}

export const Input = ({
  label,
  id,
  type,
  register,
  error,
  valueAsNumber,
  helperText,
}: InputProps) => {
  return (
    <StyledInputWrapper>
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
    </StyledInputWrapper>
  );
};
