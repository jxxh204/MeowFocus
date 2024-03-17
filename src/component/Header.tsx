type Props = {
  name: string;
};

function Header({ name }: Props) {
  return (
    <>
      <h2>{name}</h2>
      <div>menu</div>
    </>
  );
}

export default Header;
