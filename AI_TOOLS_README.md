# Infomaniak AI Tools for n8n

This n8n node provides access to Infomaniak's AI Tools API, enabling powerful AI capabilities in your workflows.

## Features

### 🤖 Chat Completion
Generate text using advanced language models with OpenAI-compatible API.

**Available Models:**
- Granite
- Llama 3
- Mistral 24B / 31
- Mixtral / Mixtral 8x22B
- Reasoning

**Key Features:**
- Multi-turn conversations with system, user, and assistant roles
- Temperature control for creativity vs. consistency
- Profile types: Creative, Standard, Strict
- Streaming support
- Max tokens control (up to 5000)

**Supported Languages:** English, German, Spanish, French, Italian (limited support for Portuguese, Polish, Dutch, Romanian, Czech, Swedish)

### 🎨 Image Generation
Create images from text descriptions using state-of-the-art models.

**Available Models:**
- **Flux** - Advanced image generation
- **SDXL Lightning** - Fast, high-quality generation

**Features:**
- Multiple image sizes: 1024x1024, 1024x1792, 1792x1024
- Quality options: Standard or HD
- Style presets: Cinematic, Comic Book, Digital Art, Disney Character, Fantasy Art, Line Art, Low Poly, Neon Punk, Photographic
- Negative prompts to exclude unwanted elements
- Generate up to 5 images at once

### 👤 Photo Maker
Customize realistic human portraits with specific individuals.

**How to Use:**
1. Upload base images of the person (max 6 images)
2. Use trigger words in your prompt:
   - `man img` for male subjects
   - `woman img` for female subjects
   - `girl img` for young female subjects

**Example Prompt:**
```
sci-fi, closeup portrait photo of a man img wearing sunglasses in an Iron Man suit, face, slim body, high quality, film grain
```

### 🎙️ Speech to Text
Transcribe audio files to text with high accuracy.

**Available Models:**
- Whisper
- Whisper V2

**Supported Formats:**
MP3, MP4, AAC, WAV, FLAC, OGG, OPUS, WMA, M4A (max 50MB)

**Output Formats:**
- JSON
- Text
- SRT (subtitles)
- VTT (web subtitles)
- Verbose JSON (with timestamps)

**Language Support:** 80+ languages including English, French, German, Spanish, Italian, Portuguese, Chinese, Japanese, Korean, Arabic, and many more.

## Setup

### 1. Get Your AI Product ID

1. Log in to your Infomaniak dashboard
2. Navigate to AI Tools section
3. Create or select an AI product
4. Copy the Product ID

### 2. Configure Credentials

In n8n:
1. Add Infomaniak API credentials
2. Enter your Access Token

### 3. Use in Workflows

1. Add the Infomaniak node
2. Select "AI Tools" as the resource
3. Choose your operation (Chat, Image, Photo Maker, Speech to Text)
4. Enter your AI Product ID
5. Configure parameters based on your needs

## Example Workflows

### Chat Completion Example
```javascript
{
  "resource": "aiTools",
  "operation": "chatCompletion",
  "aiProductId": "YOUR_PRODUCT_ID",
  "aiModel": "mixtral",
  "messages": [
    {
      "role": "system",
      "content": "You are a helpful assistant."
    },
    {
      "role": "user",
      "content": "Write a haiku about coding"
    }
  ],
  "aiOptions": {
    "temperature": 0.7,
    "max_tokens": 100
  }
}
```

### Image Generation Example
```javascript
{
  "resource": "aiTools",
  "operation": "generateImage",
  "aiProductId": "YOUR_PRODUCT_ID",
  "imageModel": "flux",
  "imagePrompt": "A futuristic city at sunset, cyberpunk style, neon lights",
  "aiOptions": {
    "size": "1792x1024",
    "quality": "hd",
    "style": "neonpunk",
    "n": 2
  }
}
```

### Speech to Text Example
```javascript
{
  "resource": "aiTools",
  "operation": "speechToText",
  "aiProductId": "YOUR_PRODUCT_ID",
  "transcriptionModel": "whisperV2",
  "audioFile": "BASE64_ENCODED_AUDIO",
  "aiOptions": {
    "language": "en",
    "response_format": "srt"
  }
}
```

## Rate Limits

Default rate limits apply to all AI operations. Contact Infomaniak support to increase limits for production use.

## Best Practices

1. **Chat Completion:**
   - Use system messages to set context
   - Adjust temperature based on use case (0.2 for factual, 0.8 for creative)
   - Use profile types to control output style

2. **Image Generation:**
   - Be specific in prompts
   - Use negative prompts to avoid unwanted elements
   - Test different styles for best results

3. **Photo Maker:**
   - Ensure faces are clearly visible in input images
   - Use multiple angles for better results
   - Always include trigger words (man img, woman img)

4. **Speech to Text:**
   - Use high-quality audio for best results
   - Specify language if known
   - Choose appropriate output format for your use case

## Support

For API issues or questions, contact Infomaniak support: support@infomaniak.com

For n8n node issues, please open an issue on the GitHub repository.