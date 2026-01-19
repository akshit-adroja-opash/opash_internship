interface Todo {
    id: number;
    text: string;
    completed: boolean;
    createdAt: Date;
}

class TodoApp {
    private todos: Todo[] = [];
    private todoInput: HTMLInputElement;
    private addBtn: HTMLButtonElement;
    private todoList: HTMLUListElement;
    private filterBtns: NodeListOf<HTMLButtonElement>;
    private currentFilter: string = 'all';

    constructor() {
        this.todoInput = document.getElementById('todo-input') as HTMLInputElement;
        this.addBtn = document.getElementById('add-btn') as HTMLButtonElement;
        this.todoList = document.getElementById('todo-list') as HTMLUListElement;
        this.filterBtns = document.querySelectorAll('.filter-btn');

        this.loadTodos();
        this.initEventListeners();
        this.render();
    }

    private initEventListeners(): void {
        this.addBtn.addEventListener('click', () => this.addTodo());
        this.todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addTodo();
            }
        });

        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.setFilter(btn.dataset.filter!);
            });
        });
    }

    private addTodo(): void {
        const text = this.todoInput.value.trim();
        if (text === '') return;

        const todo: Todo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date()
        };

        this.todos.push(todo);
        this.saveTodos();
        this.todoInput.value = '';
        this.render();
    }

    private toggleTodo(id: number): void {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveTodos();
            this.render();
        }
    }

    private editTodo(id: number): void {
        const todo = this.todos.find(t => t.id === id);
        if (!todo) return;

        const li = document.querySelector(`[data-id="${id}"]`) as HTMLLIElement;
        const textSpan = li.querySelector('.todo-text') as HTMLSpanElement;
        const editInput = li.querySelector('.edit-input') as HTMLInputElement;

        li.classList.add('editing');
        editInput.value = todo.text;
        editInput.focus();

        const saveEdit = () => {
            const newText = editInput.value.trim();
            if (newText !== '') {
                todo.text = newText;
                this.saveTodos();
            }
            li.classList.remove('editing');
            this.render();
        };

        const cancelEdit = () => {
            li.classList.remove('editing');
        };

        editInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                saveEdit();
            } else if (e.key === 'Escape') {
                cancelEdit();
            }
        });

        editInput.addEventListener('blur', saveEdit);
    }

    private deleteTodo(id: number): void {
        this.todos = this.todos.filter(t => t.id !== id);
        this.saveTodos();
        this.render();
    }

    private setFilter(filter: string): void {
        this.currentFilter = filter;
        this.filterBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        this.render();
    }

    private getFilteredTodos(): Todo[] {
        switch (this.currentFilter) {
            case 'active':
                return this.todos.filter(t => !t.completed);
            case 'completed':
                return this.todos.filter(t => t.completed);
            default:
                return this.todos;
        }
    }

    private render(): void {
        const filteredTodos = this.getFilteredTodos();
        this.todoList.innerHTML = '';

        filteredTodos.forEach(todo => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
            li.dataset.id = todo.id.toString();

            li.innerHTML = `
                <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''}>
                <span class="todo-text">${todo.text}</span>
                <input type="text" class="edit-input">
                <div class="todo-actions">
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;

            const checkbox = li.querySelector('.todo-checkbox') as HTMLInputElement;
            const editBtn = li.querySelector('.edit-btn') as HTMLButtonElement;
            const deleteBtn = li.querySelector('.delete-btn') as HTMLButtonElement;

            checkbox.addEventListener('change', () => this.toggleTodo(todo.id));
            editBtn.addEventListener('click', () => this.editTodo(todo.id));
            deleteBtn.addEventListener('click', () => this.deleteTodo(todo.id));

            this.todoList.appendChild(li);
        });
    }

    private saveTodos(): void {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    private loadTodos(): void {
        const stored = localStorage.getItem('todos');
        if (stored) {
            this.todos = JSON.parse(stored).map((todo: any) => ({
                ...todo,
                createdAt: new Date(todo.createdAt)
            }));
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});
