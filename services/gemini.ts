
import { GoogleGenAI } from "@google/genai";

/**
 * Service to interact with Google Gemini API for the Ghost Curator chatbot.
 * Follows @google/genai SDK best practices for initialization and streaming.
 */
export const geminiService = {
  /**
   * Sends a message to the Gemini model and returns an async generator that yields text chunks.
   * This is used by ChatWidget for real-time response streaming.
   */
  async *sendMessageStream(message: string) {
    // Always initialize a new GoogleGenAI instance using the environment variable.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    try {
      const response = await ai.models.generateContentStream({
        model: 'gemini-3-flash-preview',
        contents: message,
        config: {
          systemInstruction: 'You are the Ghost Curator, a world-class expert in streetwear, vintage fashion, and high-end sneaker culture. You represent Ghost Gear, a premium boutique in Pasadena. Your tone is street-savvy, authentic, and knowledgeable. Help users with authenticity checks, style advice, and archive history. Keep responses concise and impactful.',
        },
      });

      for await (const chunk of response) {
        // Correctly extract the text property from the response chunk.
        // Property .text is used directly as per library guidelines.
        const text = chunk.text;
        if (text) {
          yield text;
        }
      }
    } catch (error) {
      console.error("Gemini API Error:", error);
      yield "Ghost comms are currently down. Check back soon for the archive update.";
    }
  }
};
