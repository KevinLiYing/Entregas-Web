function AgregarTarea() {

    const deleteButton = document.createElement("button");
    const completeButton = document.createElement("button");

    const input = document.getElementById("tarea");
    const texto = input.value.trim();

    let lista = document.getElementById("listaTareas");
    if (!lista) {
        lista = document.createElement("ul");
        lista.id = "lista-tareas";
        document.body.appendChild(lista);
    }

    const li = document.createElement("li");
    li.textContent = texto;

    deleteButton.textContent = "Eliminar";
    deleteButton.onclick = function () {
        deleteTask(li);
    };

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

async function descargarTodos() {

    let lista = document.getElementById("lista");
    if (!lista) {
        lista = document.createElement("ul");
        lista.id = "lista";
        document.body.appendChild(lista);
    }

    lista.innerHTML = "";

    try {
        // Waits for the web page to respond
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!respuesta.ok) {
            throw new Error("Error en la respuesta de la red: " + respuesta.status);
        }

        // We get the data
        const datos = await respuesta.json();

        // Slice that data and get the first 10 elements
        const primeros10 = datos.slice(0, 10);

        // Now, for each of those 10 values do the following
        primeros10.forEach(todo => {
            // Each time we go through the loop we create a new button
            const deleteButton = document.createElement("button");
            const completeButton = document.createElement("button");

            // We create the list item where it will be saved
            const li = document.createElement("li");
            li.textContent = todo.title;
            
            // Define what the eliminate button does
            deleteButton.textContent = "Eliminar";
            deleteButton.onclick = function () {
                li.remove();
            };

            // Define what the complete button does
            completeButton.textContent = "Completar";
            completeButton.onclick = function () {
                if (li.style.textDecoration === "line-through") {
                    li.style.textDecoration = "none";
                } else {
                    li.style.textDecoration = "line-through";
                }
            };

            // To the list item we append the buttons
            li.appendChild(deleteButton)
            li.appendChild(completeButton)
            // To the list we append each list item
            lista.appendChild(li);
            
        });
        // in case of error
    } catch (error) {
        alert("Error al descargar los datos: " + error);
    }
}

function deleteTask(listItem) {
    listItem.parentNode.removeChild(listItem);
}
