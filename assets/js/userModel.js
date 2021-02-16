const userStorage = (function () {
    class Todo {
        constructor(todo) {
            this.todo = todo;
        }
    }

    class UserStorage {
        constructor() {
            if (localStorage.getItem('todos')) {
                this.todos = JSON.parse(localStorage.getItem('todos'));
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