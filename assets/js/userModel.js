const userStorage = (function () {
    class Todo {
        constructor(title, uuid) {
            this.title = title;
            this.uuid = uuid;
            this.checked = false;
        }
    }

    class UserStorage {
        constructor() {
            if (utils.getItem('todos')) {
                this.todos = utils.getItem('todos');
            } else {
                this.todos = [];
                utils.setItem('todos', this.todos);
            }
        }

        add(todo, uuid) {
            this.todos = utils.getItem('todos');
            this.todos.push(new Todo(todo, uuid));
            utils.setItem('todos', this.todos);
        }

        remove(uuid) {
            this.todos = utils.getItem('todos');
            this.todos = this.todos.filter(item => item.uuid !== uuid);
            utils.setItem('todos', this.todos);
        }

        check(uuid) {
            this.todos.forEach(todo => {
                if (todo.uuid === uuid) {
                    if (todo.checked) {
                        todo.checked = false;
                    } else {
                        todo.checked = true;
                    }

                    return utils.setItem('todos', this.todos);
                }
            });
        }
    }

    return new UserStorage();
})();