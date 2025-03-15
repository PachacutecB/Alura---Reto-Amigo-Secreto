//Array para almacenar los nombres
let amigos = [];

// Función para agregar
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    if (nombre !== "") {
        amigos.push(nombre);
        input.value = "";
        actualizarListaAmigos();
    } else {
        alert("Nombre incorrecto");
    }
}

// Función para actualizar
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        li.setAttribute("role", "listitem");
        listaAmigos.appendChild(li);
    });
}

// Función para sortear
function sortearAmigo() {
    //Validamos que sean minimo 2 
    if (amigos.length < 2) {
        alert("Debes agregar por lo menos 2 nombres para sortear");
        return;
    }
    const resultado = document.getElementById("resultado"); 
    resultado.innerHTML = "";
    const indiceGanador = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indiceGanador];
    
    //Mostrar ganador
    const mensaje = document.createElement("p");
    mensaje.textContent = `🎉 ¡El amigo secreto es: ${ganador}! 🎉`;
    mensaje.setAttribute("role", "alert");
    resultado.appendChild(mensaje);
}