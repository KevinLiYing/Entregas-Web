function AgregarTarea() {
    const input = document.getElementById("tarea");
    const texto = input.value.trim();

    let lista = document.getElementById("lista-tareas"); // As i dont have one, i create it from here
    if (!lista) {
        lista = document.createElement("ul");
        lista.id = "lista-tareas";
        document.body.appendChild(lista);
    }

    const li = document.createElement("li");
    li.textContent = texto;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.onclick = function () {
        deleteTask(li);
    };

    const completeButton = document.createElement("button");
    completeButton.textContent = "Completar";
    completeButton.onclick = function () {
        if (li.style.textDecoration === "line-through") {
            li.style.textDecoration = "none";
        } else {
            li.style.textDecoration = "line-through";
        }
    };

    li.appendChild(deleteButton);
    li.appendChild(completeButton);

    lista.appendChild(li);

    input.value = "";
}

// don't really need this function
function deleteTask(listItem) {
    listItem.parentNode.removeChild(listItem);
}
