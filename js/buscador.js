// ===================================
// BUSCADOR DEL MANUAL
// Versión 2.1
// ===================================

// Base temporal del Manual
// (Después será reemplazada por manual.json)
const manualConvivencia = [
     {
        titulo: "Acuerdo N.º 014 de 25 de septiembre de 2017",
        palabras: [
            "acuerdo 014",
            "acuerdo",
            "manual de convivencia",
            "manual",
            "adopción",
            "consejo directivo",
            "idesco",
            "institución educativa delicias san carlos"
        ],
        contenido: `ACUERDO N.º 014 DE 25 DE SEPTIEMBRE DE 2017

POR MEDIO DEL CUAL SE AJUSTA Y SE ADOPTA EL MANUAL PARA LA CONVIVENCIA ESCOLAR DE LA INSTITUCIÓN EDUCATIVA DELICIAS SAN CARLOS DE EL COPEY – CESAR.

El Consejo Directivo, en uso de las facultades legales contempladas en el artículo 144 de la Ley 115 de 1994, el artículo 23 del Decreto 1860 de 1994, la Ley 1098 de 2006, el Decreto 1290 de 2009, la Ley 1620 de 2013, el Decreto 1965 de 2013 y demás normas vigentes, adopta el presente Manual de Convivencia como instrumento que orienta la convivencia escolar, el ejercicio de los derechos, el cumplimiento de los deberes y la formación integral de toda la comunidad educativa.`
    },

    {
        titulo: "Considerandos del Acuerdo",
        palabras: [
            "considerandos",
            "considerando",
            "ley 115",
            "ley 1098",
            "ley 1620",
            "decreto 1860",
            "decreto 1290",
            "constitución",
            "normatividad"
        ],
        contenido: `El Manual de Convivencia se fundamenta en la Constitución Política de Colombia, la Ley General de Educación, el Código de la Infancia y la Adolescencia, la Ley de Convivencia Escolar y las demás normas que regulan la prestación del servicio educativo. Su propósito es garantizar los derechos de los estudiantes, promover una convivencia pacífica, fortalecer la formación integral y establecer las normas que orientan el comportamiento de todos los integrantes de la comunidad educativa.`
    },

    {
        titulo: "Artículo 1. Adopción del Manual de Convivencia",
        palabras: [
            "artículo 1",
            "articulo 1",
            "adopción del manual",
            "manual de convivencia",
            "adopta el manual"
        ],
        contenido: `Artículo 1. Adopción del Manual de Convivencia. La Institución Educativa Delicias San Carlos de El Copey – Cesar adopta oficialmente el presente Manual de Convivencia como el conjunto de normas, principios, derechos, deberes, procedimientos y disposiciones que regulan la convivencia escolar y orientan el desarrollo de la comunidad educativa, de conformidad con la legislación vigente.`
    },

    {
    titulo: "Artículo 2. Ámbito de aplicación",
    palabras: [
        "artículo 2",
        "articulo 2",
        "ámbito de aplicación",
        "ambito de aplicacion",
        "a quién aplica",
        "a quienes aplica",
        "quienes deben cumplir",
        "aplicación del manual",
        "preescolar",
        "media",
        "comunidad educativa"
    ],
    contenido: `Artículo 2. Ámbito de aplicación. Las normas contenidas en el Manual de Convivencia se aplican dentro del proceso de formación integral que desarrolla la Institución Educativa Delicias San Carlos de El Copey con sus estudiantes desde el nivel Preescolar hasta la Media y demás miembros de la comunidad educativa.`
},
{
    titulo: "Artículo 3. Justificación",
    palabras: [
        "artículo 3",
        "articulo 3",
        "justificación",
        "justificacion",
        "formación en ciudadanía",
        "formacion en ciudadania",
        "instrumento legal interno",
        "participación de la comunidad educativa",
        "participacion de la comunidad educativa"
    ],
    contenido: `Artículo 3. Justificación. Teniendo en cuenta el marco jurídico, socioeconómico, cultural y político del contexto de la Institución Educativa, se establece el presente Manual de Convivencia como instrumento legal interno, producto de la participación de la comunidad educativa, con el fin de promover y desarrollar la formación en ciudadanía.`
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