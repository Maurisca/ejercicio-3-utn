function agregarTarea() {
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const listaTareas = document.getElementById('listaTareas');
    const nuevaTareaTexto = nuevaTareaInput.value.trim();

    if (nuevaTareaTexto !== '') {
        const nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = nuevaTareaTexto;

        // Botón eliminar
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.className = 'delete';
        botonEliminar.onclick = function () {
            listaTareas.removeChild(nuevaTarea);
        };

        // Botón marcar como completada
        const botonCompletar = document.createElement('button');
        botonCompletar.textContent = 'Completadas';
        botonCompletar.className = 'completeded';
        botonCompletar.onclick = function () {
            nuevaTarea.classList.toggle('completed');
        };

        // Botón marcar como pendiente
        const botonPendientes = document.createElement('button');
        botonPendientes.textContent = 'Pendientes';
        botonPendientes.className = 'pendings';
        botonPendientes.onclick = function () {
            nuevaTarea.classList.toggle('pending');
        }

        nuevaTarea.appendChild(botonPendientes);
        nuevaTarea.appendChild(botonCompletar);
        nuevaTarea.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaTarea);
        nuevaTareaInput.value = '';
    }
}

// Función para mostrar tareas completadas
function mostrarCompletas() {
    const tareas = document.querySelectorAll('li');
    tareas.forEach(tarea => {
        if (tarea.classList.contains('completed')) {
            tarea.style.display = 'flex';
        } else {
            tarea.style.display = 'none';
        }
    });
}

// Función para mostrar tareas pendientes
function mostrarPendientes() {
    const tareas = document.querySelectorAll('li');
    tareas.forEach(tarea => {
        if (!tarea.classList.contains('pending')) {
            tarea.style.display = 'flex';
        } else {
            tarea.style.display = 'none';
        }
    });
}

// Función para marcar una tarea como completada
function marcarCompletada(tarea) {
    tarea.classList.toggle('completed');
}

// Función para eliminar una tarea
document.getElementById('listaTareas').addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        marcarCompletada(event.target);
    }
});

document.getElementById('agregar').addEventListener('click', agregarTarea);

document.getElementById('mostrarCompletas').addEventListener('click', mostrarCompletas);

document.getElementById('mostrarPendientes').addEventListener('click', mostrarPendientes);