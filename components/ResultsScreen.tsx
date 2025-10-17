
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import type { UserInfo, Answers, QuizQuestion, Level } from '../types';
import { levels } from '../constants/quizData';
import { generateReportSummary } from '../services/geminiService';
import LoadingSpinner from './common/LoadingSpinner';

interface ResultsScreenProps {
  userInfo: UserInfo;
  answers: Answers;
  questions: QuizQuestion[];
  onRetake: () => void;
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ userInfo, answers, questions, onRetake, onRestart }) => {
  const [summary, setSummary] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { totalScore, determinedLevel } = useMemo(() => {
    const score = Object.values(answers).reduce((sum, points) => sum + points, 0);
    
    let level: Level = 'Junior';
    if (score >= levels['Lead Senior'].minScore) {
      level = 'Lead Senior';
    } else if (score >= levels['Lead'].minScore) {
      level = 'Lead';
    } else if (score >= levels['Senior'].minScore) {
      level = 'Senior';
    } else if (score >= levels['Mid'].minScore) {
      level = 'Mid';
    } else {
      level = 'Junior';
    }
    return { totalScore: score, determinedLevel: level };
  }, [answers]);

  const fetchSummary = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const reportData = {
        name: userInfo.name,
        role: userInfo.role,
        level: determinedLevel,
        answers: questions.map(q => {
          const points = answers[q.id];
          const selectedOption = q.options.find(opt => opt.points === points);
          return {
            category: q.category,
            response: selectedOption?.text || 'No respondida'
          };
        })
      };
      const generatedSummary = await generateReportSummary(reportData);
      setSummary(generatedSummary);
    } catch (err) {
      console.error("Error generating summary:", err);
      setError("No se pudo generar el resumen. Por favor, intente de nuevo.");
    } finally {
      setIsLoading(false);
    }
  }, [userInfo, determinedLevel, questions, answers]);

  useEffect(() => {
    fetchSummary();
  }, [fetchSummary]);

  const generateReportText = useCallback(() => {
    const date = new Date().toLocaleDateString('es-ES');
    let report = `REPORTE DE EVALUACIÓN DE CARRERA UX\n`;
    report += `=====================================\n\n`;
    report += `Nombre: ${userInfo.name}\n`;
    report += `Cargo: ${userInfo.role}\n`;
    report += `Fecha: ${date}\n\n`;
    report += `-------------------------------------\n`;
    report += `RESULTADO\n`;
    report += `-------------------------------------\n`;
    report += `Puntaje Total: ${totalScore}\n`;
    report += `Nivel Evaluado: ${determinedLevel}\n\n`;
    report += `-------------------------------------\n`;
    report += `RESUMEN Y RECOMENDACIONES (IA)\n`;
    report += `-------------------------------------\n`;
    report += `${summary.replace(/(\*+)/g, '\n$1')}\n\n`;
    report += `-------------------------------------\n`;
    report += `RESPUESTAS DETALLADAS\n`;
    report += `-------------------------------------\n\n`;
    
    questions.forEach(q => {
        const points = answers[q.id];
        const selectedOption = q.options.find(opt => opt.points === points);
        report += `Categoría: ${q.category}\n`;
        report += `Respuesta: ${selectedOption?.text || 'N/A'}\n\n`;
    });

    return report;
  }, [userInfo, totalScore, determinedLevel, summary, questions, answers]);


  const handleDownload = () => {
    const reportContent = generateReportText();
    const blob = new Blob([reportContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Reporte_UX_${userInfo.name.replace(' ', '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-card p-8 rounded-lg shadow-2xl border border-border w-full animate-fade-in">
      <h2 className="text-3xl font-bold mb-2 text-center text-primary">Resultados de la Evaluación</h2>
      <p className="text-lg text-center text-text-secondary mb-6">Hola {userInfo.name}, aquí está tu resumen.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-center">
        <div className="bg-secondary p-6 rounded-lg">
          <h3 className="text-sm font-bold uppercase text-text-secondary tracking-wider">Puntaje Total</h3>
          <p className="text-5xl font-extrabold text-primary">{totalScore}</p>
        </div>
        <div className="bg-secondary p-6 rounded-lg">
          <h3 className="text-sm font-bold uppercase text-text-secondary tracking-wider">Nivel Estimado</h3>
          <p className="text-5xl font-extrabold text-primary">{determinedLevel}</p>
        </div>
      </div>

      <div className="bg-secondary p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-text-primary">Resumen y Pasos Siguientes</h3>
        {isLoading && <div className="flex justify-center items-center h-40"><LoadingSpinner /></div>}
        {error && <p className="text-red-400 text-center">{error}</p>}
        {!isLoading && !error && (
            <div className="text-text-secondary space-y-4 whitespace-pre-wrap font-mono">
                {summary.split('\n').map((line, index) => <p key={index}>{line}</p>)}
            </div>
        )}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={handleDownload}
          disabled={isLoading}
          className="bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary transition duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Descargar Reporte
        </button>
        <button
          onClick={onRetake}
          className="bg-secondary text-white font-bold py-3 px-6 rounded-md hover:bg-border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary transition duration-300"
        >
          Repetir Quiz
        </button>
         <button
          onClick={onRestart}
          className="bg-transparent border border-border text-text-secondary font-bold py-3 px-6 rounded-md hover:bg-border hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary transition duration-300"
        >
          Empezar de Nuevo
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;
