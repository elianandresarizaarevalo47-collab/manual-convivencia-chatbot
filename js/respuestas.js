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


{
    titulo: "Deber de abstenerse de llevar altas sumas de dinero",
    palabras: [
        "dinero",
        "mucho dinero",
        "alta suma de dinero",
        "altas sumas de dinero",
        "dinero en el colegio",
        "dinero en la institución",
        "dinero en la institucion",
        "más de 5000",
        "mas de 5000",
        "$5.000",
        "5000 pesos"
    ],
    contenido: `El estudiante debe abstenerse de llevar consigo altas sumas de dinero, consideradas en el Manual como mayores de $5.000.`
},

{
    titulo: "Deber de abstenerse de portar objetos de alto valor",
    palabras: [
        "alhajas",
        "manillas",
        "objetos de alto valor",
        "objetos costosos",
        "objetos de valor",
        "adornos extravagantes",
        "adornos con el uniforme",
        "joyas",
        "objetos personales de valor",
        "accesorios extravagantes"
    ],
    contenido: `El estudiante debe abstenerse de portar alhajas, manillas y otros objetos de alto valor, así como cualquier tipo de adorno extravagante con el uniforme.`
},

{
    titulo: "Deber de respetar las convicciones y valores religiosos",
    palabras: [
        "convicciones religiosas",
        "valores religiosos",
        "expresiones religiosas",
        "respetar la religión",
        "respetar la religion",
        "creencias religiosas",
        "religión de los demás",
        "religion de los demas",
        "respeto religioso",
        "libertad religiosa"
    ],
    contenido: `El estudiante debe respetar las convicciones, valores y expresiones religiosas de los miembros de la comunidad educativa.`
},

{
    titulo: "Deber de participar en las actividades de religión",
    palabras: [
        "actividades de religión",
        "actividades de religion",
        "departamento de religión",
        "departamento de religion",
        "clase de religión",
        "clase de religion",
        "participar en religión",
        "participar en religion",
        "libertad de cultos",
        "libertad de culto",
        "artículo 19",
        "articulo 19",
        "ley 135"
    ],
    contenido: `Los estudiantes deben participar en las actividades programadas por el departamento de religión a las cuales se hayan comprometido en el momento de la matrícula, respetando la libertad de cultos, de acuerdo con el artículo 19 de la Constitución Nacional y la ley 135 mencionada en el Manual.`
},

{
    titulo: "Deber de cumplir el uniforme de diario para los varones",
    palabras: [
        "uniforme de diario niños",
        "uniforme de diario varones",
        "uniforme de diario hombres",
        "uniforme de los niños",
        "uniforme de los varones",
        "pantalón azul turquí",
        "pantalon azul turqui",
        "pantalón azul",
        "pantalon azul",
        "guayabera blanca",
        "camisa blanca manga larga",
        "escudo en el bolsillo",
        "correa negra",
        "zapatos negros",
        "medias azul turquí",
        "medias azul turqui",
        "medias negras largas"
    ],
    contenido: `Los estudiantes varones de IDESCO deben presentarse con el uniforme de diario establecido por la institución:

• Pantalón clásico azul turquí, de bota normal.
• Camisa clásica guayabera blanca de manga larga, con el escudo impreso en el bolsillo de la parte inferior izquierda y usada por fuera del pantalón.
• Correa de cuero negra.
• Zapatos negros de cuero escolares y lustrados.
• Medias azul turquí o negras largas.`
},

{
    titulo: "Deber de cumplir el uniforme de diario para las niñas",
    palabras: [
        "uniforme de diario niñas",
        "uniforme de diario mujeres",
        "uniforme de las niñas",
        "uniforme de las mujeres",
        "falda plisada azul turquí",
        "falda plisada azul turqui",
        "falda azul turquí",
        "falda azul turqui",
        "blusa blanca",
        "escudo en el pecho",
        "zapatos negros de cuero",
        "medias blancas",
        "medias blancas altas",
        "tres dedos por debajo de la rodilla"
    ],
    contenido: `Las estudiantes de IDESCO deben presentarse con el uniforme de diario establecido por la institución:

• Falda plisada azul turquí, tres dedos por encima de la rodilla.
• Blusa blanca con el escudo del colegio impreso en la parte superior izquierda del pecho.
• Zapatos negros de cuero y lustrados.
• Medias blancas altas, tres dedos por debajo de la rodilla.`
},

{
    titulo: "Deber de cumplir el uniforme de educación física",
    palabras: [
        "uniforme de educación física",
        "uniforme de educacion fisica",
        "educación física",
        "educacion fisica",
        "uniforme deportivo",
        "ropa de educación física",
        "ropa de educacion fisica",
        "sudadera azul turquí",
        "sudadera azul turqui",
        "camiseta blanca",
        "vivos azul turquí",
        "vivos azul turqui",
        "escudo del colegio",
        "sigla IDESCO",
        "calzado deportivo blanco",
        "medias azul turquí",
        "medias azul turqui",
        "medias no tobilleras"
    ],
    contenido: `Los niños y las niñas deben utilizar el uniforme de educación física en los días indicados por la institución.

El uniforme está compuesto por:

• Camiseta blanca con vivos azul turquí en los puños y el cuello, con el escudo del colegio en la parte izquierda del pecho.
• Sudadera azul turquí, no entubada, con vivos blancos a lo largo de las piernas y la sigla IDESCO en la pierna izquierda, de frente, en forma vertical.
• La sudadera debe estar elaborada siguiendo las normas técnicas para garantizar el desarrollo de las actividades con el mínimo de riesgos para el estudiante.
• Calzado deportivo de color blanco liso.
• Medias azul turquí que no sean tobilleras.`
},

{
    titulo: "Deber de usar la camiseta debajo de la sudadera",
    palabras: [
        "camiseta debajo de la sudadera",
        "camiseta bajo la sudadera",
        "camiseta por debajo",
        "camiseta debajo",
        "sudadera",
        "cómo usar la camiseta",
        "como usar la camiseta"
    ],
    contenido: `Nota: La camiseta se debe usar por debajo de la sudadera.`
},

{
    titulo: "Deber de cumplir las normas dentro y fuera del plantel",
    palabras: [
        "normas dentro y fuera",
        "normas fuera del plantel",
        "normas dentro del plantel",
        "cumplir las normas",
        "cumplir el manual",
        "cumplir el manual de convivencia",
        "dentro y fuera del colegio",
        "dentro y fuera de la institución",
        "dentro y fuera de la institucion",
        "normas del manual"
    ],
    contenido: `El estudiante debe cumplir fielmente las normas contempladas en este Manual de Convivencia, tanto dentro como fuera del plantel.`
},


{
    titulo: "Parágrafo Uno: Actividades alternativas de formación religiosa",
    palabras: [
        "parágrafo uno",
        "paragrafo uno",
        "mayores de edad religión",
        "mayores de edad religion",
        "no recibir educación religiosa",
        "no recibir educacion religiosa",
        "no recibir asistencia religiosa",
        "asistencia religiosa",
        "educación religiosa alternativa",
        "educacion religiosa alternativa",
        "actividades alternativas",
        "actividades de orden formativo",
        "padres no quieren religión",
        "padres no quieren religion",
        "no recibir religión",
        "no recibir religion"
    ],
    contenido: `Parágrafo Uno:

Los alumnos mayores de edad o los menores cuyos padres hayan manifestado en el momento de la matrícula su voluntad de no recibir educación y asistencia religiosa, participarán en las actividades alternativas de orden formativo programadas por la institución.

Si esto no se manifiesta en el momento de la matrícula, la institución presumirá que los padres aceptan libremente que sus hijos reciban la educación y asistencia religiosa que ofrece el colegio.`
},

{
    titulo: "Parágrafo Dos: Maquillaje y presentación personal con el uniforme",
    palabras: [
        "parágrafo dos",
        "paragrafo dos",
        "maquillaje",
        "maquillaje con el uniforme",
        "maquillarse",
        "pintalabios",
        "pintauñas",
        "pinta uñas",
        "colores escandalosos",
        "peinados fuera de lo común",
        "peinados fuera de lo comun",
        "mechones de colores",
        "rayitos",
        "alteración de la presentación natural",
        "alteracion de la presentacion natural",
        "presentación natural",
        "presentacion natural"
    ],
    contenido: `Parágrafo Dos:

Tanto las niñas como los niños no deben usar ningún tipo de maquillaje con el uniforme.

El Manual considera maquillaje toda aquella alteración de la presentación natural, como peinados fuera de lo común, uso de pintalabios y pintauñas de colores escandalosos, mechones de colores y rayitos.`
},

{
    titulo: "Prohibiciones del Manual de Convivencia",
    palabras: [
        "prohibiciones",
        "prohibición",
        "prohibicion",
        "qué está prohibido",
        "que esta prohibido",
        "cosas prohibidas",
        "normas prohibidas",
        "qué no puedo hacer",
        "que no puedo hacer",
        "prohibiciones del manual"
    ],
    contenido: `PROHIBICIONES

Las prohibiciones son disposiciones establecidas para garantizar la seguridad de las personas que conviven en la comunidad educativa, cuidar sus elementos personales y de trabajo y asegurar una efectiva formación en valores humanos.

A continuación se presentan las principales prohibiciones establecidas en el Manual de Convivencia.`
},

{
    titulo: "Prohibición de portar armas",
    palabras: [
        "armas",
        "portar armas",
        "llevar armas",
        "armas en el colegio",
        "armas en la institución",
        "armas en la institucion",
        "armas dentro del colegio",
        "armas fuera del colegio",
        "armas blancas",
        "armas de fuego",
        "armas corto punzantes",
        "armas cortopunzantes",
        "objetos cortopunzantes",
        "objetos corto punzantes"
    ],
    contenido: `Está prohibido portar todo tipo de armas dentro y fuera de la institución, incluyendo armas blancas, de fuego y objetos corto punzantes, entre otros.`
},

{
    titulo: "Prohibición de presentarse inadecuadamente a actividades complementarias",
    palabras: [
        "actividades complementarias",
        "presentarse inadecuadamente",
        "ropa inadecuada",
        "vestuario inadecuado",
        "blusas cortas",
        "escotes",
        "camisilla",
        "pantaloneta",
        "minifalda",
        "chanclas",
        "ropa para actividades complementarias",
        "vestimenta inadecuada"
    ],
    contenido: `Está prohibido presentarse a las actividades complementarias de manera inadecuada.

El Manual menciona como ejemplos de vestimenta inadecuada: blusas cortas, escotes, camisillas, pantalonetas, minifaldas, chanclas, entre otros.`
},


{
    titulo: "Prohibición de portar joyas y adornos costosos",
    palabras: [
        "joyas",
        "joyas costosas",
        "adornos costosos",
        "joyas con el uniforme",
        "adornos con el uniforme",
        "objetos costosos",
        "joyería",
        "joyeria",
        "extravío de joyas",
        "extravios de joyas",
        "pérdida de joyas",
        "perdida de joyas"
    ],
    contenido: `Está prohibido portar joyas u adornos costosos con el uniforme. La institución no responde por el extravío de estos objetos.`
},

{
    titulo: "Prohibición de usar accesorios que no correspondan al uniforme",
    palabras: [
        "accesorios",
        "accesorios de otro color",
        "accesorios diferentes",
        "accesorios con el uniforme",
        "color diferente",
        "accesorios que no combinan",
        "accesorios no acordes",
        "uniforme y accesorios"
    ],
    contenido: `Está prohibido traer accesorios de un color diferente o que no estén acordes con el uniforme institucional.`
},

{
    titulo: "Prohibición de salir de la institución sin permiso",
    palabras: [
        "salir del colegio",
        "salir de la institución",
        "salir de la institucion",
        "salir sin permiso",
        "permiso para salir",
        "permiso del coordinador",
        "coordinador",
        "salir durante la jornada",
        "salir en horas de clase",
        "salir en días hábiles",
        "salir en dias habiles"
    ],
    contenido: `Está prohibido salir de la institución sin el previo permiso del coordinador del colegio durante horas y días hábiles.`
},

{
    titulo: "Prohibición de salir de la institución por los muros",
    palabras: [
        "volarse del colegio",
        "volarse de la institución",
        "volarse de la institucion",
        "saltar los muros",
        "saltar el muro",
        "salir por los muros",
        "salir por el muro",
        "escaparse por los muros",
        "escaparse del colegio",
        "muros de la institución",
        "muros de la institucion"
    ],
    contenido: `Está prohibido salir o evadirse de la institución utilizando los muros de la misma.`
},

{
    titulo: "Prohibición de hacer mal uso de los libros de la biblioteca",
    palabras: [
        "libros de la biblioteca",
        "biblioteca",
        "mal uso de los libros",
        "dañar libros",
        "dañar los libros",
        "daño a los libros",
        "daño de libros",
        "libros dañados",
        "cuidar los libros",
        "mal uso de la biblioteca"
    ],
    contenido: `Está prohibido hacer mal uso de los libros de la biblioteca.`
},

{
    titulo: "Prohibición de fumar dentro del plantel",
    palabras: [
        "fumar",
        "fumar en el colegio",
        "fumar en la institución",
        "fumar en la institucion",
        "cigarrillo",
        "cigarrillos",
        "tabaco",
        "fumar dentro del plantel"
    ],
    contenido: `Está prohibido fumar dentro del plantel educativo.`
},

{
    titulo: "Prohibición de prácticas sexuales",
    palabras: [
        "prácticas sexuales",
        "practicas sexuales",
        "sexo",
        "práctica de sexo",
        "practica de sexo",
        "actividad sexual",
        "actividades sexuales"
    ],
    contenido: `El Manual de Convivencia prohíbe realizar cualquier tipo de práctica sexual dentro de la institución.`
},

{
    titulo: "Prohibición de traer cantidades superiores de dinero",
    palabras: [
        "dinero",
        "más de 5000 pesos",
        "mas de 5000 pesos",
        "más de $5000",
        "mas de $5000",
        "más de $5.000",
        "mas de $5.000",
        "5000 pesos",
        "cantidad de dinero",
        "dinero en grandes cantidades"
    ],
    contenido: `Está prohibido traer dinero en cantidades superiores a $5.000.00.`
},

{
    titulo: "Prohibición de hablar con personas ajenas por las mallas o muros",
    palabras: [
        "personas ajenas",
        "hablar con personas ajenas",
        "personas de afuera",
        "hablar con personas de afuera",
        "mallas",
        "muros",
        "hablar por las mallas",
        "hablar por los muros",
        "personas externas",
        "contacto con personas ajenas"
    ],
    contenido: `Está prohibido hablar con personas ajenas a la institución por medio de las mallas o los muros.`
},

{
    titulo: "Prohibición de entrar a dependencias sin autorización",
    palabras: [
        "dependencias",
        "entrar a dependencias",
        "entrar a las dependencias",
        "entrar sin autorización",
        "entrar sin autorizacion",
        "autorización para entrar",
        "autorizacion para entrar",
        "lugares de la institución",
        "lugares de la institucion",
        "espacios restringidos"
    ],
    contenido: `Está prohibido entrar a cualquiera de las dependencias de la institución sin la debida autorización.`
},

{
    titulo: "Prohibición de mojarse la cabeza durante clases",
    palabras: [
        "mojarse la cabeza",
        "mojar la cabeza",
        "cabeza mojada",
        "mojarse durante clases",
        "mojarse en jornada escolar",
        "mojarse en el colegio",
        "agua durante clases"
    ],
    contenido: `Está prohibido mojarse la cabeza durante la jornada de clases.`
},

{
    titulo: "Prohibición de hacer mal uso de las unidades sanitarias",
    palabras: [
        "unidades sanitarias",
        "baños",
        "baño",
        "mal uso de los baños",
        "mal uso del baño",
        "mal uso de las unidades sanitarias",
        "dañar los baños",
        "daño a los baños",
        "cuidar los baños"
    ],
    contenido: `Está prohibido hacer mal uso de las unidades sanitarias de la institución.`
},


{
    titulo: "Prohibición de entrar a la institución en jornada contraria sin autorización",
    palabras: [
        "jornada contraria",
        "entrar en jornada contraria",
        "entrar a la institución en jornada contraria",
        "entrar a la institucion en jornada contraria",
        "entrar sin autorización",
        "entrar sin autorizacion",
        "autorización de un docente",
        "autorizacion de un docente",
        "autorización de un directivo",
        "autorizacion de un directivo",
        "jornada diferente"
    ],
    contenido: `Está prohibido entrar a la institución durante la jornada contraria sin la debida autorización de un directivo o docente.`
},

{
    titulo: "Prohibición de permanecer fuera del salón sin autorización",
    palabras: [
        "fuera del salón",
        "fuera del salon",
        "permanecer fuera del salón",
        "permanecer fuera del salon",
        "salir del salón",
        "salir del salon",
        "fuera de clase",
        "fuera del aula",
        "autorización del docente",
        "autorizacion del docente",
        "horas de clase",
        "durante las clases"
    ],
    contenido: `Está prohibido permanecer fuera del salón de clases durante las horas de clase sin previa autorización del docente.`
},

{
    titulo: "Prohibición de usar gorras y elementos innecesarios",
    palabras: [
        "gorras",
        "gorra",
        "usar gorra",
        "gorras en el colegio",
        "gorras con el uniforme",
        "elementos innecesarios",
        "elementos que no se requieren",
        "elementos para el aprendizaje",
        "accesorios no permitidos"
    ],
    contenido: `Está prohibido usar gorras u otros elementos que no sean requeridos para el aprendizaje.`
},

{
    titulo: "Prohibición de entorpecer el desarrollo de las clases",
    palabras: [
        "entorpecer las clases",
        "entorpecer el desarrollo de las clases",
        "interrumpir las clases",
        "interrumpir clase",
        "molestar en clase",
        "perturbar las clases",
        "afectar las clases",
        "mal comportamiento en clase",
        "desarrollo de las clases"
    ],
    contenido: `Está prohibido entorpecer el buen desarrollo de las clases.`
},

{
    titulo: "Prohibición de causar daños a espacios o elementos de la institución",
    palabras: [
        "causar daño",
        "dañar la institución",
        "dañar la institucion",
        "dañar espacios",
        "dañar elementos",
        "daños en el colegio",
        "daños en la institución",
        "daños en la institucion",
        "elementos de trabajo",
        "espacios de trabajo",
        "bienes de la institución",
        "bienes de la institucion"
    ],
    contenido: `Está prohibido causar daño en cualquiera de los sitios o elementos que faciliten el trabajo en la institución por parte de estudiantes, profesores y directivos.`
},

{
    titulo: "Prohibición de hacer mal uso del carné estudiantil",
    palabras: [
        "mal uso del carné",
        "mal uso del carne",
        "usar mal el carné",
        "usar mal el carne",
        "carné estudiantil",
        "carne estudiantil",
        "dañar el carné",
        "dañar el carne",
        "carné de estudiante",
        "carne de estudiante"
    ],
    contenido: `Está prohibido hacer mal uso del carné estudiantil.`
},

{
    titulo: "Prohibición de hacer mal uso de los uniformes",
    palabras: [
        "mal uso del uniforme",
        "mal uso de los uniformes",
        "usar mal el uniforme",
        "uniformes",
        "uniforme de diario",
        "uniforme de educación física",
        "uniforme de educacion fisica",
        "cuidar el uniforme"
    ],
    contenido: `Está prohibido hacer mal uso de cualquiera de los uniformes institucionales.`
},

{
    titulo: "Prohibición de dañar los emblemas institucionales",
    palabras: [
        "emblemas institucionales",
        "emblemas de la institución",
        "emblemas de la institucion",
        "escudo",
        "bandera",
        "himno",
        "dañar el escudo",
        "dañar la bandera",
        "dañar el himno",
        "adulterar el escudo",
        "adulterar la bandera",
        "adulterar el himno",
        "transformar el escudo",
        "destruir el escudo",
        "manchar el escudo",
        "manchar la bandera",
        "mal uso de los emblemas"
    ],
    contenido: `Está prohibido adulterar, transformar, destruir o manchar cualquiera de los estandartes de la institución, tales como el escudo, la bandera, el himno y otros.

También está prohibido hacer mal uso de estos emblemas institucionales.`
},

{
    titulo: "Excepción para docentes de Artística",
    palabras: [
        "docentes de artística",
        "docentes de artistica",
        "profesores de artística",
        "profesores de artistica",
        "artística",
        "artistica",
        "exactos",
        "uso de exactos",
        "elementos de artística",
        "materiales de artística",
        "materiales de artistica"
    ],
    contenido: `NOTA:

Los docentes de Artística están autorizados para utilizar exactos, ya que son elementos necesarios para las actividades propias de su área.`
},


{
    titulo: "Estímulos institucionales",
    palabras: [
        "estímulos",
        "estimulos",
        "estímulo",
        "estimulo",
        "qué son los estímulos",
        "que son los estimulos",
        "reconocimientos",
        "reconocimiento",
        "premios",
        "motivaciones",
        "reconocimiento institucional"
    ],
    contenido: `ESTÍMULOS

Se considera estímulo para la institución toda motivación o acto de reconocimiento dirigido a directivos, docentes, administrativos, padres de familia o estudiantes que, dentro o fuera de la institución y en actos propios de ella, se hayan destacado positivamente.

Entre los aspectos que pueden ser reconocidos se encuentran:

• Compromiso institucional.
• Sentido de pertenencia.
• Innovación.
• Valores.
• Rendimiento.
• Resultados ICFES.
• Comportamiento.
• Liderazgo.
• Deportes.
• Cultura.`
},

{
    titulo: "Clases de estímulos",
    palabras: [
        "clases de estímulos",
        "clases de estimulos",
        "tipos de estímulos",
        "tipos de estimulos",
        "qué estímulos existen",
        "que estimulos existen",
        "formas de reconocimiento",
        "reconocimientos institucionales",
        "estímulos institucionales"
    ],
    contenido: `CLASES DE ESTÍMULOS

La institución contempla diferentes formas de reconocer los logros y aspectos positivos de los miembros de la comunidad educativa:

• Figurar en el cuadro de honor institucional por periodo.

• Ser resaltado en la emisora, el periódico escolar, la página social y/o el blog institucional.

• Recibir reconocimiento en las asignaturas afines.

• Recibir mención de honor o placa en acto público institucional.`
},

{
    titulo: "Reconocimientos en el acto de clausura",
    palabras: [
        "acto de clausura",
        "reconocimientos en clausura",
        "premios de clausura",
        "reconocimiento académico",
        "rendimiento académico",
        "primer puesto",
        "primer y segundo puesto",
        "1er puesto",
        "2do puesto",
        "buen comportamiento",
        "colaboración",
        "superación personal"
    ],
    contenido: `RECONOCIMIENTOS EN EL ACTO DE CLAUSURA

En el acto de clausura se hará reconocimiento por:

• Rendimiento académico: primer y segundo puesto de cada grupo.

• Buen comportamiento: hasta dos estudiantes por grupo.

• Colaboración: hasta dos estudiantes por grupo.

• Superación personal: hasta dos estudiantes por grupo.`
},

{
    titulo: "Estímulo por rendimiento académico",
    palabras: [
        "estímulo por rendimiento",
        "estimulo por rendimiento",
        "premio por rendimiento",
        "reconocimiento por rendimiento",
        "rendimiento académico",
        "rendimiento academico",
        "mejor rendimiento",
        "mejores estudiantes",
        "primer puesto académico",
        "segundo puesto académico"
    ],
    contenido: `En el acto de clausura se hará reconocimiento por rendimiento académico al primer y segundo puesto de cada grupo.`
},

{
    titulo: "Estímulo por buen comportamiento",
    palabras: [
        "estímulo por comportamiento",
        "estimulo por comportamiento",
        "premio por comportamiento",
        "reconocimiento por comportamiento",
        "buen comportamiento",
        "mejor comportamiento",
        "estudiantes con buen comportamiento"
    ],
    contenido: `En el acto de clausura se hará reconocimiento por buen comportamiento, hasta a dos estudiantes por grupo.`
},

{
    titulo: "Estímulo por colaboración",
    palabras: [
        "estímulo por colaboración",
        "estimulo por colaboracion",
        "premio por colaboración",
        "reconocimiento por colaboración",
        "colaboración",
        "colaboracion",
        "estudiante colaborador",
        "reconocimiento a la colaboración"
    ],
    contenido: `En el acto de clausura se hará reconocimiento por colaboración, hasta a dos estudiantes por grupo.`
},

{
    titulo: "Estímulo por superación personal",
    palabras: [
        "estímulo por superación personal",
        "estimulo por superacion personal",
        "premio por superación personal",
        "reconocimiento por superación personal",
        "superación personal",
        "superacion personal",
        "superarse",
        "reconocimiento a la superación"
    ],
    contenido: `En el acto de clausura se hará reconocimiento por superación personal, hasta a dos estudiantes por grupo.`
},


{
    titulo: "Reconocimientos en el acto de graduación",
    palabras: [
        "acto de graduación",
        "acto de graduacion",
        "reconocimientos de graduación",
        "reconocimientos de graduacion",
        "premios de graduación",
        "premios de graduacion",
        "menciones de honor",
        "placas",
        "distinciones",
        "reconocimientos a graduandos"
    ],
    contenido: `En el acto de graduación se resaltarán con menciones de honor, placas y distinciones a los estudiantes que se hayan destacado en diferentes aspectos. Entre ellos:

• Mejor deportista: hasta 4 estudiantes.

• Mejor estudiante en las pruebas Saber 11.

• Mejor compañero de la promoción: hasta 2 estudiantes.

• Más colaborador: hasta 4 estudiantes.

• Mejor académicamente de la promoción.

• Más disciplinado: hasta 4 estudiantes.

• Al personero, en la medida en que haya cumplido su plan de trabajo.

• Mejor académicamente del grupo.

• Esfuerzo y superación personal: hasta 4 estudiantes.

• Mejor perfil Idescano: hasta 2 estudiantes.

• Liderazgo.`
},

{
    titulo: "Reconocimiento al mejor deportista",
    palabras: [
        "mejor deportista",
        "premio al mejor deportista",
        "reconocimiento deportivo",
        "mejor deportista de la promoción",
        "mejor deportista de la institucion"
    ],
    contenido: `En el acto de graduación se hará reconocimiento al mejor deportista mediante mención de honor, placa o distinción. Este reconocimiento puede otorgarse hasta a 4 estudiantes.`
},

{
    titulo: "Reconocimiento al mejor estudiante en las pruebas Saber 11",
    palabras: [
        "saber 11",
        "pruebas saber 11",
        "mejor saber 11",
        "mejor estudiante saber 11",
        "mejor resultado saber 11",
        "mejor puntaje saber 11",
        "icfes",
        "mejor icfes"
    ],
    contenido: `En el acto de graduación se hará reconocimiento al mejor estudiante en las pruebas Saber 11 mediante mención de honor, placa o distinción.`
},

{
    titulo: "Reconocimiento al mejor compañero de la promoción",
    palabras: [
        "mejor compañero",
        "mejor compañero de la promoción",
        "mejor compañero de la promocion",
        "premio al mejor compañero",
        "reconocimiento al mejor compañero"
    ],
    contenido: `En el acto de graduación se hará reconocimiento al mejor compañero de la promoción. Este reconocimiento puede otorgarse hasta a 2 estudiantes.`
},

{
    titulo: "Reconocimiento al más colaborador",
    palabras: [
        "más colaborador",
        "mas colaborador",
        "estudiante colaborador",
        "mejor colaborador",
        "premio a la colaboración",
        "premio a la colaboracion"
    ],
    contenido: `En el acto de graduación se hará reconocimiento al estudiante más colaborador. Este reconocimiento puede otorgarse hasta a 4 estudiantes.`
},

{
    titulo: "Reconocimiento al mejor académicamente de la promoción",
    palabras: [
        "mejor académicamente",
        "mejor academicamente",
        "mejor estudiante de la promoción",
        "mejor estudiante de la promocion",
        "mejor académico de la promoción",
        "mejor academico de la promocion",
        "mejor académico",
        "mejor academico"
    ],
    contenido: `En el acto de graduación se hará reconocimiento al estudiante que tenga el mejor desempeño académico de la promoción.`
},

{
    titulo: "Reconocimiento al más disciplinado",
    palabras: [
        "más disciplinado",
        "mas disciplinado",
        "estudiante disciplinado",
        "mejor disciplina",
        "premio a la disciplina",
        "reconocimiento por disciplina"
    ],
    contenido: `En el acto de graduación se hará reconocimiento al estudiante más disciplinado. Este reconocimiento puede otorgarse hasta a 4 estudiantes.`
},

{
    titulo: "Reconocimiento al personero",
    palabras: [
        "personero",
        "premio al personero",
        "reconocimiento al personero",
        "plan de trabajo del personero",
        "cumplimiento del plan de trabajo"
    ],
    contenido: `En el acto de graduación se hará reconocimiento al personero, en la medida en que haya cumplido su plan de trabajo.`
},

{
    titulo: "Reconocimiento al mejor académicamente del grupo",
    palabras: [
        "mejor del grupo",
        "mejor académicamente del grupo",
        "mejor academicamente del grupo",
        "mejor estudiante del grupo",
        "mejor académico del grupo",
        "mejor academico del grupo"
    ],
    contenido: `En el acto de graduación se hará reconocimiento al estudiante con el mejor desempeño académico del grupo.`
},

{
    titulo: "Reconocimiento por esfuerzo y superación personal",
    palabras: [
        "esfuerzo y superación personal",
        "esfuerzo y superacion personal",
        "superación personal",
        "superacion personal",
        "esfuerzo personal",
        "premio por esfuerzo",
        "reconocimiento por superación",
        "reconocimiento por superacion"
    ],
    contenido: `En el acto de graduación se hará reconocimiento por esfuerzo y superación personal. Este reconocimiento puede otorgarse hasta a 4 estudiantes.`
},

{
    titulo: "Reconocimiento al mejor perfil Idescano",
    palabras: [
        "mejor perfil idescano",
        "perfil idescano",
        "mejor perfil",
        "estudiante con perfil idescano",
        "premio perfil idescano",
        "reconocimiento perfil idescano"
    ],
    contenido: `En el acto de graduación se hará reconocimiento al mejor perfil Idescano. Este reconocimiento puede otorgarse hasta a 2 estudiantes.`
},

{
    titulo: "Reconocimiento por liderazgo",
    palabras: [
        "liderazgo",
        "premio al liderazgo",
        "reconocimiento por liderazgo",
        "estudiante líder",
        "estudiante lider",
        "mejor líder",
        "mejor lider"
    ],
    contenido: `En el acto de graduación se hará reconocimiento por liderazgo mediante mención de honor, placa o distinción.`
},


{
    titulo: "Artículo Nueve: Normas de higiene personal y preservación de la salud pública",
    palabras: [
        "artículo nueve",
        "articulo nueve",
        "higiene personal",
        "higiene",
        "salud pública",
        "salud publica",
        "normas de higiene",
        "preservación de la salud",
        "preservacion de la salud",
        "presentación personal",
        "presentacion personal",
        "buena presentación",
        "buena presentacion"
    ],
    contenido: `ARTÍCULO NUEVE: NORMAS DE HIGIENE PERSONAL Y DE PRESERVACIÓN DE LA SALUD PÚBLICA.

La buena presentación para la institución tiene que ver con el uso del uniforme correspondiente y acorde al diseño establecido, además de mantener una adecuada higiene bucal, de las axilas, cabello, cuerpo, manos y pies.

Estas normas buscan posibilitar un ambiente saludable y evitar el riesgo de transmitir enfermedades entre los miembros de la comunidad educativa.

Por consiguiente, los estudiantes deben mantener un corte de cabello normal, sin extravagancia, las manos y los pies aseados y las uñas recortadas como parte de su buena presentación personal y para evitar riesgos de accidentes entre los demás miembros de la comunidad escolar.`
},

{
    titulo: "Artículo Nueve: Programas de prevención de la salud",
    palabras: [
        "programas de salud",
        "prevención de la salud",
        "prevencion de la salud",
        "salud mental",
        "prevención",
        "prevencion",
        "programas de prevención",
        "programas de prevencion",
        "educación sexual",
        "educacion sexual",
        "proyecto de educación sexual",
        "proyecto de educacion sexual",
        "psicorientación",
        "psicorientacion",
        "prevención de enfermedades"
    ],
    contenido: `La Institución contempla dentro del PEI programas de iniciativas propias y en convenio con entidades locales y departamentales para la prevención de la salud y la salud mental.

Estos programas se desarrollan mediante proyectos como el de educación sexual, entre otros, que benefician a la comunidad educativa.

Estos procesos son coordinados a través del departamento de Psicorientación y con el apoyo de entidades como la Policía, Comisaría de Familia, Personería y Hospital.`
},

{
    titulo: "Artículo Nueve: Botiquín y primeros auxilios",
    palabras: [
        "botiquín",
        "botiquin",
        "primeros auxilios",
        "comité de primeros auxilios",
        "comite de primeros auxilios",
        "medicamentos",
        "elementos de primeros auxilios",
        "golpes",
        "contusiones",
        "emergencia",
        "emergencias",
        "atención de emergencia",
        "atencion de emergencia"
    ],
    contenido: `La institución dispone, a través del comité de primeros auxilios, de un botiquín con medicamentos y elementos básicos de primeros auxilios.

Este botiquín permite atender golpes, contusiones o casos de emergencia.`
},

{
    titulo: "Artículo Nueve: Cuidado del ambiente y PRAE",
    palabras: [
        "PRAE",
        "cuidado del ambiente",
        "cuidado del medio ambiente",
        "medio ambiente",
        "ambiente escolar",
        "cultura ambiental",
        "residuos",
        "residuos orgánicos",
        "residuos biologicos",
        "residuos biológicos",
        "manejo de residuos",
        "depósitos de agua",
        "depositos de agua",
        "protección del ambiente",
        "proteccion del ambiente",
        "conservar el ambiente",
        "enfermedades por residuos"
    ],
    contenido: `La institución promueve a través del PRAE la cultura del cuidado del ambiente tanto en el contexto escolar como municipal.

Esto se realiza mediante el manejo adecuado de residuos orgánicos y biológicos y de los depósitos de agua, con el fin de conservar y proteger el ambiente y evitar la propagación de enfermedades en la comunidad educativa y su entorno.`
},


{
    titulo: "Artículo Diez: Compromisos frente a la utilización y conservación de los bienes personales y colectivos",
    palabras: [
        "artículo diez",
        "articulo diez",
        "bienes personales",
        "bienes colectivos",
        "bienes de la institución",
        "bienes de la institucion",
        "elementos de la institución",
        "elementos de la institucion",
        "equipos de la institución",
        "equipos de la institucion",
        "herramientas de la institución",
        "herramientas de la institucion",
        "cuidado de los bienes",
        "conservación de los bienes",
        "conservacion de los bienes",
        "daños a los bienes",
        "dañar los bienes",
        "responsabilidad por daños",
        "pagar por daños",
        "deterioros"
    ],
    contenido: `ARTÍCULO DIEZ: COMPROMISOS FRENTE A LA UTILIZACIÓN Y CONSERVACIÓN DE LOS BIENES PERSONALES Y COLECTIVOS.

Los bienes de uso personal y colectivo de que dispone la institución deben ser tratados con mucho cuidado y responsabilidad para evitar daños y posibles accidentes dentro de los miembros de la comunidad educativa y garantizar un buen servicio.

Las personas que no hagan un buen uso de los elementos, equipos y herramientas de la institución y que, como producto de su descuido, resulten dañados, deberán responder económicamente por los deterioros causados.`
},

{
    titulo: "Artículo Once: Comportamiento en relación con el cuidado del ambiente escolar",
    palabras: [
        "artículo once",
        "articulo once",
        "ambiente escolar",
        "cuidado del ambiente escolar",
        "cuidar el ambiente",
        "cuidado del ambiente",
        "ambiente idescano",
        "PRAE",
        "proyecto ambiental escolar",
        "Proyecto Ambiental Escolar",
        "recomendaciones del PRAE",
        "orientaciones del PRAE",
        "cuidado ambiental",
        "comportamiento ambiental"
    ],
    contenido: `ARTÍCULO ONCE: COMPORTAMIENTO EN RELACIÓN CON EL CUIDADO DEL AMBIENTE ESCOLAR.

Cada miembro de la comunidad Idescana será una persona diligente para el cuidado del ambiente escolar y debe poner en práctica las recomendaciones y orientaciones establecidas en el PRAE, que significa Proyecto Ambiental Escolar, el cual hace parte del P.E.I., Proyecto Educativo Institucional.`
},

{
    titulo: "Artículo Doce: Procedimiento en caso de situaciones entre miembros de la comunidad Idescana",
    palabras: [
        "artículo doce",
        "articulo doce",
        "relaciones entre los miembros",
        "relaciones entre miembros",
        "miembros de la comunidad",
        "comunidad Idescana",
        "comunidad idescana",
        "situaciones entre miembros",
        "problemas entre miembros",
        "conflictos entre miembros",
        "procedimiento en caso de situaciones",
        "procedimiento de conflictos",
        "sana convivencia",
        "relaciones de convivencia",
        "buen trato",
        "respeto por las diferencias",
        "diferencias individuales",
        "transformación de conflictos",
        "transformacion de conflictos",
        "ambiente escolar sano",
        "ambiente escolar agradable",
        "sentido de pertenencia",
        "compromiso personal",
        "compromiso colectivo"
    ],
    contenido: `ARTÍCULO DOCE: PROCEDIMIENTO EN CASO DE SITUACIONES ENTRE MIEMBROS DE LA COMUNIDAD IDESCANA.

La institución es el lugar de encuentro de personas, estilos, formas de pensar y de actuar diferentes. Por eso, cada integrante de la comunidad educativa debe cuidar especialmente:

• El sentido de pertenencia con la institución.

• El compromiso personal y colectivo para transformar positivamente las conductas y actitudes que garanticen una sana convivencia.

• El desarrollo de formas de convivencia basadas en el buen trato.

• La comprensión y el respeto por las diferencias individuales.

• La transformación de los conflictos en elementos positivos de crecimiento individual y grupal.

• La responsabilidad de todos en la preservación de un ambiente escolar sano y agradable, donde todos se sientan a gusto.

• El cuidado de sí mismo, del otro y de lo que es de todos.`
},


{
    titulo: "Artículo Doce: Relaciones entre los miembros de la comunidad educativa",
    palabras: [
        "relaciones con los demás",
        "relaciones entre los miembros",
        "corresponsabilidad",
        "aceptación",
        "inclusión",
        "uso responsable de la libertad",
        "manejo equilibrado de la autonomía",
        "autonomía",
        "libertad",
        "garantía de las autoridades",
        "autoridades de la institución"
    ],
    contenido: `Las relaciones con los demás se enmarcan entre los principios de corresponsabilidad, aceptación e inclusión.

Se establece como criterio fundamental el uso responsable de la libertad y el manejo equilibrado de la autonomía.

Los miembros de la comunidad educativa contarán con la debida garantía por parte de las autoridades.`
},

{
    titulo: "Artículo Doce: El curso como dinamizador de la convivencia",
    palabras: [
        "curso",
        "grupo de estudiantes",
        "director de grupo",
        "directora de grupo",
        "dinamizador de la convivencia",
        "convivencia del curso",
        "proyecto del curso",
        "proyecto de convivencia",
        "planes del curso",
        "programas académicos",
        "competencias",
        "habilidades",
        "destrezas",
        "estándares",
        "estandares"
    ],
    contenido: `El curso es el grupo de estudiantes de un mismo grado orientado por un Director o Directora y será el dinamizador primario de la convivencia.

Cada curso construye un proyecto que favorece en cada estudiante y en el grupo en general vivenciar, apropiar y madurar los principios contenidos en este Manual y en general en el Proyecto Educativo Institucional.

Además, el curso debe garantizar un correcto desarrollo de los planes y programas del orden académico para garantizar el desarrollo de las competencias, habilidades y destrezas, de acuerdo con los estándares propios de los planes de estudio.`
},

{
    titulo: "Artículo Doce.Uno: Situación entre estudiantes",
    palabras: [
        "doce.uno",
        "doce uno",
        "12.1",
        "situación entre estudiantes",
        "situacion entre estudiantes",
        "problema entre estudiantes",
        "conflicto entre estudiantes",
        "estudiante contra estudiante",
        "problema con un compañero",
        "problema con una compañera",
        "conflicto con un compañero",
        "conflicto con una compañera",
        "qué hago si tengo un problema con otro estudiante",
        "que hago si tengo un problema con otro estudiante"
    ],
    contenido: `ARTÍCULO DOCE.UNO: CUANDO LA SITUACIÓN ES ENTRE ESTUDIANTES.

Si la situación se presenta entre estudiantes, se debe seguir este procedimiento:

1. Conciliar con el compañero o compañera.
2. Elevar la queja ante un docente.
3. Dirigirse a la dirección de grupo.
4. Informar a la coordinación o a la orientadora escolar.`
},

{
    titulo: "Artículo Doce.Dos: Situación de un estudiante contra un docente",
    palabras: [
        "doce.dos",
        "doce dos",
        "12.2",
        "estudiante contra docente",
        "estudiante contra profesor",
        "problema con un docente",
        "problema con un profesor",
        "conflicto con un docente",
        "conflicto con un profesor",
        "queja contra un docente",
        "queja contra un profesor",
        "inconformidad con un docente",
        "inconformidad con un profesor"
    ],
    contenido: `ARTÍCULO DOCE.DOS: CUANDO LA SITUACIÓN ES UN ESTUDIANTE CONTRA UN DOCENTE.

Si la situación se presenta entre un estudiante y un docente, se debe seguir este procedimiento:

1. Diálogo estudiante - docente.
2. Dirigirse al director de grupo.
3. Informar a la coordinación o a la orientadora escolar.
4. Comunicar a la rectoría.`
},

{
    titulo: "Artículo Doce.Tres: Inconformidad de un estudiante contra un directivo docente",
    palabras: [
        "doce.tres",
        "doce tres",
        "12.3",
        "estudiante contra directivo",
        "estudiante contra directivo docente",
        "problema con un directivo",
        "conflicto con un directivo",
        "queja contra un directivo",
        "inconformidad contra un directivo",
        "inconformidad de un estudiante",
        "problema con rector",
        "problema con coordinador",
        "queja contra rector",
        "queja contra coordinador"
    ],
    contenido: `ARTÍCULO DOCE.TRES: CUANDO LA INCONFORMIDAD ES DE UN ESTUDIANTE EN CONTRA DE UN DIRECTIVO DOCENTE.

Si la inconformidad es de un estudiante en contra de un directivo docente, se debe seguir este procedimiento:

1. Diálogo estudiante - directivo.
2. Dirigirse a orientación escolar.`
},


{
    titulo: "Artículo Doce.Tres: Inconformidad de un estudiante contra un directivo docente",
    palabras: [
        "doce.tres",
        "doce tres",
        "12.3",
        "estudiante contra directivo",
        "estudiante contra directivo docente",
        "problema con un directivo",
        "conflicto con un directivo",
        "queja contra un directivo",
        "inconformidad contra un directivo",
        "problema con rector",
        "problema con coordinador",
        "queja contra rector",
        "queja contra coordinador"
    ],
    contenido: `ARTÍCULO DOCE.TRES: CUANDO LA INCONFORMIDAD ES DE UN ESTUDIANTE EN CONTRA DE UN DIRECTIVO DOCENTE.

Si la inconformidad es de un estudiante en contra de un directivo docente, se debe seguir este procedimiento:

1. Diálogo estudiante - directivo.
2. Dirigirse a orientación escolar.
3. Comunicar al comité de convivencia.`
},

{
    titulo: "Artículo Doce.Cuatro: Situación de un docente o directivo docente contra un estudiante",
    palabras: [
        "doce.cuatro",
        "doce cuatro",
        "12.4",
        "docente contra estudiante",
        "profesor contra estudiante",
        "directivo contra estudiante",
        "directivo docente contra estudiante",
        "problema de un docente con un estudiante",
        "problema de un profesor con un estudiante",
        "queja de un docente contra estudiante",
        "situación de docente contra estudiante"
    ],
    contenido: `ARTÍCULO DOCE.CUATRO: CUANDO LA SITUACIÓN ES DE UN DOCENTE O DIRECTIVO DOCENTE CONTRA UN ESTUDIANTE.

Cuando la situación es de un docente o directivo docente contra un estudiante, se debe seguir este procedimiento:

1. Orientar directamente al estudiante de manera respetuosa.
2. Dirigirse a la dirección de grupo.
3. Informar a la orientadora escolar.
4. Remitirse a la coordinación y/o rectoría.
5. Comunicar al comité de convivencia.`
},

{
    titulo: "Artículo Doce.Cinco: Situación de un docente contra otro docente",
    palabras: [
        "doce.cinco",
        "doce cinco",
        "12.5",
        "docente contra docente",
        "profesor contra profesor",
        "problema entre docentes",
        "conflicto entre docentes",
        "problema entre profesores",
        "conflicto entre profesores",
        "queja entre docentes",
        "situación entre docentes"
    ],
    contenido: `ARTÍCULO DOCE.CINCO: CUANDO LA SITUACIÓN ES DE UN DOCENTE EN CONTRA DE OTRO DOCENTE.

Cuando la situación es de un docente en contra de otro docente, se debe seguir este procedimiento:

1. Diálogo docente - docente.
2. Dirigirse a orientación escolar.
3. Remitir a coordinación y/o rectoría.
4. Comunicar al comité de convivencia.`
},

{
    titulo: "Artículo Doce.Seis: Situación de un docente contra un directivo",
    palabras: [
        "doce.seis",
        "doce seis",
        "12.6",
        "docente contra directivo",
        "profesor contra directivo",
        "problema de un docente con un directivo",
        "conflicto de un docente con un directivo",
        "queja de un docente contra un directivo",
        "situación entre docente y directivo",
        "problema con un directivo"
    ],
    contenido: `ARTÍCULO DOCE.SEIS: CUANDO LA SITUACIÓN ES DE UN DOCENTE CONTRA UN DIRECTIVO.

Cuando la situación es de un docente contra un directivo, se debe seguir este procedimiento:

1. Diálogo docente - directivo.
2. Dirigirse a orientación escolar.
3. Remitir a coordinación o rectoría dependiendo del caso.
4. Comunicar al comité de convivencia.`
},


{
    titulo: "Artículo Doce.Siete: Situación de un directivo contra un docente",
    palabras: [
        "doce.siete",
        "doce siete",
        "12.7",
        "directivo contra docente",
        "directivo contra profesor",
        "problema de un directivo con un docente",
        "conflicto de un directivo con un docente",
        "queja de un directivo contra un docente",
        "situación entre directivo y docente"
    ],
    contenido: `ARTÍCULO DOCE.SIETE: CUANDO LA SITUACIÓN ES DE UN DIRECTIVO CONTRA UN DOCENTE.

Cuando la situación es de un directivo contra un docente, se debe seguir este procedimiento:

1. Diálogo directivo - docente.
2. Dirigirse a orientación escolar.
3. Remitirse a la rectoría dependiendo del caso.
4. Comunicar al comité de convivencia.`
},

{
    titulo: "Artículo Doce.Ocho: Situación de un padre de familia contra otro miembro de la comunidad educativa",
    palabras: [
        "doce.ocho",
        "doce ocho",
        "12.8",
        "padre de familia contra docente",
        "padre de familia contra directivo",
        "padre contra docente",
        "padre contra directivo",
        "padre de familia contra estudiante",
        "padre de familia contra miembro de la comunidad",
        "problema de un padre de familia",
        "conflicto de un padre de familia",
        "queja de un padre de familia",
        "situación entre padre y docente",
        "situación entre padre y directivo"
    ],
    contenido: `ARTÍCULO DOCE.OCHO: CUANDO LA SITUACIÓN ES DE UN PADRE DE FAMILIA CONTRA OTRO MIEMBRO DE LA COMUNIDAD EDUCATIVA.

Cuando la situación es de un padre de familia contra otro miembro de la comunidad educativa, se debe seguir este procedimiento:

1. Dirigirse a rectoría y/o coordinación dependiendo del caso.
2. Dirigirse a orientación escolar.
3. Comunicar al comité de convivencia.`
},


{
    titulo: "Artículo Doce.Nueve: Situación de un estudiante contra un administrativo",
    palabras: [
        "doce.nueve",
        "doce nueve",
        "12.9",
        "estudiante contra administrativo",
        "estudiante contra personal administrativo",
        "problema con un administrativo",
        "conflicto con un administrativo",
        "queja contra un administrativo",
        "situación entre estudiante y administrativo"
    ],
    contenido: `ARTÍCULO DOCE.NUEVE: CUANDO LA SITUACIÓN ES DE UN ESTUDIANTE CONTRA UN ADMINISTRATIVO.

Cuando la situación es de un estudiante contra un administrativo, se debe seguir este procedimiento:

1. Diálogo entre el estudiante y el administrativo.
2. Dirigirse a rectoría o coordinación.
3. Comunicar a sicoorientación.
4. Dirigirse al comité de convivencia.`
},

{
    titulo: "Artículo Doce.Diez: Situación de un administrativo contra un estudiante",
    palabras: [
        "doce.diez",
        "doce diez",
        "12.10",
        "administrativo contra estudiante",
        "personal administrativo contra estudiante",
        "problema de un administrativo con un estudiante",
        "conflicto de un administrativo con un estudiante",
        "queja de un administrativo contra un estudiante",
        "situación entre administrativo y estudiante"
    ],
    contenido: `ARTÍCULO DOCE.DIEZ: CUANDO LA SITUACIÓN ES DE UN ADMINISTRATIVO CONTRA UN ESTUDIANTE.

Cuando la situación es de un administrativo contra un estudiante, se debe seguir este procedimiento:

1. Diálogo entre el administrativo y el estudiante.
2. Dirigirse a rectoría o coordinación.
3. Comunicar a sicoorientación.
4. Dirigirse al comité de convivencia.`
},

{
    titulo: "Artículo Doce.Once: Situación de un docente y/o directivo docente contra un administrativo",
    palabras: [
        "doce.once",
        "doce once",
        "12.11",
        "docente contra administrativo",
        "directivo docente contra administrativo",
        "docente y administrativo",
        "directivo y administrativo",
        "problema entre docente y administrativo",
        "conflicto entre docente y administrativo",
        "queja contra administrativo"
    ],
    contenido: `ARTÍCULO DOCE.ONCE: CUANDO LA SITUACIÓN ES DE UN DOCENTE Y/O DIRECTIVO DOCENTE CONTRA UN ADMINISTRATIVO.

Cuando la situación es de un docente y/o directivo docente contra un administrativo, se debe seguir este procedimiento:

1. Diálogo entre docente o directivo docente y el administrativo.
2. Dirigirse a rectoría o coordinación.
3. Comunicar a sicoorientación.
4. Dirigirse al comité de convivencia.`
},

{
    titulo: "Artículo Doce.Doce: Situación de un administrativo contra un docente o directivo docente",
    palabras: [
        "doce.doce",
        "doce doce",
        "12.12",
        "administrativo contra docente",
        "administrativo contra directivo docente",
        "administrativo contra profesor",
        "problema entre administrativo y docente",
        "problema entre administrativo y directivo",
        "conflicto entre administrativo y docente",
        "conflicto entre administrativo y directivo",
        "queja de un administrativo contra un docente"
    ],
    contenido: `ARTÍCULO DOCE.DOCE: CUANDO LA SITUACIÓN ES DE UN ADMINISTRATIVO CONTRA UN DOCENTE O DIRECTIVO DOCENTE.

Cuando la situación es de un administrativo contra un docente o directivo docente, se debe seguir este procedimiento:

1. Diálogo entre administrativo y docente o directivo docente.
2. Dirigirse a rectoría o coordinación.
3. Comunicar a sicoorientación.
4. Dirigirse al comité de convivencia.`
},


{
    titulo: "Título II: Derechos humanos, sexuales y reproductivos y prevención y mitigación de la violencia escolar",
    palabras: [
        "titulo dos",
        "título dos",
        "derechos humanos",
        "derechos sexuales",
        "derechos reproductivos",
        "derechos humanos sexuales y reproductivos",
        "violencia escolar",
        "prevencion de la violencia escolar",
        "prevención de la violencia escolar",
        "mitigacion de la violencia escolar",
        "mitigación de la violencia escolar",
        "ley 1620",
        "ley 1620 de 2013",
        "decreto 1965",
        "decreto 1965 de 2013",
        "competencias ciudadanas",
        "educacion para la sexualidad",
        "educación para la sexualidad",
        "buen trato",
        "inclusion",
        "inclusión",
        "politica institucional",
        "política institucional"
    ],
    contenido: `TÍTULO II: DERECHOS HUMANOS, SEXUALES Y REPRODUCTIVOS Y PREVENCIÓN Y MITIGACIÓN DE LA VIOLENCIA ESCOLAR.

INTRODUCCIÓN

La sanción de la Ley 1620, promulgada el 15 de marzo de 2013, y la expedición del Decreto reglamentario 1965 del 11 de septiembre de 2013 introducen el concepto de formación para los derechos humanos, la educación para la sexualidad y la prevención y mitigación de la violencia escolar.

Estos propósitos serán cumplidos a través de la promoción, orientación y coordinación de estrategias, programas y actividades, en el marco de la corresponsabilidad de las personas, las instituciones educativas, la familia, la sociedad y el Estado.

La política institucional para la inclusión y el buen trato está relacionada con lo establecido por las normas legales y busca que toda la Comunidad Educativa conozca, analice y se sensibilice sobre todo lo que implica dicha política, garantizando mediante las prácticas cotidianas el cumplimiento de la normatividad establecida.

La Institución Educativa Delicias San Carlos asume un mayor compromiso para incentivar el estudio y la apropiación de las competencias ciudadanas, entendidas como el conjunto de conocimientos y habilidades cognitivas, emocionales y comunicativas que, articuladas entre sí, hacen posible la consolidación de una cultura inclusiva y la prevención y mitigación de la violencia escolar.

También promueve la educación para el ejercicio de los derechos humanos, sexuales y reproductivos, entendida como aquella orientada a formar personas capaces de reconocerse como sujetos activos titulares de estos derechos. Esto permite desarrollar competencias para contribuir positivamente a la construcción del proyecto de vida, la transformación de las dinámicas sociales y el establecimiento de relaciones más justas, democráticas y responsables.`
},


{
    titulo: "Artículo Trece: Ruta de Atención Integral (RAI)",
    palabras: [
        "articulo trece",
        "artículo trece",
        "trece",
        "13",
        "ruta de atencion integral",
        "ruta de atención integral",
        "rai",
        "protocolos de convivencia",
        "atencion de casos",
        "atención de casos",
        "violencia escolar",
        "acoso escolar",
        "derechos humanos",
        "derechos sexuales",
        "derechos reproductivos",
        "dhsr",
        "vulneracion de derechos",
        "vulneración de derechos",
        "embarazo adolescente",
        "situaciones tipo",
        "tipo uno",
        "tipo dos",
        "tipo tres"
    ],
    contenido: `ARTÍCULO TRECE: RUTA DE ATENCIÓN INTEGRAL (RAI).

La Ruta de Atención Integral (RAI) es el mecanismo institucional mediante el cual se establecen los protocolos que se deben activar en todos los casos en que se vea afectada la convivencia y los derechos humanos, sexuales o reproductivos de los estudiantes, articulando una oferta de servicio ágil, integral y complementario.

El sistema garantizará la atención inmediata y pertinente de los casos de violencia escolar, acoso o vulneración de derechos sexuales y reproductivos que se presenten en el establecimiento o en sus alrededores y que involucren a cualquier estudiante, así como el embarazo adolescente.

Habrá un componente de promoción y prevención como parte del plan integral de formación contemplado en el PEI y operacionalizado en el Plan de Estudios. Las direcciones de curso y la Psicorientación serán escenarios fundamentales para las actividades de promoción y prevención.

De acuerdo con el Decreto 1965, las situaciones que afecten el clima escolar o los derechos humanos, sexuales y reproductivos se tipifican en tres categorías:

SITUACIONES TIPO I:
Corresponden a conflictos manejados inadecuadamente y/o situaciones esporádicas que inciden negativamente en el clima escolar y que en ningún caso generan daños al cuerpo o a la salud.

Se tipifican:
- Riñas o peleas simples.
- Daños en propiedad ajena.
- Agresión verbal.
- Fumar.
- Consumir sustancias prohibidas.
- Vandalismo.
- Embarazo adolescente.

SITUACIONES TIPO II:
Corresponden a situaciones de agresión escolar, acoso (bullying) y acoso en redes sociales de Internet (ciberbullying), que no revisten las características de la comisión de un delito, que se presenten de manera repetida o sistemática y/o que causen daño al cuerpo o a la salud sin generar incapacidad alguna para los involucrados.

También incluyen las situaciones de consumo de sustancias psicoactivas.

SITUACIONES TIPO III:
Corresponden a las situaciones de agresión escolar que sean constitutivas de presuntos delitos contra la libertad, integridad física y/o formación sexual, o cuando constituyen cualquier otro delito establecido en la ley penal colombiana vigente.

Incluyen:
- Agresión física con lesiones personales.
- Distribución de sustancias prohibidas.
- Agresión sexual.
- Porte de armas.
- Extorsión.
- Agiotismo.
- Robo.
- Casos de violencia intrafamiliar.
- Violencia sexual.

Cualquier miembro de la comunidad educativa u otra persona, como conocido, vecino, amigo o familiar, tiene el derecho y a la vez la obligación de informar a cualquier autoridad escolar y por cualquier medio, ya sea oral, escrito o mediante la plataforma, sobre cualquier situación que, según su conocimiento, esté afectando la convivencia o los derechos humanos, sexuales y reproductivos de un miembro de la comunidad educativa, particularmente si es estudiante.`
},

{
    titulo: "Artículo Trece: Situaciones Tipo I",
    palabras: [
        "situacion tipo uno",
        "situación tipo uno",
        "tipo uno",
        "tipo i",
        "situaciones tipo i",
        "que es tipo uno",
        "qué es tipo uno",
        "faltas tipo uno",
        "conflictos tipo uno",
        "riña simple",
        "riñas simples",
        "pelea simple",
        "daño en propiedad ajena",
        "agresion verbal",
        "agresión verbal",
        "vandalismo tipo uno"
    ],
    contenido: `ARTÍCULO TRECE: SITUACIONES TIPO I.

Las situaciones Tipo I corresponden a conflictos manejados inadecuadamente y/o situaciones esporádicas que inciden negativamente en el clima escolar y que en ningún caso generan daños al cuerpo o a la salud.

Según el Manual, se tipifican como situaciones Tipo I:
- Riñas o peleas simples.
- Daños en propiedad ajena.
- Agresión verbal.
- Fumar.
- Consumir sustancias prohibidas.
- Vandalismo.
- Embarazo adolescente.`
},

{
    titulo: "Artículo Trece: Situaciones Tipo II",
    palabras: [
        "situacion tipo dos",
        "situación tipo dos",
        "tipo dos",
        "tipo ii",
        "situaciones tipo ii",
        "que es tipo dos",
        "qué es tipo dos",
        "faltas tipo dos",
        "acoso escolar tipo dos",
        "bullying",
        "ciberbullying",
        "acoso en redes sociales",
        "agresion escolar repetida",
        "agresión escolar repetida",
        "sustancias psicoactivas"
    ],
    contenido: `ARTÍCULO TRECE: SITUACIONES TIPO II.

Las situaciones Tipo II corresponden a situaciones de agresión escolar, acoso (bullying) y acoso en redes sociales de Internet (ciberbullying), que no revisten las características de la comisión de un delito, que se presenten de manera repetida o sistemática y/o que causen daño al cuerpo o a la salud sin generar incapacidad alguna para los involucrados.

Además, incluyen las situaciones de consumo de sustancias psicoactivas.`
},

{
    titulo: "Artículo Trece: Situaciones Tipo III",
    palabras: [
        "situacion tipo tres",
        "situación tipo tres",
        "tipo tres",
        "tipo iii",
        "situaciones tipo iii",
        "que es tipo tres",
        "qué es tipo tres",
        "faltas tipo tres",
        "delitos tipo tres",
        "agresion fisica con lesiones",
        "agresión física con lesiones",
        "agresion sexual",
        "agresión sexual",
        "porte de armas",
        "distribucion de sustancias",
        "distribución de sustancias",
        "extorsion",
        "extorsión",
        "agiotismo",
        "robo",
        "violencia intrafamiliar",
        "violencia sexual"
    ],
    contenido: `ARTÍCULO TRECE: SITUACIONES TIPO III.

Las situaciones Tipo III corresponden a las situaciones de agresión escolar que sean constitutivas de presuntos delitos contra la libertad, integridad física y/o formación sexual, o cuando constituyen cualquier otro delito establecido en la ley penal colombiana vigente.

Incluyen:
- Agresión física con lesiones personales.
- Distribución de sustancias prohibidas.
- Agresión sexual.
- Porte de armas.
- Extorsión.
- Agiotismo.
- Robo.
- Casos de violencia intrafamiliar.
- Violencia sexual.`
},


{
    titulo: "Glosario: Conflictos",
    palabras: [
        "conflicto",
        "conflictos",
        "que es un conflicto",
        "qué es un conflicto",
        "definicion de conflicto",
        "definición de conflicto"
    ],
    contenido: `GLOSARIO: CONFLICTOS.

Los conflictos son situaciones que se caracterizan porque hay una incompatibilidad real o percibida entre una o varias personas frente a sus intereses.`
},

{
    titulo: "Glosario: Conflictos manejados inadecuadamente",
    palabras: [
        "conflictos manejados inadecuadamente",
        "conflicto manejado inadecuadamente",
        "que son conflictos manejados inadecuadamente",
        "qué son conflictos manejados inadecuadamente",
        "conflictos mal manejados",
        "conflicto mal manejado",
        "definicion de conflictos manejados inadecuadamente",
        "definición de conflictos manejados inadecuadamente"
    ],
    contenido: `GLOSARIO: CONFLICTOS MANEJADOS INADECUADAMENTE.

Son situaciones en las que los conflictos no son resueltos de manera constructiva y dan lugar a hechos que afectan la convivencia escolar, como altercados, enfrentamientos o riñas entre dos o más miembros de la comunidad educativa, de los cuales por lo menos uno es estudiante y siempre y cuando no exista una afectación al cuerpo o a la salud de cualquiera de los involucrados.`
},

{
    titulo: "Glosario: Agresión escolar",
    palabras: [
        "agresion escolar",
        "agresión escolar",
        "que es agresion escolar",
        "qué es agresión escolar",
        "definicion de agresion escolar",
        "definición de agresión escolar",
        "agresión en el colegio",
        "agresion en el colegio"
    ],
    contenido: `GLOSARIO: AGRESIÓN ESCOLAR.

Es toda acción realizada por uno o varios integrantes de la comunidad educativa que busca afectar negativamente a otros miembros de la comunidad educativa, de los cuales por lo menos uno es estudiante.

La agresión escolar puede ser física, verbal, gestual, relacional y electrónica.`
},

{
    titulo: "Glosario: Agresión física",
    palabras: [
        "agresion fisica",
        "agresión física",
        "que es agresion fisica",
        "qué es agresión física",
        "definicion de agresion fisica",
        "definición de agresión física",
        "agresión corporal",
        "agresion corporal"
    ],
    contenido: `GLOSARIO: AGRESIÓN FÍSICA.

Es toda acción que tenga como finalidad causar daño al cuerpo o a la salud de otra persona.

Incluye acciones como patadas, empujones, cachetadas, mordiscos, rasguños, pellizcos, puñetazos y jalones de pelo, entre otras.`
},


{
    titulo: "Glosario: Agresión verbal",
    palabras: [
        "agresion verbal",
        "agresión verbal",
        "que es agresion verbal",
        "qué es agresión verbal",
        "definicion de agresion verbal",
        "definición de agresión verbal",
        "insultos",
        "apodos ofensivos",
        "burlas",
        "amenazas"
    ],
    contenido: `GLOSARIO: AGRESIÓN VERBAL.

Es toda acción que busque con las palabras degradar, humillar, atemorizar o descalificar a otros.

Incluye insultos, apodos ofensivos, burlas y amenazas.`
},

{
    titulo: "Glosario: Agresión gestual",
    palabras: [
        "agresion gestual",
        "agresión gestual",
        "que es agresion gestual",
        "qué es agresión gestual",
        "definicion de agresion gestual",
        "definición de agresión gestual",
        "gestos ofensivos",
        "gestos de agresion"
    ],
    contenido: `GLOSARIO: AGRESIÓN GESTUAL.

Es toda acción que busque con los gestos degradar, humillar, atemorizar o descalificar a otros.`
},

{
    titulo: "Glosario: Agresión relacional",
    palabras: [
        "agresion relacional",
        "agresión relacional",
        "que es agresion relacional",
        "qué es agresión relacional",
        "definicion de agresion relacional",
        "definición de agresión relacional",
        "excluir de grupos",
        "aislar deliberadamente",
        "difundir rumores",
        "difundir secretos",
        "afectar la imagen",
        "afectar el estatus"
    ],
    contenido: `GLOSARIO: AGRESIÓN RELACIONAL.

Es toda acción que busque afectar negativamente las relaciones que otros tienen.

Incluye excluir de grupos, aislar deliberadamente y difundir rumores o secretos buscando afectar negativamente el estatus o imagen que tiene la persona frente a otros.`
},

{
    titulo: "Glosario: Agresión electrónica",
    palabras: [
        "agresion electronica",
        "agresión electrónica",
        "que es agresion electronica",
        "qué es agresión electrónica",
        "definicion de agresion electronica",
        "definición de agresión electrónica",
        "agresion por internet",
        "agresión por internet",
        "agresion en redes sociales",
        "agresión en redes sociales",
        "mensajes ofensivos",
        "comentarios ofensivos",
        "fotos humillantes",
        "videos humillantes",
        "correo ofensivo",
        "mensajes de texto ofensivos"
    ],
    contenido: `GLOSARIO: AGRESIÓN ELECTRÓNICA.

Es toda acción que busque afectar negativamente a otros a través de medios electrónicos.

Incluye la divulgación de fotos o videos íntimos o humillantes en Internet, realizar comentarios insultantes u ofensivos sobre otros a través de redes sociales y enviar correos electrónicos o mensajes de texto insultantes u ofensivos, tanto de manera anónima como cuando se revela la identidad de quien los envía.`
},

{
    titulo: "Glosario: Acoso escolar (bullying)",
    palabras: [
        "acoso escolar",
        "bullying",
        "acoso",
        "que es bullying",
        "qué es bullying",
        "que es acoso escolar",
        "qué es acoso escolar",
        "definicion de bullying",
        "definición de bullying",
        "definicion de acoso escolar",
        "definición de acoso escolar",
        "intimidacion escolar",
        "intimidación escolar",
        "humillacion escolar",
        "humillación escolar"
    ],
    contenido: `GLOSARIO: ACOSO ESCOLAR (BULLYING).

De acuerdo con el artículo 2 de la Ley 1620 de 2013, es toda conducta negativa, intencional, metódica y sistemática de agresión, intimidación, humillación, ridiculización, difamación, coacción, aislamiento deliberado, amenaza o incitación a la violencia o cualquier forma de maltrato psicológico, verbal, físico o por medios electrónicos contra un niño, niña o adolescente.

Esta conducta puede ser realizada por un estudiante o varios de sus pares con quienes mantiene una relación de poder asimétrica y se presenta de forma reiterada o a lo largo de un tiempo determinado.

También puede ocurrir por parte de docentes contra estudiantes, o por parte de estudiantes contra docentes, ante la indiferencia o complicidad de su entorno.`
},


{
    titulo: "Glosario: Ciberacoso escolar (ciberbullying)",
    palabras: [
        "ciberacoso escolar",
        "ciberbullying",
        "ciberacoso",
        "que es ciberbullying",
        "qué es ciberbullying",
        "que es ciberacoso",
        "qué es ciberacoso",
        "acoso por internet",
        "acoso en internet",
        "acoso en redes sociales",
        "intimidacion por internet",
        "intimidación por internet",
        "maltrato psicologico por internet",
        "maltrato psicológico por internet"
    ],
    contenido: `GLOSARIO: CIBERACOSO ESCOLAR (CIBERBULLYING).

De acuerdo con el artículo 2 de la Ley 1620 de 2013, es toda forma de intimidación con uso deliberado de tecnologías de información, como Internet, redes sociales virtuales, telefonía móvil y videojuegos online, para ejercer maltrato psicológico y continuado.`
},

{
    titulo: "Glosario: Homofobia",
    palabras: [
        "homofobia",
        "que es homofobia",
        "qué es homofobia",
        "definicion de homofobia",
        "definición de homofobia",
        "aversión contra homosexuales",
        "aversion contra homosexuales"
    ],
    contenido: `GLOSARIO: HOMOFOBIA.

El Manual define la homofobia como la aversión contra hombres o mujeres homosexuales. También señala que generalmente se incluyen a las personas que integran la diversidad sexual, como las personas bisexuales y transexuales, así como personas que presentan actitudes o hábitos comúnmente asociados al otro sexo.`
},

{
    titulo: "Glosario: Protocolo",
    palabras: [
        "protocolo",
        "protocolos",
        "que es un protocolo",
        "qué es un protocolo",
        "definicion de protocolo",
        "definición de protocolo",
        "protocolo de convivencia",
        "protocolo escolar",
        "acciones y estrategias"
    ],
    contenido: `GLOSARIO: PROTOCOLO.

Es un plan escrito y detallado de las acciones y estrategias concretas que se van a llevar a cabo en el establecimiento educativo para responder a las situaciones que se presenten en los tres niveles de atención.`
},

{
    titulo: "Glosario: Violencia sexual",
    palabras: [
        "violencia sexual",
        "que es violencia sexual",
        "qué es violencia sexual",
        "definicion de violencia sexual",
        "definición de violencia sexual",
        "violencia sexual contra menores",
        "violencia sexual contra niños",
        "violencia sexual contra adolescentes"
    ],
    contenido: `GLOSARIO: VIOLENCIA SEXUAL.

De acuerdo con lo establecido en el artículo 2 de la Ley 1146 de 2007, se entiende por violencia sexual contra niños, niñas y adolescentes todo acto o comportamiento de tipo sexual ejercido sobre un niño, niña o adolescente, utilizando la fuerza o cualquier forma de coerción física, psicológica o emocional, aprovechando las condiciones de indefensión, de desigualdad y las relaciones de poder existentes entre víctima y agresor.`
},

{
    titulo: "Glosario: Vulneración de los derechos de los niños, niñas y adolescentes",
    palabras: [
        "vulneracion de derechos",
        "vulneración de derechos",
        "vulneracion de los derechos",
        "vulneración de los derechos",
        "derechos vulnerados",
        "que es vulneracion de derechos",
        "qué es vulneración de derechos",
        "daño a los derechos",
        "lesion de derechos",
        "lesión de derechos"
    ],
    contenido: `GLOSARIO: VULNERACIÓN DE LOS DERECHOS DE LOS NIÑOS, NIÑAS Y ADOLESCENTES.

Es toda situación de daño, lesión o perjuicio que impide el ejercicio pleno de los derechos de los niños, niñas y adolescentes.`
},

{
    titulo: "Glosario: Restablecimiento de los derechos de los niños, niñas y adolescentes",
    palabras: [
        "restablecimiento de derechos",
        "restablecimiento de los derechos",
        "restablecer derechos",
        "que es restablecimiento de derechos",
        "qué es restablecimiento de derechos",
        "definicion de restablecimiento de derechos",
        "definición de restablecimiento de derechos",
        "restauracion de derechos",
        "restauración de derechos",
        "recuperar derechos vulnerados"
    ],
    contenido: `GLOSARIO: RESTABLECIMIENTO DE LOS DERECHOS DE LOS NIÑOS, NIÑAS Y ADOLESCENTES.

Es el conjunto de actuaciones administrativas y de otra naturaleza que se desarrollan para la restauración de su dignidad e integridad como sujetos de derechos, y de su capacidad para disfrutar efectivamente de los derechos que le han sido vulnerados.`
},


{
    palabras: [
        "debido proceso",
        "proceso",
        "constitución",
        "constitucion",
        "ley",
        "manual de convivencia"
    ],
    contenido: "Debido proceso: Al estudiante le serán aplicadas las normas correspondientes al caso atribuido, ante quien sea competente según lo establecido previamente, observando las formas propias de la Constitución, la Ley y el Manual de Convivencia."
},


{
    palabras: [
        "culpabilidad",
        "culpa",
        "dolo",
        "proceso disciplinario",
        "proceso disciplinario pedagógico",
        "proceso disciplinario pedagogico"
    ],
    contenido: "Culpabilidad: Cuando sea necesario llevar un proceso disciplinario-pedagógico, se excluye toda forma de responsabilidad objetiva. En cualquier caso, las acciones solo serán sancionables a título de dolo o culpa."
},


{
    palabras: [
        "igualdad",
        "mismos derechos",
        "mismas oportunidades",
        "discriminación",
        "discriminacion"
    ],
    contenido: "Igualdad: Todos los alumnos recibirán la misma protección y trato por parte de la Institución Educativa Delicias San Carlos, y tendrán los mismos derechos, libertades y oportunidades sin ninguna discriminación por su edad, raza, origen nacional o familiar, lengua, credo, opinión política o filosófica."
},


{
    palabras: [
        "finalidad de las funciones disciplinarias",
        "funciones disciplinarias",
        "funciones pedagogicas",
        "funciones pedagógicas",
        "funciones disciplinarias pedagogicas",
        "funciones disciplinarias pedagógicas"
    ],
    contenido: "Finalidad de las funciones disciplinarias-pedagógicas: El Manual de Convivencia garantiza el cumplimiento de los fines y funciones propuestas por la Institución Educativa Delicias San Carlos en relación con el comportamiento de sus alumnos cuando éste los afecte o ponga en peligro dicho cumplimiento."
},


{
    palabras: [
        "finalidad de las estrategias formativas",
        "estrategias formativas",
        "medidas disciplinarias",
        "medidas disciplinarias y formativas",
        "prevencion",
        "prevención",
        "formacion en valores",
        "formación en valores"
    ],
    contenido: "Finalidad de las estrategias formativas y/o medidas disciplinarias: Cumplen esencialmente los fines estrictamente pedagógicos, de prevención y formación en valores, o la extinción de comportamientos que contraríen el proceso de aprendizaje propio y ajeno."
},


{
    palabras: [
        "derecho a la defensa",
        "defensa",
        "investigacion disciplinaria",
        "investigación disciplinaria",
        "queja",
        "pruebas",
        "descargos",
        "recurso de reposicion",
        "recurso de reposición"
    ],
    contenido: "Derecho a la defensa: El alumno que sea objeto de una investigación disciplinaria tiene derecho a conocer la queja y las pruebas que se alleguen a la investigación; a que se practiquen las pruebas que solicite, a ser escuchado en su versión libre y espontánea, y a rendir sus descargos, para lo cual puede estar acompañado de sus padres o acudientes, y a interponer el recurso de reposición sobre la decisión tomada."
},


{
    palabras: [
        "proporcionalidad",
        "sancion disciplinaria",
        "sanción disciplinaria",
        "tipo i",
        "tipo ii",
        "tipo iii",
        "graduar la sancion",
        "graduar la sanción"
    ],
    contenido: "Proporcionalidad: La sanción disciplinaria debe corresponder al grado de valoración de la acción cometida, según sea ésta Tipo I, II o III. Al graduar la acción disciplinaria se deben aplicar los criterios contenidos en este Manual de Convivencia."
},


{
    palabras: [
        "motivacion",
        "motivación",
        "decision motivada",
        "decisión motivada",
        "estrategias formativas",
        "medidas disciplinarias"
    ],
    contenido: "Motivación: Toda decisión debe ser motivada. Las estrategias formativas y/o medidas disciplinarias que se apliquen deben contener una sustentación adecuada a su finalidad pedagógica y formativa."
},


{
    palabras: [
        "interpretación del orden interno",
        "interpretacion del orden interno",
        "orden interno",
        "ley disciplinaria",
        "justicia",
        "valores éticos",
        "valores eticos",
        "formación integral",
        "formacion integral"
    ],
    contenido: "Interpretación del orden interno: En la interpretación y aplicación de la ley disciplinaria se debe tener en cuenta que la finalidad del proceso es la prevalencia de la justicia, el reconocimiento de los valores éticos y la formación integral de los estudiantes."
},


{
    palabras: [
        "medidas contra el abuso de los derechos",
        "abuso de los derechos",
        "incumplimiento de los deberes",
        "incumplimiento de deberes",
        "compromisos",
        "situaciones disciplinarias",
        "estrategia formativa",
        "medida correctiva"
    ],
    contenido: "Medidas contra el abuso de los derechos y el incumplimiento de los deberes: El estudiante que abuse de sus derechos, incumpla sus deberes o compromisos e incurra en situaciones disciplinarias, se hará acreedor a una estrategia formativa o medida correctiva."
},


{
    palabras: [
        "bien común",
        "bien comun",
        "protección de los derechos",
        "proteccion de los derechos",
        "intereses de la comunidad educativa",
        "derechos de los demás",
        "derechos de los demas",
        "responsabilidad frente a los derechos"
    ],
    contenido: "Protección de los derechos e intereses de la comunidad educativa (Bien Común): El ejercicio de los derechos de los alumnos, de sus padres o acudientes autorizados, supone la responsabilidad frente a los derechos de los demás educandos y de cada uno de los estamentos que componen la comunidad educativa de la Institución."
},


{
    palabras: [
        "participación",
        "participacion",
        "ser escuchados",
        "solicitar pruebas",
        "padres o acudientes",
        "proceso de análisis comportamental",
        "proceso de analisis comportamental"
    ],
    contenido: "Participación: Todos los alumnos y sus padres o acudientes tienen derecho a ser escuchados y solicitar pruebas en el momento de encontrarse en un proceso de análisis comportamental."
},


{
    palabras: [
        "necesidad de la prueba",
        "necesidad de pruebas",
        "pruebas veraces",
        "pruebas pertinentes",
        "verdad de los hechos",
        "presunción de inocencia",
        "presuncion de inocencia",
        "culpabilidad",
        "garantías para la defensa",
        "garantias para la defensa"
    ],
    contenido: "Necesidad de la prueba: Todo proceso debe buscar la verdad de los hechos con pruebas veraces y pertinentes, teniendo en cuenta que, de acuerdo con la Declaración Universal de los Derechos Humanos y la Constitución Política de Colombia, toda persona tiene derecho a que se presuma su inocencia mientras no se pruebe su culpabilidad, conforme a la ley y en juicio público en el que se le hayan asegurado todas las garantías necesarias para su defensa."
},


{
    titulo: "Potestad disciplinaria",
    palabras: [
        "potestad disciplinaria",
        "función disciplinaria",
        "funcion disciplinaria",
        "quién tiene la función disciplinaria",
        "quien tiene la funcion disciplinaria",
        "rector",
        "delegación de la función disciplinaria",
        "delegacion de la funcion disciplinaria"
    ],
    contenido: `POTESTAD DISCIPLINARIA.

De conformidad con el literal "g" del artículo 25 del Decreto 1860 de 1994, la función disciplinaria en los establecimientos educativos corresponde al Rector o a quien éste la delegue.`
},

{
    titulo: "Artículo quince: Situaciones tipo I",
    palabras: [
        "artículo quince",
        "articulo quince",
        "quince",
        "situaciones tipo I",
        "situaciones tipo uno",
        "tipo I",
        "tipo uno",
        "faltas tipo I",
        "faltas tipo uno",
        "situaciones tipo 1",
        "qué es una situación tipo I",
        "que es una situacion tipo I"
    ],
    contenido: `ARTÍCULO QUINCE: SITUACIONES TIPO I.

Son situaciones tipo I las siguientes:

- Llegar tarde a la jornada escolar sin excusa justificada.
- Portar el uniforme en lugares públicos fuera de la jornada de clase de manera indecorosa o sin autorización de la institución.
- Permanecer con la camiseta de educación física por fuera de la sudadera.
- Desaseo personal y porte innecesario de accesorios diferentes al uniforme.
- Traer zapatos de un color diferente al estipulado para cada uniforme.
- Hacer cambios o correcciones a las anotaciones hechas por el profesor en los controles de clases.
- Portar los uniformes inadecuadamente y en los días que no corresponde.
- Maltratar las zonas verdes.
- Dañar envases o utensilios de la cooperativa y del restaurante escolar.`
},


{
    titulo: "Artículo quince: Situaciones tipo I - continuación",
    palabras: [
        "situaciones tipo I",
        "situaciones tipo uno",
        "faltas tipo I",
        "faltas tipo uno",
        "arrojar papeles",
        "arrojar basura",
        "masticar chicle",
        "lanzar objetos",
        "lanzar semillas",
        "lanzar bolas de papel",
        "no esperar al profesor",
        "actividades diferentes en clase",
        "fraude en trabajos",
        "fraude en evaluaciones",
        "no traer implementos",
        "elementos tecnológicos en clase",
        "agresión escolar por primera vez",
        "agresión física por primera vez",
        "agresión verbal por primera vez",
        "agresión gestual por primera vez",
        "agresión relacional por primera vez",
        "agresión electrónica por primera vez",
        "compromisos académicos",
        "desinformar al acudiente"
    ],
    contenido: `ARTÍCULO QUINCE: SITUACIONES TIPO I.

También se consideran situaciones tipo I las siguientes:

- Arrojar papeles y basura fuera de los recipientes destinados para ello.
- Masticar chicle en forma inadecuada que interrumpa el desarrollo normal de la clase.
- Lanzar objetos, tales como semillas, chicles, bolas de papel, etc., a los compañeros u otros miembros de la comunidad educativa.
- No esperar al profesor dentro del salón de clases.
- Realizar actividades diferentes a las que se están realizando en la clase.
- Cometer fraude en la presentación de trabajos y evaluaciones.
- No traer los implementos necesarios para desarrollar la clase.
- Usar inadecuadamente elementos tecnológicos en clase.
- Presentar una agresión escolar física, verbal, gestual, relacional y/o electrónica por primera vez con algún miembro de la comunidad educativa.
- No cumplir con los compromisos académicos.
- Desinformar al acudiente sobre las comunicaciones enviadas por el establecimiento educativo.`
},


{
    titulo: "Artículo quince: Situaciones tipo I - continuación",
    palabras: [
        "situaciones tipo I",
        "situaciones tipo uno",
        "faltas tipo I",
        "faltas tipo uno",
        "entregar excusas tarde",
        "excusa después de 48 horas",
        "excusa despues de 48 horas",
        "denigrar de la institución",
        "mal nombre de la institución",
        "desacatar indicaciones",
        "desacatar instrucciones",
        "instrucciones de los docentes",
        "uso inapropiado de servicios",
        "materiales de trabajo",
        "levantarse del puesto",
        "levantarse sin autorización",
        "dialogar durante la clase",
        "hablar durante la clase",
        "subirse a las porterías",
        "subirse a estructuras metálicas",
        "subirse a los árboles",
        "irrespeto a los símbolos",
        "símbolos patrios",
        "simbolos patrios",
        "símbolos religiosos",
        "simbolos religiosos",
        "símbolos institucionales",
        "simbolos institucionales",
        "destruir bienes de la institución",
        "dañar bienes de la institución",
        "consumo de licor",
        "consumo de cigarrillo",
        "licor dentro de la institución",
        "cigarrillo dentro de la institución",
        "licor con el uniforme",
        "cigarrillo con el uniforme",
        "consumir alimentos en el salón",
        "comer en el salón",
        "comer en clase"
    ],
    contenido: `ARTÍCULO QUINCE: SITUACIONES TIPO I.

También se consideran situaciones tipo I las siguientes:

- Entregar las excusas después del tiempo requerido de 48 horas.
- Denigrar del establecimiento educativo y cualquier actuación que atente contra su buen nombre o prestigio.
- Desacatar las indicaciones e instrucciones de los docentes.
- Utilizar inapropiadamente los servicios del establecimiento educativo y materiales de trabajo.
- Levantarse del puesto de manera reiterativa sin autorización.
- Dialogar con los compañeros durante el desarrollo de la clase.
- Subirse a las porterías de fútbol, estructuras metálicas y árboles.
- Irrespeto a los símbolos patrios, religiosos e institucionales.
- Participar en actos que destruyan los bienes del establecimiento educativo y sus alrededores en forma culposa.
- El consumo de licor o cigarrillo dentro y fuera del establecimiento educativo, portando el uniforme.
- Consumir alimentos dentro del salón de clases sin la autorización correspondiente.`
},


{
    titulo: "Artículo 16: Ruta de atención para situaciones tipo I",
    palabras: [
        "ruta de atencion situaciones tipo uno",
        "ruta de atención situaciones tipo uno",
        "situaciones tipo uno",
        "situacion tipo uno",
        "situación tipo uno",
        "que pasa en una situacion tipo uno",
        "qué pasa en una situación tipo uno",
        "procedimiento situacion tipo uno",
        "procedimiento situación tipo uno"
    ],
    contenido: `ARTÍCULO 16°. RUTA DE ATENCIÓN PARA SITUACIONES TIPO I.

1. Se recibe queja o informe sobre una situación puntual.

2. Se hace el reporte correspondiente a alguna autoridad escolar: Rector, Coordinador, Orientadora, Director de grupo o Docente.

3. La Coordinación de Convivencia toma nota de la situación correspondiente. Si el caso es de embarazo adolescente, se comunica al Departamento de Orientación y este toma el control del asunto, y se informa de la situación al Hospital y/o al ICBF.`
},


{
    titulo: "Artículo 16: Ruta de atención para situaciones tipo I - continuación",
    palabras: [
        "pasos siguientes situacion tipo uno",
        "pasos siguientes situación tipo uno",
        "acompañamiento situacion tipo uno",
        "acompañamiento situación tipo uno",
        "informar a los padres situacion tipo uno",
        "informar al rector situacion tipo uno",
        "cierre del caso tipo uno",
        "cierre del caso situación tipo uno",
        "paragrafo uno situaciones tipo uno",
        "parágrafo uno situaciones tipo uno",
        "paragrafo dos situaciones tipo uno",
        "parágrafo dos situaciones tipo uno"
    ],
    contenido: `ARTÍCULO 16°. RUTA DE ATENCIÓN PARA SITUACIONES TIPO I.

4. El(la) Director(a) de curso informa del caso a Coordinación de Convivencia. El caso entra a formar parte del cronograma de acompañamiento del cual hará parte Orientación y el Coordinador.

5. Se informa a los padres de familia. Se deja acta al respecto que reposa en Coordinación de Convivencia.

6. Se informa al Rector sobre evolución del proceso.

7. Cierre del caso.

PARÁGRAFO 1. El tratamiento a las situaciones anteriormente mencionadas, lo realizará el docente, director de grupo, coordinador o el rector que observe la situación inmediatamente presentada. En caso de ser necesario se remitirá al comité escolar de convivencia para su respectivo análisis.

PARÁGRAFO 2. Si una situación de tipo I es observada por un miembro de la comunidad educativa diferente a los anteriormente mencionados, podrá informar de lo ocurrido a un docente o directivo docente del EE.`
},

{
    titulo: "Artículo 17: Protocolo a seguir por parte de la institución",
    palabras: [
        "articulo diecisiete",
        "artículo diecisiete",
        "protocolo situaciones tipo uno",
        "protocolo situacion tipo uno",
        "protocolo situación tipo uno",
        "protocolo a seguir",
        "protocolo por parte de la institucion",
        "protocolo por parte de la institución",
        "que hace la institucion en situaciones tipo uno",
        "qué hace la institución en situaciones tipo uno",
        "recomendacion verbal",
        "recomendación verbal",
        "orientacion verbal",
        "orientación verbal"
    ],
    contenido: `ARTÍCULO 17°. PROTOCOLO A SEGUIR POR PARTE DE LA INSTITUCIÓN.

Las situaciones Tipo I conllevan el siguiente proceso por parte de la Institución:

• Recomendación u orientación verbal por parte de quien observa la situación.`
},


{
    titulo: "Artículo 16: Ruta de atención para situaciones tipo I - continuación",
    palabras: [
        "pasos siguientes situacion tipo uno",
        "pasos siguientes situación tipo uno",
        "acompañamiento situacion tipo uno",
        "acompañamiento situación tipo uno",
        "informar a los padres situacion tipo uno",
        "informar al rector situacion tipo uno",
        "cierre del caso tipo uno",
        "cierre del caso situación tipo uno",
        "paragrafo uno situaciones tipo uno",
        "parágrafo uno situaciones tipo uno",
        "paragrafo dos situaciones tipo uno",
        "parágrafo dos situaciones tipo uno"
    ],
    contenido: `ARTÍCULO 16°. RUTA DE ATENCIÓN PARA SITUACIONES TIPO I.

4. El(la) Director(a) de curso informa del caso a Coordinación de Convivencia. El caso entra a formar parte del cronograma de acompañamiento del cual hará parte Orientación y el Coordinador.

5. Se informa a los padres de familia. Se deja acta al respecto que reposa en Coordinación de Convivencia.

6. Se informa al Rector sobre evolución del proceso.

7. Cierre del caso.

PARÁGRAFO 1. El tratamiento a las situaciones anteriormente mencionadas, lo realizará el docente, director de grupo, coordinador o el rector que observe la situación inmediatamente presentada. En caso de ser necesario se remitirá al comité escolar de convivencia para su respectivo análisis.

PARÁGRAFO 2. Si una situación de tipo I es observada por un miembro de la comunidad educativa diferente a los anteriormente mencionados, podrá informar de lo ocurrido a un docente o directivo docente del EE.`
},

{
    titulo: "Artículo 17: Protocolo a seguir por parte de la institución",
    palabras: [
        "articulo diecisiete",
        "artículo diecisiete",
        "protocolo situaciones tipo uno",
        "protocolo situacion tipo uno",
        "protocolo situación tipo uno",
        "protocolo a seguir",
        "protocolo por parte de la institucion",
        "protocolo por parte de la institución",
        "que hace la institucion en situaciones tipo uno",
        "qué hace la institución en situaciones tipo uno",
        "recomendacion verbal",
        "recomendación verbal",
        "orientacion verbal",
        "orientación verbal"
    ],
    contenido: `ARTÍCULO 17°. PROTOCOLO A SEGUIR POR PARTE DE LA INSTITUCIÓN.

Las situaciones Tipo I conllevan el siguiente proceso por parte de la Institución:

• Recomendación u orientación verbal por parte de quien observa la situación.`
},


{
    titulo: "Artículo 17: Protocolo a seguir por parte de la institución - continuación",
    palabras: [
        "llamado de atencion verbal",
        "llamado de atención verbal",
        "anotacion en el observador",
        "anotación en el observador",
        "anotacion control de clases",
        "anotación control de clases",
        "firma del estudiante",
        "rechazar anotacion",
        "rechazar anotación",
        "escrito a coordinacion",
        "escrito a coordinación",
        "dialogo con el docente",
        "diálogo con el docente",
        "reflexion sobre la situacion",
        "reflexión sobre la situación",
        "buscar soluciones",
        "compromisos situacion tipo uno",
        "que pasa si no se cumplen los compromisos",
        "qué pasa si no se cumplen los compromisos",
        "remitir informe al rector",
        "comite escolar de convivencia tipo uno",
        "comité escolar de convivencia tipo uno",
        "pasar a situacion tipo dos",
        "pasar a situación tipo dos"
    ],
    contenido: `ARTÍCULO 17°. PROTOCOLO A SEGUIR POR PARTE DE LA INSTITUCIÓN.

• El docente o directivo-docente que se haya percatado de la situación podrá realizar llamado de atención verbal, anotación en el Observador y/o en el control de clases. Dicha anotación debe ser firmada por el estudiante, aceptándola o rechazándola. En caso de rechazo, el estudiante debe realizar un escrito remitiéndolo al día siguiente a la coordinación, con la firma del padre, madre y/o acudiente, donde conste que se encuentra enterado de la situación.

• Diálogo con el docente, director de grupo o coordinador que esté al tanto de la situación, para efectuar la respectiva reflexión sobre el hecho y buscar posibles soluciones y compromisos ante el impase. Si la situación presentada no fue observada por quien está a cargo, sino que procede de una queja hecha por un miembro de la comunidad, se indagará con otras personas que estuvieron presentes para tener una mejor información de lo ocurrido.

• En caso de que las anteriores medidas no generen soluciones o que los compromisos realizados entre las partes no se cumplan, la coordinación remitirá informe al Rector (Presidente del Comité Escolar de Convivencia), quien determinará si se hace necesario convocar extraordinariamente el Comité Escolar de Convivencia para presentar el caso y decidir si se debe acudir al protocolo de la situación Tipo II.`
},

{
    titulo: "Artículo 18: Acciones preventivas y/o correctivas para situaciones tipo I",
    palabras: [
        "articulo dieciocho",
        "artículo dieciocho",
        "acciones preventivas situaciones tipo uno",
        "acciones preventivas situaciones tipo I",
        "acciones correctivas situaciones tipo uno",
        "acciones correctivas situaciones tipo I",
        "medidas situaciones tipo uno",
        "medidas situaciones tipo I",
        "incumplimiento de compromisos",
        "incumplimiento compromisos estudiante",
        "debido proceso tipo uno",
        "medidas preventivas",
        "medidas correctivas",
        "disculpas publicas",
        "disculpas públicas",
        "ofrecer disculpas"
    ],
    contenido: `ARTÍCULO 18°. ACCIONES PREVENTIVAS Y/O CORRECTIVAS A TOMAR PARA SITUACIONES TIPO I.

Ante el incumplimiento de los compromisos asumidos por un estudiante con el docente o directivo-docente encargado de atender la situación, y como parte del debido proceso y en procura de aplicar acciones preventivas y/o correctivas, se aplicarán las siguientes medidas:

• Ofrecer disculpas públicas a las personas afectadas.`
},


{
    titulo: "Artículo 18: Acciones preventivas y/o correctivas para situaciones tipo I - continuación",
    palabras: [
        "llamado de atencion verbal accion pedagogica",
        "llamado de atención verbal acción pedagógica",
        "servicio social situacion tipo uno",
        "servicio social situación tipo uno",
        "llamado de atencion escrito",
        "llamado de atención escrito",
        "observador del estudiante",
        "constancia en el observador",
        "charlas de reflexion",
        "charlas de reflexión",
        "carteleras exposiciones",
        "acciones correctivas tipo uno",
        "medidas correctivas tipo uno"
    ],
    contenido: `ARTÍCULO 18°. ACCIONES PREVENTIVAS Y/O CORRECTIVAS A TOMAR PARA SITUACIONES TIPO I.

• Llamado de atención verbal acompañado de una acción pedagógica o servicio social.

• Llamado de atención escrito del cual se dejará constancia en el Observador del estudiante.

• Realizar charlas de reflexión utilizando carteleras, exposiciones u otro medio de comunicación por parte de quien cometa la falta.`
},

{
    titulo: "Artículo 19: Situaciones tipo II",
    palabras: [
        "articulo diecinueve",
        "artículo diecinueve",
        "situaciones tipo dos",
        "situaciones tipo II",
        "situacion tipo dos",
        "situación tipo dos",
        "faltas tipo dos",
        "faltas tipo II",
        "lanzar objetos y causar daños",
        "encerrar a un compañero",
        "enfrentamientos fisicos",
        "enfrentamientos físicos",
        "enfrentamientos verbales",
        "palabras obscenas",
        "porte de armas",
        "dibujos obscenos",
        "mensajes denigrantes",
        "fotomontajes",
        "mensajes sexuales ofensivos",
        "divulgar fotos o videos",
        "divulgar fotos o videos de otras personas",
        "agresion con armas",
        "agresión con armas",
        "calumniar",
        "piropo inadecuado",
        "contacto fisico no consentido",
        "contacto físico no consentido",
        "burlas irrespetuosas",
        "discriminacion por raza",
        "discriminación por raza",
        "discriminacion por condicion social",
        "discriminación por condición social",
        "ritos satanicos",
        "ritos satánicos",
        "espiritismo",
        "brujeria",
        "brujería"
    ],
    contenido: `ARTÍCULO 19°. SITUACIONES TIPO II.

Las situaciones Tipo II contempladas en el Manual de Convivencia incluyen:

• Lanzar objetos dentro y fuera del plantel que ocasione daños a cualquier miembro de la comunidad educativa y/o particulares.

• Encerrar arbitrariamente a un compañero(a) en cualquier recinto de la institución.

• Enfrentamientos físicos con puños, apodos y demás manifestaciones agresivas.

• Enfrentamientos verbales con palabras obscenas.

• Porte de armas que pongan en riesgo la integridad física de los miembros de la comunidad educativa.

• Dibujar figuras obscenas, mensajes denigrantes y/o fotomontajes, sea por medio virtual o físico, que atenten contra la moral o el buen nombre de cualquiera de los miembros de la comunidad educativa.

• Mensajes sexuales ofensivos escritos en espacios públicos como baños, paredes, tablero o pupitres.

• Divulgar fotos o videos que afecten a otras personas a través del uso de las TIC.

• Atentar contra uno o varios miembros de la comunidad educativa de manera física con objetos cortopunzantes, armas de fuego, golpes, empujones o mordiscos.

• Calumniar a cualquier miembro de la comunidad educativa.

• Piropos inadecuados o contacto físico intencional no consentido, involucrando partes íntimas del cuerpo, que ocurran de forma repetitiva.

• Burlas o manifestaciones irrespetuosas contra uno o varios miembros de la comunidad educativa en situaciones de vulnerabilidad y/o diferencia de edad, raza, condición social o inclinación sexual dentro de la institución, por redes sociales o cualquier medio tecnológico.

• Practicar ritos satánicos, espiritismo, brujería y otros actos que atenten contra la dignidad humana y la salud física y mental de cualquier miembro de la comunidad educativa.`
},


{
    titulo: "Artículo 19: Situaciones tipo II - continuación",
    palabras: [
        "inducir al consumo de cigarrillo",
        "inducir al consumo de tabaco",
        "inducir al consumo de licor",
        "inducir al consumo de sustancias psicoactivas",
        "consumo de sustancias psicoactivas tipo dos",
        "amenazar a compañeros",
        "amenazar a miembros de la institucion",
        "amenazar a miembros de la institución",
        "chantajear",
        "extorsionar",
        "presionar a compañeros",
        "intimidar a compañeros",
        "atentar fisicamente contra compañeros",
        "atentar físicamente contra compañeros",
        "hurto comprobado",
        "complicidad en hurto",
        "hurto con coaccion",
        "hurto con coacción",
        "hurto con agresion",
        "hurto con agresión",
        "irrespeto con palabras obscenas",
        "palabras obscenas contra docente",
        "palabras obscenas contra directivo"
    ],
    contenido: `ARTÍCULO 19°. SITUACIONES TIPO II.

• Inducir a cualquier miembro de la comunidad educativa al consumo de cigarrillo, tabaco, licor o cualquier tipo de sustancias psicoactivas dentro de la Institución o en actividades que involucren el nombre del colegio.

• Amenazar, chantajear, extorsionar, presionar, intimidar o atentar físicamente contra los compañeros de la Institución o cualquiera de sus miembros.

• Hurto comprobado o complicidad que incluya coacción, agresión o sometimiento.

• Irrespeto con palabras obscenas contra un docente - directivo.`
},

{
    titulo: "Artículo 20: Protocolo a seguir por parte de la institución",
    palabras: [
        "articulo veinte",
        "artículo veinte",
        "protocolo situaciones tipo dos",
        "protocolo situacion tipo dos",
        "protocolo situación tipo dos",
        "protocolo para situaciones tipo II",
        "quien detecta la falta",
        "dialogo con estudiantes implicados",
        "diálogo con estudiantes implicados",
        "anotacion en el observador",
        "anotación en el observador",
        "firma de los implicados",
        "citar al acudiente",
        "citar a los padres",
        "informar al acudiente",
        "compromiso para mejorar",
        "intervencion de sicoorientacion",
        "intervención de sicoorientación",
        "intervencion de coordinacion",
        "intervención de coordinación",
        "intervencion del comite de convivencia",
        "intervención del comité de convivencia"
    ],
    contenido: `ARTÍCULO 20°. PROTOCOLO A SEGUIR POR PARTE DE LA INSTITUCIÓN.

• Quien detecta la falta, docente, coordinador, rector o cualquier otro integrante de la comunidad educativa, dialogará con el o los estudiantes implicados, de lo cual se dejará constancia.

• De ser reiterativa la conducta, hará las anotaciones correspondientes en el observador donde deben firmar los implicados.

• Citar, por parte de docente, dirección de grupo o coordinación, al acudiente para ponerle en conocimiento la situación y formalizar un compromiso para ayudar a mejorar al estudiante.

• Intervención de Sicoorientación o coordinación, de lo cual se dejará constancia.

• Intervención del comité de convivencia, de lo cual se dejará constancia.`
},


{
    titulo: "Artículo 21: Ruta de atención para situaciones tipo II",
    palabras: [
        "articulo veintiuno",
        "artículo veintiuno",
        "ruta de atencion situaciones tipo dos",
        "ruta de atención situaciones tipo dos",
        "ruta de atencion situaciones tipo II",
        "ruta de atención situaciones tipo II",
        "recoger versiones",
        "versiones de las partes implicadas",
        "dialogar con los estudiantes implicados",
        "diálogo con los estudiantes implicados",
        "reforzar valores vulnerados",
        "competencias ciudadanas",
        "manejo de las emociones",
        "reconocimiento de la sexualidad",
        "exploracion del cuerpo",
        "exploración del cuerpo",
        "anotaciones en el observador",
        "llamado del padre de familia",
        "acciones pedagogicas tipo dos",
        "acciones pedagógicas tipo dos",
        "firma de compromiso",
        "remision a orientacion escolar",
        "remisión a orientación escolar",
        "daño fisico tipo dos",
        "daño físico tipo dos",
        "centro asistencial",
        "restablecimiento de derechos",
        "medidas de proteccion",
        "medidas de protección",
        "acciones restaurativas",
        "reparacion de daños",
        "reparación de daños",
        "reconciliacion",
        "reconciliación",
        "comite escolar de convivencia",
        "comité escolar de convivencia",
        "seguimiento del caso",
        "protocolo situacion tipo tres",
        "protocolo situación tipo tres",
        "sistema de informacion de convivencia escolar",
        "sistema de información de convivencia escolar"
    ],
    contenido: `ARTÍCULO 21°. RUTA DE ATENCIÓN PARA SITUACIONES TIPO II.

• Recoger versiones de las partes implicadas en la situación.

• Dialogar con los estudiantes implicados acerca de la situación de manera interdisciplinar, donde se refuercen los valores vulnerados en la situación presentada.

• Reforzar las competencias ciudadanas relacionadas con el manejo de las emociones, reconocimiento de la sexualidad y la exploración del cuerpo.

• Anotaciones en el observador del estudiante.

• Llamado del padre de familia.

• Acciones pedagógicas y firma de compromiso, por parte del director de grupo, estudiante y padre de familia. Remisión al departamento de orientación escolar.

• En casos de daño físico, se trasladará al o los estudiantes a un centro asistencial para su atención inmediata y se informará a los acudientes. Se dejará constancia.

• En caso de haber requerido medidas de restablecimiento de derechos, se remitirá la situación a las autoridades administrativas y se dejará constancia de dicha actuación.

• Adoptar medidas de protección a los estudiantes involucrados en la situación, para evitar posibles represalias.

• Determinar las acciones restaurativas que busquen la reparación de los daños causados, el restablecimiento de los derechos y la reconciliación dentro de un clima de relaciones constructivas en el establecimiento educativo; así como las consecuencias aplicables a quienes han promovido, contribuido o participado en la situación reportada.

• El comité escolar de convivencia dejará constancia en acta de todo lo ocurrido y de las decisiones adoptadas, la cual será suscrita por todos los integrantes e intervinientes. El comité realizará el análisis y seguimiento, a fin de verificar si la solución fue efectiva o si se requiere acudir al protocolo consagrado en la situación Tipo III.

• El presidente del comité escolar de convivencia reportará la información del caso al aplicativo que para el efecto se haya implementado en el Sistema de Información Unificado de Convivencia Escolar.`
},

{
    titulo: "Artículo 22: Acciones preventivas y/o correctivas para situaciones tipo II",
    palabras: [
        "articulo veintidos",
        "artículo veintidós",
        "acciones preventivas situaciones tipo dos",
        "acciones preventivas situaciones tipo II",
        "acciones correctivas situaciones tipo dos",
        "acciones correctivas situaciones tipo II",
        "medidas situaciones tipo dos",
        "medidas situaciones tipo II",
        "espacios de expresion",
        "espacios de expresión",
        "expresar puntos de vista",
        "conciliacion",
        "conciliación",
        "concertacion",
        "concertación",
        "confidencialidad",
        "respeto a la intimidad",
        "manejo etico de la situacion",
        "manejo ético de la situación"
    ],
    contenido: `ARTÍCULO 22°. ACCIONES PREVENTIVAS Y/O CORRECTIVAS A TOMAR PARA SITUACIONES TIPO II.

• Fomentar espacios en los que los miembros de la comunidad educativa puedan expresar sus puntos de vista sobre la situación, (conciliación, concertación, entre otros), aplicando el principio de confidencialidad y respeto a la intimidad de los temas que allí se traten para dar un manejo ético y cuidadoso de la situación.`
},


{
    titulo: "Artículo 22: Acciones preventivas y/o correctivas para situaciones tipo II - continuación",
    palabras: [
        "reconocer tipo de situacion",
        "reconocer tipo de situación",
        "recurrencia de la situacion",
        "recurrencia de la situación",
        "danos que pueden ocasionar",
        "daños que pueden ocasionar",
        "caracteristicas y consecuencias",
        "características y consecuencias",
        "protocolos a la comunidad educativa",
        "historial disciplinario",
        "historial disciplinario de los implicados",
        "acompanamiento psicorientacion",
        "acompañamiento psicorientación",
        "proyectos pedagogicos",
        "proyectos pedagógicos",
        "jornadas pedagogicas",
        "jornadas pedagógicas",
        "fortalecimiento de valores",
        "sana convivencia",
        "socializacion del manual",
        "socialización del manual",
        "carteleras y murales",
        "tic y redes sociales",
        "blog institucional"
    ],
    contenido: `ARTÍCULO 22°. ACCIONES PREVENTIVAS Y/O CORRECTIVAS A TOMAR PARA SITUACIONES TIPO II.

• Reconocer el tipo de situación, su recurrencia y daños que pueden ocasionar.

• Revisar las características y consecuencias del acontecimiento.

• Socializar constantemente los protocolos a la comunidad educativa.

• Revisión del historial disciplinario de los implicados.

• Brindar acompañamiento a través de la Psicorientación.

• Ejecutar proyectos y jornadas pedagógicas para el fortalecimiento de los valores y la sana convivencia con los miembros de la comunidad educativa a través de la socialización del Manual de Convivencia, carteleras, murales y utilización de las TIC (redes sociales, blog interactivo institucional, entre otras).`
},

{
    titulo: "Artículo 23: Situaciones tipo III",
    palabras: [
        "articulo veintitres",
        "artículo veintitrés",
        "situaciones tipo tres",
        "situaciones tipo III",
        "situacion tipo tres",
        "situación tipo tres",
        "faltas tipo tres",
        "faltas tipo III",
        "hurto o malversacion de fondos",
        "hurto o malversación de fondos",
        "porte de armas tipo tres",
        "uso de armas tipo tres",
        "venta de armas",
        "explosivos",
        "sustancias sicotropicas",
        "sustancias psicotrópicas",
        "sustancias alucinogenas",
        "sustancias alucinógenas",
        "distribucion de sustancias",
        "distribución de sustancias",
        "bebidas alcoholicas tipo tres",
        "bebidas alcohólicas tipo tres",
        "actos contra la dignidad",
        "acceso carnal violento",
        "acto sexual violento",
        "actos sexuales abusivos",
        "abuso sexual",
        "acoso sexual",
        "explotacion economica",
        "explotación económica",
        "maltrato fisico",
        "maltrato físico",
        "maltrato psicologico",
        "maltrato psicológico",
        "discriminacion",
        "discriminación",
        "trafico de estupefacientes",
        "tráfico de estupefacientes",
        "amenazas",
        "boleteo",
        "estafas",
        "chantajes",
        "lesiones personales",
        "abuso de confianza",
        "grupos vandalicos",
        "grupos vandálicos",
        "pandillas",
        "falsedad en documentos",
        "adulteracion de documentos",
        "adulteración de documentos"
    ],
    contenido: `ARTÍCULO 23°. SITUACIONES TIPO III.

• Hurto o malversación de fondos.

• Portar, hacer uso o venta de armas y/o explosivos que pongan en peligro la integridad de las personas o la planta física del colegio.

• Inducción, porte, distribución o intento de distribución de sustancias sicotrópicas, alucinógenas que causen adicción.

• Ingerir bebidas alcohólicas, sustancias alucinógenas, sustancias sicotrópicas que causen adicción dentro o fuera de la Institución (en actividades institucionales) y el ingreso de las mismas a la institución.

• Ejecutar dentro o fuera de la Institución actos que atenten contra la moral y la dignidad de la persona y principios de la Institución: acceso carnal violento, acto sexual violento, acceso carnal abusivo con menor de edad, actos sexuales abusivos.

• Realizar o encubrir actos que atenten contra la comunidad educativa, tales como: explotación económica y laboral, maltrato físico o psicológico, abuso o acoso sexual, discriminación por edad, sexo, raza, religión, política, posición social, lugar de vivienda y tráfico de estupefacientes (art. 44, numeral 2. Código de Infancia y Adolescencia).

• Atentar contra el derecho a la vida (art. 11, Constitución Política) y/o paz mediante actos tales como amenazas, boleteo, estafas, chantajes, lesiones personales, abuso de confianza por cualquier medio (electrónico, físico u otros).

• Pertenecer o fomentar grupos vandálicos o pandillas dentro o fuera de la Institución.

• Falsedad y/o adulteración en documentos utilizados para ingresar al plantel o en otro tipo de actividad dentro y fuera de la institución.`
},


{
    titulo: "Potestad disciplinaria",
    palabras: [
        "potestad disciplinaria",
        "funcion disciplinaria",
        "función disciplinaria",
        "quien aplica la disciplina",
        "quien aplica las sanciones",
        "rector",
        "delegar funcion disciplinaria",
        "delegar función disciplinaria"
    ],
    contenido: `POTESTAD DISCIPLINARIA.

De conformidad con el literal "g" del Art 25 Decreto 1860 de 1994, la función disciplinaria en los establecimientos educativos corresponde al Rector o a quien éste la delegue.`
},

{
    titulo: "Artículo 15°. Situaciones Tipo I",
    palabras: [
        "situaciones tipo I",
        "situacion tipo I",
        "situación tipo I",
        "faltas tipo I",
        "situaciones tipo uno",
        "faltas tipo uno",
        "articulo 15",
        "artículo 15"
    ],
    contenido: `ACCIONES TIPIFICADAS COMO Articulo 15°. SITUACIONES TIPO I.

Llegar tarde a la jornada escolar sin excusa justificada.

Portar el uniforme en lugares públicos fuera de la jornada de clase de manera indecorosa o sin autorización de la institución.

Permanecer con la camiseta de educación física por fuera de la sudadera.

Desaseo personal y porte innecesario de accesorios diferentes al uniforme.

Traer zapatos de un color diferente al estipulado para cada uniforme.

Hacer cambios o correcciones a las anotaciones hechas por el profesor en los controles de clases.

Portar los uniformes inadecuadamente y en los días que no corresponde.

Maltratar las zonas verdes.

Dañar envases o utensilios de la cooperativa y del restaurante escolar.

Arrojar papeles y basura fuera de los recipientes destinados para ello.

Masticar chicle en forma inadecuada que interrumpa el desarrollo normal de la clase.

Lanzar objetos, tales como semillas, chicles, bolas de papel, etc., a los compañeros u otros miembros de la comunidad educativa.

No esperar al profesor dentro del salón de clases.

Realizar actividades diferentes a las que se están realizando en la clase.

Cometer fraude en la presentación de trabajos y evaluaciones.

No traer los implementos necesarios para desarrollar la clase.

Usar inadecuadamente elementos tecnológicos en clase.

Presenta una agresión escolar (física, verbal, gestual, relacional y/o electrónica) por primera vez con algún miembro de la comunidad educativa.

No cumplir con los compromisos académicos.

Desinformar al acudiente sobre las comunicaciones enviadas por el EE.

Entregar las excusas después del tiempo requerido (48 horas).

Denigrar del EE y cualquier actuación que atente contra su buen nombre o prestigio.

Desacatar las indicaciones e instrucciones de los docentes.

Utilizar inapropiadamente los servicios del EE y materiales de trabajo.

Levantarse del puesto de manera reiterativa sin autorización.

Dialogar con los compañeros durante el desarrollo de la clase.

Subirse a las porterías de fútbol, estructuras metálicas y árboles.

Irrespeto a los símbolos patrios, religiosos e institucionales.

Participar en actos que destruyan los bienes del EE y sus alrededores en forma culposa.

El consumo de licor o cigarrillo dentro y fuera del EE, portando el uniforme.

Consumir alimentos dentro del salón de clases sin la autorización correspondiente.

Ausentarse del EE y/o del aula de clase sin autorización del Rector o de la autoridad competente.

La inasistencia a actos culturales, deportivos, religiosos, convivencias y encuentros de crecimiento espiritual organizados por el EE.

Desconocer los principios y la filosofía institucional.

Uso de vocabulario y modales inadecuados.

Omitir el conducto regular.

Parágrafo 1: El comité escolar de convivencia revisará, evaluará y clasificará el comportamiento del estudiante y decidirá si se encuadra dentro de las situaciones tipo I, la falta que no se contempló en los numerales anteriores.`
},

{
    titulo: "Artículo 16°. Ruta de atención para situaciones Tipo I",
    palabras: [
        "ruta de atencion tipo I",
        "ruta de atención tipo I",
        "ruta de atencion situaciones tipo I",
        "ruta de atención situaciones tipo I",
        "proceso situaciones tipo I",
        "como se atiende una situacion tipo I",
        "cómo se atiende una situación tipo I",
        "articulo 16",
        "artículo 16"
    ],
    contenido: `Articulo 16°. RUTA DE ATENCION PARA SITUACIONES TIPO I

10. Se recibe queja o informe sobre una situación puntual.

20. Se hace el reporte correspondiente a alguna autoridad escolar, Rector, Coordinador, Orientadora, Director de grupo, Docente.

30. La Coordinación de Convivencia toma nota de la situación correspondiente. Si el caso es de embarazo adolescente se comunica al Departamento de Orientación y éste toma el control del asunto, y se informa de la situación al Hospital y/o al ICBF.

40. El(la) Director(a) de curso informa del caso a Coordinación de Convivencia. El caso entra a formar parte del cronograma de acompañamiento del cual hará parte Orientación y el Coordinador.

50. Se informa a los padres de familia. Se deja acta al respecto que reposa en Coordinación de Convivencia.

60. Se informa al Rector sobre evolución del proceso.

70. Cierre del caso.

Parágrafo 1. El tratamiento a las situaciones anteriormente mencionadas, lo realizará el docente, director de grupo, coordinador o el rector que observe la situación inmediatamente presentada. En caso de ser necesario se remitirá al comité escolar de convivencia para su respectivo análisis.

Parágrafo 2. Si una situación de tipo I es observada por un miembro de la comunidad educativa diferente a los anteriormente mencionados, podrá informar de lo ocurrido a un docente o directivo docente del EE.`
},

{
    titulo: "Artículo 17°. Protocolo a seguir por parte de la institución para situaciones Tipo I",
    palabras: [
        "protocolo situaciones tipo I",
        "protocolo tipo I",
        "protocolo a seguir tipo I",
        "como se maneja una situacion tipo I",
        "cómo se maneja una situación tipo I",
        "llamado de atencion tipo I",
        "llamado de atención tipo I",
        "articulo 17",
        "artículo 17"
    ],
    contenido: `Articulo 17°, PROTOCOLO A SEGUIR POR PARTE DE LA INSTITUCIÓN:

Las situaciones Tipo I conllevan el siguiente proceso por parte de la Institución:

Recomendación u orientación verbal por parte de quien observa la situación.

El docente o directivo-docente que se haya percatado de la situación podrá realizar llamado de atención verbal, anotación en el Observador y/o en el control de clases, dicha anotación debe ser firmada por el estudiante, aceptándola o rechazándola. En caso de rechazo el estudiante debe realizar un escrito remitiéndola al día siguiente a la coordinación con la firma del padre, madre y/o acudiente donde conste que se encuentra enterado de la situación.

Diálogo con el docente, director de grupo o coordinador que esté al tanto de la situación, para efectuar la respectiva reflexión sobre el hecho y buscar posibles soluciones y compromisos ante el impase. Si la situación presentada no fue observada por quien está a cargo, sino que procede de una queja hecha por un miembro de la comunidad, se indagará con otras personas que estuvieron presentes para tener una mejor información de lo ocurrido.

En caso de que las anteriores medidas no generen soluciones o que los compromisos realizados entre las partes no se cumplan; la coordinación remitirá informe al Rector (Presidente del Comité Escolar de Convivencia) quien determinará si se hace necesario convocar extraordinariamente el Comité Escolar de Convivencia para presentar el caso y decidir si se debe acudir al protocolo de la situación tipo II.`
},

{
    titulo: "Artículo 18°. Acciones preventivas y/o correctivas para situaciones Tipo I",
    palabras: [
        "acciones preventivas tipo I",
        "acciones correctivas tipo I",
        "medidas tipo I",
        "correctivos tipo I",
        "acciones pedagogicas tipo I",
        "acciones pedagógicas tipo I",
        "situaciones tipo I correctivos",
        "articulo 18",
        "artículo 18"
    ],
    contenido: `Articulo 18°, Acciones preventivas y/o correctivas a tomar para situaciones tipo I.

Ante el incumplimiento de los compromisos asumidos por un estudiante con el docente o directivo-docente encargado de atender la situación, y como parte del debido proceso y en procura de aplicar acciones preventivas y/o correctivas se aplicaran las siguientes medidas:

Ofrecer disculpas públicas a las personas afectadas.

Llamado de atención verbal acompañado de una acción pedagógica o servicio social.

Llamado de atención escrito del cual se dejará constancia en el Observador del estudiante.

Realizar charlas de reflexión utilizando carteleras, exposiciones u otro medio de comunicación por parte de quien cometa la falta.`
},

{
    titulo: "Artículo 19°. Situaciones Tipo II",
    palabras: [
        "situaciones tipo II",
        "situacion tipo II",
        "situación tipo II",
        "faltas tipo II",
        "situaciones tipo dos",
        "faltas tipo dos",
        "articulo 19",
        "artículo 19"
    ],
    contenido: `ACCIONES TIPIFICADAS COMO Articulo 19°. SITUACIONES TIPO II.

Lanzar objetos dentro y fuera del plantel que ocasione daños a cualquier Miembro de la comunidad educativa y/o particulares.

Encerrar arbitrariamente a un compañero(a) en cualquier recinto de la institución.

Enfrentamientos físicos con puños, apodos y demás manifestaciones agresivas.

Enfrentamientos verbales con palabras obscenas.

Porte de armas que pongan en riesgo la integridad físicas de los miembros de la comunidad educativa.

Dibujar figuras obscenas, mensajes denigrantes y/o fotomontajes, sea por medio virtual o físico que atenten contra la moral o el buen nombre de cualquiera de los miembros de la comunidad educativa.

Mensajes sexuales ofensivos escritos en espacios públicos como baños, paredes, tablero o pupitres.

Divulgar fotos o videos que afecten a otras personas a través del uso de las Tic.

Atentar contra uno o varios miembros de la comunidad educativa de manera física con objetos corto punzantes, armas de fuego, golpes empujones o mordiscos.

Calumniar a cualquier miembro de la comunidad educativa.

Piropos inadecuados o contacto físico intencional no consentido (involucrando partes íntimas del cuerpo) que ocurran de forma repetitiva.

Burlas o manifestaciones irrespetuosas contra uno o varios miembros de la comunidad educativa en situaciones de vulnerabilidad y/o diferencia de edad, raza, condición social, o inclinación sexual dentro de la institución, por redes sociales o cualquier medio tecnológico.

Practicar ritos satánicos, espiritismo, brujería y otros actos que atenten contra la dignidad humana y la salud física y mental de cualquier miembro de la comunidad educativa.

Inducir a cualquier miembro de la comunidad educativa al consumo de cigarrillo, tabaco, licor o cualquier tipo de sustancias psicoactivas dentro de la Institución o en actividades que involucren el nombre del colegio.

Amenazar, chantajear, extorsionar, presionar, intimidar o atentar fisicamente contra los compañeros de la Institución o cualquiera de sus miembros.

Hurto comprobado o complicidad que incluya coacción, agresión o sometimiento.

Irrespeto con palabras obscenas contra un docente - directivo.`
},

{
    titulo: "Artículo 20°. Protocolo a seguir por parte de la institución para situaciones Tipo II",
    palabras: [
        "protocolo situaciones tipo II",
        "protocolo tipo II",
        "protocolo a seguir tipo II",
        "como se maneja una situacion tipo II",
        "cómo se maneja una situación tipo II",
        "procedimiento tipo II",
        "articulo 20",
        "artículo 20"
    ],
    contenido: `Articulo 20°. PROTOCOLO A SEGUIR POR PARTE DE LA INSTITUCIÓN:

Quien detecta la falta, docente, coordinador, rector o cualquier otro integrante de la comunidad educativa dialogará con el o los estudiantes implicado, de lo cual se dejara constancia.

De ser reiterativa la conducta, hará las anotaciones correspondientes en el observador donde deben firmar los implicados.

Citar, por parte de docente, dirección de grupo o coordinación, al acudiente para ponerle en conocimiento la situación y formalizar un compromiso para ayudar a mejorar al estudiante.

Intervención de Sicoorientación o coordinación de lo cual se dejara constancia.

Intervención del comité de convivencia, de lo cual se dejara constancia.`
},

{
    titulo: "Artículo 21°. Ruta de atención para situaciones Tipo II",
    palabras: [
        "ruta de atencion tipo II",
        "ruta de atención tipo II",
        "ruta de atencion situaciones tipo II",
        "ruta de atención situaciones tipo II",
        "atencion situaciones tipo II",
        "atención situaciones tipo II",
        "articulo 21",
        "artículo 21"
    ],
    contenido: `Articulo 21°. RUTA DE ATENCION PARA SITUACIONES TIPO II

Recoger versiones de las partes implicadas en la situación.

Dialogar con los estudiantes implicados a cerca de la situación de manera interdisciplinar donde se refuercen los valores vulnerados en la situación presentada.

Reforzar las competencias ciudadanas relacionadas con el manejo de las emociones, reconocimiento de la sexualidad y la exploración del cuerpo.

anotaciones en el observador del estudiante.

Llamado del padre de familia.

Acciones pedagógicas y firma de compromiso, por parte del director de grupo, estudiante y padre de familia. Remisión al departamento de orientación escolar.

En casos de daño físico, se trasladará al o los estudiantes a un centro asistencial para su atención inmediata y se informará a los acudientes (se dejará constancia).

En caso de haber requerido medidas de restablecimiento de derechos, se remitirá la situación a las autoridades administrativas y se dejará constancia de dicha actuación.

Adoptar medidas de protección a los estudiantes involucrados en la situación, para evitar posibles represalias.

Determinar las acciones restaurativas que busquen la reparación de los daños causados, el restablecimiento de los derechos y la reconciliación dentro de un clima de relaciones constructivas en el establecimiento educativo; así como las consecuencias aplicables a quienes han promovido, contribuido o participado en la situación reportada.

El comité escolar de convivencia dejará constancia en acta de todo lo ocurrido y de las decisiones adoptadas, la cual será suscrita por todos los integrantes e intervinientes. El comité realizará el análisis y seguimiento, a fin de verificar si la solución fue efectiva o si se requiere acudir al protocolo consagrado en la situación tipo III.

El presidente del comité escolar de convivencia reportará la información del caso al aplicativo que para el efecto se haya implementado en el Sistema de Información Unificado de Convivencia Escolar.`
},

{
    titulo: "Artículo 22°. Acciones preventivas y/o correctivas para situaciones Tipo II",
    palabras: [
        "acciones preventivas tipo II",
        "acciones correctivas tipo II",
        "medidas tipo II",
        "correctivos tipo II",
        "acciones pedagogicas tipo II",
        "acciones pedagógicas tipo II",
        "acciones preventivas situaciones tipo II",
        "articulo 22",
        "artículo 22"
    ],
    contenido: `Articulo 22°. Acciones preventivas y/o correctivas a tomar para situaciones tipo II.

Fomentar espacios en los que los miembros de la comunidad educativa puedan expresar sus puntos de vista sobre la situación, (conciliación, concertación, entre otros) aplicando el principio de confidencialidad y respeto a la intimidad de los temas que allí se traten para dar un manejo ético y cuidadoso de la situación.

Reconocer el tipo de situación, su recurrencia y daños que pueden ocasionar.

Revisar las características y consecuencias del acontecimiento.

Socializar constantemente los protocolos a la comunidad educativa.

Revisión del historial disciplinario de los implicados.

Brindar acompañamiento a través de la Psicorientacion.

Ejecutar proyectos y jornadas pedagógicas para el fortalecimiento de los valores y la sana convivencia con los miembros de la comunidad educativa a través de la socialización del manual de convivencia, carteleras, murales y utilización de las Tic (redes sociales, blog interactivo institucional entre otras).`
},

{
    titulo: "Artículo 23°. Situaciones Tipo III",
    palabras: [
        "situaciones tipo III",
        "situacion tipo III",
        "situación tipo III",
        "faltas tipo III",
        "situaciones tipo tres",
        "faltas tipo tres",
        "articulo 23",
        "artículo 23"
    ],
    contenido: `ACCIONES TIPIFICADAS COMO Articulo 23°. SITUACIONES TIPO III.

Hurto o malversación de fondos.

Portar, hacer uso o venta de armas y/o explosivos que pongan en peligro la integridad de las personas o la planta física del colegio.

Inducción, porte, distribución o intento de distribución de sustancias sicotrópicas, alucinógenas que causen adicción.

Ingerir bebidas alcohólicas, sustancias alucinógenas, sustancias sicotrópicas que causen adicción dentro o fuera de la Institución( en actividades institucionales) y el ingreso de las mismas a la institución.

Ejecutar dentro o fuera de la Institución actos que atenten contra la moral y la dignidad de la persona y principios de la Institución: Acceso carnal violento, acto sexual violento, acceso carnal abusivo con menor de edad, actos sexuales abusivos.

Realizar o encubrir actos que atenten contra la comunidad educativa, tales como: explotación económica y laboral, maltrato físico o psicológico, abuso o acoso sexual, discriminación por edad, sexo, raza, religión, política, posición social, lugar de vivienda y tráfico de estupefacientes (art 44. numeral 2. Código de infancia y adolescencia).

Atentar contra el derecho a la vida (art 11, constitución política) y/o paz mediante actos tales como amenazas, boleteo, estafas, chantajes, lesiones personales, abuso de confianza por cualquier medio (Electrónico, físico u otros).

Pertenecer o fomentar grupos vandálicos o pandillas dentro o fuera de la Institución.

Falsedad y/o adulteracion en documentos utilizados para ingresar al plantel o en otro tipo de actividad dentro y fuera de la institución.

Relaciones sexuales dentro o fuera de la institución en actividades propias de la institución.

PARÁGRAFO 1: El Comité Escolar de Convivencia activará la Ruta de Atención Integral (RAI) para que brinden la atención inmediata a la víctima, a quien se le atribuye la agresión y a las personas que hayan informado o hagan parte de la situación presentada para brindarles protección dentro y fuera de la Institución.`
},

{
    titulo: "Artículo 24°. Protocolo para la atención de situaciones Tipo III",
    palabras: [
        "protocolo situaciones tipo III",
        "protocolo tipo III",
        "protocolo para situaciones tipo III",
        "atencion situaciones tipo III",
        "atención situaciones tipo III",
        "ruta situaciones tipo III",
        "articulo 24",
        "artículo 24"
    ],
    contenido: `Articulo 24°. PROTOCOLO PARA LA ATENCIÓN DE SITUACIONES TIPO III.

En casos de daño al cuerpo o a la salud, garantizar la atención inmediata en salud física y mental de los involucrados, mediante la remisión a las entidades competentes, actuación de la cual se dejará constancia.

Informar de manera inmediata a los padres, madres o acudientes de todos los estudiantes involucrados, actuación de la cual se dejará constancia.

El presidente del Comité Escolar de Convivencia de manera inmediata y por el medio más expedito, pondrá la situación en conocimiento de la Policía Nacional, policía infancia Y adolescencia, personería, ICBF, salud mental, actuación de la cual se dejará constancia.

No obstante, lo dispuesto en el numeral anterior, se citará a los integrantes del comité escolar de convivencia en los términos fijados en el manual de convivencia.

El presidente del comité escolar de convivencia informará a los participantes en el comité, de los hechos que dieron lugar a la convocatoria, quardando reserva de aquella información que pueda atentar contra el derecho la intimidad y confidencialidad de las partes involucradas, así como del reporte realizado ante la autoridad competente.

Pese a que una situación se haya puesto en conocimiento de las autoridades competentes, el comité escolar de convivencia adoptará, de manera inmediata, las medidas propias del establecimiento educativo, tendientes a proteger dentro del ámbito de sus competencias a la víctima, a quien se le atribuye la agresión y a las personas que hayan informado o hagan parte de la situación presentada, actuación de la cual se dejará constancia.

El presidente del comité escolar de convivencia reportará la información del caso al aplicativo que para el efecto se haya implementado en el Sistema de Información Unificado de Convivencia Escolar.

Los casos sometidos a este protocolo serán objeto de seguimiento por parte del comité escolar de convivencia, de la autoridad que asuma el conocimiento y del comité municipal o departamental de convivencia escolar que ejerza jurisdicción sobre el establecimiento educativo en el cual se presentó el hecho.`
},

{
    titulo: "Artículo 25°. Protocolo a seguir por parte de la institución para situaciones Tipo III",
    palabras: [
        "protocolo situaciones tipo III",
        "protocolo tipo III",
        "correctivos situaciones tipo III",
        "correctivos tipo III",
        "protocolo institucion tipo III",
        "protocolo institución tipo III",
        "articulo 25",
        "artículo 25"
    ],
    contenido: `Articulo 25°. PROTOCOLO A SEGUIR POR PARTE DE LA INSTITUCIÓN.

Las situaciones TIPO III conllevan los siguientes correctivos por parte de la Institución:

Anotación inmediata en el Observador por parte del docente o coordinador que haya conocido u observado la situación, la anotación debe ser firmada por los estudiantes aceptándola o rechazándola, el estudiante debe realizar un escrito allegandolo al día siguiente con la firma del padre, madre y/o acudiente donde conste que se encuentra enterado de la situación.

El coordinador remitirá de manera inmediata a las entidades competentes.

El coordinador rinde informe inmediatamente sobre la situación al Rector (Presidente del Comité Escolar de Convivencia) quien citará de manera inmediata y por el medio más expedito al Comité Escolar de Convivencia, padres, madres y/o acudientes de los estudiantes involucrados para presentar el caso y activar la Ruta de Atención Integral (RAI).`
},


{
    titulo: "Artículo 26°. Acciones preventivas y/o correctivas para situaciones Tipo III",
    palabras: [
        "acciones preventivas tipo III",
        "acciones correctivas tipo III",
        "acciones preventivas situaciones tipo III",
        "acciones correctivas situaciones tipo III",
        "medidas tipo III",
        "correctivos tipo III",
        "articulo 26",
        "artículo 26"
    ],
    contenido: `Articulo 26°. ACCIONES PREVENTIVAS Y/O CORRECTIVAS A TOMAR PARA SITUACIONES TIPO III.

El comité Escolar de Convivencia tomará las medidas pertinentes de protección y hará el seguimiento de la situación.

La institución adoptará medidas acordes con lo que determinen las autoridades competentes.`
},

{
    titulo: "Matrícula condicional",
    palabras: [
        "matricula condicional",
        "matrícula condicional",
        "que es matricula condicional",
        "qué es matrícula condicional",
        "sancion matricula condicional",
        "sanción matrícula condicional",
        "condiciones de matricula",
        "condiciones de matrícula"
    ],
    contenido: `MATRICULA CONDICIONAL.

Esta se determina cuando al juicio del comité de convivencia escolar, el estudiante incurre de manera reiterativa en el incumplimiento de sus deberes, es decir, que a pesar de los llamados de atención por haber incurrido en situaciones (tipo II o III), de manera recurrente, sin mostrar cambios positivos en su actitud o comportamiento.

La matrícula condicional es la sanción que se genera cuando el estudiante después de haber firmado acta de compromiso, haber sido objeto de suspensión y/o con seguimiento en sicoorientacion; continua presentando dificultades en su comportamiento por los cuales nuevamente ha recibido llamados de atención con notificación a su acudiente. Su objetivo es propiciar un cambio decidido de actitud.

Tiene una vigencia definida durante el año lectivo, según el criterio del consejo directivo lo cual queda establecido en la resolución de rectoría que avala la sanción.

Se informara de manera oportunamente al padre o acudiente la situación presentada y quedará constancia en el observador.`
},

{
    titulo: "Suspensión de 1 a 3 días",
    palabras: [
        "suspension de 1 a 3 dias",
        "suspensión de 1 a 3 días",
        "suspension de uno a tres dias",
        "suspensión de uno a tres días",
        "suspension",
        "suspensión",
        "sancion de suspension",
        "sanción de suspensión",
        "dias de suspension",
        "días de suspensión",
        "comite de convivencia suspension",
        "comité de convivencia suspensión"
    ],
    contenido: `SUSPENSIÓN DE 1 A 3 DÍAS.

Es una medida de carácter formativo donde el estudiante no podrá asistir a las clases regulares durante un periodo determinado por el comité de convivencia, esta busca la reflexión en el estudiante con el fin de que mejore su comportamiento. El incumplimiento de los compromisos disciplinarios o el incurrir en situaciones catalogadas como tipo II o III en el presente Manual de Convivencia dará lugar a Comité de la suspensión de 1 a 3 días, previo análisis del convivencia. Durante ella, el alumno no podrá participar de las actividades regulares del Colegio, asumiendo todas las consecuencias académicas que se deriven de ello. Este deberá retornar a la institución con los cuadernos al día correspondientes a las clases que dejo de asistir debido a la sanción.

En este caso el alumno comparecerá ante el Comité de convivencia para dar su versión de los hechos y realizar los descargos que considere pertinentes, previamente el comité de convivencia recogerá toda la información sobre el hecho, escuchará al estudiante e informará a la familia. Así mismo, el comité de convivencia, presentará toda la información que se ha recogido previamente sobre los hechos.

Cuando se determine aplicar esta sanción se levantara un acta de la medida de Suspensión, de la cual se entregara copia a los padres del alumno. En todos los casos de suspensión el (la) estudiante deberá realizar una reflexión escrita sobre su comportamiento, analizando los factores que lo llevaron a él a incurrir actos tipificados como situaciones II o III, las consecuencias y los compromisos de cambio que asumirá. En el observador se consignarán los compromisos de mejoramiento asumidos por el (la) estudiante y el apoyo que recibirá de sus padres en el cumplimiento de dicho compromiso. Cabe anotar que la nota de comportamiento del estudiante implicado, se verá afectada por estos hechos.`
},


{
    titulo: "Potestad disciplinaria",
    palabras: [
        "potestad disciplinaria",
        "que es la potestad disciplinaria",
        "qué es la potestad disciplinaria",
        "funcion disciplinaria",
        "función disciplinaria",
        "quien tiene la potestad disciplinaria",
        "quien ejerce la funcion disciplinaria",
        "quién ejerce la función disciplinaria",
        "rector disciplina",
        "decreto 1860 de 1994"
    ],
    contenido: `POTESTAD DISCIPLINARIA.

De conformidad con el literal "g" del Art 25 Decreto 1860 de 1994, la función disciplinaria en los establecimientos educativos corresponde al Rector o a quien éste la delegue.`
},

{
    titulo: "Artículo 15: Situaciones Tipo I",
    palabras: [
        "articulo 15",
        "artículo 15",
        "situaciones tipo I",
        "situaciones tipo 1",
        "tipo I",
        "tipo 1",
        "faltas tipo I",
        "faltas tipo 1",
        "acciones tipificadas tipo I",
        "acciones tipificadas tipo 1"
    ],
    contenido: `ARTICULO 15°. SITUACIONES TIPO I.

Llegar tarde a la jornada escolar sin excusa justificada.

Portar el uniforme en lugares públicos fuera de la jornada de clase de manera indecorosa o sin autorización de la institución.

Permanecer con la camiseta de educación física por fuera de la sudadera.

Desaseo personal y porte innecesario de accesorios diferentes al uniforme.

Traer zapatos de un color diferente al estipulado para cada uniforme.

Hacer cambios o correcciones a las anotaciones hechas por el profesor en los controles de clases.

Portar los uniformes inadecuadamente y en los días que no corresponde.

Maltratar las zonas verdes.

Dañar envases o utensilios de la cooperativa y del restaurante escolar.

Arrojar papeles y basura fuera de los recipientes destinados para ello.

Masticar chicle en forma inadecuada que interrumpa el desarrollo normal de la clase.

Lanzar objetos, tales como semillas, chicles, bolas de papel, etc., a los compañeros u otros miembros de la comunidad educativa.

No esperar al profesor dentro del salón de clases.

Realizar actividades diferentes a las que se están realizando en la clase.

Cometer fraude en la presentación de trabajos y evaluaciones.

No traer los implementos necesarios para desarrollar la clase.

Usar inadecuadamente elementos tecnológicos en clase.

Presenta una agresión escolar (física, verbal, gestual, relacional y/o electrónica) por primera vez con algún miembro de la comunidad educativa.

No cumplir con los compromisos académicos.

Desinformar al acudiente sobre las comunicaciones enviadas por el EE.

Entregar las excusas después del tiempo requerido (48 horas).

Denigrar del EE y cualquier actuación que atente contra su buen nombre o prestigio.

Desacatar las indicaciones e instrucciones de los docentes.

Utilizar inapropiadamente los servicios del EE y materiales de trabajo.

Levantarse del puesto de manera reiterativa sin autorización.

Dialogar con los compañeros durante el desarrollo de la clase.

Subirse a las porterías de fútbol, estructuras metálicas y árboles.

Irrespeto a los símbolos patrios, religiosos e institucionales.

Participar en actos que destruyan los bienes del EE y sus alrededores en forma culposa.

El consumo de licor o cigarrillo dentro y fuera del EE, portando el uniforme.

Consumir alimentos dentro del salón de clases sin la autorización correspondiente.

Ausentarse del EE y/o del aula de clase sin autorización del Rector o de la autoridad competente.

La inasistencia a actos culturales, deportivos, religiosos, convivencias y encuentros de crecimiento espiritual organizados por el EE.

Desconocer los principios y la filosofía institucional.

Uso de vocabulario y modales inadecuados.

Omitir el conducto regular.

Parágrafo 1: El comité escolar de convivencia revisará, evaluará y clasificará el comportamiento del estudiante y decidirá si se encuadra dentro de las situaciones tipo I, la falta que no se contempló en los numerales anteriores.`
},

{
    titulo: "Artículo 16: Ruta de atención para situaciones Tipo I",
    palabras: [
        "articulo 16",
        "artículo 16",
        "ruta de atencion tipo I",
        "ruta de atención tipo I",
        "ruta de atencion tipo 1",
        "ruta de atención tipo 1",
        "proceso situaciones tipo I",
        "proceso situaciones tipo 1",
        "que hacer ante una situacion tipo I",
        "qué hacer ante una situación tipo I"
    ],
    contenido: `ARTICULO 16°. RUTA DE ATENCION PARA SITUACIONES TIPO I.

10. Se recibe queja o informe sobre una situación puntual.

20. Se hace el reporte correspondiente a alguna autoridad escolar, Rector, Coordinador, Orientadora, Director de grupo, Docente.

30. La Coordinación de Convivencia toma nota de la situación correspondiente. Si el caso es de embarazo adolescente se comunica al Departamento de Orientación y éste toma el control del asunto, y se informa de la situación al Hospital y/o al ICBF.

40. El(la) Director(a) de curso informa del caso a Coordinación de Convivencia. El caso entra a formar parte del cronograma de acompañamiento del cual hará parte Orientación y el Coordinador.

50. Se informa a los padres de familia. Se deja acta al respecto que reposa en Coordinación de Convivencia.

60. Se informa al Rector sobre evolución del proceso.

70. Cierre del caso.

Parágrafo 1. El tratamiento a las situaciones anteriormente mencionadas, lo realizará el docente, director de grupo, coordinador o el rector que observe la situación inmediatamente presentada. En caso de ser necesario se remitirá al comité escolar de convivencia para su respectivo análisis.

Parágrafo 2. Si una situación de tipo I es observada por un miembro de la comunidad educativa diferente a los anteriormente mencionados, podrá informar de lo ocurrido a un docente o directivo docente del EE.`
},

{
    titulo: "Artículo 17: Protocolo para situaciones Tipo I",
    palabras: [
        "articulo 17",
        "artículo 17",
        "protocolo situaciones tipo I",
        "protocolo situaciones tipo 1",
        "protocolo tipo I",
        "protocolo tipo 1",
        "protocolo de atencion tipo I",
        "protocolo de atención tipo I",
        "que hace la institucion ante una situacion tipo I",
        "qué hace la institución ante una situación tipo I"
    ],
    contenido: `ARTICULO 17°. PROTOCOLO A SEGUIR POR PARTE DE LA INSTITUCIÓN.

Las situaciones Tipo I conllevan el siguiente proceso por parte de la Institución:

Recomendación u orientación verbal por parte de quien observa la situación.

El docente o directivo-docente que se haya percatado de la situación podrá realizar llamado de atención verbal, anotación en el Observador y/o en el control de clases, dicha anotación debe ser firmada por el estudiante, aceptándola o rechazándola. En caso de rechazo el estudiante debe realizar un escrito remitiéndola al día siguiente a la coordinación con la firma del padre, madre y/o acudiente donde conste que se encuentra enterado de la situación.

Diálogo con el docente, director de grupo o coordinador que esté al tanto de la situación, para efectuar la respectiva reflexión sobre el hecho y buscar posibles soluciones y compromisos ante el impase. Si la situación presentada no fue observada por quien está a cargo, sino que procede de una queja hecha por un miembro de la comunidad, se indagará con otras personas que estuvieron presentes para tener una mejor información de lo ocurrido.

En caso de que las anteriores medidas no generen soluciones o que los compromisos realizados entre las partes no se cumplan; la coordinación remitirá informe al Rector (Presidente del Comité Escolar de Convivencia) quien determinará si se hace necesario convocar extraordinariamente el Comité Escolar de Convivencia para presentar el caso y decidir si se debe acudir al protocolo de la situación tipo II.`
},

{
    titulo: "Artículo 18: Acciones preventivas y/o correctivas para situaciones Tipo I",
    palabras: [
        "articulo 18",
        "artículo 18",
        "acciones preventivas tipo I",
        "acciones preventivas tipo 1",
        "acciones correctivas tipo I",
        "acciones correctivas tipo 1",
        "medidas tipo I",
        "medidas tipo 1",
        "correctivos situaciones tipo I",
        "correctivos situaciones tipo 1"
    ],
    contenido: `ARTICULO 18°. ACCIONES PREVENTIVAS Y/O CORRECTIVAS A TOMAR PARA SITUACIONES TIPO I.

Ante el incumplimiento de los compromisos asumidos por un estudiante con el docente o directivo-docente encargado de atender la situación, y como parte del debido proceso y en procura de aplicar acciones preventivas y/o correctivas se aplicaran las siguientes medidas:

Ofrecer disculpas públicas a las personas afectadas.

Llamado de atención verbal acompañado de una acción pedagógica o servicio social.

Llamado de atención escrito del cual se dejará constancia en el Observador del estudiante.

Realizar charlas de reflexión utilizando carteleras, exposiciones u otro medio de comunicación por parte de quien cometa la falta.`
},

{
    titulo: "Artículo 19: Situaciones Tipo II",
    palabras: [
        "articulo 19",
        "artículo 19",
        "situaciones tipo II",
        "situaciones tipo 2",
        "tipo II",
        "tipo 2",
        "faltas tipo II",
        "faltas tipo 2",
        "acciones tipificadas tipo II",
        "acciones tipificadas tipo 2"
    ],
    contenido: `ARTICULO 19°. SITUACIONES TIPO II.

Lanzar objetos dentro y fuera del plantel que ocasione daños a cualquier Miembro de la comunidad educativa y/o particulares.

Encerrar arbitrariamente a un compañero(a) en cualquier recinto de la institución.

Enfrentamientos físicos con puños, apodos y demás manifestaciones agresivas.

Enfrentamientos verbales con palabras obscenas.

Porte de armas que pongan en riesgo la integridad físicas de los miembros de la comunidad educativa.

Dibujar figuras obscenas, mensajes denigrantes y/o fotomontajes, sea por medio virtual o físico que atenten contra la moral o el buen nombre de cualquiera de los miembros de la comunidad educativa.

Mensajes sexuales ofensivos escritos en espacios públicos como baños, paredes, tablero o pupitres.

Divulgar fotos o videos que afecten a otras personas a través del uso de las Tic.

Atentar contra uno o varios miembros de la comunidad educativa de manera física con objetos corto punzantes, armas de fuego, golpes empujones o mordiscos.

Calumniar a cualquier miembro de la comunidad educativa.

Piropos inadecuados o contacto físico intencional no consentido (involucrando partes íntimas del cuerpo) que ocurran de forma repetitiva.

Burlas o manifestaciones irrespetuosas contra uno o varios miembros de la comunidad educativa en situaciones de vulnerabilidad y/o diferencia de edad, raza, condición social, o inclinación sexual dentro de la institución, por redes sociales o cualquier medio tecnológico.

Practicar ritos satánicos, espiritismo, brujería y otros actos que atenten contra la dignidad humana y la salud física y mental de cualquier miembro de la comunidad educativa.

Inducir a cualquier miembro de la comunidad educativa al consumo de cigarrillo, tabaco, licor o cualquier tipo de sustancias psicoactivas dentro de la Institución o en actividades que involucren el nombre del colegio.

Amenazar, chantajear, extorsionar, presionar, intimidar o atentar fisicamente contra los compañeros de la Institución o cualquiera de sus miembros.

Hurto comprobado o complicidad que incluya coacción, agresión o sometimiento.

Irrespeto con palabras obscenas contra un docente - directivo.`
},

{
    titulo: "Artículo 20: Protocolo para situaciones Tipo II",
    palabras: [
        "articulo 20",
        "artículo 20",
        "protocolo situaciones tipo II",
        "protocolo situaciones tipo 2",
        "protocolo tipo II",
        "protocolo tipo 2",
        "protocolo de atencion tipo II",
        "protocolo de atención tipo II",
        "que hace la institucion ante una situacion tipo II",
        "qué hace la institución ante una situación tipo II"
    ],
    contenido: `ARTICULO 20°. PROTOCOLO A SEGUIR POR PARTE DE LA INSTITUCIÓN.

Quien detecta la falta, docente, coordinador, rector o cualquier otro integrante de la comunidad educativa dialogará con el o los estudiantes implicado, de lo cual se dejara constancia.

De ser reiterativa la conducta, hará las anotaciones correspondientes en el observador donde deben firmar los implicados.

Citar, por parte de docente, dirección de grupo o coordinación, al acudiente para ponerle en conocimiento la situación y formalizar un compromiso para ayudar a mejorar al estudiante.

Intervención de Sicoorientación o coordinación de lo cual se dejara constancia.

Intervención del comité de convivencia, de lo cual se dejara constancia.`
},

{
    titulo: "Artículo 21: Ruta de atención para situaciones Tipo II",
    palabras: [
        "articulo 21",
        "artículo 21",
        "ruta de atencion tipo II",
        "ruta de atención tipo II",
        "ruta de atencion tipo 2",
        "ruta de atención tipo 2",
        "ruta situaciones tipo II",
        "ruta situaciones tipo 2",
        "proceso situaciones tipo II",
        "proceso situaciones tipo 2"
    ],
    contenido: `ARTICULO 21°. RUTA DE ATENCION PARA SITUACIONES TIPO II.

Recoger versiones de las partes implicadas en la situación.

Dialogar con los estudiantes implicados a cerca de la situación de manera interdisciplinar donde se refuercen los valores vulnerados en la situación presentada.

Reforzar las competencias ciudadanas relacionadas con el manejo de las emociones, reconocimiento de la sexualidad y la exploración del cuerpo.

Anotaciones en el observador del estudiante.

Llamado del padre de familia.

Acciones pedagógicas y firma de compromiso, por parte del director de grupo, estudiante y padre de familia. Remisión al departamento de orientación escolar.

En casos de daño físico, se trasladará al o los estudiantes a un centro asistencial para su atención inmediata y se informará a los acudientes (se dejará constancia).

En caso de haber requerido medidas de restablecimiento de derechos, se remitirá la situación a las autoridades administrativas y se dejará constancia de dicha actuación.

Adoptar medidas de protección a los estudiantes involucrados en la situación, para evitar posibles represalias.

Determinar las acciones restaurativas que busquen la reparación de los daños causados, el restablecimiento de los derechos y la reconciliación dentro de un clima de relaciones constructivas en el establecimiento educativo; así como las consecuencias aplicables a quienes han promovido, contribuido o participado en la situación reportada.

El comité escolar de convivencia dejará constancia en acta de todo lo ocurrido y de las decisiones adoptadas, la cual será suscrita por todos los integrantes e intervinientes. El comité realizará el análisis y seguimiento, a fin de verificar si la solución fue efectiva o si se requiere acudir al protocolo consagrado en la situación tipo III.

El presidente del comité escolar de convivencia reportará la información del caso al aplicativo que para el efecto se haya implementado en el Sistema de Información Unificado de Convivencia Escolar.`
},

{
    titulo: "Artículo 22: Acciones preventivas y/o correctivas para situaciones Tipo II",
    palabras: [
        "articulo 22",
        "artículo 22",
        "acciones preventivas tipo II",
        "acciones preventivas tipo 2",
        "acciones correctivas tipo II",
        "acciones correctivas tipo 2",
        "medidas tipo II",
        "medidas tipo 2",
        "correctivos situaciones tipo II",
        "correctivos situaciones tipo 2"
    ],
    contenido: `ARTICULO 22°. ACCIONES PREVENTIVAS Y/O CORRECTIVAS A TOMAR PARA SITUACIONES TIPO II.

Fomentar espacios en los que los miembros de la comunidad educativa puedan expresar sus puntos de vista sobre la situación, (conciliación, concertación, entre otros) aplicando el principio de confidencialidad y respeto a la intimidad de los temas que allí se traten para dar un manejo ético y cuidadoso de la situación.

Reconocer el tipo de situación, su recurrencia y daños que pueden ocasionar.

Revisar las características y consecuencias del acontecimiento.

Socializar constantemente los protocolos a la comunidad educativa.

Revisión del historial disciplinario de los implicados.

Brindar acompañamiento a través de la Psicorientacion.

Ejecutar proyectos y jornadas pedagógicas para el fortalecimiento de los valores y la sana convivencia con los miembros de la comunidad educativa a través de la socialización del manual de convivencia, carteleras, murales y utilización de las Tic (redes sociales, blog interactivo institucional entre otras).`
},

{
    titulo: "Artículo 23: Situaciones Tipo III",
    palabras: [
        "articulo 23",
        "artículo 23",
        "situaciones tipo III",
        "situaciones tipo 3",
        "tipo III",
        "tipo 3",
        "faltas tipo III",
        "faltas tipo 3",
        "acciones tipificadas tipo III",
        "acciones tipificadas tipo 3"
    ],
    contenido: `ARTICULO 23°. SITUACIONES TIPO III.

Hurto o malversación de fondos.

Portar, hacer uso o venta de armas y/o explosivos que pongan en peligro la integridad de las personas o la planta física del colegio.

Inducción, porte, distribución o intento de distribución de sustancias sicotrópicas, alucinógenas que causen adicción.

Ingerir bebidas alcohólicas, sustancias alucinógenas, sustancias sicotrópicas que causen adicción dentro o fuera de la Institución (en actividades institucionales) y el ingreso de las mismas a la institución.

Ejecutar dentro o fuera de la Institución actos que atenten contra la moral y la dignidad de la persona y principios de la Institución: Acceso carnal violento, acto sexual violento, acceso carnal abusivo con menor de edad, actos sexuales abusivos.

Realizar o encubrir actos que atenten contra la comunidad educativa, tales como: explotación económica y laboral, maltrato físico o psicológico, abuso o acoso sexual, discriminación por edad, sexo, raza, religión, política, posición social, lugar de vivienda y tráfico de estupefacientes (art 44. numeral 2. Código de infancia y adolescencia).

Atentar contra el derecho a la vida (art 11, constitución política) y/o paz mediante actos tales como amenazas, boleteo, estafas, chantajes, lesiones personales, abuso de confianza por cualquier medio (Electrónico, físico u otros).

Pertenecer o fomentar grupos vandálicos o pandillas dentro o fuera de la Institución.

Falsedad y/o adulteracion en documentos utilizados para ingresar al plantel o en otro tipo de actividad dentro y fuera de la institución.

Relaciones sexuales dentro o fuera de la institución en actividades propias de la institución.

PARÁGRAFO 1: El Comité Escolar de Convivencia activará la Ruta de Atención Integral (RAI) para que brinden la atención inmediata a la víctima, a quien se le atribuye la agresión y a las personas que hayan informado o hagan parte de la situación presentada para brindarles protección dentro y fuera de la Institución.`
},

{
    titulo: "Artículo 24: Protocolo para la atención de situaciones Tipo III",
    palabras: [
        "articulo 24",
        "artículo 24",
        "protocolo situaciones tipo III",
        "protocolo situaciones tipo 3",
        "protocolo tipo III",
        "protocolo tipo 3",
        "atencion situaciones tipo III",
        "atención situaciones tipo III",
        "ruta de atencion tipo III",
        "ruta de atención tipo III"
    ],
    contenido: `ARTICULO 24°. PROTOCOLO PARA LA ATENCIÓN DE SITUACIONES TIPO III.

En casos de daño al cuerpo o a la salud, garantizar la atención inmediata en salud física y mental de los involucrados, mediante la remisión a las entidades competentes, actuación de la cual se dejará constancia.

Informar de manera inmediata a los padres, madres o acudientes de todos los estudiantes involucrados, actuación de la cual se dejará constancia.

El presidente del Comité Escolar de Convivencia de manera inmediata y por el medio más expedito, pondrá la situación en conocimiento de la Policía Nacional, policía infancia Y adolescencia, personería, ICBF, salud mental, actuación de la cual se dejará constancia.

No obstante, lo dispuesto en el numeral anterior, se citará a los integrantes del comité escolar de convivencia en los términos fijados en el manual de convivencia.

El presidente del comité escolar de convivencia informará a los participantes en el comité, de los hechos que dieron lugar a la convocatoria, guardando reserva de aquella información que pueda atentar contra el derecho la intimidad y confidencialidad de las partes involucradas, así como del reporte realizado ante la autoridad competente.

Pese a que una situación se haya puesto en conocimiento de las autoridades competentes, el comité escolar de convivencia adoptará, de manera inmediata, las medidas propias del establecimiento educativo, tendientes a proteger dentro del ámbito de sus competencias a la víctima, a quien se le atribuye la agresión y a las personas que hayan informado o hagan parte de la situación presentada, actuación de la cual se dejará constancia.

El presidente del comité escolar de convivencia reportará la información del caso al aplicativo que para el efecto se haya implementado en el Sistema de Información Unificado de Convivencia Escolar.

Los casos sometidos a este protocolo serán objeto de seguimiento por parte del comité escolar de convivencia, de la autoridad que asuma el conocimiento y del comité municipal o departamental de convivencia escolar que ejerza jurisdicción sobre el establecimiento educativo en el cual se presentó el hecho.`
},

{
    titulo: "Artículo 25: Protocolo a seguir por parte de la institución para situaciones Tipo III",
    palabras: [
        "articulo 25",
        "artículo 25",
        "protocolo tipo III",
        "protocolo tipo 3",
        "correctivos tipo III",
        "correctivos tipo 3",
        "protocolo institucion tipo III",
        "protocolo institución tipo III",
        "acciones de la institucion tipo III",
        "acciones de la institución tipo III"
    ],
    contenido: `ARTICULO 25°. PROTOCOLO A SEGUIR POR PARTE DE LA INSTITUCIÓN.

Las situaciones TIPO III conllevan los siguientes correctivos por parte de la Institución:

Anotación inmediata en el Observador por parte del docente o coordinador que haya conocido u observado la situación, la anotación debe ser firmada por los estudiantes aceptándola o rechazándola, el estudiante debe realizar un escrito allegandolo al día siguiente con la firma del padre, madre y/o acudiente donde conste que se encuentra enterado de la situación.

El coordinador remitirá de manera inmediata a las entidades competentes.

El coordinador rinde informe inmediatamente sobre la situación al Rector (Presidente del Comité Escolar de Convivencia) quien citará de manera inmediata y por el medio más expedito al Comité Escolar de Convivencia, padres, madres y/o acudientes de los estudiantes involucrados para presentar el caso y activar la Ruta de Atención Integral (RAI).

El comité Escolar de Convivencia tomará las medidas pertinentes de protección y hará el seguimiento de la situación.`
},

{
    titulo: "Artículo 26: Acciones preventivas y/o correctivas para situaciones Tipo III",
    palabras: [
        "articulo 26",
        "artículo 26",
        "acciones preventivas tipo III",
        "acciones preventivas tipo 3",
        "acciones correctivas tipo III",
        "acciones correctivas tipo 3",
        "medidas tipo III",
        "medidas tipo 3",
        "correctivos situaciones tipo III",
        "correctivos situaciones tipo 3"
    ],
    contenido: `ARTICULO 26°. ACCIONES PREVENTIVAS Y/O CORRECTIVAS A TOMAR PARA SITUACIONES TIPO III.

La institución adoptará medidas acordes con lo que determinen las autoridades competentes.`
},

{
    titulo: "Matrícula condicional",
    palabras: [
        "matricula condicional",
        "matrícula condicional",
        "que es matricula condicional",
        "qué es matrícula condicional",
        "sancion matricula condicional",
        "sanción matrícula condicional",
        "cuando se aplica matricula condicional",
        "cuándo se aplica matrícula condicional",
        "incumplimiento reiterativo",
        "comite de convivencia matricula condicional"
    ],
    contenido: `MATRICULA CONDICIONAL.

Esta se determina cuando al juicio del comité de convivencia escolar, el estudiante incurre de manera reiterativa en el incumplimiento de sus deberes, es decir, que a pesar de los llamados de atención por haber incurrido en situaciones (tipo II o III), de manera recurrente, sin mostrar cambios positivos en su actitud o comportamiento.

La matrícula condicional es la sanción que se genera cuando el estudiante después de haber firmado acta de compromiso, haber sido objeto de suspensión y/o con seguimiento en sicoorientacion; continua presentando dificultades en su comportamiento por los cuales nuevamente ha recibido llamados de atención con notificación a su acudiente. Su objetivo es propiciar un cambio decidido de actitud.

Tiene una vigencia definida durante el año lectivo, según el criterio del consejo directivo lo cual queda establecido en la resolución de rectoría que avala la sanción.

Se informara de manera oportunamente al padre o acudiente la situación presentada y quedará constancia en el observador.`
},

{
    titulo: "Suspensión de 1 a 3 días",
    palabras: [
        "suspension",
        "suspensión",
        "suspension de 1 a 3 dias",
        "suspensión de 1 a 3 días",
        "suspension de uno a tres dias",
        "suspensión de uno a tres días",
        "sancion de suspension",
        "sanción de suspensión",
        "medida de suspension",
        "medida de suspensión",
        "comite de convivencia suspension",
        "comité de convivencia suspensión"
    ],
    contenido: `SUSPENSIÓN DE 1 A 3 DÍAS.

Es una medida de carácter formativo donde el estudiante no podrá asistir a las clases regulares durante un periodo determinado por el comité de convivencia, esta busca la reflexión en el estudiante con el fin de que mejore su comportamiento. El incumplimiento de los compromisos disciplinarios o el incurrir en situaciones catalogadas como tipo II o III en el presente Manual de Convivencia dará lugar a Comité de la suspensión de 1 a 3 días, previo análisis del convivencia. Durante ella, el alumno no podrá participar de las actividades regulares del Colegio, asumiendo todas las consecuencias académicas que se deriven de ello. Este deberá retornar a la institución con los cuadernos al día correspondientes a las clases que dejo de asistir debido a la sanción.

En este caso el alumno comparecerá ante el Comité de convivencia para dar su versión de los hechos y realizar los descargos que considere pertinentes, previamente el comité de convivencia recogerá toda la información sobre el hecho, escuchará al estudiante e informará a la familia. Así mismo, el comité de convivencia, presentará toda la información que se ha recogido previamente sobre los hechos.

Cuando se determine aplicar esta sanción se levantara un acta de la medida de Suspensión, de la cual se entregara copia a los padres del alumno. En todos los casos de suspensión el (la) estudiante deberá realizar una reflexión escrita sobre su comportamiento, analizando los factores que lo llevaron a él a incurrir actos tipificados como situaciones II o III, las consecuencias y los compromisos de cambio que asumirá. En el observador se consignarán los compromisos de mejoramiento asumidos por el (la) estudiante y el apoyo que recibirá de sus padres en el cumplimiento de dicho compromiso. Cabe anotar que la nota de comportamiento del estudiante implicado, se verá afectada por estos hechos.`
},

{
    titulo: "Causales de suspensión",
    palabras: [
        "causales de suspension",
        "causales de suspensión",
        "causas de suspension",
        "causas de suspensión",
        "cuando se aplica la suspension",
        "cuándo se aplica la suspensión",
        "reincidencia faltas tipo II",
        "reincidencia faltas tipo III",
        "incumplimiento de compromisos",
        "compromisos disciplinarios suspension"
    ],
    contenido: `CAUSALES DE SUSPENSIÓN.

1. Reincidencia en faltas tipo II O III, teniendo matrícula condicional o acta de compromiso.

2. El incumplimiento reiterado a sus compromisos.`
},

{
    titulo: "Pérdida de cupo",
    palabras: [
        "perdida de cupo",
        "pérdida de cupo",
        "cancelacion de matricula",
        "cancelación de matrícula",
        "cancelar matricula",
        "cancelar matrícula",
        "cuando se pierde el cupo",
        "cuándo se pierde el cupo",
        "causales de perdida de cupo",
        "causales de pérdida de cupo"
    ],
    contenido: `PÉRDIDA DE CUPO.

Agotadas las instancias y el seguimiento en busca de un mejor comportamiento en el estudiante y así garantizar una sana convivencia, el comité de convivencia y el Consejo Directivo determinará la Cancelación de la Matrícula. Esta será comunicada por rectoría y coordinación, al incurrir el estudiante en cualquiera de las situaciones Tipo II o Tipo III.

También son causales de pérdida de cupo, las siguientes:

Perdida de año por dos veces consecutivas, durante su permanencia en la institución.

Incumplimiento constante de sus compromisos académicos.

Inasistencia constante.

PARÁGRAFO 1: En cada uno de los pasos del proceso de seguimiento, según la gravedad de la falta se puede afectar el comportamiento con desempeño bajo (menos de 3.0) y la observación respectiva, excepto en situaciones académicas que no obedecen a incumplimiento de los compromisos.

PARÁGRAFO 2: El desempeño bajo en comportamiento social es una de las acciones correctivas de la Institución Educativa. Ella podrá ser una de las causas de no continuidad en la misma. El estudiante que en todos los períodos tenga desempeño bajo en comportamiento, aunque tenga buen promedio académico, perderá el cupo en la Institución. El comité de convivencia será quien determine esta sanción previa recomendación de la Comisión de Evaluación y Promoción de Estudiantes, mediante resolución motivada con el respaldo del Consejo Directivo, con copias a los interesados y el archivo del plantel educativo.

PARAGRAFO 3: La suspensión temporal de clases o del plantel educativo a un estudiante, causará efectos académicos, de las cuales las directivas no se harán responsables.

PARAGRAFO 4. En ningún caso los docentes pueden afectar las notas del estudiante en la parte académica a consecuencia de su faltas disciplinarias.`
},

{
    titulo: "En caso de consumo de sustancias psicoactivas",
    palabras: [
        "consumo de sustancias psicoactivas",
        "consumo de sustancias",
        "sustancias psicoactivas",
        "que pasa si consume sustancias",
        "qué pasa si consume sustancias",
        "protocolo consumo sustancias",
        "protocolo de consumo de sustancias",
        "estudiante consumo sustancias",
        "consumo spa",
        "casos de consumo de sustancias"
    ],
    contenido: `EN CASO DE CONSUMO DE SUSTANCIAS PSICOACTIVAS.

Una vez se establezca de manera objetiva que un estudiante está inmerso en situaciones de consumo de sustancias psicoactivas, la institución por intermedio de Coordinación, Rectoría y Orientación escolar procederá de la siguiente manera:

1º. Notificación a los padres de familia.

20. Remisión a comunidad terapéutica para apoyo familiar y al estudiante, ya sea a psicología del Hospital San Roque, EPS`
},


{
    titulo: "En caso de consumo de sustancias psicoactivas: continuación",
    palabras: [
        "informes entidad sustancias psicoactivas",
        "solicitar informes entidad",
        "orientacion sobre apoyo al estudiante",
        "orientación sobre apoyo al estudiante",
        "apoyo al estudiante",
        "omision de procedimientos familia",
        "omisión de procedimientos familia",
        "remision a otra entidad",
        "remisión a otra entidad",
        "familia del joven"
    ],
    contenido: `EN CASO DE CONSUMO DE SUSTANCIAS PSICOACTIVAS.

3º. Solicitar informes a la entidad con el objetivo de recibir orientación sobre el apoyo que se debe prestar al estudiante en la institución.

5°. La omisión de estos procedimientos por parte de la familia del joven se constituye en causal para la remisión a otra entidad mayor jerarquía.`
},

{
    titulo: "Artículo 27: Comité Institucional de Convivencia Escolar",
    palabras: [
        "articulo 27",
        "artículo 27",
        "comite institucional de convivencia escolar",
        "comité institucional de convivencia escolar",
        "comite de convivencia escolar",
        "comité de convivencia escolar",
        "que es el comite de convivencia",
        "qué es el comité de convivencia",
        "funcion del comite de convivencia",
        "función del comité de convivencia",
        "maxima instancia convivencia escolar",
        "máxima instancia convivencia escolar"
    ],
    contenido: `ARTICULO 27°. COMITÉ INSTITUCIONAL DE CONVIVENCIA ESCOLAR.

De acuerdo con lo establecido por la ley, es la máxima instancia en el manejo, orientación y activación de la ruta para la atención de los casos que afectan la convivencia escolar en La Institución Educativa Delicias - San Carlos constituido por los estamentos establecidos en la norma, cuya tarea será la de "apoyar la labor de promoción y seguimiento a la convivencia escolar, a la educación para el ejercicio de los derechos humanos, sexuales y reproductivos, así como el desarrollo y aplicación del Manual de Convivencia y de la prevención y mitigación de la violencia escolar" (Decreto 1965, Art. 22).

El comité tendrá entre sus actividades:

Identificar, analizar y resolver los conflictos que se presenten entre estudiantes y docentes, directivos y estudiantes, entre estudiantes y entre docentes.

Liderar acciones que fomenten la convivencia, la construcción de ciudadanía, el ejercicio de los derechos humanos, sexuales y reproductivos (DHSR) y la prevención y mitigación de la violencia escolar entre los miembros de la comunidad educativa.

Promover la vinculación a programas y actividades que respondan a las necesidades de la comunidad educativa.`
},

{
    titulo: "Artículo 28: Funciones del Comité de Convivencia Escolar y sus miembros",
    palabras: [
        "articulo 28",
        "artículo 28",
        "funciones del comite de convivencia",
        "funciones del comité de convivencia",
        "funciones del comite de convivencia escolar",
        "funciones del comité de convivencia escolar",
        "funciones de los miembros del comite",
        "funciones de los miembros del comité",
        "que hace el comite de convivencia",
        "qué hace el comité de convivencia",
        "ley 1620 funciones comite",
        "decreto 1965 funciones comite"
    ],
    contenido: `ARTICULO 28°. FUNCIONES DEL COMITÉ DE CONVIVENCIA ESCOLAR Y SUS MIEMBROS.

Acorde con lo establecido por la ley 1620 de 2013, Decreto reglamentario 1965 de 2013 y manual de convivencia, se adoptan las funciones a saber:

1. Identificar, documentar, analizar y resolver los conflictos que se presenten entre docentes y estudiantes, directivos y estudiantes, entre estudiantes y entre docentes.

2. Liderar en los establecimientos educativos acciones que fomenten la convivencia, la construcción de ciudadanía, el ejercicio de los derechos humanos, sexuales y reproductivos y la prevención y mitigación de la violencia escolar entre los miembros de la comunidad educativa.

3. Promover la vinculación de los establecimientos educativos a estrategias, programas y actividades de convivencia y construcción de ciudadanía que se adelanten en la región y que respondan a las necesidades de su comunidad educativa.

4. Convocar a un espacio de conciliación para la resolución de situaciones Conflictivas que afecten la convivencia escolar, por solicitud de cualquiera de los miembros de la comunidad educativa o de oficio cuando se estime conveniente en procura de evitar perjuicios irremediables a los miembros de la comunidad educativa. El estudiante estará acompañado por el padre, madre de familia, acudiente o un compañero del establecimiento educativo.

5. Activar la Ruta de Atención Integral para la Convivencia Escolar definida en el artículo 29 de la ley 1620 de 2013, frente a situaciones específicas de conflicto, de acoso escolar, frente a las conductas de alto riesgo de violencia escolar o de vulneración de derechos sexuales y reproductivos que no pueden ser resueltos por este comité de acuerdo con lo establecido en el manual de convivencia, porque trascienden del ámbito escolar, y revistan las características de la comisión de una conducta punible, razón por la cual deben ser atendidos por otras instancias o autoridades que hacen parte de la estructura del Sistema y de la Ruta.`
},


{
    titulo: "Artículo 28: Funciones del Comité de Convivencia Escolar y sus miembros - Numerales 6, 7 y 8",
    palabras: [
        "funciones del comité de convivencia",
        "funciones del comité escolar de convivencia",
        "numeral 6 comité de convivencia",
        "numeral 7 comité de convivencia",
        "numeral 8 comité de convivencia",
        "estrategias de convivencia escolar",
        "seguimiento manual de convivencia",
        "estrategias pedagógicas",
        "instrumentos de convivencia",
        "derechos humanos sexuales y reproductivos"
    ],
    contenido: `ARTICULO 28°. FUNCIONES DEL COMITÉ DE CONVIVENCIA ESCOLAR Y SUS MIEMBROS.

6. Liderar el desarrollo de estrategias e instrumentos destinados a promover y evaluar la convivencia escolar, el ejercicio de los derechos humanos sexuales y reproductivos.

7. Hacer seguimiento al cumplimiento de las disposiciones establecidas' en el manual de convivencia, y presentar informes a la respectiva instancia que hace parte de la estructura del Sistema Nacional De Convivencia Escolar y Formación para los Derechos Humanos, la Educación para la Sexualidad y la Prevención y Mitigación de la Violencia Escolar, de los casos o situaciones que haya conocido el comité.

8. Proponer, analizar y viabilizar estrategias pedagógicas que permitan la flexibilización del modelo pedagógico y la articulación de diferentes áreas de estudio que lean el contexto educativo y su pertinencia en la comunidad para determinar más y mejores maneras de relacionarse en la construcción de la ciudadanía.`
},

{
    titulo: "Artículo 29: Acciones de promoción",
    palabras: [
        "acciones de promoción",
        "articulo 29",
        "artículo 29",
        "promoción de la convivencia",
        "acciones del comité de convivencia",
        "ajuste del manual de convivencia",
        "talleres de convivencia",
        "mediación y conciliación",
        "educación para la sexualidad",
        "construcción de ciudadanía",
        "competencias ciudadanas",
        "derechos humanos sexuales y reproductivos"
    ],
    contenido: `ARTICULO 29°. ACCIONES DE PROMOCIÓN.

En virtud del componente de promoción, el Comité Escolar de Convivencia adelantará las siguientes acciones:

Liderar el ajuste del Manual de Convivencia.

Liderar iniciativas a través de talleres, orientados por la personería Municipal, defensoría del pueblo, comisaria de familia, en formación de la comunidad educativa en temáticas tales como derechos, mediación y conciliación, para fortalecer el Sistema institucional de ciudadanas, desarrollo infantil y adolescente, convivencia humanos, sexuales y reproductivos, sexualidad, competencias Convivencia Escolar.

Fortalecer la implementación de proyectos pedagógicos de educación para la sexualidad y construcción de ciudadanía desde preescolar, que correspondan a las particularidades socioculturales locales y departamentales. Con el fin de que, progresivamente, del contexto de la institución, por medio de alianzas con entidades vayan desarrollando las competencias que facilitan la toma de decisiones autónomas frente al ejercicio de la sexualidad y la realización de proyectos de vida.`
},

{
    titulo: "Artículo 30: Acciones de atención",
    palabras: [
        "acciones de atención",
        "articulo 30",
        "artículo 30",
        "atención convivencia escolar",
        "atender situaciones de convivencia",
        "derechos humanos sexuales y reproductivos",
        "protocolos internos",
        "protocolos de atención",
        "Sistema Nacional de Convivencia Escolar"
    ],
    contenido: `ARTICULO 30°. ACCIONES DE ATENCIÓN.

Serán acciones de atención aquellas que permitan asistir a los miembros de la comunidad educativa frente a las situaciones que afectan la convivencia escolar y el ejercicio de los derechos humanos, sexuales y reproductivos, mediante la implementación y aplicación de los protocolos internos del establecimiento educativo y la activación cuando fuere necesario, de los protocolos de atención que para el efecto se tengan implementados por parte de los demás actores que integran el Sistema Nacional de Convivencia Escolar en el ámbito de su competencia.`
},

{
    titulo: "Artículo 31: Acciones de prevención",
    palabras: [
        "acciones de prevención",
        "articulo treinta y uno",
        "artículo 31",
        "prevención de la violencia escolar",
        "prevencion convivencia escolar",
        "prevención convivencia escolar",
        "prevenir comportamientos",
        "derechos humanos sexuales y reproductivos",
        "prevenir conflictos",
        "convivencia de la comunidad educativa"
    ],
    contenido: `ARTICULO 31°. ACCIONES DE PREVENCIÓN.

Se consideran acciones de prevención las que buscan intervenir oportunamente en los comportamientos que podrían afectar la realización efectiva de los derechos humanos, sexuales y reproductivos con el fin de evitar que se constituyan en patrones de interacción que alteren la convivencia de los miembros de la comunidad educativa.`
},


{
    titulo: "Artículo 31: Acciones de prevención - Acciones de prevención y pérdida del cupo",
    palabras: [
        "acciones de prevencion",
        "acciones de prevención convivencia",
        "identificación de riesgos",
        "riesgos de convivencia escolar",
        "riesgos convivencia",
        "derechos humanos sexuales y reproductivos",
        "acciones pedagógicas",
        "charlas de prevención",
        "talleres de prevención",
        "conferencias de prevención",
        "perdida del cupo",
        "pérdida del cupo",
        "reprobar dos veces",
        "reprobar un grado"
    ],
    contenido: `ARTICULO 31°. ACCIONES DE PREVENCIÓN.

Hacen parte de las acciones de prevención:

La identificación de los riesgos de ocurrencia de las situaciones más comunes que afectan la convivencia escolar y el ejercicio de los derechos humanos, sexuales y reproductivos, a partir de las particularidades del clima escolar y del análisis de las características familiares, sociales, políticas, económicas y culturales externas, que de la institución de acuerdo con lo establecido en el numeral 5 del artículo 17 de la Ley 1620 de 2013 inciden en las relaciones interpersonales de la comunidad educativa.

Diseño e implementación de acciones pedagógicas como charlas, talleres, conferencias, diálogos entre otras, que contribuyen a la mitigación de las situaciones que estén afectando la convivencia escolar y el ejercicio de los derechos humanos, sexuales y reproductivos en los niño, niñas y jóvenes de la Institución.

PARAGRAFO: Perdida del Cupo, teniendo en cuenta lo normado en la ley General de Educación y sentencias de la corte constitucional, el estudiante que luego de reprobar dos a mas veces un grado perderá el cupo de manera automática.`
},

{
    titulo: "Artículo 32: Gobierno Escolar",
    palabras: [
        "gobierno escolar",
        "articulo 32",
        "artículo 32",
        "definicion de gobierno escolar",
        "definición de gobierno escolar",
        "orientacion de la institucion",
        "orientación de la institución",
        "direccion de la institucion",
        "dirección de la institución",
        "administracion de la institucion",
        "administración de la institución",
        "consejo directivo",
        "consejo academico",
        "consejo académico",
        "rector",
        "comunidad educativa",
        "estudiantes",
        "padres de familia",
        "docentes",
        "directivos docentes",
        "egresados"
    ],
    contenido: `ARTICULO 32°. GOBIERNO ESCOLAR.

DEFINICIÓN. Se define como el conjunto de personas y órganos encargados de la orientación, dirección y administración de la institucion educativa. Estos órganos de gobierno se constituyen posibilitando la participación democrática de todos los estamentos de la comunidad educativa de la institucion (artículo 142 de la Ley 115 de 1.994).

De acuerdo con la Ley General de Educación y el artículo 18 del Decreto 1860 de 1.994, la comunidad educativa está constituida por las personas que tienen responsabilidades directas en la organización, desarrollo y evaluación del Proyecto Educativo que se ejecuta en la Institución Educativa.

Dicha comunidad educativa se compone de:
1) Estudiantes.
2) Padres de familia y/o acudientes.
3) Docentes.
4) Directivos docentes.
5) Egresados.

Todos ellos competentes para participar en la dirección de las instituciones de educación y lo harán por medio de sus representantes en los órganos del gobierno escolar.

1. El Consejo Directivo, instancia directiva, de participación de la comunidad educativa y de orientación académica y administrativa del establecimiento.

2. El Consejo Académico, instancia superior para participar en la orientación pedagógica del establecimiento.

3. El Rector, representante del establecimiento ante las autoridades educativas y ejecutor de las decisiones del gobierno escolar.`
},

{
    titulo: "Artículo 33: Funciones del Consejo Directivo",
    palabras: [
        "funciones del consejo directivo",
        "consejo directivo",
        "articulo 33",
        "artículo treinta y tres",
        "funciones consejo directivo",
        "decisiones de la institucion",
        "decisiones de la institución",
        "conflictos docentes estudiantes",
        "manual de convivencia",
        "reglamento de la institucion",
        "reglamento de la institución",
        "asignacion de cupos",
        "asignación de cupos",
        "defensa de derechos",
        "plan anual de actualizacion academica",
        "plan anual de actualización académica",
        "proyecto educativo institucional",
        "curriculo",
        "currículo",
        "plan de estudios"
    ],
    contenido: `ARTICULO 33°. FUNCIONES DEL CONSEJO DIRECTIVO.

De acuerdo con el artículo 144 de la Ley 115 de 1994 y el artículo 23 del Decreto 1860 de 1994, son las siguientes:

1. Tomar las decisiones que afecten el funcionamiento de la institución, excepto las que sean competencia de otra autoridad.

2. Servir de instancia para resolver los conflictos que se presenten entre los docentes y administrativos con los estudiantes del establecimiento educativo y después de haber agotado los procedimientos previstos en el reglamento o manual de convivencia.

3. Adoptar el manual de convivencia y el reglamento de la institución.

4. Fijar los criterios para la asignación de cupos disponibles para la admisión de nuevos estudiantes.

5. Asumir la defensa y garantía de los derechos de toda la comunidad educativa, cuando alguno de sus miembros se sienta lesionado.

6. Aprobar el plan anual de actualización académica del personal docente presentado por el Rector.

7. Participar en la planeación y evaluación del proyecto educativo institucional, del currículo y del plan de estudios y someterlos a la consideración de la Secretaría de Educación respectiva o del organismo que haga sus veces, para que verifiquen el cumplimiento de los requisitos establecidos en la ley y los reglamentos.

8. Estimular y controlar institución educativa: el buen funcionamiento de la institución educativa.`
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