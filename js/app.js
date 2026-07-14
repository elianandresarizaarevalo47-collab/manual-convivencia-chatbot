// ===================================
// CHATBOT DEL MANUAL
// Versión 2.0
// ===================================

// Elementos
const botonEnviar = document.getElementById("enviar");
const cajaTexto = document.getElementById("pregunta");
const areaMensajes = document.getElementById("mensajes");

// ===============================
// Mostrar mensajes
// ===============================
function agregarMensaje(texto, tipo) {

    const mensaje = document.createElement("div");

    mensaje.classList.add("mensaje", tipo);

    mensaje.textContent = texto;

    areaMensajes.appendChild(mensaje);

    areaMensajes.scrollTop = areaMensajes.scrollHeight;

}

// ===============================
// Buscar respuesta
// ===============================
function responderBot(textoUsuario) {

    let respuesta = "";

    // Buscar primero en el Manual
    const resultado = buscarEnManual(textoUsuario);

    if (resultado) {

        respuesta = resultado.contenido;

    } else {

        // Buscar en respuestas temporales
        const pregunta = textoUsuario.toLowerCase();

        for (const dato of conocimiento) {

            for (const palabra of dato.palabras) {

                if (pregunta.includes(palabra.toLowerCase())) {

                    respuesta = dato.respuesta;
                    break;

                }

            }

            if (respuesta !== "") break;

        }

    }

    if (respuesta === "") {

        respuesta = "Lo siento, todavía no encontré información sobre ese tema en el Manual de Convivencia.";

    }

    setTimeout(() => {

        agregarMensaje(respuesta, "bot");

    }, 500);

}

// ===============================
// Enviar mensaje
// ===============================
function enviarMensaje() {

    const texto = cajaTexto.value.trim();

    if (texto === "") return;

    agregarMensaje(texto, "usuario");

    cajaTexto.value = "";

    responderBot(texto);

}

// Eventos
botonEnviar.addEventListener("click", enviarMensaje);

cajaTexto.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        enviarMensaje();

    }

});