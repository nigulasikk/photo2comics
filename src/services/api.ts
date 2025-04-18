import axios from 'axios';
import { GenerateComicRequest } from '@/types';
import { API_URL } from '@/constants';

export const generateComic = async (request: GenerateComicRequest) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: "anthropic/claude-3-opus-20240229",
        messages: [
          {
            role: "system",
            content: `You are a creative comic generator. Create a 4-panel comic based on the user's uploaded image(s) in the ${request.style} style. Follow the script provided by the user. Your response should include a complete 4-panel comic.`
          },
          {
            role: "user",
            content: [
              {
                type: "text",
                text: `Generate a 4-panel comic in ${request.style} style using the following script: ${request.script}`
              },
              ...request.images.map(image => ({
                type: "image_url",
                image_url: {
                  url: image
                }
              }))
            ]
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`
        }
      }
    );
    
    return response.data;
  } catch (error) {
    console.error('Error generating comic:', error);
    throw error;
  }
};
