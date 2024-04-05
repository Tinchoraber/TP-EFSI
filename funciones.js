let tareas = [
    /*{
        todo: "Hacer el TP2",
        tachado: false
    },
    {
        todo: "Asistir a la clase de EFSI",
        tachado: true
    },
    {
        todo: "Hacer el diseño",
        tachado: false,
        TiempoCreado: Date.now(),
        TiempoTerminado: null,
    } */
]

const agregarItem = document.getElementById("agregarItem");
agregarItem.onclick = () => {
    const item = document.getElementById("item").value;
    if (item == "") {
        alert('Ingrese alguna tarea');
        return
    }
    tareas.push({ todo: item, tachado: false, TiempoCreado: Date.now(), TiempoTerminado: null });
    mostrarLista();
    document.getElementById("item").value = "";
    document.getElementById("item").focus();
}
mostrarLista = () => {
    document.getElementById("todos").innerHTML = "";
    let html = "";
    let id = 0;
    tareas.forEach(todo => {
        let tacha = "";
        if (todo.tachado) {
            tacha = "text-decoration: line-through";
        }
        html += `<li class="texto" id="checkb${id}" style="${tacha}" ><span onclick="tachar(${id})">${todo.todo}</span>
        <button class="btn-delete" onclick="borrar(${id})">Eliminar </button> </li>`;
        id++;
    }

    )
    document.getElementById("todos").innerHTML = html;
};


const tachar = (id) => {
    tareas[id].tachado = !tareas[id].tachado;
    tareas[id].TiempoTerminado = ((Date.now() - tareas[id].TiempoCreado) / 1000).toFixed(1);
    mostrarLista();
}
const borrar = (id) => {
    tareas.splice(id, 1);
    mostrarLista();
}


tareaMasRapida = () => {
    let numero = 0;
    let tareaAux = null;
    tareas.forEach(todo => {

        if (todo.tachado) {
            if (numero == 0) {
                numero = todo.TiempoTerminado;
                tareaAux = todo.todo;
            }
            if (todo.TiempoTerminado < numero) {
                numero = todo.TiempoTerminado;
                tareaAux = todo.todo;
            }
            document.getElementById("tareaMasRapida").innerHTML = `La tarea mas rapida en resolverse fue: ${tareaAux}, con ${numero} segundos`;
        }
        else {
            document.getElementById("tareaMasRapida").innerHTML = `NO HAY NINGUNA TAREA RESUELTA`;
        }

    });

}





/*
'<input type = "checkbox">' + todo.todo
*/