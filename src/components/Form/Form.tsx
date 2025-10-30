import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { StyledForm } from './Form.styles';
import { formSchema, type FormValues } from '../../types/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { DataContext } from '../../contexts/DataContext';
import { useContext } from 'react';
import { StyledSectionName } from '../SectionName/SectionName.styles';
import { StyledWrapperItem } from '../Wrapper/Wrapper.styles';

export const Form = () => {
  const { addData } = useContext(DataContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: FormValues) => {
    addData({ ...data });
    reset();
  };

  return (
    <StyledWrapperItem>
      <StyledSectionName>Formularz</StyledSectionName>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            label="E-mail"
            id="email"
            type="email"
            error={errors.email}
            register={register}
          />
          <Input
            label="Imię"
            id="name"
            type="text"
            error={errors.name}
            register={register}
          />
          <Input
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
    </StyledWrapperItem>
  );
};
