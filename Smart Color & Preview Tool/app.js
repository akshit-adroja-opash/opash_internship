// Sahi IDs ka use karein jo HTML mein hain
var textInput = document.getElementById("text-input");
var colorPicker = document.getElementById("color-picker");
var sizeSlider = document.getElementById("size-slider");
var applyBtn = document.getElementById("apply-btn");
var textcolor = document.getElementById("text-color");
var previewBox = document.getElementById("preview-box");
var previewText = document.getElementById("preview-text");
// Button click par changes apply honge
applyBtn.addEventListener("click", function () {
    // 1. Text change karein
    previewText.textContent = textInput.value || "Preview Text";
    // 2. Background color change karein
    previewBox.style.backgroundColor = colorPicker.value;
    // 3. Font size change karein
    previewText.style.fontSize = "".concat(sizeSlider.value, "px");
    // 4. Text color change karein
    previewBox.style.color = textcolor.value;
});
