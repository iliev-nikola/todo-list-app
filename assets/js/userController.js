(function () {
    // initial print of todo list
    utils.printTodos();
    onTodoClick();

    // on submit
    SUBMIT_BTN.addEventListener('click', (e) => {
        e.preventDefault();
        if (INPUT.value.trim()) {
            let value = INPUT.value.trim();
            value = value[0].toUpperCase() + value.substring(1);
            userStorage.add(value, utils.create_UUID());
            utils.printTodos();
            onTodoClick();
            INPUT.value = '';
        }
    });

    // on recycle bin click and text click
    function onTodoClick() {
        const binsArr = Array.from(RECYCLE_BINS);
        const todos = utils.getItem('todos');
        for (let i = 0; i < binsArr.length; i++) {
            if (binsArr[i].dataset.id) {
                continue;
            }

            binsArr[i].addEventListener('click', (e) => {
                userStorage.remove(e.target.dataset.id);
                const parent = binsArr[i].parentElement.parentElement;
                const child = binsArr[i].parentElement;
                parent.removeChild(child.nextElementSibling);
                parent.removeChild(child);
                utils.ifNoTodosAdded();
            });

            binsArr[i].dataset.id = todos[i].uuid;

            binsArr[i].previousElementSibling.addEventListener('click', (e) => {
                if (e.target.style.textDecoration === 'line-through') {
                    e.target.style.textDecoration = 'none';
                } else {
                    e.target.style.textDecoration = 'line-through';
                }
            });
        }
    }

    // delete all todos
    CLEAR_BTN.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.setItem('todos', JSON.stringify(new Array));
        utils.printTodos();
    });
})();