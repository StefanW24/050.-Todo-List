const apiUrl = 'http://localhost:3000';

async function removeItem(id) {
    const deleted = await fetch(apiUrl + '/' + id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    });
    renderTodo();
}

async function addTodo(event) {
    event.preventDefault();
    const inputData = document.getElementById("inputField").value
    await fetch(apiUrl, {
        method: "POST",
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: inputData })
    })
    clearTodo()
    renderTodo()
}
