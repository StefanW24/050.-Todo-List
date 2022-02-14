const toDoList = document.querySelector(".List");

document.getElementById("Form").addEventListener("submit", addTodo)
renderTodo()

async function renderTodo() {
    const result = await fetch('http://localhost:3000/', { method: "GET", headers: { "Content-Type": "application/json" } })
    const responseData = await result.json()
    clearTodo();
    
    responseData.forEach(todo => {
        const listSection = document.createElement("div");
        listSection.classList.add("todo");
        const newListItem = document.createElement("li");
        newListItem.innerText = todo.name;
        newListItem.classList.add("listItem");
        listSection.appendChild(newListItem);
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        deleteButton.setAttribute("id", "deleteButton");
        deleteButton.onclick = () => (removeItem(todo._id))
        listSection.appendChild(deleteButton);
        toDoList.appendChild(listSection);
    });
}

clearTodo = () => {
    toDoList.innerHTML = "";
}

