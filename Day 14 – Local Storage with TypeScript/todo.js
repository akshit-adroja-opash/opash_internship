"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 2. HTML elements ko select karein
const input = document.getElementById('todoInput');
const btn = document.getElementById('addBtn');
const list = document.getElementById('todoList');
// 3. Storage se purana data load karein (Refresh par ye kaam aata hai)
let todos = JSON.parse(localStorage.getItem('myTodos') || '[]');
// 4. List ko screen par dikhane ka function
function renderTodos() {
    list.innerHTML = ''; // Pehle purani list saaf karein
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        list.appendChild(li);
    });
}
// 5. Naya Todo save karne ka function
btn.addEventListener('click', () => {
    if (input.value.trim() !== "") {
        const newTodo = {
            id: Date.now(),
            text: input.value
        };
        todos.push(newTodo); // Array mein add kiya
        localStorage.setItem('myTodos', JSON.stringify(todos)); // Local Storage mein save kiya
        input.value = ''; // Input khali kiya
        renderTodos(); // UI update kiya
    }
});
// Pehli baar page load hone par render karein
renderTodos();
//# sourceMappingURL=todo.js.map