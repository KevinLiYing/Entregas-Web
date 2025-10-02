async function descargarTodos() {
    let lista = document.getElementById("lista"); // list declared on html
    if (!lista) {
        lista = document.createElement("ul");
        lista.id = "lista";
        document.body.appendChild(lista);
    }

    lista.innerHTML = "";

    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!respuesta.ok) {
            throw new Error("Error en la respuesta de la red: " + respuesta.status);
        }

        const datos = await respuesta.json();

        const primeros10 = datos.slice(0, 10);

        primeros10.forEach(todo => {
            const li = document.createElement("li");
            li.textContent = todo.title;
            lista.appendChild(li);
        });
    } catch (error) {
        alert("Error al descargar los datos: " + error);
    }
}
