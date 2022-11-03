import React from 'react'
import { Navigate } from 'react-router-dom';

function A08Redirect() {
  const isChecked = false;

  // redirect 시키는 메소드. (Navigate)
  // 특정 조건을 만족하지 않는 경우, 이런 식으로 return에 Navigate를 주게 되면,
  // 메인 화면으로 돌아가게 된다.
  if (!isChecked) {
    return <Navigate to={"/"} replace={true} />
  }

  return (
    <div>
      <h1>A08Redirect</h1>
    </div>
  )
}

export default A08Redirect