// ===================================
// BASE DE CONOCIMIENTO DEL CHATBOT
// Manual de Convivencia v1.0
// ===================================


// ===================================
// RESPUESTAS GENERALES
// ===================================

const conocimiento = [

    {
        palabras: [
            "hola",
            "buenas",
            "hey",
            "saludos",
            "buenos dias",
            "buenos días",
            "buenas tardes",
            "buenas noches"
        ],
        respuesta: "¡Hola! 😊 Soy el chatbot del Manual de Convivencia. Estoy aquí para ayudarte con dudas sobre normas, derechos, deberes y convivencia escolar."
    },


    {
        palabras: [
            "ayuda",
            "necesito ayuda",
            "tengo una pregunta",
            "puedes ayudarme"
        ],
        respuesta: "Claro 😊. Puedes preguntarme sobre temas del Manual de Convivencia como derechos, deberes, uniforme, horarios y normas de convivencia."
    },


    {
        palabras: [
            "uniforme",
            "vestuario",
            "ropa",
            "presentacion personal",
            "presentación personal"
        ],
        respuesta: "Según el Manual de Convivencia, el uniforme institucional y la presentación personal deben cumplir con las normas establecidas por la institución."
    },


    {
        palabras: [
            "deberes",
            "obligaciones",
            "responsabilidades",
            "que debo hacer",
            "qué debo hacer",
            "debo cumplir"
        ],
        respuesta: "Según el Manual de Convivencia, los estudiantes deben respetar a sus compañeros, docentes y demás miembros de la comunidad educativa, además de cumplir las normas institucionales."
    },


    {
        palabras: [
            "derechos",
            "derecho",
            "que puedo hacer",
            "qué puedo hacer"
        ],
        respuesta: "Los estudiantes tienen derecho a ser respetados, recibir educación y participar en un ambiente de sana convivencia."
    },


    {
        palabras: [
            "horario",
            "entrada",
            "salida",
            "hora"
        ],
        respuesta: "Los estudiantes deben cumplir los horarios establecidos por la institución."
    },


    {
        palabras: [
            "falta",
            "faltas",
            "sancion",
            "sanción",
            "correctivo"
        ],
        respuesta: "Las faltas y sus correctivos deben manejarse siguiendo el debido proceso establecido en el Manual de Convivencia."
    },


    {
        palabras: [
            "conflicto",
            "problema",
            "pelea",
            "discusión",
            "discusion",
            "bullying",
            "acoso"
        ],
        respuesta: "Ante un conflicto de convivencia se debe buscar el diálogo y seguir los procedimientos establecidos por la institución para solucionarlo."
    },


    {
        palabras: [
            "profesor",
            "profesora",
            "docente",
            "maestro"
        ],
        respuesta: "Los estudiantes deben mantener una relación basada en el respeto con los docentes y demás miembros de la comunidad educativa."
    },


    {
        palabras: [
            "adios",
            "adiós",
            "chao",
            "hasta luego"
        ],
        respuesta: "¡Hasta luego! 😊 Espero poder ayudarte nuevamente con el Manual de Convivencia."
    },


    {
        palabras: [
            "gracias",
            "muchas gracias"
        ],
        respuesta: "¡Con mucho gusto! 😄 Estoy aquí para ayudarte."
    }

];


// ===================================
// INFORMACIÓN DEL MANUAL
// ===================================

const manual = [

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
    titulo: "Identificación del Manual de Convivencia",
    palabras: [
        "manual de convivencia",
        "manual",
        "institución educativa delicias san carlos",
        "idesco",
        "acuerdo 014",
        "acuerdo catorce",
        "25 septiembre 2017",
        "veinticinco de septiembre de 2017"
    ],
    contenido: `La Institución Educativa Delicias San Carlos de El Copey-Cesar, identificada como "IDESCO", cuenta con un Manual de Convivencia adoptado mediante el Acuerdo número catorce (014) del 25 de septiembre de 2017.

Este acuerdo ajusta y adopta el Manual para la Convivencia Escolar de la Institución Educativa Delicias San Carlos de El Copey-Cesar.`
},

{
    titulo: "Fundamento legal del Manual de Convivencia",
    palabras: [
        "fundamento legal",
        "facultades legales",
        "ley 115",
        "decreto 1860",
        "ley 1098",
        "código de infancia y adolescencia",
        "decreto 1290",
        "ley 1620",
        "decreto 1695",
        "normas legales",
        "leyes del manual"
    ],
    contenido: `El Consejo Directivo adopta y ajusta el Manual de Convivencia haciendo uso de las facultades legales contempladas en el artículo ciento cuarenta y cuatro de la Ley ciento quince del 8 de febrero de 1994, el artículo veintitrés del Decreto mil ochocientos sesenta de 1994, la Ley mil noventa y ocho de 2006 (Código de la Infancia y la Adolescencia), el Decreto mil doscientos noventa del 16 de abril de 2009, la Ley mil seiscientos veinte del 15 de marzo de 2013, el Decreto mil seiscientos noventa y cinco de 2013, entre otras normas.`
},

{
    titulo: "Considerando sobre los derechos y las normas educativas",
    palabras: [
        "considerando",
        "derechos inalienables",
        "derechos universales del niño",
        "derechos del niño",
        "comunidad educativa",
        "prestación del servicio educativo",
        "derechos y obligaciones",
        "normas educativas",
        "leyes educativas"
    ],
    contenido: `Es deber de la Comunidad Educativa dar cumplimiento y aplicación a las leyes donde prevalezcan los derechos inalienables de la persona y los Derechos Universales del Niño, así como lo relacionado con la prestación del servicio educativo.

Entre las normas mencionadas se encuentran la Constitución Política de Colombia de 1991, la Ley ciento quince del 8 de febrero de 1994, la Ley mil noventa y ocho del 8 de noviembre de 2006, la Ley 87 de 1993, la Ley 734 de 2002, la Ley 1278 de 2002, el Decreto 1883 de 2002, el Decreto 3011 de 1997, el Decreto 1290 de 2009, el Decreto 1860 de 1991, la Ley 715 de 2002, el Decreto 1850 de 2002, el Decreto 3020 de 2003, la Ley 1014 del 26 de enero de 2006 sobre el fomento a la cultura del emprendimiento, la Ley 1620 de 2013 y su Decreto Reglamentario 1965 del 11 de septiembre de 2013, además de las demás reglamentaciones vigentes.`
},

{
    titulo: "Artículo ochenta y siete de la Ley ciento quince",
    palabras: [
        "artículo 87",
        "artículo ochenta y siete",
        "reglamento escolar",
        "reglamento",
        "obligaciones de los estudiantes",
        "derechos de los estudiantes",
        "derechos de los padres",
        "obligaciones de los padres",
        "matrícula",
        "manual y matrícula",
        "aceptación del manual"
    ],
    contenido: `El artículo ochenta y siete de la Ley ciento quince de 1994 establece que los establecimientos educativos tendrán un reglamento o Manual de Convivencia.

En este Manual se definen los derechos y obligaciones de los estudiantes y de los padres o acudientes. Al firmar la matrícula correspondiente en representación de sus hijos, los padres o acudientes aceptan el Manual de Convivencia.`
},



];


// ===================================
// FUNCIÓN PARA BUSCAR EN EL MANUAL
// ===================================

function buscarEnManual(textoUsuario) {

    const pregunta = textoUsuario.toLowerCase();

    for (const dato of manual) {

        for (const palabra of dato.palabras) {

            if (pregunta.includes(palabra.toLowerCase())) {

                return dato;

            }

        }

    }

    return null;

}