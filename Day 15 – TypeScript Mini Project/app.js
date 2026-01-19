var input = document.getElementById('todo-input');
var addBtn = document.getElementById('add-btn');
var todoList = document.getElementById('todo-list');
var dayButtons = document.querySelectorAll('.day-btn');
// Initial setup: Aaj ka din (e.g., "Monday") default selected rahega
var currentSelectedDay = new Date().toLocaleString('en-us', { weekday: 'long' });
var todos = JSON.parse(localStorage.getItem('todos') || '[]');
var saveToLocal = function () {
    localStorage.setItem('todos', JSON.stringify(todos));
};
// SOLVED TASK 2: Highlight logic ko fix kiya
var updateDayUI = function () {
    dayButtons.forEach(function (btn) {
        var btnDay = btn.getAttribute('data-day');
        if (btnDay === currentSelectedDay) {
            btn.classList.add('active'); // Sirf match hone wala button highlight hoga
        }
        else {
            btn.classList.remove('active'); // Baaki buttons se highlight hat jayega
        }
    });
};
// SOLVED TASK 3: Render function mein filter add kiya
var render = function () {
    if (!todoList)
        return;
    todoList.innerHTML = '';
    // Filter: Sirf wahi tasks dikhao jo selected day ke hain
    var filteredTodos = todos.filter(function (t) { return t.day === currentSelectedDay; });
    filteredTodos.forEach(function (todo) {
        var _a, _b;
        var li = document.createElement('li');
        li.className = todo.completed ? 'completed' : '';
        li.innerHTML = "\n            <div>\n                <span>".concat(todo.task, "</span>\n                <small style=\"display:block; color:gray;\">").concat(todo.date, "</small>\n            </div>\n            <div>\n                <button class=\"check-btn\">\u2714\uFE0F</button>\n                <button class=\"del-btn\">\u274C</button>\n            </div>\n        ");
        // Toggle completion logic
        (_a = li.querySelector('.check-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            todo.completed = !todo.completed;
            saveToLocal();
            render();
        });
        // Delete logic
        (_b = li.querySelector('.del-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
            todos = todos.filter(function (t) { return t.id !== todo.id; });
            saveToLocal();
            render();
        });
        todoList.appendChild(li);
    });
};
// Day selection handling
dayButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        var selected = btn.getAttribute('data-day');
        if (selected) {
            currentSelectedDay = selected;
            updateDayUI();
            render();
        }
    });
});
// SOLVED TASK 4: Naya Todo add karte waqt currentSelectedDay assign kiya
addBtn.addEventListener('click', function () {
    if (input.value.trim() === '')
        return;
    var newTodo = {
        id: Date.now(),
        task: input.value,
        completed: false,
        date: new Date().toLocaleString(),
        day: currentSelectedDay // Current selected day save ho raha hai
    };
    todos.push(newTodo);
    saveToLocal();
    input.value = '';
    render();
});
// Initial Render
updateDayUI();
render();
