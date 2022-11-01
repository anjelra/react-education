// A12ExportTwo.js
const app = (function () {
  const name = 'Two';
  const num = 100;

  const onMin = (x, y) => x - y;

  return { name, num, onMin };
})();

// default가 붙으면 호출하는 곳에서는 이 이름을 임의의 이름으로 호출해서 사용가능하다.
export default app;

// 병행 사용도 가능(default를 쓴 문서에서도 다른 것을 export 할 수 있다는 뜻.)
export const appName = 'Default';
