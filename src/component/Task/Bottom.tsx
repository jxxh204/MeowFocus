import styled from "styled-components";

type styledProps = {
  textLength: number;
};
const BottomStyle = styled.section<styledProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  p {
    color: ${(props) => (props.textLength === 50 ? "red" : "#f6f6f6")};
  }
`;

const LengthStyle = styled.p`
  margin-left: 10px;
`;

const ButtonStyle = styled.input`
  background-color: ${({ theme }) => theme.color.clickColor};
  filter: saturate(80%);
  font-size: 11px;
  border: 1px solid #f6f6f6;
  color: #f6f6f6;
  border-radius: 20px;
  padding: 5px 10px;
  cursor: pointer;
`;

type Props = {
  isClick: boolean;
  focus: boolean;
  text: string;
};
function Bottom({ isClick, focus, text }: Props) {
  if (text || isClick)
    return (
      <BottomStyle textLength={text.length}>
        <LengthStyle data-testid="text-length">{text.length}/50</LengthStyle>
        <ButtonStyle type="submit" value="저장" />
      </BottomStyle>
    );
  return null;
}

export default Bottom;
