"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let subs = "10m";
let apirequeststatus = "pending";
apirequeststatus = "success";
const orders = ['10', "20", '30'];
let currentorder;
for (let order of orders) {
    if (order === '20') {
        currentorder = order;
        break;
    }
    currentorder = "11";
}
console.log(currentorder);
//# sourceMappingURL=union.js.map