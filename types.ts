export type Level = 'Junior' | 'Mid' | 'Senior' | 'Lead' | 'Lead Senior';

export interface LevelData {
  title: Level;
  minScore: number;
}

export interface QuizOption {
  text: string;
  points: number;
}

export interface QuizQuestion {
  id: number;
  category: string;
  skillType: 'Hard' | 'Soft';
  options: QuizOption[];
}

export interface UserInfo {
    name: string;
    role: string;
}

export type Answers = Record<number, number>; // questionId: points