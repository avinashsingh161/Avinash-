import React from 'react';

interface ResultsScreenProps {
  userName: string;
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ userName, score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  const getFeedback = () => {
    if (percentage === 100) {
      return { message: "Excellent, you're a C Master! 🏆", color: "text-green-400" };
    }
    if (percentage >= 70) {
      return { message: "Great job! You know C pretty well. 👍", color: "text-cyan-400" };
    }
    if (percentage >= 40) {
      return { message: "Good effort! A little more practice will help. 🙂", color: "text-yellow-400" };
    }
    return { message: "Keep learning! Practice makes perfect. 📚", color: "text-orange-400" };
  };

  const feedback = getFeedback();
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="text-center animate-fade-in">
      <h2 className="text-3xl font-bold mb-2 text-cyan-300">Quiz Complete, {userName}!</h2>
      <p className="text-lg text-slate-400 mb-8">Here's how you did:</p>
      
      <div className="relative w-48 h-48 mx-auto mb-6 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
          <circle
            className="text-slate-700"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
          />
          <circle
            className="text-cyan-400"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
            style={{ transition: 'stroke-dashoffset 1.5s ease-in-out' }}
          />
        </svg>
        <span className="absolute text-4xl font-bold text-white">{percentage}%</span>
      </div>

      <p className="text-2xl font-semibold text-slate-200">
        You scored <span className="text-cyan-400">{score}</span> out of <span className="text-cyan-400">{totalQuestions}</span>
      </p>

      <p className={`text-xl mt-4 font-medium ${feedback.color}`}>
        {feedback.message}
      </p>
      
      <button
        onClick={onRestart}
        className="mt-10 bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 shadow-lg"
      >
        Play Again
      </button>
    </div>
  );
};

export default ResultsScreen;
