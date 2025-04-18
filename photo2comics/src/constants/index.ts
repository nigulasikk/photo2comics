export const API_URL = "https://openrouter.ai/api/v1/chat/completions";

export const COMIC_STYLES = [
  { id: "manga", name: "Japanese Manga", description: "Black and white, expressive style with dynamic paneling" },
  { id: "american", name: "American Comics", description: "Bold colors, defined outlines, and superhero aesthetic" },
  { id: "sketch", name: "Sketch Style", description: "Simple line art with minimal details and shading" },
];

export const SCRIPT_TEMPLATES = [
  { 
    id: "daily_life",
    name: "Daily Life Situation",
    content: "Panel 1: [Character] starts their day with [activity].\nPanel 2: [Character] encounters a small problem.\nPanel 3: [Character] tries to solve the problem in a humorous way.\nPanel 4: [Resolution] with a funny punchline."
  },
  {
    id: "fantasy_adventure",
    name: "Fantasy Adventure",
    content: "Panel 1: [Character] discovers a magical item.\nPanel 2: The item suddenly activates, causing [unexpected effect].\nPanel 3: [Character] deals with the chaos that ensues.\nPanel 4: The magic subsides, leaving [Character] in a humorous situation."
  },
  {
    id: "workplace_humor",
    name: "Workplace Humor",
    content: "Panel 1: [Character] at work, facing a typical workplace challenge.\nPanel 2: [Character] attempts to solve the problem in a conventional way.\nPanel 3: The solution backfires in an unexpected manner.\nPanel 4: [Character] finds an unconventional resolution, with a humorous twist."
  },
];
