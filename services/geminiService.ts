import { GoogleGenAI } from "@google/genai";
import { BeefCut } from "../types";

const createClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is not set. Gemini features will be disabled.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateRecipe = async (cut: BeefCut, cuisine: 'Western' | 'Asian'): Promise<string> => {
  const client = createClient();
  if (!client) {
    return "Please configure your API Key to generate recipes.";
  }

  const prompt = `
    Create a short, delicious recipe for the beef cut "${cut.nameEn}" (${cut.nameCn}).
    Style: ${cuisine} Cuisine.
    
    Structure:
    1. Name of Dish (English & Chinese)
    2. Ingredients List
    3. Brief Instructions (Step by step)
    4. Why this cut works for this dish.

    Keep it concise. Format with Markdown.
  `;

  try {
    const response = await client.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    return response.text || "Sorry, I couldn't generate a recipe at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error connecting to AI service. Please try again later.";
  }
};