import axios from 'axios';
import { GenerateComicRequest } from '@/types';
import { API_URL } from '@/constants';

export const generateComic = async (request: GenerateComicRequest) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: "openai/gpt-4o",
        messages: [
          {
            role: "system",
            content: `你是一个创意漫画生成器。根据用户上传的图片，创建一个4格漫画，风格为${request.style}。
            请严格按照用户提供的脚本创建，并确保输出是包含多个图像的漫画面板。每个面板应该是一个完整的图像URL。`
          },
          {
            role: "user",
            content: [
              {
                type: "text",
                text: `请根据以下脚本，使用${request.style}风格创建一个4格漫画。每个面板都应该是一个完整的图像：
                ${request.script}`
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
    
    const responseData = response.data;
    const messageContent = responseData.choices?.[0]?.message?.content;
    let images = [];
    
    if (messageContent) {
      const imageUrlRegex = /(https?:\/\/[^\s]+\.(?:jpg|jpeg|png|gif))/gi;
      images = messageContent.match(imageUrlRegex) || [];
    }
    
    return { content: messageContent, images: images };
  } catch (error) {
    console.error('Error generating comic:', error);
    throw error;
  }
};
