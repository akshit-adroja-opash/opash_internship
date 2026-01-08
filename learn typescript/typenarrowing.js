function getchai(kind) {
    if (typeof kind === "string") {
        return "You ordered a ".concat(kind, " chai.");
    }
    else {
        return "You ordered a chai with ".concat(kind, " grams of tea leaves.");
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
        return "make extra chai";
    }
    return "chai with ".concat(size, " grams of tea leaves ordered.");
}
var kulhadchai = /** @class */ (function () {
    function kulhadchai() {
    }
    kulhadchai.prototype.serve = function () {
        return "Serving chai in kulhad.";
    };
    return kulhadchai;
}());
var ctting = /** @class */ (function () {
    function ctting() {
    }
    ctting.prototype.serve = function () {
        return "Cutting kulhad chai.";
    };
    return ctting;
}());
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
        return "Serving ".concat(item.type, " chai with ").concat(item.sugar, " spoons of sugar.");
    }
    else {
        return "Serving ".concat(item, " chai.");
    }
}
function preparechai(order) {
    switch (order.type) {
        case "masala":
            if ("spices" in order) {
                return "Preparing masala chai with ".concat(order.spices, " spices.");
            }
            else if ("amount" in order) {
                return "Preparing ginger chai with ".concat(order.amount, " ginger.");
            }
            else if ("aroma" in order) {
                return "Preparing elaichi chai with ".concat(order.aroma, " elaichi.");
            }
            break;
    }
}
function exaustiveCheckorder(order) {
    {
        if ("spielevel" in order) {
        }
    }
    function stringarrya(arr) {
        return Array.isArray(arr) && arr.every(function (item) { return typeof item === "string"; });
    }
    // Test calls
    console.log(getchai("masala"));
    console.log(getchai(5));
    servchai("You ordered a masala chai.");
    servchai("You ordered a chai with 5 grams of tea leaves.");
    console.log(orderchai("small"));
    console.log(orderchai("medium"));
    console.log(orderchai(10));
    var kulhad = new kulhadchai();
    var cutting = new ctting();
    console.log(serve(kulhad));
    console.log(serve(cutting));
    var order1 = { type: "green", sugar: 2 };
    var order2 = "black";
    console.log(serveorder(order1));
    console.log(serveorder(order2));
    var masalaOrder = { type: "masala", spices: 3 };
    console.log(preparechai(masalaOrder));
    var gingerOrder = { type: "masala", amount: 2 };
    console.log(preparechai(gingerOrder));
    var elaichiOrder = { type: "masala", aroma: 1 };
    console.log(preparechai(elaichiOrder));
    console.log(stringarrya(["a", "b", "c"]));
    console.log(stringarrya([1, 2, 3]));
}
