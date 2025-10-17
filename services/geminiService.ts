
import { GoogleGenAI } from "@google/genai";

interface ReportData {
  name: string;
  role: string;
  level: string;
  answers: { category: string; response: string }[];
}

// Ensure you have your API key set in the environment variables
const API_KEY = process.env.API_KEY;
if (!API_KEY) {
    console.warn("Gemini API key not found. Please set the API_KEY environment variable.");
}
const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function generateReportSummary(data: ReportData): Promise<string> {
  if (!API_KEY) {
      return "Error: API key for Gemini is not configured. Cannot generate AI summary.";
  }

  const model = "gemini-2.5-flash";

  const answerDetails = data.answers.map(a => `- ${a.category}: "${a.response}"`).join('\n');

  const prompt = `
    Actúa como un experto manager de UX que está realizando una revisión de desarrollo profesional.
    El idioma de la respuesta debe ser Español.

    **Información del Diseñador:**
    - **Nombre:** ${data.name}
    - **Cargo:** ${data.role}
    - **Nivel autoevaluado:** ${data.level}

    **Detalles de la autoevaluación:**
    ${answerDetails}

    **Tu Tarea:**
    Genera un resumen constructivo y motivador basado en la información proporcionada. Sigue esta estructura estrictamente:

    1.  **Saludo y Reconocimiento:** Comienza con un saludo cordial y reconoce su nivel actual autoevaluado.
    2.  **Fortalezas Clave:** Identifica 2-3 fortalezas basándote en sus respuestas. Usa un lenguaje positivo y específico.
    3.  **Áreas de Desarrollo:** Sugiere 2-3 áreas específicas para enfocarse en su crecimiento hacia el siguiente nivel de carrera. Las sugerencias deben ser accionables.
    4.  **Cierre:** Termina con una nota de aliento.

    **Estilo y Tono:**
    - Profesional, positivo y enfocado en el desarrollo.
    - Utiliza viñetas para las fortalezas y áreas de desarrollo para mayor claridad.
    - No inventes información que no esté en la autoevaluación.
    - El texto debe ser conciso y directo.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate summary from Gemini API.");
  }
}
