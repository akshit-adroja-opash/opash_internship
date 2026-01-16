const heading = document.getElementById("display-text") as HTMLHeadingElement;
const inputBox = document.getElementById("user-input") as HTMLInputElement;
const button = document.getElementById("update-button") as HTMLButtonElement;


button.addEventListener("click", () => {
    heading.textContent = inputBox.value;
});
