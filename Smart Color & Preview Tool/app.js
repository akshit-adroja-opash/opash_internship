"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Sahi IDs ka use karein jo HTML mein hain
const textInput = document.getElementById("text-input");
const colorPicker = document.getElementById("color-picker");
const sizeSlider = document.getElementById("size-slider");
const applyBtn = document.getElementById("apply-btn");
const textcolor = document.getElementById("text-color");
const previewBox = document.getElementById("preview-box");
const previewText = document.getElementById("preview-text");
// Button click par changes apply honge
applyBtn.addEventListener("click", () => {
    // 1. Text change karein
    previewText.textContent = textInput.value || "Preview Text";
    // 2. Background color change karein
    previewBox.style.backgroundColor = colorPicker.value;
    // 3. Font size change karein
    previewText.style.fontSize = `${sizeSlider.value}px`;
    // 4. Text color change karein
    previewBox.style.color = textcolor.value;
});
//# sourceMappingURL=app.js.map