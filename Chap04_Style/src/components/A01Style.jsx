// ! 이래서 리엑트랑 뷰를 프레임 워크라고 하는 거다.(이유는.. 필요하면 다 깔아야해서..)
// ! Angular는 프레임워크.

import React from "react";

import './css/A01Style.css';

// scss, sass 파일은 기본적으로 제공해주지 않음.
// npm install node-sass (이 모듈을 쓰면 scss 파일도 import해서 사용할 수 있다. -> 재시작 해야 적용.)
import './css/A01Style.scss';

const title = 'title color';
const style = {
  color: 'lightgray',
  fontSize: '24pt',      // - 표기법을 카멜표기법으로 변경해서 사용한다.
  padding: '10px',
  background: 'black'
};

function A01Style() {
  return (
    <>
      <div>
        <h3 className="title color">A01 Style</h3>
        <h3 className={'title color'}>A01 Style</h3>
        <h3 className={title}>A01 Style</h3>
        <h3 className={style}>A01 Style</h3>
        {/* 여러개 기술하는 경우에는, {} 로 묶어서 처리해줄것! */}
        <h3 className={{
          color: 'lightgray',
          fontSize: '24pt',
          padding: '10px',
          background: 'black'
        }}>A01 Style</h3>
      </div>

      <div>
        <h3 className={style}>A01 Style</h3>
      </div>
    </>
  );
}

export default A01Style;
