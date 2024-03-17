type Props = {
  name: string;
  type?: "submit";
  onClick?: () => void;
};

function Button({ name, type, onClick }: Props) {
  return <input type={type ? type : "button"} value={name} onClick={onClick} />;
}

export default Button;
