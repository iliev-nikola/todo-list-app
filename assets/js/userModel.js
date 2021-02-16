const userStorage = (function () {
    class Todo {
        constructor(title) {
            this.title = title;
        }
    }

    class UserStorage {
        constructor() {
            if (getItem('todos')) {
                this.todos = getItem('todos');
            } else {
                this.todos = [];
                localStorage.setItem('todos', JSON.stringify(this.todos));
            }
        }

        add(todo) {
            this.todos.push(new Todo(todo));
            localStorage.setItem('todos', JSON.stringify(this.todos));
        }

        remove(todo) {
            this.todos = this.todos.filter(item => item !== todo);
            localStorage.setItem('todos', JSON.stringify(this.todos));
        }
    }

    return new UserStorage();
})();