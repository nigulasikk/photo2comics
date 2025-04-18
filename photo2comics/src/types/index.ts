export interface ComicStyle {
  id: string;
  name: string;
  description: string;
}

export interface ScriptTemplate {
  id: string;
  name: string;
  content: string;
}

export interface GenerateComicRequest {
  images: string[];
  style: string;
  script: string;
}

export interface GenerateComicResponse {
  content: string;
  images: string[];
}
