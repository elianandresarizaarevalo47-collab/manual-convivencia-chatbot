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


{
    titulo: "Obligaciones de las instituciones educativas según la Ley mil noventa y ocho",
    palabras: [
        "artículos 42 43 44 45",
        "artículos cuarenta y dos cuarenta y tres cuarenta y cuatro cuarenta y cinco",
        "ley 1098",
        "ley mil noventa y ocho",
        "obligaciones de las instituciones educativas",
        "obligaciones de la institución",
        "instituciones educativas con los estudiantes",
        "infancia y adolescencia",
        "ley de infancia y adolescencia"
    ],
    contenido: `Los artículos cuarenta y dos, cuarenta y tres, cuarenta y cuatro y cuarenta y cinco de la Ley mil noventa y ocho de 2006, de Infancia y Adolescencia, establecen las obligaciones de las instituciones educativas con los estudiantes, las cuales deben tenerse en cuenta en el Manual de Convivencia.`
},

{
    titulo: "Responsabilidades sobre la evaluación escolar",
    palabras: [
        "artículo 11",
        "artículo once",
        "decreto 1290",
        "decreto mil doscientos noventa",
        "evaluación escolar",
        "evaluaciones",
        "responsabilidades de la institución en evaluación",
        "responsabilidades del establecimiento educativo",
        "evaluación de los estudiantes"
    ],
    contenido: `El artículo once del Decreto mil doscientos noventa de 2006 establece las responsabilidades del establecimiento educativo en materia de evaluación escolar.`
},

{
    titulo: "Sistema Nacional de Convivencia Escolar",
    palabras: [
        "ley 1620",
        "ley mil seiscientos veinte",
        "sistema nacional de convivencia escolar",
        "convivencia escolar",
        "formación para los derechos humanos",
        "derechos humanos",
        "educación para la sexualidad",
        "prevención de la violencia escolar",
        "mitigación de la violencia escolar",
        "violencia escolar",
        "decreto 1965",
        "decreto mil novecientos sesenta y cinco"
    ],
    contenido: `La Ley mil seiscientos veinte de 2013 establece el Sistema Nacional de Convivencia Escolar y la formación para el ejercicio de los derechos humanos, la educación para la sexualidad y la prevención y mitigación de la violencia escolar.

Esta ley está reglamentada además por el Decreto mil novecientos sesenta y cinco del 11 de septiembre de 2013.`
},

{
    titulo: "Contenido y función del Manual de Convivencia dentro del PEI",
    palabras: [
        "proyecto educativo institucional",
        "PEI",
        "manual y PEI",
        "reglamento de docentes",
        "derechos",
        "deberes",
        "prohibiciones",
        "estímulos",
        "acciones pedagógicas",
        "situaciones tipo 1",
        "situaciones tipo 2",
        "situaciones tipo 3",
        "protocolos",
        "protocolo de convivencia",
        "pérdida del cupo",
        "perdida del cupo",
        "sana convivencia",
        "miembros de la comunidad educativa"
    ],
    contenido: `El Manual de Convivencia, al igual que el reglamento de los docentes, hace parte del Proyecto Educativo Institucional (P.E.I.).

El Manual contiene los derechos, deberes, prohibiciones, estímulos y acciones pedagógicas. También establece protocolos para el tratamiento de situaciones tipo uno, dos y tres, así como procedimientos relacionados con la pérdida del cupo del estudiante.

Todo esto busca facilitar la sana convivencia entre los miembros de la comunidad educativa.`
},

{
    titulo: "Actualización del Manual de Convivencia Escolar",
    palabras: [
        "artículo 29",
        "artículo veintinueve",
        "decreto 1965",
        "decreto mil novecientos sesenta y cinco",
        "actualización del manual",
        "actualizar el manual",
        "actualización del manual de convivencia",
        "lineamientos generales",
        "manual de convivencia escolar"
    ],
    contenido: `El artículo veintinueve del Decreto mil novecientos sesenta y cinco de 2013 establece los lineamientos generales para implementar la actualización del Manual de Convivencia Escolar.`
},

{
    titulo: "Principios para la convivencia en la institución",
    palabras: [
        "principios de convivencia",
        "criterios de convivencia",
        "dignidad",
        "respeto",
        "respeto a los semejantes",
        "respeto al bien ajeno",
        "responsabilidad",
        "acato",
        "disposiciones del plantel",
        "estímulos",
        "formación integral",
        "respetar los derechos",
        "promover los deberes",
        "sana convivencia integral",
        "convivencia integral"
    ],
    contenido: `La Institución Educativa Delicias - San Carlos debe contar con un instrumento legal que contemple criterios de convivencia y principios de dignidad, respeto a los semejantes y al bien ajeno, responsabilidad y acato a las disposiciones del plantel.

También se deben establecer estímulos que contribuyan a una formación integral, respetando los derechos y promoviendo los deberes para alcanzar una sana convivencia integral.`
},


{
    titulo: "Bienestar e integridad de los estudiantes",
    palabras: [
        "bienestar de los estudiantes",
        "bienestar estudiantil",
        "integridad de los estudiantes",
        "dignidad de los estudiantes",
        "sano desarrollo",
        "desarrollo de los estudiantes",
        "comportamiento en comunidad",
        "ejemplar comportamiento",
        "cumplimiento educativo",
        "normas para el bienestar",
        "normas para garantizar el bienestar"
    ],
    contenido: `La Institución Educativa debe procurar el bienestar de los estudiantes y velar por su integridad, dignidad, sano desarrollo y su ejemplar comportamiento en comunidad.

Además, debe velar por el cumplimiento en el área educativa, fijando normas que garanticen estos aspectos.`
},

{
    titulo: "Contenidos del Manual de Convivencia",
    palabras: [
        "contenidos del manual",
        "contenido del manual",
        "qué contiene el manual",
        "que contiene el manual",
        "reglas del manual",
        "higiene personal",
        "salud pública",
        "sustancias psicotrópicas",
        "sustancias sicotrópicas",
        "bienes personales",
        "bienes colectivos",
        "cuidado del ambiente escolar",
        "conductas de maestros",
        "conductas de alumnos",
        "respeto entre maestros y alumnos",
        "quejas",
        "reclamos",
        "procedimiento para quejas",
        "instancias de diálogo",
        "presentación personal",
        "debido proceso",
        "medidas pedagógicas",
        "derecho a la defensa",
        "representantes del consejo directivo",
        "elección del personero",
        "personero de los estudiantes",
        "comunicación interna",
        "biblioteca",
        "salas de informática",
        "aulas virtuales",
        "salas de audiovisuales"
    ],
    contenido: `Dentro de los contenidos del Manual de Convivencia se destacan las reglas de higiene personal y salud pública para preservar el bienestar de la comunidad educativa, la conservación individual de la salud y la prevención frente al consumo de sustancias psicotrópicas.

También establece criterios de respeto, valoración y compromiso frente a la utilización y conservación de los bienes personales y de uso colectivo, así como pautas de comportamiento relacionadas con el cuidado del ambiente escolar.

Incluye normas de conducta para maestros y alumnos que garanticen el mutuo respeto, procedimientos claros para formular quejas o reclamos, instancias de diálogo y pautas de presentación personal de la comunidad educativa.

Todo esto se enmarca dentro del debido proceso e incluye la definición de medidas pedagógicas aplicables a los estudiantes y el derecho a la defensa.

Además, contempla las reglas para escoger a los representantes del Consejo Directivo y el proceso de elección del personero de los estudiantes.

También establece el funcionamiento y operación de los medios de comunicación interna del establecimiento y las reglas para el uso de la biblioteca, salas de informática, aulas virtuales, salas de audiovisuales, entre otros espacios.`
},

{
    titulo: "Título I: Objetivos",
    palabras: [
        "título uno",
        "titulo uno",
        "objetivos",
        "objetivo del manual",
        "objetivos del manual",
        "objetivos del manual de convivencia"
    ],
    contenido: `TÍTULO I

OBJETIVOS

El Manual de Convivencia establece objetivos orientados a promover y mantener una sana convivencia dentro de la institución educativa.`
},

{
    titulo: "Objetivo: promover la sana convivencia institucional",
    palabras: [
        "objetivo uno",
        "objetivo 1",
        "promover la sana convivencia",
        "sana convivencia institucional",
        "normatividad vigente",
        "cumplimiento de la normatividad",
        "cumplimiento de las normas"
    ],
    contenido: `Objetivo uno: Promover la sana convivencia institucional a través del cumplimiento de la normatividad vigente.`
},

{
    titulo: "Objetivo: mantener una sana convivencia",
    palabras: [
        "objetivo dos",
        "objetivo 2",
        "mantener una sana convivencia",
        "comunicación",
        "adecuada comunicación",
        "convivencia entre los miembros",
        "miembros de la comunidad educativa"
    ],
    contenido: `Objetivo dos: Mantener una sana convivencia entre los miembros de la comunidad educativa en pro de una adecuada comunicación.`
},


{
    titulo: "Objetivo tres: afianzar derechos y deberes",
    palabras: [
        "objetivo tres",
        "objetivo 3",
        "afianzar derechos y deberes",
        "derechos y deberes",
        "derechos de los estudiantes",
        "deberes de los estudiantes",
        "padres de familia",
        "derechos de los padres",
        "deberes de los padres",
        "docentes",
        "directivos",
        "administrativos",
        "sociedad democrática",
        "sociedad respetuosa"
    ],
    contenido: `Objetivo tres: Afianzar los derechos y deberes de estudiantes, padres de familia, docentes, directivos y administrativos dentro de la práctica cotidiana, en la búsqueda de una sociedad democrática, pero respetuosa.`
},

{
    titulo: "Introducción: misión de la Institución Educativa",
    palabras: [
        "introducción",
        "misión",
        "misional",
        "misional y constitucional",
        "formar y preparar",
        "formación de la niñez",
        "formación de la juventud",
        "preparar a la niñez",
        "preparar a la juventud",
        "vida adulta activa",
        "compromiso de la institución",
        "institución delicias san carlos"
    ],
    contenido: `La Institución Educativa Delicias - San Carlos tiene el compromiso misional y constitucional de formar y preparar a la niñez y a la juventud para una vida adulta activa.

Este proceso busca inculcar el respeto por los derechos humanos, los valores propios y el cuidado del ambiente natural, con espíritu de paz, tolerancia y solidaridad.`
},

{
    titulo: "Introducción: propósito del Manual de Convivencia",
    palabras: [
        "propósito del manual",
        "proposito del manual",
        "finalidad del manual",
        "aceptación del otro",
        "aceptacion del otro",
        "sana convivencia",
        "relaciones interpersonales",
        "clima favorable",
        "crecimiento personal",
        "aprendizaje incluyente",
        "proyecto personal de vida",
        "ambiente sano",
        "confianza",
        "creatividad",
        "compromiso",
        "aceptación de normas",
        "aceptacion de normas"
    ],
    contenido: `Con este Manual de Convivencia se busca propiciar la aceptación del otro para una sana convivencia, regular las relaciones interpersonales y buscar un clima favorable para el crecimiento personal y un aprendizaje incluyente.

También pretende contribuir al proceso de construcción del Proyecto Personal de Vida, particularmente de los estudiantes, en un ambiente sano caracterizado por la confianza, la creatividad y un alto contenido de compromiso, sobre la base del respeto y la aceptación de normas.`
},

{
    titulo: "La Institución Educativa como espacio de aprendizaje y convivencia",
    palabras: [
        "espacio de convivencia",
        "lugar de aprendizaje",
        "aprendizaje y convivencia",
        "institución como espacio",
        "vivir en comunidad",
        "aprender a vivir",
        "conocimientos",
        "destrezas",
        "relaciones de convivencia",
        "relaciones entre estudiantes"
    ],
    contenido: `La Institución Educativa es un lugar de aprendizaje, pero también un espacio de convivencia.

A través de los conocimientos y destrezas que se han de adquirir se desarrollan las funciones individuales del pensar. Al mismo tiempo, las relaciones que impone la convivencia constituyen una base importante para aprender a vivir.`
},

{
    titulo: "La disciplina y la convivencia escolar",
    palabras: [
        "disciplina",
        "finalidad de la disciplina",
        "disciplina escolar",
        "hábitos de convivencia",
        "actitudes de convivencia",
        "valor de la convivencia",
        "dominio de sí",
        "dominio de si",
        "reglas de convivencia",
        "participación efectiva",
        "autonomía",
        "autonomía escolar",
        "sin disciplina",
        "convivencia escolar"
    ],
    contenido: `La adquisición o refuerzo de actitudes y hábitos que dan valor positivo y real a la convivencia constituye la finalidad esencial de la disciplina.

Sin disciplina no es posible la convivencia. Por consiguiente, la disciplina no se queda en las relaciones externas o sociales, sino que hace posible el dominio de sí, la aceptación de las reglas de convivencia y la participación efectiva y la autonomía en la comunidad escolar.`
},


{
    titulo: "La educación como derecho y deber",
    palabras: [
        "derecho deber",
        "derecho y deber",
        "quehacer educativo",
        "derecho a la educación",
        "responsabilidades académicas",
        "responsabilidad académica",
        "régimen disciplinario",
        "regimen disciplinario",
        "incumplimiento académico",
        "incumplimiento disciplinario",
        "pérdida de materias",
        "perdida de materias",
        "sanciones",
        "sanciones disciplinarias",
        "exclusión de la institución",
        "exclusion de la institución",
        "consecuencias de las conductas"
    ],
    contenido: `En cualquier contexto educativo, el quehacer educativo se ha de asumir como un derecho-deber, porque no solo otorga derechos a favor del individuo, sino que también demanda exigencias cuyo cumplimiento depende en buena parte de la subsistencia del derecho.

Quien no se somete a las condiciones para el ejercicio de este derecho, como sucede con el estudiante que desatiende sus responsabilidades académicas o infringe el régimen disciplinario que se comprometió a observar, queda sujeto a las consecuencias propias de tales conductas.

Entre estas consecuencias se encuentran la pérdida de las materias o la imposición de las sanciones previstas dentro del régimen interno de la institución. La más grave, según la gravedad de la falta, consiste en la exclusión de la Institución Educativa.`
},

{
    titulo: "Cumplimiento de los lineamientos filosóficos y el reglamento escolar",
    palabras: [
        "lineamientos filosóficos",
        "reglamento escolar",
        "cumplimiento del reglamento",
        "cumplimiento de los lineamientos",
        "comunidad educativa",
        "miembros de la comunidad educativa",
        "cumplir el reglamento",
        "cumplir las normas",
        "normas en cualquier tiempo y lugar"
    ],
    contenido: `Todos los miembros de la comunidad educativa están llamados al cumplimiento de los lineamientos filosóficos y el reglamento escolar en cualquier tiempo y lugar.`
},

{
    titulo: "Artículo Uno: Adopción del Manual de Convivencia",
    palabras: [
        "artículo uno",
        "articulo uno",
        "artículo 1",
        "articulo 1",
        "adopción del manual",
        "adopcion del manual",
        "adoptar el manual",
        "adopción del manual de convivencia",
        "comunidad educativa",
        "consejo directivo",
        "aprobación del manual",
        "aprobado por el consejo directivo"
    ],
    contenido: `ARTÍCULO UNO

Adóptese el presente Manual de Convivencia de la Institución Educativa Delicias San Carlos por la Comunidad Educativa, y aprobado por el Consejo Directivo.`
},

{
    titulo: "Artículo Dos: Ámbito de aplicación",
    palabras: [
        "artículo dos",
        "articulo dos",
        "artículo 2",
        "articulo 2",
        "ámbito de aplicación",
        "ambito de aplicación",
        "dónde se aplica el manual",
        "donde se aplica el manual",
        "aplicación del manual",
        "normas del manual",
        "formación integral",
        "preescolar",
        "media",
        "estudiantes de preescolar",
        "estudiantes de media",
        "miembros de la comunidad educativa"
    ],
    contenido: `ARTÍCULO DOS

ÁMBITO DE APLICACIÓN

Las normas contenidas en el Manual de Convivencia se aplican dentro del proceso de formación integral que desarrolla la Institución Educativa Delicias-San Carlos de El Copey con sus estudiantes desde el nivel Preescolar hasta la Media y demás miembros de la comunidad educativa.`
},

{
    titulo: "Artículo Tres: Justificación",
    palabras: [
        "artículo tres",
        "articulo tres",
        "artículo 3",
        "articulo 3",
        "justificación",
        "justificacion",
        "por qué existe el manual",
        "porque existe el manual",
        "razón del manual",
        "razon del manual",
        "marco jurídico",
        "marco socioeconómico",
        "marco cultural",
        "marco político",
        "instrumento legal interno",
        "participación de la comunidad educativa",
        "formación en ciudadanía",
        "formación ciudadana"
    ],
    contenido: `ARTÍCULO TRES

JUSTIFICACIÓN

Teniendo en cuenta el marco jurídico, socioeconómico, cultural y político del contexto de la Institución Educativa, se establece el presente Manual de Convivencia como instrumento legal interno.

Este Manual es producto de la participación de la comunidad educativa y tiene como fin promover y desarrollar la formación en ciudadanía.`
},


{
    titulo: "Artículo Cuatro: Admisión de los estudiantes",
    palabras: [
        "artículo cuatro",
        "articulo cuatro",
        "artículo 4",
        "articulo 4",
        "admisión",
        "admision",
        "admisión de estudiantes",
        "admision de estudiantes",
        "admisión de los estudiantes",
        "solicitud de cupo",
        "solicitar cupo",
        "cupo",
        "inscripción",
        "inscripcion",
        "formato institucional",
        "aprobación del cupo",
        "aprobacion del cupo",
        "autorización de matrícula",
        "autorizacion de matricula",
        "rector",
        "secretaría de educación",
        "secretaria de educacion",
        "secretaría de educación del Cesar",
        "cupos disponibles"
    ],
    contenido: `ARTÍCULO CUATRO

ADMISIÓN DE LOS ESTUDIANTES

Para la admisión de los estudiantes se deben seguir los siguientes pasos:

1. Solicitud del cupo.
2. Inscripción mediante el formato institucional.
3. Aprobación del cupo.
4. Autorización de la matrícula por parte del Rector.

PARÁGRAFO: Los criterios para la asignación de los cupos disponibles están definidos por la resolución emanada de la Secretaría de Educación Departamental del Cesar.`
},

{
    titulo: "Artículo Cinco: Matrícula",
    palabras: [
        "artículo cinco",
        "articulo cinco",
        "artículo 5",
        "articulo 5",
        "matrícula",
        "matricula",
        "matricularse",
        "proceso de matrícula",
        "proceso de matricula",
        "requisitos de matrícula",
        "requisitos de matricula",
        "requisitos para matricularse",
        "formalizar la matrícula",
        "formalizar la matricula",
        "vinculación del estudiante",
        "vinculacion del estudiante",
        "orden de matrícula",
        "orden de matricula",
        "rector",
        "SIMAT",
        "retiro del SIMAT",
        "padre de familia",
        "acudiente",
        "registro civil",
        "registro de nacimiento",
        "boletín",
        "boletin",
        "crecimiento",
        "desarrollo",
        "vacunación",
        "vacunacion",
        "tarjeta de identidad",
        "cédula",
        "cedula",
        "fotos",
        "fotografías",
        "fotografias",
        "tamaño 3 x 3"
    ],
    contenido: `ARTÍCULO CINCO

MATRÍCULA

Se denomina matrícula al acto mediante el cual se formaliza la vinculación del estudiante a la institución.

Para realizar la matrícula se requiere el cumplimiento de los siguientes requisitos:

1. Orden de matrícula por el Rector.
2. Retiro del SIMAT.
3. Asistencia del padre de familia o acudiente mayor de edad.
4. Fotocopia del registro civil de nacimiento para menores de 7 años.
5. Último boletín del año anterior para preescolar y básica primaria.
6. Fotocopia del registro de crecimiento, desarrollo y vacunación para preescolar y básica primaria.
7. Fotocopia de la tarjeta o cédula para mayores de 7 años.
8. Dos (2) fotos recientes tamaño 3 x 3.`
},


{
    titulo: "Artículo Cinco: Requisitos adicionales de matrícula",
    palabras: [
        "certificados de estudio",
        "certificados de estudios",
        "grados anteriores",
        "grados anteriores secundaria",
        "grados anteriores media",
        "secundaria",
        "media",
        "carnet de salud",
        "carnet de salud",
        "FOSYGA",
        "fosiga",
        "fotocopia carnet",
        "carpeta azul",
        "carpeta azul colgante",
        "requisitos adicionales de matrícula",
        "requisitos adicionales de matricula"
    ],
    contenido: `Como parte de los requisitos para la matrícula se deben presentar también:

9. Certificados de estudio de los grados anteriores para secundaria y media.
10. Fotocopia del carnet de salud o FOSYGA.
11. Carpeta azul colgante.`
},

{
    titulo: "Artículo Seis: Horizonte Institucional",
    palabras: [
        "artículo seis",
        "articulo seis",
        "artículo 6",
        "articulo 6",
        "horizonte institucional",
        "horizonte de la institución",
        "horizonte de la institución educativa",
        "misión visión filosofía",
        "misión de la institución",
        "vision de la institución",
        "filosofía de la institución"
    ],
    contenido: `ARTÍCULO SEIS

HORIZONTE INSTITUCIONAL

El horizonte institucional está conformado por la Misión, la Visión y la Filosofía de la Institución Educativa Delicias - San Carlos.`
},

{
    titulo: "Artículo Seis: Misión institucional",
    palabras: [
        "misión",
        "mision",
        "misión institucional",
        "mision institucional",
        "misión de la institución",
        "mision de la institución",
        "servicio educativo",
        "ofrecer el servicio educativo",
        "compromiso ético",
        "compromiso etico",
        "compromiso moral",
        "compromiso profesional",
        "compromiso dinámico",
        "compromiso dinamico",
        "eficiencia",
        "eficacia",
        "inclusión",
        "inclusion",
        "mejoramiento continuo"
    ],
    contenido: `MISIÓN

Ofrecer el servicio educativo a la comunidad con compromiso ético, moral, profesional y dinámico, basados en la eficiencia, eficacia e inclusión, en busca del mejoramiento continuo.`
},

{
    titulo: "Artículo Seis: Visión institucional",
    palabras: [
        "visión",
        "vision",
        "visión institucional",
        "vision institucional",
        "visión de la institución",
        "vision de la institución",
        "año 2019",
        "año 2.019",
        "dos mil diecinueve",
        "formación integral",
        "individuo integral",
        "mejoramiento ambiental",
        "mejoramiento social",
        "entorno local",
        "entorno regional",
        "entorno nacional",
        "mundo laboral",
        "proyección al mundo laboral",
        "proyeccion al mundo laboral"
    ],
    contenido: `VISIÓN

Se proyecta al año 2019 la formación de un individuo que trascienda por su educación integral, comprometido con el mejoramiento ambiental y social en el entorno local, regional y nacional, con proyección al mundo laboral.`
},

{
    titulo: "Artículo Seis: Filosofía institucional",
    palabras: [
        "filosofía",
        "filosofia",
        "filosofía institucional",
        "filosofia institucional",
        "filosofía idescana",
        "filosofia idescana",
        "humanismo",
        "principios del humanismo",
        "ser humano",
        "dimensiones del ser humano",
        "centro del proceso de formación",
        "proceso de formación",
        "formación dialógica",
        "formacion dialogica",
        "formación permanente",
        "derechos individuales",
        "derechos colectivos",
        "sana convivencia"
    ],
    contenido: `FILOSOFÍA

La filosofía idescana se fundamenta en los principios del humanismo, donde el ser humano, en todas sus dimensiones, es el centro del proceso de formación, de manera dialógica y permanente.

Busca formar personas aptas para defender y respetar los derechos individuales y colectivos para una sana convivencia.`
},


{
    titulo: "Artículo Seis: Principios y Valores Institucionales",
    palabras: [
        "principios y valores institucionales",
        "principios institucionales",
        "valores institucionales",
        "principios idescanos",
        "valores idescanos",
        "comunidad idescana",
        "accionar de la comunidad",
        "crecimiento personal",
        "crecimiento social",
        "ser mejor cada día",
        "ser mejor cada dia",
        "fortalecer lo humano"
    ],
    contenido: `PRINCIPIOS Y VALORES INSTITUCIONALES

Los principios sobre los cuales se fundamenta el accionar de la comunidad idescana deben reflejar los valores que permitan el crecimiento personal y social del ser, con la convicción de ser mejor cada día, fortaleciendo siempre lo humano.

Estos principios son:`
},

{
    titulo: "Principio: reconocimiento de Dios",
    palabras: [
        "Dios",
        "reconocimiento de Dios",
        "principio de Dios",
        "Dios como amo y señor",
        "amo y señor de todas las cosas",
        "principios religiosos"
    ],
    contenido: `El reconocimiento de DIOS, como amo y señor de todas las cosas.`
},

{
    titulo: "Principio: la paz",
    palabras: [
        "paz",
        "principio de la paz",
        "paz como derecho",
        "derecho fundamental",
        "derecho colectivo",
        "diálogo",
        "dialogo",
        "concertación",
        "concertacion",
        "conciliación",
        "conciliacion",
        "procesos institucionales"
    ],
    contenido: `La paz como un derecho fundamental y colectivo, eje orientador en los procesos institucionales, donde impere el diálogo, la concertación y la conciliación.`
},

{
    titulo: "Principio: cuidado del ambiente",
    palabras: [
        "cuidado del ambiente",
        "cuidado ambiental",
        "ambiente",
        "medio ambiente",
        "protección del ambiente",
        "ambiente como fuente de vida",
        "fuente esencial para la vida"
    ],
    contenido: `El cuidado del ambiente como fuente esencial para la vida.`
},

{
    titulo: "Principio: mejoramiento continuo",
    palabras: [
        "mejoramiento continuo",
        "mejoramiento continúo",
        "mejorar cada día",
        "mejorar cada dia",
        "mejoramiento institucional",
        "búsqueda del mejoramiento",
        "busqueda del mejoramiento"
    ],
    contenido: `La búsqueda del mejoramiento continuo.`
},

{
    titulo: "Principio: amor institucional",
    palabras: [
        "amor institucional",
        "amor por la institución",
        "amor por la institucion",
        "sentido de pertenencia",
        "pertenencia institucional"
    ],
    contenido: `El amor institucional.`
},

{
    titulo: "Principio: trascendencia social",
    palabras: [
        "trascendencia social",
        "trascendencia",
        "impacto social",
        "compromiso social"
    ],
    contenido: `La trascendencia social.`
},

{
    titulo: "Principio: sana convivencia",
    palabras: [
        "sana convivencia",
        "convivencia sana",
        "convivencia institucional",
        "principio de convivencia"
    ],
    contenido: `La sana convivencia.`
},

{
    titulo: "Principio: espíritu democrático",
    palabras: [
        "espíritu democrático",
        "espiritu democratico",
        "democracia",
        "espíritu de democracia",
        "gobierno escolar",
        "órganos del gobierno escolar",
        "organos del gobierno escolar",
        "órganos de gobierno",
        "organos de gobierno"
    ],
    contenido: `Desarrollo del espíritu democrático, a través del reconocimiento de los distintos órganos del gobierno escolar.`
},

{
    titulo: "Principio: toma de decisiones",
    palabras: [
        "toma de decisiones",
        "decisiones",
        "decisiones institucionales",
        "deber ser",
        "normatividad existente",
        "decisiones según las normas",
        "decisiones y normas"
    ],
    contenido: `Toma de decisiones basadas en el deber ser y la normatividad existente.`
},

{
    titulo: "Principio: normatividad educativa",
    palabras: [
        "normatividad educativa",
        "normatividad vigente",
        "normas educativas",
        "normas en educación",
        "normatividad en materia educativa",
        "toma de decisiones educativas"
    ],
    contenido: `La normatividad vigente en materia educativa orienta el proceso de toma de decisiones.`
},

{
    titulo: "Principio: formación como acto de amor",
    palabras: [
        "formación como acto de amor",
        "formacion como acto de amor",
        "acto de amor",
        "proceso de formación",
        "proceso de formacion",
        "formación",
        "formacion",
        "amor y formación"
    ],
    contenido: `El proceso de formación visto como un acto de amor.`
},


{
    titulo: "Principio: el trabajo como factor de desarrollo",
    palabras: [
        "trabajo",
        "trabajo como factor de desarrollo",
        "desarrollo social",
        "desarrollo personal",
        "trabajo y desarrollo",
        "desarrollo social y personal"
    ],
    contenido: `El trabajo como factor de desarrollo social y personal.`
},

{
    titulo: "Principio: unidad de acción",
    palabras: [
        "unidad de acción",
        "unidad de accion",
        "logro de objetivos",
        "objetivos institucionales",
        "acción para lograr objetivos",
        "accion para lograr objetivos"
    ],
    contenido: `La unidad de acción para el logro de los objetivos.`
},

{
    titulo: "Principio: liderazgo institucional",
    palabras: [
        "liderazgo institucional",
        "liderazgo",
        "procesos institucionales",
        "procesos a nivel local",
        "procesos a nivel regional",
        "nivel local y regional"
    ],
    contenido: `El liderazgo institucional sobre los distintos procesos a nivel local y regional.`
},

{
    titulo: "Principio: preparación del estudiante para el medio productivo",
    palabras: [
        "preparación del estudiante",
        "preparacion del estudiante",
        "medio productivo",
        "adaptarse al medio productivo",
        "adaptación al medio productivo",
        "adaptacion al medio productivo",
        "empleado",
        "generador de ideas de negocios",
        "ejecutor de ideas de negocios",
        "ideas de negocios",
        "negocios",
        "emprendimiento",
        "preparación para el trabajo"
    ],
    contenido: `Preparación del estudiante como agente capaz de adaptarse fácilmente a un medio productivo, como empleado, generador y ejecutor de sus propias ideas de negocios.`
},

{
    titulo: "Emblemas Institucionales",
    palabras: [
        "emblemas institucionales",
        "emblemas",
        "símbolos institucionales",
        "simbolos institucionales",
        "identidad institucional",
        "identidad de la institución",
        "representación de la institución"
    ],
    contenido: `EMBLEMAS INSTITUCIONALES

Los emblemas institucionales representan y ponen de manifiesto la identidad de la Institución Educativa.

Estos se componen de:

- Lema
- Bandera
- Escudo`
},

{
    titulo: "Lema institucional",
    palabras: [
        "lema",
        "lema institucional",
        "lema de la institución",
        "trabajamos con base",
        "mejoramiento continuo",
        "frase de la institución"
    ],
    contenido: `LEMA

"Trabajamos con base en el mejoramiento continuo."`
},

{
    titulo: "Bandera institucional",
    palabras: [
        "bandera",
        "bandera institucional",
        "bandera de la institución",
        "emblema bandera"
    ],
    contenido: `BANDERA

La bandera es uno de los emblemas institucionales que representa la identidad de la Institución Educativa.`
},

{
    titulo: "Escudo institucional",
    palabras: [
        "escudo",
        "escudo institucional",
        "escudo de la institución",
        "emblema escudo"
    ],
    contenido: `ESCUDO

El escudo es uno de los emblemas institucionales que representa la identidad de la Institución Educativa.`
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