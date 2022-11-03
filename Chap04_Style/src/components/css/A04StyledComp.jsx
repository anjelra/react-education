// 기존 HTML에 CSS를 적용한 component를 작성해 준다.
import styled from "styled-components";

// 정의는 기존 scss 방식으로 정의한다.
export const MY_BOX = styled.div`
  background: ${(props) => props.color || "lightgray"};
  color: orange;
  font-size: 24px;
  padding: 10px;
`;

export const MY_BTN = styled.button`
  background: ${(props) => props.color || "lightgray"};
  color: orange;
  border: 1px solid green;
  margin: 10px 0;

  &:hover {
    color: white;
  }
`;
