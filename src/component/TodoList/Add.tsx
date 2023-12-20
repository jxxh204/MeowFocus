import styled from "styled-components";

const AddStyle = styled.div`
  width: 100%;
  height: 100%;
  background: #f6f6f6;
  border: 1px solid #f6f6f6;
  border-radius: 12px;
  padding: 10px 0;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

function Add() {
  return (
    <AddStyle>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.9457 20.8155V15.4272H20.3341C21.9609 15.4272 23.2798 14.1084 23.2798 12.4815C23.2798 10.8546 21.9609 9.53581 20.3341 9.53581H14.9457V4.14747C14.9457 2.52061 13.6269 1.20178 12.0001 1.20178C10.3732 1.20178 9.05437 2.52061 9.05437 4.14747V9.53581H3.66602C2.03917 9.53581 0.720337 10.8546 0.720337 12.4815C0.720337 14.1084 2.03916 15.4272 3.66602 15.4272H9.05437V20.8155C9.05437 22.4424 10.3732 23.7612 12.0001 23.7612C13.6269 23.7612 14.9457 22.4424 14.9457 20.8155Z"
          fill="#D9D9D9"
          stroke="#D9D9D9"
        />
      </svg>
    </AddStyle>
  );
}

export default Add;
