import type { QuizQuestion, LevelData, Level } from '../types';

// New scoring based on 20 questions, 1-3 points each.
// Min score: 20, Max score: 60
export const levels: Record<Level, LevelData> = {
  'Junior': { title: 'Junior', minScore: 20 },
  'Mid': { title: 'Mid', minScore: 29 },
  'Senior': { title: 'Senior', minScore: 38 },
  'Lead': { title: 'Lead', minScore: 47 },
  'Lead Senior': { title: 'Lead Senior', minScore: 56 },
};

export const questions: QuizQuestion[] = [
  // Hard Skills
  {
    id: 1,
    category: 'Conocimiento de Procesos y Herramientas',
    skillType: 'Hard',
    options: [
      { text: 'No tengo una idea clara del proceso. Necesito explicación constante de términos o conceptos.', points: 1 },
      { text: 'Entiendo el proceso a alto nivel. Puede discutir sobre usabilidad, necesidades del cliente, heurísticas, creación de prototipos y/o consideraciones visuales.', points: 2 },
      { text: 'Hablo el idioma. Puede discutir la metodología aplicada y la investigación, promuevo las buenas prácticas, puedo analizar y criticar los vacios del proceso de forma proactiva.', points: 3 },
    ]
  },
  {
    id: 2,
    category: 'Investigación de Usuario',
    skillType: 'Hard',
    options: [
      { text: 'Soy capaz de utilizar los informes y conocimientos de investigación de usuarios existentes y aplicarlos al trabajo de diseño de productos.', points: 1 },
      { text: 'Participo en algunos estudios de investigación de usuarios recopilando datos. Puedo usar una heurística para evaluar la calidad de los prototipos.', points: 2 },
      { text: 'Puede realizar un estudio de investigación de principio a fin, analizar los resultados y genera información sobre las necesidades y comportamientos de los usuarios.', points: 3 },
    ]
  },
  {
    id: 3,
    category: 'Arquitectura de Información y Wireframing',
    skillType: 'Hard',
    options: [
      { text: 'Tengo comprensión limitada de cómo organizar el contenido y la información en la interfaz.', points: 1 },
      { text: 'Puedo producir diagramas de flujo de trabajo/usuario y organizar la información en mapas del sitio. Produzco wireframes de la interfaz de usuario.', points: 2 },
      { text: 'Se utilizar datos de pruebas de usabilidad e investigación de usuarios para planificar la estructura de información de sitios web, aplicaciones móviles y aplicaciones móviles.', points: 3 },
    ]
  },
  {
    id: 4,
    category: 'Dominio de Herramientas de UX',
    skillType: 'Hard',
    options: [
      { text: 'Tengo conocimientos básicos teóricos de UX y de herramientas de diseño derivado a la formación y prácticas profesionales. Mi experiencia es mínima en proyectos reales o avanzados.', points: 1 },
      { text: 'Mi experiencia en proyectos me perimite aplicar un grupo de herramientas más amplio, hacer concesiones y ser más eficiente.', points: 2 },
      { text: 'Tengo un profundo y/o amplio entendimiento de la disciplina, puedo escoger la herramienta correcta para el trabajo y hacerlo de forma efectiva.', points: 3 },
    ]
  },
  {
    id: 5,
    category: 'Copywriting y Contenido',
    skillType: 'Hard',
    options: [
      { text: "Tengo un uso poco claro del lenguaje; mala gramática, aplico 'lorem ipsum'. Prefiero usar imagenes de posición.", points: 1 },
      { text: 'A veces logro un uso competente del texto, el lenguaje y la terminología en toda la interfaz. Suelo usar algunos formatos básicos de imagenes e ilustraciones.', points: 2 },
      { text: 'Hago uso confiable de los copys, el idioma y la terminología en toda la interfaz. Se cómo aplicar la voz de marca y los estándares de copys en productos digitales. Conozco y evaluo el uso de contenidos gráficos.', points: 3 },
    ]
  },
  {
    id: 6,
    category: 'Diseño de Interacción y Prototipado',
    skillType: 'Hard',
    options: [
      { text: 'El diseño de interacciones no está bien pensadas y presentan fallas obvias.', points: 1 },
      { text: 'Hago el diseño de interacción trabajo a través de iteraciones con wireframes y flujos de trabajo.', points: 2 },
      { text: 'Comprendo y aplico las pautas de interfaz humana creadas por la mayoría de las principales empresas de diseño de tecnología, como Apple, Android y otras, para crear interfaces universalmente intuitivas.', points: 3 },
    ]
  },
  {
    id: 7,
    category: 'Comprensión del Negocio',
    skillType: 'Hard',
    options: [
      { text: 'Hago poco para identificar el funcionamiento de otras capas del negocio y, a menudo, no puedo predecir los resultados. Me enfoca estrictamente en las tareas descritas.', points: 1 },
      { text: 'Tengo curiosidad, intento comprender, profundizar. Detecto y desafía las suposiciones. Reúno una comprensión más profunda de cómo se unen las piezas.', points: 2 },
      { text: 'Descompongo problemas. Soy capaz de encontrar múltiples modelos alternativos y comparar sus compensaciones. Comprendo las interacciones humanas y técnicas en sistemas complejos.', points: 3 },
    ]
  },
  {
    id: 8,
    category: 'Diseño Visual y de UI',
    skillType: 'Hard',
    options: [
      { text: 'Tengo poca comprensión de la jerarquía dentro de los elementos de diseño.', points: 1 },
      { text: 'No creo nuevos sistemas visuales, pero puedo funcionar bien dentro de los sistemas existentes, las pautas y con supervisión.', points: 2 },
      { text: 'Aporto belleza a la interfaz, tengo un fuerte uso de la tipografía, el color y el diseño de la interfaz.', points: 3 },
    ]
  },
  {
    id: 9,
    category: 'Métricas y Análisis de Datos',
    skillType: 'Hard',
    options: [
      { text: 'Consulto y extraigo datos de tableros de análitica.', points: 1 },
      { text: 'Soy capaz de medir experiencias y define insights de mejora.', points: 2 },
      { text: 'Puedo definir metricas para medir la experiencia, medir y realizar propuestas de mejora.', points: 3 },
    ]
  },
  // Soft Skills
  {
    id: 10,
    category: 'Mentoría y Guía',
    skillType: 'Soft',
    options: [
      { text: 'Aún no esta preparado para ser mentor de otros.', points: 1 },
      { text: 'Capaz de dar algunos consejos a otros sobre asuntos relacionados con su competencia específica.', points: 2 },
      { text: 'Brindo retroalimentación y orientación en un amplio espectro de asuntos, de manera consistente. Puede tener una comprensión clara de las fortalezas y debilidades del colaborador a orientar.', points: 3 },
    ]
  },
  {
    id: 11,
    category: 'Alineación con la Visión',
    skillType: 'Soft',
    options: [
      { text: 'Me limíto a seguir a mis líderes.', points: 1 },
      { text: 'Entiendo la dirección y me apego a ella.', points: 2 },
      { text: 'Detecto desviaciones de la dirección e inconsistencias, las manifiesto.', points: 3 },
    ]
  },
  {
    id: 12,
    category: 'Colaboración Interdisciplinaria',
    skillType: 'Soft',
    options: [
      { text: 'No me involucro proactivamente con los roles de mi equipo interdiciplinario para entenderlos. Por lo que las relaciones en general no son buena o incluso pueden ser perjudiciales.', points: 1 },
      { text: 'Puede entender los roles de las personas de mi equipo interdiciplinario y aplicarlos positivamente para mi proceso de diseño.', points: 2 },
      { text: 'Apoyo en la organización de la estructura para proporcionar un objetivo, alcance, propiedad y dependencias claras. Puedo describir el modelo del equipo con sencillez, de forma que las personas y los equipos puedan seguirlo para lograr los objetivos deseados con la mínima fricción.', points: 3 },
    ]
  },
  {
    id: 13,
    category: 'Toma de Decisiones',
    skillType: 'Soft',
    options: [
      { text: 'Escucho, comprendo y solicito apoyo de mi lideres.', points: 1 },
      { text: 'Presento argumentos y alternativas de forma concisa. Facilito la conversación.', points: 2 },
      { text: 'Resuelvo con poco contexto.', points: 3 },
    ]
  },
  {
    id: 14,
    category: 'Manejo de Crisis',
    skillType: 'Soft',
    options: [
      { text: 'Trabajo para impulsar mi moral interna, aún que no simpre sea bien visto. Puede haber problemas con la competencia percibida, la participación o la sinceridad.', points: 1 },
      { text: 'Me convierto en sirviente del equipo en lugar de ser rey de mi propio dominio.', points: 2 },
      { text: 'Soy capaz de afrontar situaciones de crisis minimizando el impacto en el equipo. Capaz de mediar disputas con éxito.', points: 3 },
    ]
  },
  {
    id: 15,
    category: 'Comunicación Interna del Equipo',
    skillType: 'Soft',
    options: [
      { text: 'Sirvo como puente entre el equipo y otras partes interesadas, pero a menudo la información se pierde en la traducción y el equipo a menudo no es claro, no está informado o se sorprende.', points: 1 },
      { text: 'Soy capaz de mantener a las personas informadas y comunicarse con claridad. Sirvo como puente entre el equipo y el exterior.', points: 2 },
      { text: 'Puedo comunicarme de manera eficiente y breve, eligiendo la herramienta adecuada para el trabajo (correo electrónico, reuniones, documentos escritos, etc.).', points: 3 },
    ]
  },
  {
    id: 16,
    category: 'Comunicación y Seguimiento Externo',
    skillType: 'Soft',
    options: [
      { text: 'Dependo de guía externa y supervisión.', points: 1 },
      { text: 'Tengo autonomía para dar seguimiento.', points: 2 },
      { text: 'Se empoderarme para hacer que las cosas se muevan.', points: 3 },
    ]
  },
  {
    id: 17,
    category: 'Gestión de Objetivos',
    skillType: 'Soft',
    options: [
      { text: 'Está la intención de resolverlo, pero no siempre le doy la prioridad requerida.', points: 1 },
      { text: 'Tengo la habilidad de planificar en antelación y organizarse.', points: 2 },
      { text: 'No me desvío ni me distraigo con el entorno.', points: 3 },
    ]
  },
  {
    id: 18,
    category: 'Adaptabilidad y Gestión de Prioridades',
    skillType: 'Soft',
    options: [
      { text: 'Soy más reactivo que proactivo, sufró por falta de enfoque y prioridades poco claras. Todo se siente urgente y el día a día se siente caótico y/o abrumador.', points: 1 },
      { text: 'Puedo establecer prioridades y mantener el enfoque, adaptándome a eventos imprevistos. Busco diversas formas de lograr resultados (por ejemplo, experimentación, falla rápida, límites WIP) y analiso sus pros y contras.', points: 2 },
      { text: 'Puedo proporcionar intención y claridad al equipo, aclarando la misión, las metas y las prioridades. Tengo un conocimiento profundo de la metodología en uso, y puedo empujar al equipo hacia un esfuerzo disciplinado y confiable.', points: 3 },
    ]
  },
  {
    id: 19,
    category: 'Automejora y Feedback',
    skillType: 'Soft',
    options: [
      { text: 'Me limito a escuchar retroalimentación.', points: 1 },
      { text: 'Pido retroalimentación y actuo en consecuencia. Pregunto sobre el trabajo de los demás.', points: 2 },
      { text: 'Levanto problemas internos y externos.', points: 3 },
    ]
  },
  {
    id: 20,
    category: 'Trabajo en Equipo',
    skillType: 'Soft',
    options: [
      { text: 'Aprendo, escucho, soy confiable y profesional, pero me limito a seguir instrucciones.', points: 1 },
      { text: 'Participo activamente.', points: 2 },
      { text: 'Puedo conseguir consenso. Tengo habilidad de resumir y sintetizar.', points: 3 },
    ]
  },
];