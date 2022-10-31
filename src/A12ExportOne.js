// A12ExportOne.js
export const name = 'A12 ExportOne';
export const num = 100;
export const onAdd = (x, y) => x + y;

const arr = [10, 20];
const obj = { name: 'NolBu', age: 20 };
const longVarName = 'Hello World';

// 개별적으로 export도 되지만,
// 묶어서 export 하는 것도 가능.
export { arr, obj, longVarName };
