import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
// import Form from "../component/Form";
import App from "../App";

describe("Form Test", () => {
  const setup = () => {
    const textHandler = jest.fn();
    textHandler.mockReturnValue("면접 공부"); // 해당 텍스트를 무조건 리턴하도록 구현
    // expect(textHandler).toBeCalledWith("면접 공부"); // 검사.

    const utils = render(
      <ThemeProvider theme={theme}>
        {/* <Form>
          <Form.Input text={} handleChange={textHandler} />
          <Form.Submit />
        </Form> */}
        <App />
      </ThemeProvider>
    );

    return { textHandler, ...utils };
  };

  test("텍스트 박스 입력", () => {
    setup();
    const textInput =
      screen.getByPlaceholderText("지금 집중할 일을 적어주세요.");

    userEvent.type(textInput, "면접 공부");
    expect(textInput).toHaveValue("면접 공부");
  });

  test("텍스트 박스 입력 완료 / 텍스트 박스 비활성화", () => {
    setup();

    const textInput =
      screen.getByPlaceholderText("지금 집중할 일을 적어주세요.");
    const submitButton = screen.getByTestId("입력");

    userEvent.type(textInput, "면접 공부");
    expect(textInput).toHaveValue("면접 공부");

    userEvent.click(submitButton);

    //결과
    expect(textInput).toHaveValue("면접 공부");
    expect(textInput).toBeDisabled();
  });
});

//1. text input 빈공간 placeholder : 지금 집중할 일을 적어주세요.
//2. 입력완료 - 입력 버튼
//3. text input 비활성화
//3. 수정 / 완료 버튼 생성.
