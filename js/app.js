// ===================================
// CHATBOT v0.3
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
// Respuesta de prueba
// ===============================
function responderBot(textoUsuario) {

    const pregunta = textoUsuario.toLowerCase();

    let respuesta = "";

    if (pregunta.includes("hola")) {

        respuesta = "¡Hola! 😊 ¿En qué puedo ayudarte con el Manual de Convivencia?";

    } else if (pregunta.includes("nombre")) {

        respuesta = "Soy el chatbot del Manual de Convivencia.";

    } else if (pregunta.includes("gracias")) {

        respuesta = "¡Con mucho gusto! 😄";

    } else {

        respuesta = "Todavía estoy aprendiendo. Muy pronto responderé utilizando Gemini IA.";
    }

    // Esperar 1 segundo para responder
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

// Botón
botonEnviar.addEventListener("click", enviarMensaje);

// Tecla Enter
cajaTexto.addEventListener("keydown", function (evento) {

    if (evento.key === "Enter") {

        enviarMensaje();

    }

});