// A02Jquery.js

import React from 'react';
import $ from 'jquery';
import { useState } from 'react';

// jquery
$(document).ready(function () {
  $('.btn').click(function (event) {
    const qty = $('#qty').val();
    const cost = $('#cost').val();

    $('#total').text(qty * cost);
  })
});

// react는 state가 변해야만 렌더링이 되기 때문에, useState 라는 훅을 사용해서
// 값을 변경해줘야 한다. 그래야 렌더링이 되서 화면에 나타난다.
function A02Jquery() {
  // react
  const [total, setTotal] = useState(0);

  const clickEvent = () => {
    const qty = $('#qty').val();
    const cost = $('#cost').val();

    setTotal(qty * cost);
  };

  return (
    <div>
      Qty: <input type="text" className="form-control" id="qty" />
      Cost: <input type="text" className="form-control" id="cost" />
      <button type="button" className="btn">jquery Total</button>
      <button type="button" onClick={clickEvent}>React Total</button>

      <br />

      <div>
        jquery Total: <span id="total"></span><br />
        react Total: <span>{total}</span>
      </div>
    </div>
  )
}

export default A02Jquery;

