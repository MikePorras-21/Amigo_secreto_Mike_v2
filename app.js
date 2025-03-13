let amigos = []; // Array para guardar los nombres de los amigos

// Función para agregar un amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo"); // Obtiene el amigo
    const nombreAmigo = inputAmigo.value.trim(); // Quita los espacios extra al inicio y final

    // Valido si el nombre del amigo no está vacío
    if (nombreAmigo !== "") {
        amigos.push(nombreAmigo); // Agrega el amigo al array
        mostrarListaAmigos(); // Actualiza la lista
        inputAmigo.value = ""; // Limpia el campo de entrada
    } else {
        alert("Por favor, ingrese un nombre válido.");
    }
}

// Función para mostrar la lista de amigos
function mostrarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes

    amigos.forEach(amigo => {
        listaAmigos.innerHTML += `<li>${amigo}</li>`;
    });
}

// Función para sortear un amigo secreto de forma aleatoria
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitamos al menos dos personas para sortear un amigo secreto.");
        return;
    }

    let indexAleatorio = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio
    let amigoSeleccionado = amigos[indexAleatorio]; // Obtener el amigo aleatorio

    mostrarResultado(amigoSeleccionado); // Mostrar solo el resultado de la persona seleccionada
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigoSeleccionado) {
    const resultadoElemento = document.getElementById("resultado");
    
    // Selecciona un amigo secreto aleatorio diferente
    let indexAleatorio = Math.floor(Math.random() * amigos.length); 
    let amigoSecreto = amigos[indexAleatorio];

    // Mostrar el resultado
    resultadoElemento.innerHTML = `Le tocó a ${amigoSecreto}</li>`;
}
