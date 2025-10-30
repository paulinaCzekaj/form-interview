import { StyledButton } from './Button.styles';

interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  size?: 'small' | 'medium';
  variant?: 'primary' | 'error';
}

export const Button = ({
  text,
  type = 'button',
  onClick,
  size = 'medium',
  variant = 'primary',
}: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick} size={size} variant={variant}>
      <span>{text}</span>
    </StyledButton>
  );
};
