import styled from "styled-components";

const BottomStyle = styled.input`
  background: #f6f6f6;
  border: 1px solid #f6f6f6;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

type Props = {
  focus: boolean;
  text: string;
};
function Bottom({ focus, text }: Props) {
  if (!focus)
    return (
      <>
        <div data-testid="text-length">{text.length}/50</div>
        <BottomStyle type="submit" value="입력" />
      </>
    );
  return null;
}

export default Bottom;
