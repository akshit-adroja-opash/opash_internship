interface Todo {
    id: number;
    task: string;
    completed: boolean;
    date: string;
    day: string; 
}

const input = document.getElementById('todo-input') as HTMLInputElement;
const addBtn = document.getElementById('add-btn') as HTMLButtonElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;
const dayButtons = document.querySelectorAll('.day-btn');

// Initial setup: Aaj ka din (e.g., "Monday") default selected rahega
let currentSelectedDay: string = new Date().toLocaleString('en-us', { weekday: 'long' });
let todos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');

const saveToLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

// SOLVED TASK 2: Highlight logic ko fix kiya
const updateDayUI = () => {
    dayButtons.forEach(btn => {
        const btnDay = btn.getAttribute('data-day');
        if (btnDay === currentSelectedDay) {
            btn.classList.add('active'); // Sirf match hone wala button highlight hoga
        } else {
            btn.classList.remove('active'); // Baaki buttons se highlight hat jayega
        }
    });
};

// SOLVED TASK 3: Render function mein filter add kiya
const render = () => {
    if (!todoList) return;
    todoList.innerHTML = '';

    // Filter: Sirf wahi tasks dikhao jo selected day ke hain
    const filteredTodos = todos.filter(t => t.day === currentSelectedDay);

    filteredTodos.forEach(todo => {
        const li = document.createElement('li');
        li.className = todo.completed ? 'completed' : '';
        li.innerHTML = `
            <div>
                <span>${todo.task}</span>
                <small style="display:block; color:gray;">${todo.date}</small>
            </div>
            <div>
                <button class="check-btn">✔️</button>
                <button class="del-btn">❌</button>
            </div>
        `;

        // Toggle completion logic
        li.querySelector('.check-btn')?.addEventListener('click', () => {
            todo.completed = !todo.completed;
            saveToLocal();
            render();
        });

        // Delete logic
        li.querySelector('.del-btn')?.addEventListener('click', () => {
            todos = todos.filter(t => t.id !== todo.id);
            saveToLocal();
            render();
        });

        todoList.appendChild(li);
    });
};

// Day selection handling
dayButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const selected = btn.getAttribute('data-day');
        if (selected) {
            currentSelectedDay = selected;
            updateDayUI();
            render();
        }
    });
});

// SOLVED TASK 4: Naya Todo add karte waqt currentSelectedDay assign kiya
addBtn.addEventListener('click', () => {
    if (input.value.trim() === '') return;

    const newTodo: Todo = {
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