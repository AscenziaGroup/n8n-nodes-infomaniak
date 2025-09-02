# n8n-nodes-infomaniak

<p align="center">
  <img src="https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png" alt="n8n" height="60">
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://www.infomaniak.com/favicon.ico" alt="Infomaniak" height="60">
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/n8n-nodes-infomaniak"><img src="https://img.shields.io/npm/v/n8n-nodes-infomaniak.svg" alt="npm version"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
  <a href="https://n8n.io"><img src="https://img.shields.io/badge/n8n-community-FF6D5A.svg" alt="n8n Community"></a>
  <a href="https://developer.infomaniak.com"><img src="https://img.shields.io/badge/Infomaniak-API-0050FF.svg" alt="Infomaniak API"></a>
</p>

<p align="center">
  <strong>Powerful Infomaniak integration for n8n workflow automation</strong><br>
  Developed by <a href="https://ascenzia.ch">Ascenzia</a>
</p>

---

## 🌟 Features

This n8n community node provides comprehensive integration with Infomaniak's suite of services, enabling powerful automation workflows for Swiss cloud infrastructure.

### 🔧 Supported Services

| Service | Description | Operations |
|---------|-------------|------------|
| **Account** | User profiles and organizations | Profile, Organizations, Accounts |
| **Domain** | Domain and DNS management | Domains, DNS Records (CRUD) |
| **Mail Hosting** | Email infrastructure | Mailboxes, Aliases, Settings |
| **Web Hosting** | Website hosting management | Sites, Databases, FTP |
| **kDrive** | Cloud storage | Files, Folders, Sharing |
| **Public Cloud** | Cloud computing instances | VMs, Start/Stop, Monitoring |
| **Swiss Backup** | Backup solutions | Accounts, Devices, Usage |
| **Newsletter** | Email marketing | Campaigns, Contacts, Lists |
| **Team** | Collaboration tools | Workspaces, Members, Roles |
| **AI Tools** 🤖 | Artificial Intelligence | Chat, Images, Speech-to-Text |
| **VOD** 🎬 | Video on Demand | Videos, Channels, Players, Analytics |

### ✨ Key Features

- **1700+ API Endpoints** - Comprehensive coverage of Infomaniak services
- **OpenAI Compatible** - AI Tools follow OpenAI standards for easy migration
- **Streaming Support** - Real-time data streaming for chat and video
- **Batch Operations** - Efficient bulk processing capabilities
- **Advanced Filtering** - Pagination, search, and sorting options
- **Error Handling** - Robust error management with retry logic
- **Type Safety** - Full TypeScript implementation

## 📦 Installation

### Community Node (Recommended)

1. In n8n, go to **Settings** > **Community Nodes**
2. Search for `n8n-nodes-infomaniak`
3. Click **Install**

### Manual Installation

```bash
# In your n8n installation directory
npm install n8n-nodes-infomaniak

# Restart n8n
n8n start
```

### Development Setup

```bash
# Clone the repository
git clone https://github.com/AscenziaGroup/n8n-nodes-infomaniak.git
cd n8n-nodes-infomaniak

# Install dependencies
npm install

# Build the node
npm run build

# Link for local development
npm link

# In your n8n installation
npm link n8n-nodes-infomaniak
```

## 🔑 Authentication

### Getting Your API Token

1. Log in to your [Infomaniak Manager](https://manager.infomaniak.com)
2. Navigate to **API** section
3. Create a new API token with required scopes
4. Copy the token

### Configure in n8n

1. Add new **Infomaniak API** credentials
2. Enter your API token
3. Test the connection
4. Save credentials

## 📖 Usage Examples

### 💬 AI Chat Completion

```javascript
// Chat with AI models
{
  "resource": "aiTools",
  "operation": "chatCompletion",
  "aiProductId": "YOUR_AI_PRODUCT_ID",
  "aiModel": "mixtral",
  "messages": [
    {
      "role": "user",
      "content": "Explain quantum computing"
    }
  ]
}
```

### 🎥 VOD Video Upload

```javascript
// Upload video from URL
{
  "resource": "vod",
  "operation": "uploadVideo",
  "vodChannelId": "YOUR_CHANNEL_ID",
  "uploadMethod": "url",
  "videoUrl": "https://example.com/video.mp4",
  "videoName": "My Amazing Video"
}
```

### 📧 Email Management

```javascript
// Create new mailbox
{
  "resource": "mailHosting",
  "operation": "createMailbox",
  "mailHostingId": "YOUR_MAIL_ID",
  "emailAddress": "john@example.com",
  "password": "SecurePassword123!"
}
```

### 🌐 DNS Record Management

```javascript
// Add DNS record
{
  "resource": "domain",
  "operation": "createDnsRecord",
  "domainId": "YOUR_DOMAIN_ID",
  "recordType": "A",
  "recordName": "subdomain",
  "recordValue": "192.168.1.1"
}
```

## 🤖 AI Tools Capabilities

### Supported Models

| Model | Capabilities | Best For |
|-------|-------------|----------|
| **Granite** | General purpose | Balanced tasks |
| **Llama 3** | Latest Meta model | Complex reasoning |
| **Mistral** | Fast inference | Quick responses |
| **Mixtral** | MoE architecture | Specialized tasks |

### Image Generation

- **Models**: Flux, SDXL Lightning
- **Styles**: 10+ artistic presets
- **Sizes**: Multiple aspect ratios
- **Quality**: Standard and HD

### Speech Processing

- **STT Models**: Whisper, Whisper V2
- **Languages**: 80+ supported
- **Formats**: JSON, SRT, VTT, Text
- **Features**: Timestamps, subtitles

## 🎬 VOD Features

### Video Management
- Upload via file or URL
- Metadata management
- Folder organization
- Batch operations

### Analytics
- View metrics
- Geographic data
- Technology breakdown
- Engagement tracking

### Player Customization
- Custom branding
- Ad integration
- Multiple players
- Embed options

## 🚀 Workflow Ideas

### Content Creation Pipeline
1. Generate article with AI
2. Create featured image
3. Upload to kDrive
4. Publish to website
5. Send newsletter

### Video Processing
1. Monitor folder for new videos
2. Upload to VOD
3. Generate subtitles with AI
4. Create thumbnails
5. Notify team

### Domain Management
1. Check domain expiration
2. Update DNS records
3. Configure email
4. Setup redirects
5. Monitor SSL

## 📊 Performance

- **Rate Limits**: 60 requests/minute (default)
- **File Limits**: 50MB for audio, 2GB for video
- **Batch Size**: Up to 500 items per request
- **Timeout**: Configurable per operation

## 🛠️ Development

### Project Structure

```
n8n-nodes-infomaniak/
├── nodes/
│   └── Infomaniak/
│       ├── Infomaniak.node.ts
│       ├── Infomaniak.node.json
│       └── infomaniak.svg
├── credentials/
│   └── InfomaniakApi.credentials.ts
├── package.json
├── tsconfig.json
└── README.md
```

### Building

```bash
# Development build with watch
npm run dev

# Production build
npm run build

# Linting
npm run lint

# Format code
npm run format
```

### Testing

```bash
# Run tests
npm test

# Coverage report
npm run test:coverage
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a full list of changes.

### Latest Version (0.1.0)
- ✅ Initial release
- ✅ 11 core services
- ✅ AI Tools integration
- ✅ VOD management
- ✅ 1700+ endpoints

## 🐛 Known Issues

- VOD upload requires Base64 encoding for file method
- AI streaming not yet supported in n8n UI
- Some statistics endpoints may have delayed data

## 📚 Resources

- [n8n Documentation](https://docs.n8n.io)
- [Infomaniak API Docs](https://developer.infomaniak.com)
- [Node Development Guide](https://docs.n8n.io/integrations/creating-nodes/)
- [Ascenzia Website](https://ascenzia.ch)

## 👥 Team

Developed with ❤️ by [Ascenzia](https://ascenzia.ch)

- **Website**: [ascenzia.ch](https://ascenzia.ch)
- **Email**: contact@ascenzia.ch
- **GitHub**: [@AscenziaGroup](https://github.com/AscenziaGroup)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

## 🙏 Acknowledgments

- [n8n.io](https://n8n.io) for the amazing workflow automation platform
- [Infomaniak](https://www.infomaniak.com) for their comprehensive API
- The n8n community for continuous support and feedback

## ⭐ Support

If you find this node helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting issues
- 💡 Suggesting new features
- 📢 Sharing with others

---

<p align="center">
  Made with ❤️ and AI in Switzerland 🇨🇭 by <a href="https://ascenzia.ch">Ascenzia</a>
</p>