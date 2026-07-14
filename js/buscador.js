// ===================================
// BUSCADOR DEL MANUAL
// Versión 2.1
// ===================================

// Base temporal del Manual
// (Después será reemplazada por manual.json)
const manualConvivencia = [

    {
        titulo: "Derechos",
        palabras: [
            "derechos",
            "derecho"
        ],
        contenido: "Los estudiantes tienen derecho a recibir una educación integral, ser respetados y participar en la vida escolar."
    },

    {
        titulo: "Deberes",
        palabras: [
            "deberes",
            "deber",
            "responsabilidades"
        ],
        contenido: "Los estudiantes deben respetar a la comunidad educativa, cumplir las normas institucionales y cuidar los bienes de la institución."
    }

];

// ===================================
// Buscar en el Manual
// ===================================
function buscarEnManual(textoUsuario) {

    const pregunta = textoUsuario.toLowerCase();

    for (const seccion of manualConvivencia) {

        for (const palabra of seccion.palabras) {

            if (pregunta.includes(palabra.toLowerCase())) {

                return seccion;

            }

        }

    }

    return null;

}