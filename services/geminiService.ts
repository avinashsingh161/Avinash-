import { GoogleGenAI, Type } from "@google/genai";
import { Question } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const quizSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      questionText: {
        type: Type.STRING,
        description: "The text of the quiz question.",
      },
      options: {
        type: Type.ARRAY,
        items: {
          type: Type.STRING,
        },
        description: "An array of 4 possible answers for the question.",
      },
      correctAnswerIndex: {
        type: Type.INTEGER,
        description: "The 0-based index of the correct answer in the 'options' array.",
      },
      explanation: {
        type: Type.STRING,
        description: "A brief explanation for why the correct answer is right."
      }
    },
    required: ["questionText", "options", "correctAnswerIndex", "explanation"],
  },
};

export const generateCQuiz = async (): Promise<Question[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Generate a quiz with 5 multiple-choice questions about the C programming language. The questions should be targeted at a beginner to intermediate level. Ensure there are exactly 4 options for each question.",
      config: {
        responseMimeType: "application/json",
        responseSchema: quizSchema,
      },
    });

    const jsonText = response.text.trim();
    const quizData: Question[] = JSON.parse(jsonText);
    
    // Basic validation
    if (!Array.isArray(quizData) || quizData.length === 0) {
      throw new Error("Invalid quiz data format received from API.");
    }

    return quizData;

  } catch (error) {
    console.error("Error generating C quiz:", error);
    throw new Error("Failed to generate the quiz. Please try again later.");
  }
};
