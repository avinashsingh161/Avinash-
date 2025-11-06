import React, { useState, useCallback } from 'react';
import { Question, GameState } from './types';
import { generateCQuiz } from './services/geminiService';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionCard from './components/QuestionCard';
import ResultsScreen from './components/ResultsScreen';
import { LoadingSpinner, RobotIcon } from './components/icons';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Welcome);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userName, setUserName] = useState('');
  const [error, setError] = useState<string | null>(null);

  const startQuiz = useCallback(async (name: string) => {
    setUserName(name);
    setGameState(GameState.Generating);
    setError(null);
    try {
      const quizQuestions = await generateCQuiz();
      if (quizQuestions.length > 0) {
        setQuestions(quizQuestions);
        setGameState(GameState.Playing);
      } else {
        throw new Error("No questions were generated.");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
      setError(errorMessage);
      setGameState(GameState.Error);
    }
  }, []);

  const handleAnswer = useCallback((isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setGameState(GameState.Finished);
      }
    }, 2000); // Wait 2 seconds to show feedback
  }, [currentQuestionIndex, questions.length]);

  const restartQuiz = useCallback(() => {
    setGameState(GameState.Welcome);
    setQuestions([]);
    setScore(0);
    setCurrentQuestionIndex(0);
    setUserName('');
    setError(null);
  }, []);

  const renderContent = () => {
    switch (gameState) {
      case GameState.Welcome:
        return <WelcomeScreen onStart={startQuiz} />;
      
      case GameState.Generating:
        return (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-cyan-300">Generating Your Quiz...</h2>
            <p className="text-slate-400">Our AI is crafting some tricky C questions for you!</p>
            <LoadingSpinner />
          </div>
        );

      case GameState.Playing:
        return (
          <QuestionCard
            question={questions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
          />
        );
      
      case GameState.Finished:
        return (
          <ResultsScreen
            userName={userName}
            score={score}
            totalQuestions={questions.length}
            onRestart={restartQuiz}
          />
        );
      
      case GameState.Error:
        return (
          <div className="text-center bg-slate-800 p-8 rounded-lg shadow-2xl space-y-4">
             <h2 className="text-2xl font-bold text-red-500">Something Went Wrong</h2>
             <p className="text-slate-300">{error}</p>
             <button
                onClick={restartQuiz}
                className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
             >
                Try Again
             </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-2xl mx-auto">
        <header className="mb-8 text-center">
          <div className="flex items-center justify-center gap-4">
            <RobotIcon />
            <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">
              C Language Quiz Assistant
            </h1>
          </div>
        </header>
        <main className="bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-slate-700">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
