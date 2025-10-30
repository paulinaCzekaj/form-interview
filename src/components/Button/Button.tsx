import { StyledButton } from './Button.styles';

interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  size?: 'small' | 'medium';
}

export const Button = ({
  text,
  type = 'button',
  onClick,
  size = 'medium',
}: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick} size={size}>
      <span>{text}</span>
    </StyledButton>
  );
};
