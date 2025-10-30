import { StyledButton } from './Button.styles';

interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export const Button = ({ text, type = 'button', onClick }: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {text}
    </StyledButton>
  );
};
