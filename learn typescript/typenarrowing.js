"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getchai(kind) {
    if (typeof kind === "string") {
        return `You ordered a ${kind} chai.`;
    }
    else {
        return `You ordered a chai with ${kind} grams of tea leaves.`;
    }
}
function servchai(masg) {
    if (masg.includes("grams")) {
        console.log("Serving chai with specified grams of tea leaves.");
    }
    else {
        console.log("Serving chai of specified kind.");
    }
}
function orderchai(size) {
    if (size === "small") {
        return 'small chai ordered.';
    }
    if (size === "medium" || size === "large") {
        return `make extra chai`;
    }
    return `chai with ${size} grams of tea leaves ordered.`;
}
class kulhadchai {
    serve() {
        return "Serving chai in kulhad.";
    }
}
class ctting {
    serve() {
        return "Cutting kulhad chai.";
    }
}
function serve(chai) {
    if (chai instanceof kulhadchai) {
        return chai.serve();
    }
    else {
        return chai.serve();
    }
}
function ischaiorder(obj) {
    return typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number";
}
function serveorder(item) {
    if (ischaiorder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} spoons of sugar.`;
    }
    else {
        return `Serving ${item} chai.`;
    }
}
function preparechai(order) {
    switch (order.type) {
        case "masala":
            if ("spices" in order) {
                return `Preparing masala chai with ${order.spices} spices.`;
            }
            else if ("amount" in order) {
                return `Preparing ginger chai with ${order.amount} ginger.`;
            }
            else if ("aroma" in order) {
                return `Preparing elaichi chai with ${order.aroma} elaichi.`;
            }
            break;
    }
}
function exaustiveCheckorder(order) {
    if ("spielevel" in order) {
    }
}
function stringarrya(arr) {
    return Array.isArray(arr) && arr.every(item => typeof item === "string");
}
// // Test calls
// console.log(getchai("masala"));
// console.log(getchai(5));
// servchai("You ordered a masala chai.");
// servchai("You ordered a chai with 5 grams of tea leaves.");
// console.log(orderchai("small"));
// console.log(orderchai("medium"));
// console.log(orderchai(10));
// const kulhad = new kulhadchai();
// const cutting = new ctting();
// console.log(serve(kulhad));
// console.log(serve(cutting));
// const order1: chaiorder = { type: "green", sugar: 2 };
// const order2: string = "black";
// console.log(serveorder(order1));
// console.log(serveorder(order2));
// const masalaOrder: masalachai = { type: "masala", spices: 3 };
// console.log(preparechai(masalaOrder));
// const gingerOrder: gingerchai = { type: "masala", amount: 2 };
// console.log(preparechai(gingerOrder));
// const elaichiOrder: elaichichai = { type: "masala", aroma: 1 };
// console.log(preparechai(elaichiOrder));
// console.log(stringarrya(["a", "b", "c"]));
// console.log(stringarrya([1, 2, 3]));
// }
//# sourceMappingURL=typenarrowing.js.map