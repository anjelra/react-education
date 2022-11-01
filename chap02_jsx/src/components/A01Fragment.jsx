// A01Fragment.js

function A01Fragment() {
  // return되는 JSX는 단일 요소만 가능하다. (하나의 요소로 묶어야 한다.)
  /**
   * 리액트에서는 하나의 컴포넌트가 여러 개의 엘리먼트들을 반환한다. 
   * 리액트를 사용하기 위한 문법인 JSX 를 쓸 때, 
   * return 문 안에는 반드시 하나의 최상위 태그가 있어야 한다. 
   * 이는 리액트가 하나의 컴포넌트만을 리턴할 수 있기 때문이다.
   * 따라서, Fragment 태그를 사용하면 된다.(이거는 렌더링 될 때 사라짐.
   * (<Fragment></Fragment> 또는 <></>))
   */
  return (
    <>
      <h3>A01Fragment</h3>
      <div>hello</div>
    </>
  );
}

export default A01Fragment;
