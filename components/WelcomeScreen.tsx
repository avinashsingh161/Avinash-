import React, { useState } from 'react';

interface WelcomeScreenProps {
  onStart: (name: string) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onStart(name.trim());
    }
  };

  return (
    <div className="text-center animate-fade-in">
      <h2 className="text-3xl font-bold mb-2 text-cyan-300">Welcome, C Programmer!</h2>
      <p className="text-slate-400 mb-8">Ready to test your knowledge? Enter your name to begin.</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full sm:w-auto flex-grow bg-slate-700 text-white placeholder-slate-400 border-2 border-slate-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
          required
        />
        <button
          type="submit"
          className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!name.trim()}
        >
          Start Quiz
        </button>
      </form>
    </div>
  );
};

export default WelcomeScreen;
