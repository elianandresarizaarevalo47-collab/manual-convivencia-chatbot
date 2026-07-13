// ===================================
// CHATBOT v0.5
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

        respuesta = "No encontré información sobre ese tema. 🤖 Recuerda que soy un asistente del Manual de Convivencia y puedo ayudarte con normas, derechos, deberes y convivencia escolar.";

    }


    // Respuesta del bot
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

botonEnviar.addEventListener("click", enviarMensaje);


cajaTexto.addEventListener("keydown", function (evento) {

    if (evento.key === "Enter") {

        enviarMensaje();

    }

});