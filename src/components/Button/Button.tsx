interface ButtonProps {
  name: string;
  onClick: () => void;
}

function Button({ name, onClick }: ButtonProps) {
  return <input type="button" value={name} onClick={onClick} />;
}

export default Button;
