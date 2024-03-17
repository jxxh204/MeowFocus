type Props = {
  name: string;
};

function Header({ name }: Props) {
  return (
    <header>
      <h2>{name}</h2>
      <div>menu</div>
    </header>
  );
}

export default Header;
