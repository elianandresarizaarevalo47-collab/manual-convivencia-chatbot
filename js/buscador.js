// ===================================
// BUSCADOR DEL MANUAL
// Versión 1.0
// ===================================

function buscarEnManual(pregunta) {

    // Aún no hay información cargada
    if (!Array.isArray(manualConvivencia)) {
        return null;
    }

    const texto = pregunta.toLowerCase();

    for (const seccion of manualConvivencia) {

        if (!seccion.palabras) {
            continue;
        }

        for (const palabra of seccion.palabras) {

            if (texto.includes(palabra.toLowerCase())) {
                return seccion;
            }

        }

    }

    return null;

}