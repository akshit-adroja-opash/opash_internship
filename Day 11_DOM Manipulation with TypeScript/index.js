"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const heading = document.getElementById("display-text");
const inputBox = document.getElementById("user-input");
const button = document.getElementById("update-button");
button.addEventListener("click", () => {
    heading.textContent = inputBox.value;
});
//# sourceMappingURL=index.js.map