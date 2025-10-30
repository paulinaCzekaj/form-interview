import { StyledButton } from './Button.styles';

interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ text, type = 'button' }: ButtonProps) => {
  return (
    <StyledButton type={type}>
      <span>{text}</span>
    </StyledButton>
  );
};
