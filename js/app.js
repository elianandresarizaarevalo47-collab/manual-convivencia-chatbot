// ===================================
// CHATBOT v0.4
// ===================================

// Elementos del HTML
const botonEnviar = document.getElementById("enviar");
const cajaTexto = document.getElementById("pregunta");
const areaMensajes = document.getElementById("mensajes");


// ===============================
// Agregar mensaje al chat
// ===============================
function agregarMensaje(texto, tipo) {

    const mensaje = document.createElement("div");

    mensaje.classList.add("mensaje", tipo);

    mensaje.textContent = texto;

    areaMensajes.appendChild(mensaje);

    areaMensajes.scrollTop = areaMensajes.scrollHeight;
}


// ===============================
// Buscar respuesta del chatbot
// ===============================
function responderBot(textoUsuario) {

    const pregunta = textoUsuario.toLowerCase();

    let respuesta = "";


    // Buscar en respuestas.js
    for (let dato of conocimiento) {

        for (let palabra of dato.palabras) {

            if (pregunta.includes(palabra)) {

                respuesta = dato.respuesta;
                break;

            }

        }

        if (respuesta !== "") {
            break;
        }

    }


    // Si no encuentra respuesta
    if (respuesta === "") {

        respuesta = "Todavía estoy aprendiendo. Pronto tendré más información del Manual de Convivencia. 🤖";

    }


    // Simular que el bot piensa
    setTimeout(function () {

        agregarMensaje(respuesta, "bot");

    }, 1000);

}


// ===============================
// Enviar mensaje
// ===============================
function enviarMensaje() {

    const texto = cajaTexto.value.trim();


    if (texto === "") {
        return;
    }


    agregarMensaje(texto, "usuario");


    cajaTexto.value = "";


    responderBot(texto);

}


// ===============================
// Eventos
// ===============================

// Botón enviar
botonEnviar.addEventListener("click", enviarMensaje);


// Presionar Enter
cajaTexto.addEventListener("keydown", function (evento) {

    if (evento.key === "Enter") {

        enviarMensaje();

    }

});