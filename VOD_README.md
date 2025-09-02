# Infomaniak VOD (Video on Demand) for n8n

Complete Video on Demand management system integrated into n8n workflows.

## 🎬 Features Overview

The Infomaniak VOD integration provides comprehensive video management capabilities with 186 API endpoints, allowing you to manage your entire video infrastructure programmatically.

## 📺 Core Functionality

### Channel Management
Manage your VOD channels and their configurations.

**Operations:**
- **List Channels** - Get all available VOD channels
- **Get Channel** - Retrieve specific channel details including quota and parameters

### Video Management
Complete CRUD operations for video content.

**Operations:**
- **List Videos** - Browse all videos in a channel
- **Get Video** - Retrieve detailed video information
- **Upload Video** - Add new videos via file upload or URL import
- **Update Video** - Modify video metadata (name, description, tags, publish status)
- **Delete Video** - Remove videos from channel

**Upload Methods:**
- Direct file upload (Base64 encoded)
- URL import from external sources

**Video Properties:**
- Name and description
- Published/Validated status
- Tags for categorization
- Subtitles and chapters support
- Multiple encoding profiles

### Folder Organization
Organize videos into a structured folder hierarchy.

**Operations:**
- **List Folders** - Browse folder structure
- **Create Folder** - Add new folders with auto-publish/validate options

**Folder Features:**
- Auto-publish content
- Auto-validate uploads
- Inherit parent settings
- Replace on upload option

### Player Configuration
Customize video players for different use cases.

**Operations:**
- **List Players** - Get all configured players
- **Create Player** - Design custom players

**Player Features:**
- Custom branding
- Advertisement integration
- Playback controls
- Analytics tracking

### Analytics & Statistics
Comprehensive analytics for channels and individual videos.

**Operations:**
- **Get Statistics** - Channel or media-specific analytics

**Metrics Available:**
- Consumption data
- Viewer analytics
- Geographic distribution
- Technology breakdown (browsers, OS, devices)
- Engagement metrics
- Average view time

**Filtering Options:**
- Date range (from/to)
- Geographic regions
- Technology types

### Encoding Profiles
Manage video encoding for optimal delivery.

**Operations:**
- **List Encodings** - View available encoding profiles

**Encoding Options:**
- Multiple quality levels
- Adaptive bitrate streaming
- Mobile optimization
- Custom encoding parameters

## 🚀 Setup Instructions

### 1. Prerequisites
- Active Infomaniak account with VOD service
- API access token
- Channel ID for operations

### 2. Configuration
1. Add Infomaniak credentials in n8n
2. Select VOD as resource
3. Choose your operation
4. Enter Channel ID (found in Infomaniak dashboard)

## 💡 Example Workflows

### Basic Video Upload
```javascript
{
  "resource": "vod",
  "operation": "uploadVideo",
  "vodChannelId": "YOUR_CHANNEL_ID",
  "uploadMethod": "url",
  "videoUrl": "https://example.com/video.mp4",
  "videoName": "My Video Title",
  "vodOptions": {
    "auto_publish": true,
    "auto_validate": true
  }
}
```

### Batch Video Management
```javascript
// List all videos
{
  "resource": "vod",
  "operation": "listVideos",
  "vodChannelId": "YOUR_CHANNEL_ID",
  "additionalOptions": {
    "limit": 100,
    "page": 1
  }
}

// Update multiple videos
{
  "resource": "vod",
  "operation": "updateVideo",
  "vodChannelId": "YOUR_CHANNEL_ID",
  "vodVideoId": "VIDEO_ID",
  "updateFields": {
    "published": true,
    "tags": "tutorial,n8n,automation"
  }
}
```

### Analytics Retrieval
```javascript
{
  "resource": "vod",
  "operation": "getStatistics",
  "vodChannelId": "YOUR_CHANNEL_ID",
  "statisticsType": "media",
  "statisticsMediaId": "VIDEO_ID",
  "vodOptions": {
    "date_from": "2024-01-01",
    "date_to": "2024-12-31"
  }
}
```

### Folder Organization
```javascript
{
  "resource": "vod",
  "operation": "createFolder",
  "vodChannelId": "YOUR_CHANNEL_ID",
  "vodFolderName": "Tutorials",
  "vodOptions": {
    "auto_publish": true,
    "auto_validate": false
  }
}
```

## 📊 Use Cases

### Content Management System
- Automated video upload from various sources
- Bulk metadata updates
- Content organization with folders
- Scheduled publishing

### Video Analytics Dashboard
- Real-time viewership tracking
- Geographic distribution analysis
- Technology usage reports
- Engagement metrics monitoring

### Multi-Channel Management
- Cross-channel content synchronization
- Centralized player configuration
- Unified analytics reporting
- Batch operations across channels

### Workflow Automation
- Auto-transcoding on upload
- Subtitle generation and attachment
- Thumbnail extraction and optimization
- Social media distribution

## 🔧 Advanced Features

### Subtitles Management
- Multiple language support
- Auto-translation capabilities
- SRT/VTT format support
- Timeline synchronization

### Chapter Markers
- Interactive navigation
- Content segmentation
- SEO optimization
- User engagement tracking

### Adaptive Streaming
- HLS/DASH support
- Multiple bitrate encoding
- Bandwidth optimization
- Device-specific delivery

### Security Features
- Token-based authentication
- Domain restrictions
- Geographic blocking
- DRM support

## ⚙️ Best Practices

### Upload Optimization
1. Use URL import for large files
2. Enable auto-validation for trusted sources
3. Set appropriate folder structure
4. Configure encoding profiles before upload

### Performance Tips
- Use pagination for large video lists
- Cache channel and player configurations
- Batch update operations when possible
- Monitor quota usage regularly

### Analytics Strategy
- Set up regular statistics exports
- Track key performance indicators
- Compare period-over-period metrics
- Segment audience by technology/geography

## 🆘 Troubleshooting

### Common Issues

**Upload Failures:**
- Check file size limits
- Verify supported formats
- Ensure sufficient channel quota
- Validate encoding settings

**Playback Problems:**
- Verify player configuration
- Check encoding completion
- Test CDN availability
- Review access permissions

**Statistics Discrepancies:**
- Allow for processing delay
- Check date range filters
- Verify timezone settings
- Review sampling methodology

## 📝 Supported Video Formats

**Input Formats:**
- MP4, MOV, AVI, MKV
- WebM, FLV, WMV
- MPEG, 3GP, OGV

**Output Formats:**
- HLS (m3u8 + ts segments)
- DASH (mpd + segments)
- Progressive MP4
- WebM for web delivery

## 🔗 Additional Resources

- [Infomaniak VOD Documentation](https://www.infomaniak.com/en/support/faq/vod)
- [API Reference](https://developer.infomaniak.com)
- [Video Best Practices](https://www.infomaniak.com/en/support)

## 📞 Support

For VOD-specific issues: vod-support@infomaniak.com
For n8n node issues: Create an issue on GitHub