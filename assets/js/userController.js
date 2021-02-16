(function () {
    // initial print of todo list
    printTodos();

    // on submit
    SUBMIT_BTN.addEventListener('click', (e) => {
        e.preventDefault();
        if (INPUT.value.trim()) {
            userStorage.add(INPUT.value.trim());
            printTodos();
            INPUT.value = '';
        }
    });

    // remove a todo

    // delete all todos
    CLEAR_BTN.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.setItem('todos', JSON.stringify([]));
        printTodos();
    });
})();