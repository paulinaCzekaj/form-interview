import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button';
import { LabelInput } from '../LabelInput/LabelInput';
import { StyledForm } from './Form.styles';
import { formSchema, type FormValues } from '../../types/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { DataContext } from '../../contexts/DataContext';
import { useContext } from 'react';

export const Form = () => {
  const { addData } = useContext(DataContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // setError,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: FormValues) => {
    addData({ ...data });
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div>
        <LabelInput
          label="E-mail"
          id="email"
          type="email"
          error={errors.email}
          register={register}
        />
        <LabelInput
          label="Imię"
          id="name"
          type="text"
          error={errors.name}
          register={register}
        />
        <LabelInput
          label="Numer"
          id="number"
          valueAsNumber
          type="number"
          error={errors.number}
          register={register}
          helperText="Numer 9 cyfrowy."
        />
      </div>
      <div>
        <Button text="Zapisz" type="submit" />
      </div>
    </StyledForm>
  );
};
