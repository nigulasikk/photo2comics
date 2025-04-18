# 照片转漫画生成器

使用AI将您的照片转换为漫画。

## 功能特点

- 支持上传JPG/PNG格式的图片
- 提供三种漫画风格选择（日式漫画、美式漫画、简笔画风）
- 脚本输入与模板选择功能
- 使用OpenRouter API调用GPT-4o进行漫画生成
- 漫画显示与下载功能

## 安装与运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 环境变量

创建一个`.env`文件并添加以下内容：

```
VITE_OPENROUTER_API_KEY=你的OpenRouter API密钥
```
