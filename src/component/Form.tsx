import styled from "styled-components";
import Submit from "./Submit";
import Input from "./Input";

const StyleForm = styled.form`
  display: flex;
  flex-direction: row;
`;
type Props = {
  children: React.ReactNode;
  handler: React.FormEventHandler<HTMLFormElement>;
};
function Form({ children, handler }: Props) {
  return <StyleForm onSubmit={handler}>{children}</StyleForm>;
}

Form.Input = Input;
Form.Submit = Submit;

export default Form;
