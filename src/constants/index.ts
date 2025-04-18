export const API_URL = "https://openrouter.ai/api/v1/chat/completions";

export const COMIC_STYLES = [
  { id: "manga", name: "日式漫画", description: "黑白风格，表现力强，动态分镜" },
  { id: "american", name: "美式漫画", description: "色彩鲜明，轮廓清晰，超级英雄美学" },
  { id: "sketch", name: "简笔画风", description: "简单线条艺术，细节和阴影最小化" },
];

export const SCRIPT_TEMPLATES = [
  { 
    id: "daily_life",
    name: "日常生活情景",
    content: "第1格: [角色]开始一天的[活动]。\n第2格: [角色]遇到一个小问题。\n第3格: [角色]以幽默的方式尝试解决问题。\n第4格: [结局]带有有趣的笑点。"
  },
  {
    id: "fantasy_adventure",
    name: "奇幻冒险",
    content: "第1格: [角色]发现一个神奇的物品。\n第2格: 物品突然激活，导致[意外效果]。\n第3格: [角色]处理随之而来的混乱。\n第4格: 魔法消退，[角色]处于一个有趣的情境中。"
  },
  {
    id: "workplace_humor",
    name: "职场幽默",
    content: "第1格: [角色]在工作中，面临典型的职场挑战。\n第2格: [角色]尝试以常规方式解决问题。\n第3格: 解决方案以意想不到的方式适得其反。\n第4格: [角色]找到一个非常规的解决方案，带有幽默的转折。"
  },
];
