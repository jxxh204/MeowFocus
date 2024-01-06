import styled from "styled-components";

type LengthStyleProps = {
  textLength: number;
};

const BottomStyle = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LengthStyle = styled.div<LengthStyleProps>`
  margin-left: 10px;
  color: ${(props) => (props.textLength === 50 ? "red" : "#f6f6f6")};
`;

const ButtonStyle = styled.input`
  background-color: none;
  border: 1px solid #f6f6f6;
  color: #f6f6f6;
  border-radius: 8px;
`;

type Props = {
  isClick: boolean;
  focus: boolean;
  text: string;
};
function Bottom({ isClick, focus, text }: Props) {
  if (text || isClick)
    return (
      <BottomStyle>
        <LengthStyle data-testid="text-length" textLength={text.length}>
          {text.length}/50
        </LengthStyle>
        <ButtonStyle type="submit" value="저장" />
      </BottomStyle>
    );
  return null;
}

export default Bottom;
