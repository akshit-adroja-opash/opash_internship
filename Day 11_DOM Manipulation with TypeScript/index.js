var heading = document.getElementById("display-text");
var inputBox = document.getElementById("user-input");
var button = document.getElementById("update-button");
button.addEventListener("click", function () {
    heading.textContent = inputBox.value;
});
