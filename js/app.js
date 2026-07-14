// ===================================
// CHATBOT DEL MANUAL
// Versión 1.0
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
// Responder
// ===============================
function responderBot(textoUsuario) {

    const resultado = buscarEnManual(textoUsuario);

    let respuesta = "";

    if (resultado) {

        respuesta = resultado.contenido;

    } else {

        // Respaldo temporal
        const pregunta = textoUsuario.toLowerCase();

        for (const dato of conocimiento) {

            for (const palabra of dato.palabras) {

                if (pregunta.includes(palabra)) {

                    respuesta = dato.respuesta;
                    break;

                }

            }

            if (respuesta !== "") break;

        }

    }

    if (respuesta === "") {

        respuesta = "No encontré información en el Manual de Convivencia.";

    }

    setTimeout(() => {

        agregarMensaje(respuesta, "bot");

    }, 500);

}

// ===============================
// Enviar
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

cajaTexto.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        enviarMensaje();

    }

});