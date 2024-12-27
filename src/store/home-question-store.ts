import { create } from "zustand";

interface QuestionStore {
  question: string; // Current question
  setQuestion: (newQuestion: string) => void; // Action to update the question
}

// Create the Zustand store
export const useQuestionStore = create<QuestionStore>((set) => ({
  question: "", // Default empty question
  setQuestion: (newQuestion: string) => set({ question: newQuestion }),
}));