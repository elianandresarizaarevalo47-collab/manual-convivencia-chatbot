// ===================================
// BUSCADOR DEL MANUAL
// Versión 2.1
// ===================================

// Base temporal del Manual
// (Después será reemplazada por manual.json)
const manualConvivencia = [
    {
    titulo: "Modo Ñaura",
    palabras: [
        "nyu"
    ],
    contenido: `🦖 ¡Activaste el modo Ñaura! perez maco` 
    },
    {
    titulo: "Modo Ñanda",
    palabras: [
        "nyo"
    ],
    contenido: `🦖 ¡Activaste el modo Ñanda! pertuz maco` 
    },
    {
    titulo: "Acuerdo N.° 014 de 25 de septiembre de 2017",
    palabras: [
        "acuerdo 014",
        "014",
        "acuerdo",
        "manual de convivencia",
        "idesco",
        "institución educativa delicias san carlos",
        "delicias san carlos",
        "el copey",
        "cesar",
        "adopción del manual",
        "adopta el manual",
        "consejo directivo"
    ],
    contenido: `ACUERDO N.° 014 DE 25 DE SEPTIEMBRE DE 2017

POR MEDIO DEL CUAL SE AJUSTA Y SE ADOPTA EL MANUAL PARA LA CONVIVENCIA ESCOLAR DE LA INSTITUCIÓN EDUCATIVA DELICIAS SAN CARLOS DE EL COPEY – CESAR.

El Consejo Directivo, en uso de las facultades legales contempladas en el artículo 144 de la Ley 115 del 8 de febrero de 1994, el artículo 23 del Decreto 1860 de 1994, la Ley 1098 de 2006 (Código de la Infancia y la Adolescencia), el Decreto 1290 del 16 de abril de 2009, la Ley 1620 del 15 de marzo de 2013 y demás normas vigentes, adopta el presente Manual de Convivencia como instrumento que orienta la convivencia escolar, el ejercicio de los derechos, el cumplimiento de los deberes y la formación integral de toda la comunidad educativa.`
},
{
    titulo: "Considerandos del Acuerdo",
    palabras: [
        "considerandos",
        "considerando",
        "fundamento legal",
        "marco legal",
        "constitución política",
        "constitución de 1991",
        "ley 115",
        "ley 1098",
        "ley 1620",
        "decreto 1965",
        "artículo 87",
        "manual de convivencia",
        "reglamento",
        "derechos y obligaciones"
    ],
    contenido: `CONSIDERANDO

Que es deber de la comunidad educativa dar cumplimiento y aplicación a las leyes donde prevalezcan los derechos inalienables de la persona y los Derechos Universales del Niño, así como a las normas relacionadas con la prestación del servicio educativo, entre ellas la Constitución Política de Colombia de 1991, la Ley 115 de 1994, la Ley 1098 de 2006, la Ley 1620 de 2013, el Decreto Reglamentario 1965 de 2013 y demás reglamentaciones vigentes.

Que el artículo 87 de la Ley 115 de 1994 establece que los establecimientos educativos tendrán un reglamento o Manual de Convivencia, en el cual se definen los derechos y obligaciones de los estudiantes, de los padres y acudientes, quienes al firmar la matrícula correspondiente en representación de sus hijos aceptan su cumplimiento.`
},




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