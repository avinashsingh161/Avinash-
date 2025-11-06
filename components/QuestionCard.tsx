import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { CheckIcon, CrossIcon } from './icons';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, questionNumber, totalQuestions, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    setSelectedAnswer(null);
    setIsAnswered(false);
  }, [question]);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;

    setSelectedAnswer(index);
    setIsAnswered(true);
    onAnswer(index === question.correctAnswerIndex);
  };

  const getButtonClass = (index: number) => {
    let baseClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-300 flex items-center justify-between text-lg";
    
    if (!isAnswered) {
      return `${baseClass} bg-slate-700 border-slate-600 hover:bg-slate-600 hover:border-cyan-500`;
    }

    const isCorrect = index === question.correctAnswerIndex;
    const isSelected = index === selectedAnswer;

    if (isCorrect) {
      return `${baseClass} bg-green-800/50 border-green-500 text-white animate-pulse-correct`;
    }
    if (isSelected && !isCorrect) {
      return `${baseClass} bg-red-800/50 border-red-500 text-white`;
    }

    return `${baseClass} bg-slate-700 border-slate-600 opacity-60`;
  };

  return (
    <div className="animate-fade-in-fast">
      <p className="text-cyan-400 font-semibold mb-2">
        Question {questionNumber} of {totalQuestions}
      </p>
      <h2 className="text-2xl font-bold mb-6 text-slate-100">{question.questionText}</h2>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            disabled={isAnswered}
            className={getButtonClass(index)}
          >
            <span>{option}</span>
            {isAnswered && index === question.correctAnswerIndex && <CheckIcon />}
            {isAnswered && index === selectedAnswer && index !== question.correctAnswerIndex && <CrossIcon />}
          </button>
        ))}
      </div>
       {isAnswered && (
        <div className="mt-6 p-4 bg-slate-900/70 rounded-lg border border-slate-700 animate-fade-in">
          <h3 className="font-bold text-lg text-cyan-300 mb-1">Explanation</h3>
          <p className="text-slate-300">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
