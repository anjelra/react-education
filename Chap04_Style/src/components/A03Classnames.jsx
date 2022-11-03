import React from "react";
import classeNames from 'classnames';

import './css/A03Style.css';
import two from './css/A02Style2.module.css'
// npm i classnames

function A03Classnames() {
  const text = "text";
  const isChecked = true;

  return (
    <div>
      {/* classsnames를 쓰는 이유는, 변수로도 쓸 수 있고, 객체로 사용할 수 있다. */}
      <h3 className={classeNames('bg', 'text', 'space')}>A03 ClassNames Module</h3>
      <h3 className={classeNames('bg', text, 'space')}>A03 ClassNames Module</h3>
      <h3 className={classeNames('bg', { text: isChecked, 'space': isChecked })}>A03 ClassNames Module</h3>

      <h3 className={classeNames(two.title, { [two.reverse]: isChecked })}>A03 ClassNames Module</h3>
    </div>
  );
}

export default A03Classnames;
