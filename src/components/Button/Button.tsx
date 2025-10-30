import { StyledButton } from './Button.styles';

interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  variant?: 'primary' | 'error';
}

export const Button = ({
  text,
  type = 'button',
  onClick,
  variant = 'primary',
}: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick} variant={variant}>
      {text}
    </StyledButton>
  );
};
