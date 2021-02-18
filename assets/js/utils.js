const utils = (function () {
    function getItem(key) {
        return JSON.parse(localStorage.getItem(key)) || null;
    }

    function setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    function printTodos() {
        const todos = getItem('todos');
        const source = document.getElementById('source').innerHTML;
        const content = document.getElementById('content');
        const template = Handlebars.compile(source);
        const html = template(todos);
        content.innerHTML = html;
        if (todos.length) {
            CLEAR_BTN.style.display = 'block';
        } else {
            CLEAR_BTN.style.display = 'none';
        }
    }

    function create_UUID() {
        let date = new Date().getTime();
        const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (date + Math.random() * 16) % 16 | 0;
            date = Math.floor(date / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });

        return uuid;
    }

    function ifNoTodosAdded() {
        if (utils.getItem('todos').length) {
            CLEAR_BTN.style.display = 'block';
        } else {
            CLEAR_BTN.style.display = 'none';
            const h2 = document.createElement('h2');
            h2.innerText = 'No todos added yet...';
            h2.id = 'infoText';
            CONTENT.appendChild(h2);
        }
    }

    return {
        getItem,
        setItem,
        printTodos,
        create_UUID,
        ifNoTodosAdded
    }
})();