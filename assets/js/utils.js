const utils = (function () {
    function getItem(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    function printTodos() {
        const todos = getItem('todos');
        const source = document.getElementById('source').innerHTML;
        const content = document.getElementById('content');
        const template = Handlebars.compile(source);
        const html = template(todos);
        content.innerHTML = html;
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

    return {
        getItem,
        printTodos,
        create_UUID
    }
})();