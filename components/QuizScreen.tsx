import React, { useState, useMemo } from 'react';
import type { QuizQuestion, Answers } from '../types';

interface QuizScreenProps {
  questions: QuizQuestion[];
  onFinish: (answers: Answers) => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ questions, onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const currentQuestion = questions[currentQuestionIndex];
  const progress = useMemo(() => ((currentQuestionIndex + 1) / questions.length) * 100, [currentQuestionIndex, questions.length]);
  
  const handleSelectOption = (questionId: number, points: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: points }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      onFinish(answers);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };
  
  const isOptionSelected = answers[currentQuestion.id] !== undefined;

  const prevSkillType = currentQuestionIndex > 0 ? questions[currentQuestionIndex - 1].skillType : null;
  const showSectionHeader = prevSkillType !== currentQuestion.skillType;

  return (
    <div className="bg-card p-8 rounded-lg shadow-2xl border border-border w-full">
      {/* Section Header */}
      {showSectionHeader && (
        <div className="mb-6 border-b border-border pb-4">
           <h2 className="text-3xl font-bold text-center text-primary animate-fade-in">{currentQuestion.skillType === 'Hard' ? 'Hard Skills' : 'Soft Skills'}</h2>
           <p className="text-center text-text-secondary mt-2">
             {currentQuestion.skillType === 'Hard'
               ? 'Evaluación de habilidades técnicas y de ejecución.'
               : 'Evaluación de habilidades interpersonales y de colaboración.'}
           </p>
        </div>
      )}

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-primary">Progreso General</span>
          <span className="text-sm font-medium text-primary">{currentQuestionIndex + 1} / {questions.length}</span>
        </div>
        <div className="w-full bg-secondary rounded-full h-2.5">
          <div className="bg-primary h-2.5 rounded-full" style={{ width: `${progress}%`, transition: 'width 0.3s ease-in-out' }}></div>
        </div>
      </div>
      
      {/* Question */}
      <div key={currentQuestion.id} className="animate-fade-in">
        <h3 className="text-xl font-bold mb-2 text-text-secondary">Categoría: {currentQuestion.category}</h3>
        <p className="text-2xl font-semibold mb-6">¿Qué afirmación describe mejor tu situación actual?</p>
        <div className="space-y-4">
          {currentQuestion.options.map(option => (
            <label
              key={option.points}
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${answers[currentQuestion.id] === option.points ? 'border-primary bg-blue-900/50' : 'border-border hover:border-primary/50'}`}
            >
              <input
                type="radio"
                name={`question-${currentQuestion.id}`}
                className="hidden"
                checked={answers[currentQuestion.id] === option.points}
                onChange={() => handleSelectOption(currentQuestion.id, option.points)}
              />
              <span className={`flex-grow text-lg ${answers[currentQuestion.id] === option.points ? 'text-white' : 'text-text-primary'}`}>
                {option.text}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={handlePrev}
          disabled={currentQuestionIndex === 0}
          className="bg-secondary text-white font-bold py-2 px-6 rounded-md hover:bg-border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Anterior
        </button>
        <button
          onClick={handleNext}
          disabled={!isOptionSelected}
          className="bg-primary text-white font-bold py-2 px-6 rounded-md hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary transition duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          {currentQuestionIndex < questions.length - 1 ? 'Siguiente' : 'Finalizar'}
        </button>
      </div>
    </div>
  );
};

export default QuizScreen;