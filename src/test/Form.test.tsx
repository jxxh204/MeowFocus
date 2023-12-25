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

  test("Task Input", () => {
    setup();

    const inputText =
      screen.getByPlaceholderText("지금 집중할 일을 적어주세요.");
    const submitButton = screen.getByText("입력");

    userEvent.type(inputText, "면접 공부");
    expect(inputText).toHaveValue("면접 공부");

    userEvent.click(submitButton);

    //결과
    expect(inputText).toHaveValue("면접 공부");
    expect(inputText).toBeDisabled();
    expect(submitButton).not.toBeVisible();
  });

  test("Task Edit", () => {
    setup();
    // 반복코드 줄이기
    const inputText = screen.getByTestId("inputText");
    const submitButton = screen.getByText("입력");

    userEvent.type(inputText, "면접 공부");
    expect(inputText).toHaveValue("면접 공부");

    userEvent.click(submitButton);

    //결과
    expect(inputText).toHaveValue("면접 공부");
    expect(inputText).toBeDisabled();
    // 반복코드 줄이기

    userEvent.hover(inputText);
    const editButton = screen.getByText("수정");
    userEvent.click(editButton);

    expect(editButton).not.toBeVisible();
    expect(inputText).not.toBeDisabled();
    expect(inputText).toHaveValue("면접 공부");

    userEvent.type(inputText, "수정된 텍스트");

    expect(inputText).toHaveValue("수정된 텍스트");
    userEvent.click(submitButton);

    expect(inputText).toBeDisabled();
  });
  test("Task Delete", () => {});
  test("Task Create", () => {});
});

//1. text input 빈공간 placeholder : 지금 집중할 일을 적어주세요.
//2. 입력완료 - 입력 버튼
//3. text input 비활성화
//3. 수정 / 완료 버튼 생성.
