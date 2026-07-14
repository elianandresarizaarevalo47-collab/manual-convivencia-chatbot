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
        "titulo": "Artículo 2°. AMBITO DE APLICACIÓN",
        "palabras": ["ámbito", "aplicación", "formación", "estudiantes", "comunidad educativa"],
        "contenido": "Las normas contenidas en el manual de convivencia se aplican dentro del proceso de formación integral que desarrolla la Institución Educativa Delicias San Carlos de El Copey con sus estudiantes desde el nivel Preescolar hasta la Media y demás miembros de la comunidad educativa."
    },
    {
        "titulo": "Artículo 3°. JUSTIFICACIÓN",
        "palabras": ["justificación", "normativa", "marco legal", "convivencia", "comunidad educativa"],
        "contenido": "El presente Manual de Convivencia se justifica en la necesidad de establecer un marco normativo claro que regule las relaciones entre los miembros de la comunidad educativa, fundamentado en los principios constitucionales, los derechos humanos, la Ley 115 de 1994, la Ley 1620 de 2013 y demás normas vigentes que garantizan un ambiente de sana convivencia, respeto y formación ciudadana en la institución."
    },
    {
        "titulo": "Artículo 4°. ADMISIÓN DE ESTUDIANTES",
        "palabras": ["admisión", "matrícula", "estudiantes", "proceso", "requisitos"],
        "contenido": "La admisión de estudiantes en la Institución Educativa Delicias San Carlos de El Copey es el proceso mediante el cual se formaliza el ingreso de los aspirantes que cumplen con los requisitos legales y académicos establecidos por el Ministerio de Educación Nacional y el reglamento interno de la institución, garantizando la igualdad de oportunidades y el respeto por los derechos de los niños, niñas y adolescentes."
    },
    {
        "titulo": "Artículo 4° (Párrafo complementario)",
        "palabras": ["parágrafo", "complementario", "objetivos", "formación", "normativa"],
        "contenido": "Se debe garantizar que los objetivos del presente manual sean difundidos y comprendidos por toda la comunidad educativa, asegurando que su aplicación sea coherente con las políticas institucionales y las normas legales vigentes para la protección de los derechos de los estudiantes."
    },
    {
        "titulo": "Artículo 4° (Párrafo complementario)",
        "palabras": ["parágrafo", "complementario", "objetivos", "formación", "normativa"],
        "contenido": "Se debe garantizar que los objetivos del presente manual sean difundidos y comprendidos por toda la comunidad educativa, asegurando que su aplicación sea coherente con las políticas institucionales y las normas legales vigentes para la protección de los derechos de los estudiantes."
    },
   {
        "titulo": "Artículo 4° (Párrafo complementario)",
        "palabras": ["parágrafo", "complementario", "objetivos", "formación", "normativa"],
        "contenido": "Se debe garantizar que los objetivos del presente manual sean difundidos y comprendidos por toda la comunidad educativa, asegurando que su aplicación sea coherente con las políticas institucionales y las normas legales vigentes para la protección de los derechos de los estudiantes."
    },
  {
        "titulo": "Artículo 4° (Párrafo complementario)",
        "palabras": ["parágrafo", "complementario", "objetivos", "formación", "normativa"],
        "contenido": "Se debe garantizar que los objetivos del presente manual sean difundidos y comprendidos por toda la comunidad educativa, asegurando que su aplicación sea coherente con las políticas institucionales y las normas legales vigentes para la protección de los derechos de los estudiantes."
    },
  {
        "titulo": "Artículo 4° (Párrafo complementario)",
        "palabras": ["parágrafo", "complementario", "objetivos", "formación", "normativa"],
        "contenido": "Se debe garantizar que los objetivos del presente manual sean difundidos y comprendidos por toda la comunidad educativa, asegurando que su aplicación sea coherente con las políticas institucionales y las normas legales vigentes para la protección de los derechos de los estudiantes."
    },
    {
        "titulo": "Artículo 5°. ADMISIÓN DE ESTUDIANTES",
        "palabras": ["admisión", "estudiantes", "requisitos", "proceso", "ingreso"],
        "contenido": "La admisión de estudiantes es el proceso mediante el cual la Institución formaliza el ingreso de los aspirantes, verificando el cumplimiento de los requisitos académicos, legales y de documentación exigidos por la normativa educativa vigente y por los reglamentos internos de la Institución Educativa Delicias San Carlos de El Copey."
    },
{
        "titulo": "Artículo 5°. MATRÍCULA",
        "palabras": ["matrícula", "contrato", "compromiso", "estudiante", "padres de familia"],
        "contenido": "La matrícula es el acto voluntario y contractual mediante el cual el estudiante y sus padres de familia o acudientes se comprometen formalmente a aceptar, cumplir y respetar las normas establecidas en el Proyecto Educativo Institucional (PEI) y en el presente Manual de Convivencia, constituyéndose en el vínculo legal y pedagógico entre la familia y la institución."
    },
    {
        "titulo": "Artículo 6°. HORIZONTE INSTITUCIONAL",
        "palabras": ["horizonte", "institucional", "misión", "visión", "filosofía"],
        "contenido": "El horizonte institucional de la Institución Educativa Delicias San Carlos de El Copey se define a partir de su misión, visión y principios axiológicos que orientan el quehacer pedagógico, la formación integral de los estudiantes y el compromiso con el desarrollo social y cultural de la comunidad, garantizando la calidad en la prestación del servicio educativo."
    },
    {
        "titulo": "Artículo 7°. INFORMES INSTITUCIONALES",
        "palabras": ["informes", "institucionales", "rendición de cuentas", "transparencia", "comunidad"],
        "contenido": "La institución se compromete a presentar informes periódicos sobre el desarrollo de las actividades académicas, administrativas y financieras, garantizando la transparencia, la rendición de cuentas y el derecho de la comunidad educativa a conocer el estado y la gestión de los procesos que impactan el servicio educativo."
    },
    {
        "titulo": "Artículo 8°. DERECHOS DE LOS ESTUDIANTES",
        "palabras": ["derechos", "estudiantes", "respeto", "participación", "educación"],
        "contenido": "Los estudiantes de la Institución Educativa Delicias San Carlos tienen derecho a recibir una educación integral y de calidad, a ser tratados con dignidad y respeto por todos los miembros de la comunidad educativa, a expresar libremente sus ideas con responsabilidad, a participar en las actividades académicas y culturales, y a gozar de un ambiente escolar seguro, libre de discriminación y violencia."
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