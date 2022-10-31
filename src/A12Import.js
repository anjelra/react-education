// A12Import.js

// 개별 export 된 항목은 {} 내부에 export 된 이름과 동일한 이름으로 참조해야 한다.
import { name, num, onAdd, arr, obj, longVarName as long } from './A12ExportOne.js';
import * as one from './A12ExportOne.js';

// A12ExportTwo 이 파일에서 default로 export를 시켜줬기 때문에
// 아무 이름으로 import를 해도 상관이 없다.
import App, { appName } from './A12ExportTwo.js';

console.log(`A11 Import ${name} / ${num}`);
console.log(`A11 Import ${onAdd}`);
console.log([...arr]);
console.log(obj);

console.log(one.longVarName);

// A12ExportTwo 안의 메소드
console.log(`${App.name}`);
