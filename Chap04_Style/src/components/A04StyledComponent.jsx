// npm i styled-components
// npm i reactstrap
// npm i react-icons

import React from "react";

// 기존 HTML에 CSS를 적용한 component를 작성해 준다.
// import styled from 'styled-components';

// 스타일을 JS로 정의해서, 각각 EXPORT 한 후에, 가져다 쓰면 편하다.
import { MY_BOX, MY_BTN } from './css/A04StyledComp.jsx'

import { Alert } from 'reactstrap'
import { FcAndroidOs } from 'react-icons/fc';

// 정의는 기존 scss 방식으로 정의한다.
// const MY_BOX = styled.div`
//   background: ${props => props.color || 'lightgray'};
//   color: orange;
//   font-size: 24px;
//   padding: 10px;
// `;

// const MY_BTN = styled.button`
//   background: ${props => props.color || 'lightgray'};
//   color: orange;
//   border: 1px solid green;
//   margin: 10px 0;

//   &:hover {
//     color: white;
//   }
// `;

function A04StyledComponent() {
  return (
    <div>
      <h3>A04 Styled Component</h3>

      <Alert color="info">
        Sample
      </Alert>

      <MY_BOX color="black">
        <h4>MY-BOX</h4>
        <div>This is Content</div>
      </MY_BOX>

      <MY_BTN type="button">MY_BTN</MY_BTN>

      <hr />

      <FcAndroidOs style={{ fontSize: '24px' }}>안드로이드</FcAndroidOs>
    </div>
  );
}

export default A04StyledComponent;
