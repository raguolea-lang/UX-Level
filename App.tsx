
import React, { useState, useCallback } from 'react';
import IntroScreen from './components/IntroScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';
import type { UserInfo, Answers } from './types';
import { questions } from './constants/quizData';

type AppStep = 'intro' | 'quiz' | 'results';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>('intro');
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [answers, setAnswers] = useState<Answers | null>(null);

  const handleStart = useCallback((name: string, role: string) => {
    setUserInfo({ name, role });
    setStep('quiz');
  }, []);

  const handleFinishQuiz = useCallback((finalAnswers: Answers) => {
    setAnswers(finalAnswers);
    setStep('results');
  }, []);

  const handleRetake = useCallback(() => {
    setAnswers(null);
    setStep('quiz');
  }, []);
  
  const handleRestart = useCallback(() => {
    setUserInfo(null);
    setAnswers(null);
    setStep('intro');
  }, []);

  const renderStep = () => {
    switch (step) {
      case 'intro':
        return <IntroScreen onStart={handleStart} />;
      case 'quiz':
        return <QuizScreen questions={questions} onFinish={handleFinishQuiz} />;
      case 'results':
        if (!userInfo || !answers) {
            // Should not happen in normal flow
            handleRestart();
            return null;
        }
        return <ResultsScreen userInfo={userInfo} answers={answers} questions={questions} onRetake={handleRetake} onRestart={handleRestart} />;
      default:
        return <IntroScreen onStart={handleStart} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col items-center justify-center p-4 font-sans">
      <header className="w-full max-w-4xl text-center mb-8">
        <h1 className="text-4xl font-bold text-primary">UX Designer</h1>
        <h2 className="text-2xl font-semibold text-text-primary">Career Path Evaluation</h2>
      </header>
      <main className="w-full max-w-4xl">
        {renderStep()}
      </main>
      <footer className="w-full max-w-4xl text-center mt-8 text-text-secondary text-sm">
        <p>Built for professional development tracking.</p>
      </footer>
    </div>
  );
};

export default App;
