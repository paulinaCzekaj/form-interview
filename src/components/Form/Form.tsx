import { Button } from '../Button/Button';
import { LabelInput } from '../LabelInput/LabelInput';

export const Form = () => {
  return (
    <form>
      <LabelInput label="E-mail" id="email" type="email" />
      <LabelInput label="Imię" id="name" type="text" />
      <LabelInput label="Numer" id="number" type="number" />
      <Button text="Zapisz" type="submit" />
    </form>
  );
};
