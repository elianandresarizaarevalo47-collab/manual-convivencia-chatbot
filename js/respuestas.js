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