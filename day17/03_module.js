// 导入数据
// 方式一 (按需导入)
/* import {name,age,add} from './mo.js';
console.log(name,age);
console.log(add(6,3)); */

// 方式一 (整体导入)
/* import * as mo from './mo.js';
console.log(mo); */

// 方式二 (整体导入)
import mo from "./mo.js";
console.log(mo);

// 方式二 (按需导入) 不支持
// import {msg,show} from './mo.js';