var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var TodoApp = /** @class */ (function () {
    function TodoApp() {
        this.todos = [];
        this.currentFilter = 'all';
        this.todoInput = document.getElementById('todo-input');
        this.addBtn = document.getElementById('add-btn');
        this.todoList = document.getElementById('todo-list');
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.loadTodos();
        this.initEventListeners();
        this.render();
    }
    TodoApp.prototype.initEventListeners = function () {
        var _this = this;
        this.addBtn.addEventListener('click', function () { return _this.addTodo(); });
        this.todoInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                _this.addTodo();
            }
        });
        this.filterBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                _this.setFilter(btn.dataset.filter);
            });
        });
    };
    TodoApp.prototype.addTodo = function () {
        var text = this.todoInput.value.trim();
        if (text === '')
            return;
        var todo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date()
        };
        this.todos.push(todo);
        this.saveTodos();
        this.todoInput.value = '';
        this.render();
    };
    TodoApp.prototype.toggleTodo = function (id) {
        var todo = this.todos.find(function (t) { return t.id === id; });
        if (todo) {
            todo.completed = !todo.completed;
            this.saveTodos();
            this.render();
        }
    };
    TodoApp.prototype.editTodo = function (id) {
        var _this = this;
        var todo = this.todos.find(function (t) { return t.id === id; });
        if (!todo)
            return;
        var li = document.querySelector("[data-id=\"".concat(id, "\"]"));
        var textSpan = li.querySelector('.todo-text');
        var editInput = li.querySelector('.edit-input');
        li.classList.add('editing');
        editInput.value = todo.text;
        editInput.focus();
        var saveEdit = function () {
            var newText = editInput.value.trim();
            if (newText !== '') {
                todo.text = newText;
                _this.saveTodos();
            }
            li.classList.remove('editing');
            _this.render();
        };
        var cancelEdit = function () {
            li.classList.remove('editing');
        };
        editInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                saveEdit();
            }
            else if (e.key === 'Escape') {
                cancelEdit();
            }
        });
        editInput.addEventListener('blur', saveEdit);
    };
    TodoApp.prototype.deleteTodo = function (id) {
        this.todos = this.todos.filter(function (t) { return t.id !== id; });
        this.saveTodos();
        this.render();
    };
    TodoApp.prototype.setFilter = function (filter) {
        this.currentFilter = filter;
        this.filterBtns.forEach(function (btn) {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        this.render();
    };
    TodoApp.prototype.getFilteredTodos = function () {
        switch (this.currentFilter) {
            case 'active':
                return this.todos.filter(function (t) { return !t.completed; });
            case 'completed':
                return this.todos.filter(function (t) { return t.completed; });
            default:
                return this.todos;
        }
    };
    TodoApp.prototype.render = function () {
        var _this = this;
        var filteredTodos = this.getFilteredTodos();
        this.todoList.innerHTML = '';
        filteredTodos.forEach(function (todo) {
            var li = document.createElement('li');
            li.className = "todo-item ".concat(todo.completed ? 'completed' : '');
            li.dataset.id = todo.id.toString();
            li.innerHTML = "\n                <input type=\"checkbox\" class=\"todo-checkbox\" ".concat(todo.completed ? 'checked' : '', ">\n                <span class=\"todo-text\">").concat(todo.text, "</span>\n                <input type=\"text\" class=\"edit-input\">\n                <div class=\"todo-actions\">\n                    <button class=\"edit-btn\">Edit</button>\n                    <button class=\"delete-btn\">Delete</button>\n                </div>\n            ");
            var checkbox = li.querySelector('.todo-checkbox');
            var editBtn = li.querySelector('.edit-btn');
            var deleteBtn = li.querySelector('.delete-btn');
            checkbox.addEventListener('change', function () { return _this.toggleTodo(todo.id); });
            editBtn.addEventListener('click', function () { return _this.editTodo(todo.id); });
            deleteBtn.addEventListener('click', function () { return _this.deleteTodo(todo.id); });
            _this.todoList.appendChild(li);
        });
    };
    TodoApp.prototype.saveTodos = function () {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    };
    TodoApp.prototype.loadTodos = function () {
        var stored = localStorage.getItem('todos');
        if (stored) {
            this.todos = JSON.parse(stored).map(function (todo) { return (__assign(__assign({}, todo), { createdAt: new Date(todo.createdAt) })); });
        }
    };
    return TodoApp;
}());
// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    new TodoApp();
});
