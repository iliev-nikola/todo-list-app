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