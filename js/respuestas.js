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


{
    titulo: "Himno Institucional",
    palabras: [
        "himno",
        "himno institucional",
        "himno de idesco",
        "himno de la institución",
        "himno del colegio",
        "idesco",
        "autor del himno",
        "quién escribió el himno",
        "quien escribio el himno",
        "Jorge Luis Rocha Arrieta"
    ],
    contenido: `Himno

TODOS UNIDOS, COMO ESTUDIANTES ENSALCEMOS CON AMOR CON ENTUSIASMO, 
ENARBOLEMOS LA BANDERA DE LA INSTITUCION
ES EL TRABAJO DE NUESTRO IDESCO ESTANDARTE SINGULAR EN EL CUAL LLEVAMOS 
COMO UNA INSIGNIA ARRAIGADA A NUESTRA ENTIDAD.

CORO
AL UNISONO GRITEMOS TODOS CUAN GRANDIOSO ES NUESTRA INSTITUCION DE 
PERFIL SANO, RESPETUOSO CON TALANTE EMPRENDEDOR (BIS)

INTERMEDIO
COMO A MIS PADRES A TI TE LLEVO BIEN GUARDADO, EN MI CORZON BENDITO 
IDESCO, QUE DIOS TE GUARDE POR SER UN LIDER EN LA EDUCACION (EN MI 
EDUCACION) (BIS)

II
MIS PROFESORES, SERES HUMANOS CON UNA ESFINGE INMORTAL EN SU FAENA, LO 
ENTREGAN TODO OBRA SUBLIME DE ORIGEN CELESTIAL OH COPEYANO, TODOS TUS 
HIJOS CON ORGULLO GRITAN EMOCIONADOS IRAN CANTANDO CON UNA ACTITUD 
TRIUNFAL

CORO
AL UNISONO GRITEMOS TODOS CUAN GRANDIOSO ES NUESTRA INSTITUCION SOY 
IDESCANO DE PERFIL SANO, RESPETUOSO CON TALANTE EMPRENDEDOR (BIS)

INTERMEDIO
COMO A MIS PADRES A TI TE LLEVO BIEN GUARDADO, EN MI CORZON BENDITO 
IDESCO, QUE DIOS TE GUARDE POR SER UN LIDER EN LA EDUCACION (EN MI 
EDUCACION) (BIS)

III
OH MI COLEGIO SIEMPRE ME LLEVO TODO LO BELLO QUE EN TI PUEDO APRECIAR 
SERAS LO ETERNO ENTRE MIS SUEÑOS AUN CUANDO ANCIANO TE VOY A RECORDAR 
DONDE SE FORMAN LOS BUENOS HOMBRES PARA UN MAÑANA EN PAZ

CORO
AL UNISONO GRITEMOS TODOS CUAN GRANDIOSO ES NUESTRA INSTITUCION DE 
PERFIL SANO, RESPETUOSO CON TALANTE EMPRENDEDOR
(BIS)

INTERMEDIO
COMO A MIS PADRES A TI TE LLEVO BIEN GUARDADO, EN MI CORZON BENDITO 
IDESCO, QUE DIOS TE GUARDE POR SER UN LIDER EN LA EDUCACION (EN MI 
EDUCACION) (BIS)

Autor: Esp. Jorge Luis Rocha Arrieta`
},


{
    titulo: "Mecanismos de comunicación institucional",
    palabras: [
        "mecanismos de comunicación",
        "mecanismos de comunicacion",
        "comunicación institucional",
        "comunicacion institucional",
        "medios de comunicación",
        "medios de comunicacion",
        "contacto con la institución",
        "contacto con la institucion",
        "comunicación con la institución",
        "comunicacion con la institucion",
        "cómo comunicarse con la institución",
        "como comunicarse con la institucion",
        "teléfono de la institución",
        "telefono de la institucion",
        "celular de la institución",
        "celular de la institucion"
    ],
    contenido: `La institución cuenta con mecanismos de comunicación para estar en contacto permanente con todos los miembros de la comunidad educativa.

Para ello cuenta con los siguientes medios:

a) Línea celulares:
- 3205742664 (Sede Principal).
- 310 4299810 (Sede San Carlos).

b) Plataforma académica:
Es el medio electrónico por medio del cual se emite información académica, como los boletines, para que los padres de familia y los mismos estudiantes hagan seguimiento en tiempo real de las calificaciones por periodo en cada asignatura.

c) Idesco/Facebook.com:
Es la cuenta en la red social institucional de Facebook donde se publica información sobre los diferentes eventos que ocurren en la Institución.

d) Convivenciapacificaidesco.blogspot.com:
Es el blog institucional donde se publica información sobre lo que ocurre en la Institución.`
},

{
    titulo: "Líneas celulares de la institución",
    palabras: [
        "línea celular",
        "linea celular",
        "líneas celulares",
        "lineas celulares",
        "teléfono",
        "telefono",
        "número de teléfono",
        "numero de telefono",
        "número de celular",
        "numero de celular",
        "celular sede principal",
        "celular sede san carlos",
        "contactar la sede principal",
        "contactar la sede san carlos"
    ],
    contenido: `Las líneas celulares indicadas en el Manual de Convivencia son:

- Sede Principal: 3205742664.
- Sede San Carlos: 310 4299810.`
},

{
    titulo: "Plataforma académica",
    palabras: [
        "plataforma académica",
        "plataforma academica",
        "plataforma",
        "calificaciones",
        "calificaciones por periodo",
        "notas",
        "notas por periodo",
        "boletines",
        "boletín",
        "boletin",
        "seguimiento académico",
        "seguimiento academico",
        "ver calificaciones",
        "ver notas",
        "calificaciones en tiempo real"
    ],
    contenido: `La plataforma académica es el medio electrónico mediante el cual se emite información académica, como los boletines.

Permite que los padres de familia y los estudiantes hagan seguimiento en tiempo real de las calificaciones por periodo en cada asignatura.`
},

{
    titulo: "Facebook institucional Idesco",
    palabras: [
        "Facebook",
        "facebook institucional",
        "Idesco Facebook",
        "red social institucional",
        "redes sociales",
        "eventos de la institución",
        "eventos institucionales",
        "información de eventos",
        "publicaciones de la institución"
    ],
    contenido: `Idesco/Facebook.com es la cuenta en la red social institucional de Facebook donde se publica información sobre los diferentes eventos que ocurren en la Institución.`
},

{
    titulo: "Blog institucional de convivencia",
    palabras: [
        "blog institucional",
        "blog de la institución",
        "blog de convivencia",
        "convivenciapacificaidesco",
        "información del blog",
        "informacion del blog",
        "información de la institución",
        "informacion de la institucion"
    ],
    contenido: `Convivenciapacificaidesco.blogspot.com es el blog institucional donde se publica información sobre lo que ocurre en la Institución.`
},


{
    titulo: "Artículo Siete: Uniformes Institucionales",
    palabras: [
        "artículo siete",
        "articulo siete",
        "artículo 7",
        "articulo 7",
        "uniformes institucionales",
        "uniforme institucional",
        "uniforme",
        "uniforme de diario",
        "uniforme de educación física",
        "uniforme de educacion fisica",
        "uniforme IDESCO",
        "cómo es el uniforme",
        "como es el uniforme",
        "cómo debo ir vestido",
        "como debo ir vestido"
    ],
    contenido: `ARTÍCULO SIETE

UNIFORMES INSTITUCIONALES

Los alumnos y alumnas de IDESCO deberán presentarse de acuerdo con las características establecidas para cada uniforme institucional.

El Manual establece un uniforme de diario para niños, un uniforme de diario para niñas y un uniforme de educación física para ambos.`
},

{
    titulo: "Artículo Siete: Uniforme de diario para niños",
    palabras: [
        "uniforme de diario niños",
        "uniforme diario niños",
        "uniforme de los niños",
        "uniforme masculino",
        "uniforme de hombre",
        "pantalón azul turquí",
        "pantalon azul turqui",
        "camisa guayabera",
        "guayabera blanca",
        "manga larga",
        "escudo en la camisa",
        "escudo en el bolsillo",
        "correa negra",
        "correa de cuero negra",
        "zapatos negros escolares",
        "zapatos escolares negros",
        "medias azules",
        "medias negras",
        "medias no tobilleras",
        "medias normales"
    ],
    contenido: `UNIFORME DE DIARIO PARA NIÑOS

El uniforme de diario para los niños está compuesto por:

- Pantalón clásico azul turquí.
- Camisa guayabera blanca de manga larga, con el escudo impreso en la parte inferior izquierda sobre el bolsillo.
- La camisa debe usarse por fuera del pantalón.
- Correa de cuero de color negro.
- Zapatos negros escolares, bien lustrados.
- Medias azules o negras que no sean tobilleras, sino de altura normal.`
},

{
    titulo: "Artículo Siete: Uniforme de diario para niñas",
    palabras: [
        "uniforme de diario niñas",
        "uniforme diario niñas",
        "uniforme de las niñas",
        "uniforme femenino",
        "uniforme de mujer",
        "falda azul turquí",
        "falda azul turqui",
        "falda plisada",
        "blusa blanca",
        "escudo en la blusa",
        "escudo en el pecho",
        "zapatos negros",
        "zapatos bien lustrados",
        "medias blancas",
        "medias blancas altas",
        "medias debajo de la rodilla"
    ],
    contenido: `UNIFORME DE DIARIO PARA NIÑAS

El uniforme de diario para las niñas está compuesto por:

- Falda plisada azul turquí.
- Blusa blanca con el escudo de la institución impreso en la parte izquierda del pecho.
- Zapatos negros, bien lustrados.
- Medias blancas altas, dos dedos por debajo de la rodilla.`
},

{
    titulo: "Artículo Siete: Uniforme de educación física",
    palabras: [
        "uniforme de educación física",
        "uniforme de educacion fisica",
        "uniforme deportivo",
        "uniforme de deportes",
        "educación física",
        "educacion fisica",
        "camiseta blanca",
        "vivos azul turquí",
        "vivos azul turqui",
        "escudo del colegio",
        "sudadera azul turquí",
        "sudadera azul turqui",
        "sigla IDESCO",
        "IDESCO en la sudadera",
        "calzado deportivo",
        "zapatos deportivos blancos",
        "medias azul turquí",
        "medias azul turqui",
        "medias no tobilleras",
        "día de educación física",
        "dia de educacion fisica"
    ],
    contenido: `UNIFORME DE EDUCACIÓN FÍSICA

El uniforme de educación física, tanto para niños como para niñas, está compuesto por:

- Camiseta blanca con vivos azul turquí en los puños y el cuello.
- Escudo del colegio impreso en la parte izquierda del pecho.
- Sudadera azul turquí con vivos blancos y la sigla IDESCO en el muslo izquierdo, de frente, en forma vertical.
- La sudadera debe estar elaborada con las normas técnicas para garantizar la realización de movimientos en las actividades del área de educación física, con el mínimo de riesgos para el estudiante.
- Calzado deportivo de color blanco liso.
- Medias azul turquí que no sean tobilleras.

Este uniforme deberá portarse únicamente el día indicado en el horario de clases y cuando la institución lo establezca.`
},


{
    titulo: "Artículo Ocho: Derechos y Deberes de los Estudiantes",
    palabras: [
        "artículo ocho",
        "articulo ocho",
        "artículo 8",
        "articulo 8",
        "derechos y deberes de los estudiantes",
        "derechos de los estudiantes",
        "deberes de los estudiantes",
        "derechos estudiantiles",
        "derechos del estudiante",
        "deberes del estudiante"
    ],
    contenido: `ARTÍCULO OCHO

DERECHOS Y DEBERES DE LOS ESTUDIANTES

El presente artículo establece los derechos y deberes que corresponden a los estudiantes de la Institución Educativa.`
},

{
    titulo: "Artículo Ocho.Uno: Derechos de los estudiantes",
    palabras: [
        "ocho.uno",
        "artículo ocho.uno",
        "articulo ocho.uno",
        "artículo 8.1",
        "articulo 8.1",
        "derechos",
        "derechos de los estudiantes",
        "derecho de los estudiantes",
        "derechos estudiantiles",
        "qué derechos tengo",
        "que derechos tengo",
        "derechos del estudiante"
    ],
    contenido: `ARTÍCULO OCHO.UNO

DERECHOS

Los estudiantes tienen los siguientes derechos establecidos en el Manual de Convivencia.`
},

{
    titulo: "Derecho a presentar excusas por inasistencia",
    palabras: [
        "excusa",
        "excusas",
        "presentar excusa",
        "presentar excusas",
        "justificar inasistencia",
        "justificar una inasistencia",
        "inasistencia",
        "faltar a clases",
        "falta a clases",
        "no asistir a clases",
        "razones de salud",
        "calamidad familiar"
    ],
    contenido: `Los estudiantes tienen derecho a presentar excusas cuando, por razones justas, dejen de asistir normalmente a las clases, como por motivos de salud, razones médicas, laboratorios, calamidades familiares o situaciones imprevistas durante la jornada.

El propósito es que puedan realizar las actividades pendientes cuando se reintegren a la institución, previo acuerdo con el o los docentes.`
},

{
    titulo: "Derecho a recibir enseñanza planificada",
    palabras: [
        "enseñanza planificada",
        "recibir enseñanza",
        "enseñanza",
        "formación integral",
        "formacion integral",
        "clases planificadas",
        "educación planificada",
        "educacion planificada"
    ],
    contenido: `Los estudiantes tienen derecho a recibir una enseñanza planificada que garantice su formación integral.`
},

{
    titulo: "Derecho a portar equipos electrónicos autorizados",
    palabras: [
        "celular",
        "teléfono celular",
        "telefono celular",
        "mp3",
        "mp4",
        "ipod",
        "computador",
        "computadores",
        "equipos electrónicos",
        "equipos electronicos",
        "objetos electrónicos",
        "objetos electronicos",
        "puedo llevar celular",
        "puedo usar celular",
        "portar celular"
    ],
    contenido: `Los estudiantes tienen derecho a portar equipos electrónicos como celular, MP3, MP4, iPod, computadores u otros objetos electrónicos, siempre y cuando sean autorizados por la institución.`
},

{
    titulo: "Derecho a manifestar una preparación inadecuada",
    palabras: [
        "preparación adecuada",
        "preparacion adecuada",
        "preparación en una asignatura",
        "preparacion en una asignatura",
        "no recibo buena preparación",
        "no recibo buena preparacion",
        "problema con una asignatura",
        "problemas con una asignatura",
        "manifestar ante la institución",
        "preparación de una asignatura"
    ],
    contenido: `Los estudiantes tienen derecho a manifestar ante las instancias inmediatas de la institución si en una asignatura no están recibiendo la preparación adecuada.`
},

{
    titulo: "Derecho a realizar sugerencias para el mejoramiento institucional",
    palabras: [
        "sugerencias",
        "hacer sugerencias",
        "realizar sugerencias",
        "sugerencias para la institución",
        "sugerencias para la institucion",
        "mejoramiento institucional",
        "mejorar la institución",
        "mejorar la institucion",
        "proponer mejoras",
        "propuestas de los estudiantes"
    ],
    contenido: `Los estudiantes tienen derecho a realizar sugerencias de manera respetuosa ante las instancias que correspondan, con el propósito de contribuir al mejoramiento institucional.`
},

{
    titulo: "Derecho a recibir información confiable",
    palabras: [
        "información confiable",
        "informacion confiable",
        "recibir información",
        "recibir informacion",
        "información de la institución",
        "informacion de la institucion",
        "información de los entes",
        "informacion de los entes",
        "información institucional"
    ],
    contenido: `Los estudiantes tienen derecho a recibir información confiable por parte de los entes de la institución.`
},


{
    titulo: "Derecho a ser atendido con respeto al reclamar un derecho",
    palabras: [
        "reclamar un derecho",
        "reclamar derechos",
        "violación de un derecho",
        "violacion de un derecho",
        "violación de derechos",
        "violacion de derechos",
        "reclamo de derechos",
        "atendido con respeto",
        "reclamar ante la institución"
    ],
    contenido: `El estudiante tiene derecho a ser atendido con respeto por todos los miembros de la institución cuando reclame la posible violación de uno o varios de sus derechos como miembro de la comunidad educativa.`
},

{
    titulo: "Derecho a recibir un trato digno y cortés",
    palabras: [
        "trato digno",
        "trato cortes",
        "trato cortés",
        "respeto",
        "trato respetuoso",
        "trato digno y cortés",
        "trato digno y cortes",
        "respeto de los miembros",
        "cómo deben tratarme",
        "como deben tratarme"
    ],
    contenido: `El estudiante tiene derecho a recibir un trato digno y cortés por parte de cada uno de los miembros de la comunidad educativa.`
},

{
    titulo: "Derecho a participar en eventos institucionales",
    palabras: [
        "eventos culturales",
        "eventos deportivos",
        "eventos sociales",
        "eventos institucionales",
        "participar en eventos",
        "actividades culturales",
        "actividades deportivas",
        "actividades sociales",
        "eventos internos",
        "eventos externos"
    ],
    contenido: `El estudiante tiene derecho a participar en los eventos culturales, deportivos y sociales que planifique la institución, tanto interna como externamente.`
},

{
    titulo: "Derecho a participar en danzas y grupos deportivos",
    palabras: [
        "danzas folclóricas",
        "danzas folcloricas",
        "grupos deportivos",
        "participar en danzas",
        "participar en grupos deportivos",
        "actividades folclóricas",
        "actividades folcloricas",
        "normas disciplinarias",
        "criterios de administración"
    ],
    contenido: `El estudiante tiene derecho a participar en las danzas folclóricas y en los grupos deportivos, acogiendo las normas disciplinarias y los criterios de administración establecidos por la institución.`
},

{
    titulo: "Derecho a representar dignamente a la institución",
    palabras: [
        "representar a la institución",
        "representar a la institucion",
        "representar dignamente",
        "eventos culturales",
        "eventos científicos",
        "eventos cientificos",
        "eventos creativos",
        "eventos deportivos",
        "representación institucional"
    ],
    contenido: `El estudiante tiene derecho a representar dignamente a la institución en eventos culturales, científicos, creativos y deportivos.`
},

{
    titulo: "Derecho a recibir el carné estudiantil",
    palabras: [
        "carné",
        "carne",
        "carné estudiantil",
        "carne estudiantil",
        "carné de estudiante",
        "carne de estudiante",
        "identificación estudiantil",
        "identificacion estudiantil",
        "recibir carné"
    ],
    contenido: `El estudiante tiene derecho a recibir el carné expedido por la institución, que lo acredita como estudiante de la misma.`
},

{
    titulo: "Derecho a presentar reclamos académicos",
    palabras: [
        "reclamos académicos",
        "reclamos academicos",
        "reclamo académico",
        "reclamo academico",
        "reclamar una nota",
        "reclamar una calificación",
        "reclamar una calificacion",
        "resultados de evaluaciones",
        "evaluaciones",
        "derechos en evaluaciones",
        "dirección de grupo",
        "direccion de grupo",
        "coordinación",
        "coordinacion",
        "comisión de evaluación",
        "comision de evaluacion",
        "promoción",
        "promocion"
    ],
    contenido: `El estudiante tiene derecho a presentar reclamos académicos ante el docente, la dirección de grupo, la coordinación o las comisiones de evaluación y promoción cuando considere que sus derechos han sido vulnerados en los resultados de las evaluaciones realizadas, dentro de los tiempos establecidos.`
},

{
    titulo: "Derecho a solicitar información sobre inasistencias docentes",
    palabras: [
        "inasistencias de docentes",
        "inasistencias docentes",
        "inasistencia de profesores",
        "faltas de los docentes",
        "faltas de profesores",
        "docente no asiste",
        "profesor no asiste",
        "información sobre docentes",
        "informacion sobre docentes",
        "inasistencias reiterativas"
    ],
    contenido: `El estudiante puede solicitar, con el debido respeto, información a la dirección del plantel sobre las inasistencias reiteradas de uno o varios docentes.`
},

{
    titulo: "Derecho a conocer anticipadamente el estado académico",
    palabras: [
        "estado académico",
        "estado academico",
        "conocer mis notas",
        "conocer mis calificaciones",
        "calificaciones antes del boletín",
        "calificaciones antes del boletin",
        "informes por periodo",
        "informe final",
        "estado académico antes del informe",
        "estado academico antes del informe"
    ],
    contenido: `El estudiante tiene derecho a conocer con anticipación su estado académico por parte de los docentes, antes de que los informes definitivos por periodos y de final de año lleguen a la coordinación académica.`
},

{
    titulo: "Derecho a reclamar la puntualidad de los docentes",
    palabras: [
        "puntualidad de los docentes",
        "puntualidad de los profesores",
        "docente impuntual",
        "profesor impuntual",
        "reclamar puntualidad",
        "puntualidad de profesores"
    ],
    contenido: `El estudiante tiene derecho a reclamar la puntualidad de los docentes en el cumplimiento de sus deberes.`
},

{
    titulo: "Derecho a ser escuchado en descargos",
    palabras: [
        "descargos",
        "ser escuchado",
        "derecho a descargos",
        "acusado de una situación",
        "situación tipo 1",
        "situacion tipo 1",
        "situación tipo 2",
        "situacion tipo 2",
        "situación tipo 3",
        "situacion tipo 3",
        "falta tipo 1",
        "falta tipo 2",
        "falta tipo 3"
    ],
    contenido: `El estudiante tiene derecho a ser escuchado en descargos cuando se le acuse de haber cometido una situación de tipo uno, dos o tres contemplada en el Manual de Convivencia.`
},

{
    titulo: "Derecho a acceder a los servicios de la institución",
    palabras: [
        "servicios de la institución",
        "servicios de la institucion",
        "servicios institucionales",
        "biblioteca",
        "sala de informática",
        "sala de informatica",
        "audiovisuales",
        "servicios sanitarios",
        "baños",
        "canchas deportivas",
        "refrigerios",
        "tienda escolar",
        "acceso a los servicios"
    ],
    contenido: `El estudiante tiene derecho a tener acceso a los servicios que ofrece la institución, entre ellos:

- Biblioteca.
- Sala de informática.
- Servicios de audiovisuales.
- Servicios sanitarios.
- Canchas deportivas.
- Refrigerios.
- Tienda escolar.`
},

{
    titulo: "Derecho a organizar centros de estudio",
    palabras: [
        "centros de estudio",
        "organizar centros de estudio",
        "grupos de estudio",
        "jornadas contrarias",
        "jornadas contrarias a las clases",
        "superación personal",
        "superación grupal",
        "superación institucional",
        "estudiar en grupo"
    ],
    contenido: `El estudiante puede organizar centros de estudio en jornadas contrarias a las clases, dentro de la institución, que busquen la superación personal, grupal e institucional.

Para realizar estas actividades debe contar con la autorización de la directiva del plantel.`
},

{
    titulo: "Derecho a organizar jornadas deportivas y culturales",
    palabras: [
        "jornadas deportivas",
        "jornadas creativas",
        "jornadas científicas",
        "jornadas cientificas",
        "jornadas culturales",
        "organizar jornadas",
        "actividades deportivas",
        "actividades creativas",
        "actividades científicas",
        "actividades cientificas",
        "actividades culturales",
        "bien común",
        "bien comun"
    ],
    contenido: `El estudiante puede organizar jornadas deportivas, creativas, científicas y culturales que busquen el bien común en fechas especiales, previa autorización de la dirección del plantel educativo.`
},

{
    titulo: "Derecho a conocer el horario de atención de docentes",
    palabras: [
        "horario de docentes",
        "horario de profesores",
        "horario de atención",
        "horario de atencion",
        "atención de padres y alumnos",
        "atencion de padres y alumnos",
        "cuándo atienden los docentes",
        "cuando atienden los docentes",
        "disponibilidad horaria"
    ],
    contenido: `El estudiante tiene derecho a conocer la disponibilidad horaria de los docentes para la atención de padres y alumnos.`
},

{
    titulo: "Derecho al respeto de la fe religiosa",
    palabras: [
        "fe religiosa",
        "religión",
        "religion",
        "respeto a la religión",
        "respeto a la religion",
        "libertad religiosa",
        "creencias religiosas",
        "creencias",
        "derecho religioso"
    ],
    contenido: `El estudiante tiene derecho a ser respetado en su fe religiosa de acuerdo con la Constitución y las leyes.`
},

{
    titulo: "Artículo Ocho.Uno: Educación religiosa",
    palabras: [
        "educación religiosa",
        "educacion religiosa",
        "religión católica",
        "religion catolica",
        "contenido católico",
        "contenido catolico",
        "clase de religión",
        "clase de religion",
        "MEN",
        "Ministerio de Educación"
    ],
    contenido: `Parágrafo Uno:

Actualmente la Institución Educativa ofrece educación religiosa de contenido católico, acorde con las directrices del MEN.`
},



{
    titulo: "Artículo Ocho.Uno: Prohibiciones relacionadas con actos religiosos",
    palabras: [
        "actos religiosos prohibidos",
        "prohibiciones religiosas",
        "espiritismo",
        "cultos satánicos",
        "cultos satanicos",
        "fenómenos psíquicos",
        "fenomenos psiquicos",
        "parapsíquicos",
        "parapsiquicos",
        "supersticiones",
        "ley 133 de 1994",
        "ley 133",
        "artículo 4 ley 133",
        "artículo 5 ley 133"
    ],
    contenido: `Parágrafo Dos:

Están prohibidos dentro de la institución los actos que atenten contra la integridad física, psíquica y moral de los miembros de la comunidad educativa, aunque se realicen bajo el pretexto de actos religiosos.

También se prohíben dentro de la institución las prácticas de espiritismo, cultos satánicos, fenómenos psíquicos y parapsíquicos y las supersticiones, de acuerdo con lo establecido en la Ley 133 de 1994.`
},


{
    titulo: "Artículo Ocho.Dos: Deberes de los estudiantes",
    palabras: [
        "ocho.dos",
        "artículo ocho.dos",
        "articulo ocho.dos",
        "artículo 8.2",
        "articulo 8.2",
        "deberes",
        "deberes de los estudiantes",
        "deberes del estudiante",
        "obligaciones de los estudiantes",
        "responsabilidades de los estudiantes",
        "qué deberes tengo",
        "que deberes tengo"
    ],
    contenido: `ARTÍCULO OCHO.DOS

DEBERES

Los estudiantes tienen los siguientes deberes establecidos en el Manual de Convivencia.`
},

{
    titulo: "Deber de ser puntual",
    palabras: [
        "puntualidad",
        "ser puntual",
        "puntual en las clases",
        "puntual en actos",
        "asistencia puntual",
        "llegar puntual",
        "llegar a tiempo",
        "actos programados"
    ],
    contenido: `El estudiante debe ser puntual en la asistencia a clases y demás actos programados por la institución.`
},

{
    titulo: "Deber de aplicar los valores",
    palabras: [
        "aplicar los valores",
        "valores",
        "valores en el trato",
        "trato con las personas",
        "trato con los demás",
        "trato con los demas",
        "respeto por el entorno",
        "valores y entorno"
    ],
    contenido: `El estudiante debe aplicar los valores en su trato con las demás personas y con su entorno.`
},

{
    titulo: "Deber de presentar excusas por inasistencia",
    palabras: [
        "excusa",
        "excusas",
        "presentar excusa",
        "presentar excusas",
        "excusa por inasistencia",
        "justificar inasistencia",
        "justificar una falta",
        "48 horas",
        "cuarenta y ocho horas",
        "excusa firmada",
        "firma del padre",
        "cédula del padre",
        "cedula del padre",
        "actividades dejadas de realizar",
        "evaluaciones dejadas de realizar"
    ],
    contenido: `El estudiante debe presentar excusas justificadas con anterioridad o, en su defecto, dentro de las 48 horas posteriores a la inasistencia.

La excusa debe estar firmada por el padre de familia e incluir su número de cédula.

La excusa únicamente le permite al estudiante ejercer el derecho a que se le practiquen las actividades y evaluaciones que dejó de realizar durante el día o los días de su ausencia.`
},

{
    titulo: "Deber de mantener un buen desempeño escolar",
    palabras: [
        "desempeño escolar",
        "buen desempeño",
        "buen nivel académico",
        "buen nivel academico",
        "rendimiento escolar",
        "rendimiento académico",
        "rendimiento academico",
        "mejorar el desempeño"
    ],
    contenido: `El estudiante debe procurar un buen nivel en su desempeño escolar.`
},

{
    titulo: "Deber de demostrar buen comportamiento",
    palabras: [
        "buen comportamiento",
        "comportamiento en clases",
        "comportamiento fuera de clases",
        "comportamiento escolar",
        "comportarse bien",
        "buena conducta",
        "conducta en clase"
    ],
    contenido: `El estudiante debe demostrar un buen comportamiento tanto en las clases como fuera de ellas.`
},

{
    titulo: "Deber de documentarse antes de las clases",
    palabras: [
        "documentarse antes de clases",
        "documentarse",
        "prepararse antes de clase",
        "preparar las clases",
        "participar en clase",
        "participación en clase",
        "participacion en clase",
        "proceso pedagógico",
        "proceso pedagogico"
    ],
    contenido: `El estudiante debe documentarse antes de recibir las clases, con el fin de poder participar en ellas y contribuir al enriquecimiento del proceso pedagógico.`
},

{
    titulo: "Deber de participar en el plan de áreas",
    palabras: [
        "plan de áreas",
        "plan de areas",
        "plan de asignatura",
        "plan de asignaturas",
        "participar en el plan de áreas",
        "participar en el plan de asignaturas",
        "participación académica",
        "participacion academica"
    ],
    contenido: `El estudiante debe participar activamente en el desarrollo del plan de áreas y/o asignatura durante todo el año.`
},

{
    titulo: "Deber de participar en el mejoramiento de la institución",
    palabras: [
        "mejoramiento de la institución",
        "mejoramiento de la institucion",
        "mejorar la institución",
        "mejorar la institucion",
        "participar en el mejoramiento",
        "mejoramiento institucional",
        "participación institucional"
    ],
    contenido: `El estudiante debe participar activamente en el mejoramiento de la institución.`
},

{
    titulo: "Deber de cumplir las actividades académicas",
    palabras: [
        "actividades académicas",
        "actividades academicas",
        "tareas",
        "trabajos académicos",
        "trabajos academicos",
        "actividades asignadas",
        "cumplir actividades",
        "cumplir tareas",
        "responsabilidad académica",
        "responsabilidad academica"
    ],
    contenido: `El estudiante debe cumplir con diligencia y de forma responsable todas las actividades académicas asignadas.`
},

{
    titulo: "Deber de prestar atención al profesor",
    palabras: [
        "prestar atención",
        "prestar atencion",
        "atención al profesor",
        "atencion al profesor",
        "explicaciones del profesor",
        "escuchar al profesor",
        "escuchar al docente",
        "buena formación",
        "buena formacion"
    ],
    contenido: `El estudiante debe prestar la debida atención a las explicaciones del profesor para contribuir a su buena formación.`
},

{
    titulo: "Deber de mantener buen comportamiento en la formación",
    palabras: [
        "formación general",
        "formacion general",
        "comportamiento en la formación",
        "comportamiento en la formacion",
        "comportamiento en el patio",
        "comportamiento en el aula",
        "comportamiento fuera del plantel",
        "patio",
        "aula de clases",
        "fuera del plantel"
    ],
    contenido: `El estudiante debe demostrar buen comportamiento durante la formación general en el patio, en el aula de clases y fuera del plantel.`
},

{
    titulo: "Deber de respetar los mensajes de interés general",
    palabras: [
        "mensaje de interés general",
        "mensaje de interes general",
        "respetar a las personas",
        "personas que se dirigen a la comunidad",
        "comunidad educativa",
        "mensajes a la comunidad",
        "respeto a los visitantes"
    ],
    contenido: `El estudiante debe demostrar respeto por las personas que se dirigen a la comunidad educativa para manifestar un mensaje de interés general.`
},

{
    titulo: "Deber de utilizar las instancias para presentar quejas",
    palabras: [
        "instancias",
        "instancias para quejas",
        "manifestar quejas",
        "presentar quejas",
        "presentar una queja",
        "quejas",
        "reclamos",
        "cómo presentar una queja",
        "como presentar una queja"
    ],
    contenido: `El estudiante debe tener en cuenta las instancias establecidas para la manifestación de quejas.`
},

{
    titulo: "Deber de dedicar tiempo a las actividades escolares",
    palabras: [
        "tiempo para estudiar",
        "tiempo para actividades escolares",
        "actividades escolares",
        "dedicar tiempo",
        "proceso normal de clases",
        "responsabilidad escolar",
        "excusa no justificada",
        "excusas no justificadas"
    ],
    contenido: `El estudiante debe dedicar tiempo suficiente a las actividades escolares que resulten del proceso normal de clases, sin presentar excusas no justificadas.`
},

{
    titulo: "Deber de presentar autorización para grupos y comités",
    palabras: [
        "autorización del padre",
        "autorizacion del padre",
        "autorización del acudiente",
        "autorizacion del acudiente",
        "autorización escrita",
        "autorizacion escrita",
        "grupos de la institución",
        "grupos de la institucion",
        "comités de trabajo",
        "comites de trabajo",
        "pertenecer a un grupo",
        "pertenecer a un comité",
        "pertenecer a un comite"
    ],
    contenido: `El estudiante debe presentar autorización escrita por el padre de familia o acudiente cuando sea requerido o cuando desee pertenecer a cualquiera de los grupos o comités de trabajo de la institución.`
},

{
    titulo: "Deber de cumplir las normas de grupos y comités",
    palabras: [
        "normas de los grupos",
        "normas de los comités",
        "normas de los comites",
        "disciplina de los grupos",
        "disciplina de los comités",
        "disciplina de los comites",
        "grupos de trabajo",
        "comités de trabajo",
        "comites de trabajo",
        "colaborar con las actividades",
        "actividades de los grupos",
        "actividades de los comités",
        "actividades de los comites"
    ],
    contenido: `Cuando el estudiante forme parte de grupos o comités de trabajo, debe acogerse a las normas o disciplina que los rijan y colaborar con sus actividades cuando sea necesario.`
},


{
    titulo: "Deber de representar dignamente a la institución",
    palabras: [
        "representar a la institución",
        "representar a la institucion",
        "representar la institución",
        "representar la institucion",
        "eventos sociales",
        "eventos culturales",
        "eventos funerales",
        "funerales",
        "eventos deportivos",
        "otros eventos",
        "representación de la institución",
        "representacion de la institucion",
        "manera decorosa",
        "manera ejemplar"
    ],
    contenido: `El estudiante debe representar a la Institución Educativa en los eventos sociales, culturales, funerales, deportivos y otros de manera decorosa y ejemplar ante la comunidad.`
},

{
    titulo: "Deber de firmar la matrícula y acatar las normas",
    palabras: [
        "firmar la matrícula",
        "firmar la matricula",
        "firma de matrícula",
        "firma de matricula",
        "matrícula",
        "matricula",
        "acatar las normas",
        "cumplir las normas",
        "normas de la institución",
        "normas de la institucion"
    ],
    contenido: `El estudiante debe firmar la matrícula y acatar las normas establecidas por la institución.`
},

{
    titulo: "Deber de esperar al docente en el salón",
    palabras: [
        "esperar al docente",
        "esperar al profesor",
        "esperar al profesor en el salón",
        "esperar al profesor en el salon",
        "esperar al docente en el salón",
        "esperar al docente en el salon",
        "salón de clases",
        "salon de clases",
        "permanecer en el salón",
        "permanecer en el salon"
    ],
    contenido: `El estudiante debe esperar al docente dentro del salón de clases.`
},

{
    titulo: "Deber de respetar a los miembros de la comunidad educativa",
    palabras: [
        "respetar a los compañeros",
        "respetar a los profesores",
        "respetar a los docentes",
        "respetar a los directivos",
        "respetar a los padres de familia",
        "respetar al personal administrativo",
        "respetar servicios generales",
        "respeto a los compañeros",
        "respeto a los profesores",
        "respeto a los directivos",
        "respeto a la comunidad educativa",
        "personal administrativo",
        "personal de servicios generales"
    ],
    contenido: `El estudiante debe demostrar respeto por sus compañeros, profesores, directivos, padres de familia, personal administrativo y personal de servicios generales.`
},

{
    titulo: "Deber de solicitar permiso por ausencias durante la jornada",
    palabras: [
        "permiso para salir",
        "permiso durante la jornada",
        "permiso de coordinación",
        "coordinación académica",
        "coordinacion academica",
        "coordinación de convivencia",
        "coordinacion de convivencia",
        "ausencia durante la jornada",
        "ausencias durante la jornada",
        "salir durante clases",
        "salir del colegio",
        "permiso para ausentarse"
    ],
    contenido: `El estudiante debe solicitar permiso ante la coordinación académica y de convivencia por sus ausencias dentro de la jornada de clases.`
},

{
    titulo: "Deber de cuidar los utensilios y espacios del colegio",
    palabras: [
        "utensilios del colegio",
        "espacios del colegio",
        "espacios de la institución",
        "espacios de la institucion",
        "cuidar los espacios",
        "cuidar los utensilios",
        "uso adecuado",
        "uso adecuado de los espacios",
        "préstamo",
        "prestamo",
        "elementos prestados",
        "materiales prestados"
    ],
    contenido: `El estudiante debe dar el uso adecuado a los utensilios o espacios del colegio cuando estos sean cedidos en calidad de préstamo.`
},

{
    titulo: "Deber de cuidar los bienes de la institución",
    palabras: [
        "bienes de la institución",
        "bienes de la institucion",
        "bienes institucionales",
        "cuidar los bienes",
        "sentido de pertenencia",
        "sentido de pertenencia por la institución",
        "dañar los bienes",
        "destrucción de bienes",
        "destruccion de bienes",
        "extravío de bienes",
        "extravios de bienes",
        "pagar daños",
        "responsabilidad económica",
        "responsabilidad economica",
        "responsabilidad disciplinaria"
    ],
    contenido: `El estudiante debe demostrar sentido de pertenencia por todos los bienes que posee la institución.

Además, debe responder económica y disciplinariamente por la destrucción o extravío de los mismos.`
},

{
    titulo: "Deber de mantener los cuadernos y útiles en orden",
    palabras: [
        "cuadernos en orden",
        "mantener los cuadernos",
        "presentación de los cuadernos",
        "presentacion de los cuadernos",
        "útiles escolares",
        "utiles escolares",
        "orden de los útiles",
        "orden de los utiles",
        "buena presentación",
        "buena presentacion",
        "cuidar los cuadernos"
    ],
    contenido: `El estudiante debe mantener sus cuadernos en orden y con buena presentación, al igual que sus demás útiles escolares.`
},

{
    titulo: "Deber de conservar la buena presentación personal",
    palabras: [
        "presentación personal",
        "presentacion personal",
        "buena presentación personal",
        "buena presentacion personal",
        "presentación personal dentro del plantel",
        "presentacion personal dentro del plantel",
        "presentación personal fuera del plantel",
        "presentacion personal fuera del plantel",
        "buena apariencia",
        "presentarse bien"
    ],
    contenido: `El estudiante debe conservar la buena presentación personal dentro y fuera del plantel.`
},


{
    titulo: "Deber de portar el carné estudiantil",
    palabras: [
        "portar el carné",
        "portar el carne",
        "llevar el carné",
        "llevar el carne",
        "carné estudiantil",
        "carne estudiantil",
        "carné que acredita",
        "carne que acredita",
        "identificación estudiantil",
        "identificacion estudiantil"
    ],
    contenido: `El estudiante debe portar el carné que lo acredita como estudiante del plantel.`
},

{
    titulo: "Deber de asistir debidamente uniformado",
    palabras: [
        "asistir uniformado",
        "asistir debidamente uniformado",
        "uniforme",
        "uniformado",
        "usar el uniforme",
        "portar el uniforme",
        "actividades de la institución",
        "actividades de la institucion",
        "buena presentación personal",
        "buena presentacion personal",
        "cuidar la presentación personal",
        "cuidar la presentacion personal"
    ],
    contenido: `El estudiante debe asistir debidamente uniformado a las clases y demás actividades en las cuales participe la Institución Educativa, y cuidar permanentemente su buena presentación personal.`
},

{
    titulo: "Deber de atender las sanciones y advertencias",
    palabras: [
        "sanciones",
        "amonestaciones",
        "advertencias",
        "atender sanciones",
        "atender amonestaciones",
        "atender advertencias",
        "sanciones de los superiores",
        "amonestaciones de los superiores",
        "advertencias de los superiores",
        "superiores"
    ],
    contenido: `El estudiante debe atender de buen modo las sanciones, amonestaciones y advertencias impartidas por sus superiores.`
},

{
    titulo: "Deber de acatar los toques del timbre",
    palabras: [
        "toques del timbre",
        "timbre",
        "timbre escolar",
        "una timbrada",
        "dos timbradas",
        "tres timbradas",
        "significado del timbre",
        "cambio de clase",
        "entrar o salir",
        "reunión general",
        "reunion general",
        "reunión en el patio",
        "reunion en el patio"
    ],
    contenido: `El estudiante debe acatar los toques del timbre de la siguiente manera:

• Una timbrada: indica cambio de clase.

• Dos timbradas: indican entrar o salir, dependiendo del caso.

• Tres timbradas: significan reunión general de alumnos y profesores en el patio de la institución.`
},

{
    titulo: "Deber de colaborar con las actividades de mejoramiento",
    palabras: [
        "colaborar con las actividades",
        "colaborar en las actividades",
        "mejoría de la institución",
        "mejoria de la institucion",
        "mejoramiento de la institución",
        "mejoramiento de la institucion",
        "mejorar el colegio",
        "mejorar la institución",
        "mejorar la institucion",
        "actividades de mejoramiento"
    ],
    contenido: `El estudiante debe colaborar con todas las actividades que tiendan hacia la mejoría de la institución.`
},

{
    titulo: "Deber de contar con los textos y útiles escolares",
    palabras: [
        "textos escolares",
        "útiles escolares",
        "utiles escolares",
        "libros",
        "materiales escolares",
        "útiles para las clases",
        "utiles para las clases",
        "textos para las clases",
        "material escolar",
        "proceso de enseñanza",
        "proceso de aprendizaje"
    ],
    contenido: `El estudiante debe proveerse de todos los textos y demás útiles escolares indispensables para el desarrollo de los procesos de enseñanza y aprendizaje.`
},

{
    titulo: "Deber de resolver conflictos mediante el diálogo",
    palabras: [
        "resolver conflictos",
        "resolver un conflicto",
        "conflictos",
        "negociación",
        "negociacion",
        "concertación",
        "concertacion",
        "conciliación",
        "conciliacion",
        "diálogo",
        "dialogo",
        "solucionar conflictos",
        "solucionar un problema"
    ],
    contenido: `Para la resolución de cualquier conflicto, el estudiante debe utilizar la negociación, la concertación y la conciliación.`
},

{
    titulo: "Deber de mantener una buena presentación de las manos",
    palabras: [
        "presentación de las manos",
        "presentacion de las manos",
        "manos limpias",
        "manos limpias y cortas",
        "uñas limpias",
        "uñas cortas",
        "uñas",
        "cuidado de las uñas",
        "esmalte",
        "esmaltes suaves",
        "esmaltes naturales",
        "esmalte natural"
    ],
    contenido: `Los estudiantes deben mantener una buena presentación de sus manos.

Las uñas deben estar limpias y cortas. Las niñas pueden utilizar esmaltes suaves o naturales.`
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