// ===============================
// CHATBOT v0.2
// ===============================

// Obtener elementos del HTML
const botonEnviar = document.getElementById("enviar");
const cajaTexto = document.getElementById("pregunta");
const areaMensajes = document.getElementById("mensajes");

// Función para agregar un mensaje
function agregarMensaje(texto, tipo) {

    // Crear el div del mensaje
    const mensaje = document.createElement("div");

    // Agregar clases
    mensaje.classList.add("mensaje", tipo);

    // Agregar texto
    mensaje.textContent = texto;

    // Insertar en el chat
    areaMensajes.appendChild(mensaje);

    // Bajar automáticamente
    areaMensajes.scrollTop = areaMensajes.scrollHeight;
}

// Evento del botón
botonEnviar.addEventListener("click", function () {

    const texto = cajaTexto.value.trim();

    // No enviar mensajes vacíos
    if (texto === "") {
        return;
    }

    // Mostrar mensaje del usuario
    agregarMensaje(texto, "usuario");

    // Limpiar la caja
    cajaTexto.value = "";

});