export interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export enum GameState {
  Welcome = 'WELCOME',
  Generating = 'GENERATING',
  Playing = 'PLAYING',
  Finished = 'FINISHED',
  Error = 'ERROR',
}
