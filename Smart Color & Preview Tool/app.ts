// Sahi IDs ka use karein jo HTML mein hain
const textInput = document.getElementById("text-input") as HTMLInputElement;
const colorPicker = document.getElementById("color-picker") as HTMLInputElement;
const sizeSlider = document.getElementById("size-slider") as HTMLInputElement;
const applyBtn = document.getElementById("apply-btn") as HTMLButtonElement;
const textcolor = document.getElementById("text-color") as HTMLInputElement; 
const previewBox = document.getElementById("preview-box") as HTMLDivElement;
const previewText = document.getElementById("preview-text") as HTMLHeadingElement;

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