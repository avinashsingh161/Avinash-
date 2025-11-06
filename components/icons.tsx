import React from 'react';

export const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export const CrossIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const LoadingSpinner = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-cyan-400"></div>
  </div>
);

export const RobotIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2c-4.42 0-8 3.58-8 8v4c0 1.1.9 2 2 2h2v4h8v-4h2c1.1 0 2-.9 2-2v-4c0-4.42-3.58-8-8-8zm4 12h-8v-2h8v2zm0-4h-8v-2h8v2z" />
        <circle cx="8.5" cy="11.5" r="1.5" />
        <circle cx="15.5" cy="11.5" r="1.5" />
    </svg>
);
