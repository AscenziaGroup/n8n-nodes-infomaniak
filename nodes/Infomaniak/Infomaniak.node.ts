import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeOperationError,
	NodeConnectionType,
	IDataObject,
} from 'n8n-workflow';

export class Infomaniak implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Infomaniak',
		name: 'infomaniak',
		icon: 'file:infomaniak.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with Infomaniak API - Cloud, Hosting, Domains, Mail and more',
		defaults: {
			name: 'Infomaniak',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'infomaniakApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Account',
						value: 'account',
						description: 'Manage accounts and organizations',
					},
					{
						name: 'Domain',
						value: 'domain',
						description: 'Manage domains and DNS records',
					},
					{
						name: 'Mail Hosting',
						value: 'mailHosting',
						description: 'Manage email hosting and mailboxes',
					},
					{
						name: 'Web Hosting',
						value: 'webHosting',
						description: 'Manage web hosting sites',
					},
					{
						name: 'kDrive',
						value: 'kdrive',
						description: 'Manage kDrive cloud storage',
					},
					{
						name: 'Public Cloud',
						value: 'publicCloud',
						description: 'Manage public cloud instances',
					},
					{
						name: 'Swiss Backup',
						value: 'swissBackup',
						description: 'Manage Swiss Backup services',
					},
					{
						name: 'Newsletter',
						value: 'newsletter',
						description: 'Manage newsletters and campaigns',
					},
					{
						name: 'Team',
						value: 'team',
						description: 'Manage team and workspaces',
					},
					{
						name: 'AI Tools',
						value: 'aiTools',
						description: 'AI-powered tools: Chat, Image Generation, Speech-to-Text',
					},
					{
						name: 'VOD',
						value: 'vod',
						description: 'Video on Demand: Manage videos, channels, players, and analytics',
					},
				],
				default: 'account',
				required: true,
			},

			// Account Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['account'],
					},
				},
				options: [
					{
						name: 'Get Profile',
						value: 'getProfile',
						description: 'Get current user profile',
						action: 'Get user profile',
					},
					{
						name: 'List Organizations',
						value: 'listOrganizations',
						description: 'List all organizations',
						action: 'List organizations',
					},
					{
						name: 'Get Organization',
						value: 'getOrganization',
						description: 'Get organization details',
						action: 'Get organization',
					},
					{
						name: 'List Accounts',
						value: 'listAccounts',
						description: 'List all accounts',
						action: 'List accounts',
					},
				],
				default: 'getProfile',
			},

			// Domain Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['domain'],
					},
				},
				options: [
					{
						name: 'List Domains',
						value: 'listDomains',
						description: 'List all domains',
						action: 'List domains',
					},
					{
						name: 'Get Domain',
						value: 'getDomain',
						description: 'Get domain details',
						action: 'Get domain',
					},
					{
						name: 'List DNS Records',
						value: 'listDnsRecords',
						description: 'List DNS records for a domain',
						action: 'List DNS records',
					},
					{
						name: 'Create DNS Record',
						value: 'createDnsRecord',
						description: 'Create a new DNS record',
						action: 'Create DNS record',
					},
					{
						name: 'Update DNS Record',
						value: 'updateDnsRecord',
						description: 'Update a DNS record',
						action: 'Update DNS record',
					},
					{
						name: 'Delete DNS Record',
						value: 'deleteDnsRecord',
						description: 'Delete a DNS record',
						action: 'Delete DNS record',
					},
				],
				default: 'listDomains',
			},

			// Mail Hosting Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['mailHosting'],
					},
				},
				options: [
					{
						name: 'List Mail Hostings',
						value: 'listMailHostings',
						description: 'List all mail hosting services',
						action: 'List mail hostings',
					},
					{
						name: 'Get Mail Hosting',
						value: 'getMailHosting',
						description: 'Get mail hosting details',
						action: 'Get mail hosting',
					},
					{
						name: 'List Mailboxes',
						value: 'listMailboxes',
						description: 'List all mailboxes',
						action: 'List mailboxes',
					},
					{
						name: 'Create Mailbox',
						value: 'createMailbox',
						description: 'Create a new mailbox',
						action: 'Create mailbox',
					},
					{
						name: 'Update Mailbox',
						value: 'updateMailbox',
						description: 'Update mailbox settings',
						action: 'Update mailbox',
					},
					{
						name: 'Delete Mailbox',
						value: 'deleteMailbox',
						description: 'Delete a mailbox',
						action: 'Delete mailbox',
					},
					{
						name: 'List Aliases',
						value: 'listAliases',
						description: 'List email aliases',
						action: 'List aliases',
					},
					{
						name: 'Create Alias',
						value: 'createAlias',
						description: 'Create email alias',
						action: 'Create alias',
					},
				],
				default: 'listMailHostings',
			},

			// Web Hosting Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['webHosting'],
					},
				},
				options: [
					{
						name: 'List Hostings',
						value: 'listHostings',
						description: 'List all web hosting accounts',
						action: 'List hostings',
					},
					{
						name: 'Get Hosting',
						value: 'getHosting',
						description: 'Get hosting details',
						action: 'Get hosting',
					},
					{
						name: 'List Sites',
						value: 'listSites',
						description: 'List all sites',
						action: 'List sites',
					},
					{
						name: 'Get Site',
						value: 'getSite',
						description: 'Get site details',
						action: 'Get site',
					},
					{
						name: 'List Databases',
						value: 'listDatabases',
						description: 'List databases',
						action: 'List databases',
					},
					{
						name: 'Create Database',
						value: 'createDatabase',
						description: 'Create a new database',
						action: 'Create database',
					},
				],
				default: 'listHostings',
			},

			// kDrive Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['kdrive'],
					},
				},
				options: [
					{
						name: 'List Drives',
						value: 'listDrives',
						description: 'List all kDrives',
						action: 'List drives',
					},
					{
						name: 'Get Drive',
						value: 'getDrive',
						description: 'Get kDrive details',
						action: 'Get drive',
					},
					{
						name: 'List Files',
						value: 'listFiles',
						description: 'List files in a directory',
						action: 'List files',
					},
					{
						name: 'Get File Info',
						value: 'getFileInfo',
						description: 'Get file information',
						action: 'Get file info',
					},
					{
						name: 'Create Folder',
						value: 'createFolder',
						description: 'Create a new folder',
						action: 'Create folder',
					},
					{
						name: 'Delete File',
						value: 'deleteFile',
						description: 'Delete a file or folder',
						action: 'Delete file',
					},
					{
						name: 'Share File',
						value: 'shareFile',
						description: 'Create a share link',
						action: 'Share file',
					},
				],
				default: 'listDrives',
			},

			// Public Cloud Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['publicCloud'],
					},
				},
				options: [
					{
						name: 'List Projects',
						value: 'listProjects',
						description: 'List all cloud projects',
						action: 'List projects',
					},
					{
						name: 'List Instances',
						value: 'listInstances',
						description: 'List cloud instances',
						action: 'List instances',
					},
					{
						name: 'Get Instance',
						value: 'getInstance',
						description: 'Get instance details',
						action: 'Get instance',
					},
					{
						name: 'Start Instance',
						value: 'startInstance',
						description: 'Start a cloud instance',
						action: 'Start instance',
					},
					{
						name: 'Stop Instance',
						value: 'stopInstance',
						description: 'Stop a cloud instance',
						action: 'Stop instance',
					},
					{
						name: 'Reboot Instance',
						value: 'rebootInstance',
						description: 'Reboot a cloud instance',
						action: 'Reboot instance',
					},
				],
				default: 'listProjects',
			},

			// Swiss Backup Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['swissBackup'],
					},
				},
				options: [
					{
						name: 'List Backup Accounts',
						value: 'listBackupAccounts',
						description: 'List all Swiss Backup accounts',
						action: 'List backup accounts',
					},
					{
						name: 'Get Backup Account',
						value: 'getBackupAccount',
						description: 'Get backup account details',
						action: 'Get backup account',
					},
					{
						name: 'List Devices',
						value: 'listDevices',
						description: 'List backup devices',
						action: 'List devices',
					},
					{
						name: 'Get Usage',
						value: 'getUsage',
						description: 'Get backup usage statistics',
						action: 'Get usage',
					},
				],
				default: 'listBackupAccounts',
			},

			// Newsletter Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['newsletter'],
					},
				},
				options: [
					{
						name: 'List Newsletters',
						value: 'listNewsletters',
						description: 'List all newsletters',
						action: 'List newsletters',
					},
					{
						name: 'List Campaigns',
						value: 'listCampaigns',
						description: 'List all campaigns',
						action: 'List campaigns',
					},
					{
						name: 'Create Campaign',
						value: 'createCampaign',
						description: 'Create a new campaign',
						action: 'Create campaign',
					},
					{
						name: 'Send Campaign',
						value: 'sendCampaign',
						description: 'Send a campaign',
						action: 'Send campaign',
					},
					{
						name: 'List Contacts',
						value: 'listContacts',
						description: 'List newsletter contacts',
						action: 'List contacts',
					},
					{
						name: 'Add Contact',
						value: 'addContact',
						description: 'Add a new contact',
						action: 'Add contact',
					},
				],
				default: 'listNewsletters',
			},

			// Team Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['team'],
					},
				},
				options: [
					{
						name: 'List Workspaces',
						value: 'listWorkspaces',
						description: 'List all workspaces',
						action: 'List workspaces',
					},
					{
						name: 'Get Workspace',
						value: 'getWorkspace',
						description: 'Get workspace details',
						action: 'Get workspace',
					},
					{
						name: 'List Members',
						value: 'listMembers',
						description: 'List workspace members',
						action: 'List members',
					},
					{
						name: 'Invite Member',
						value: 'inviteMember',
						description: 'Invite a new member',
						action: 'Invite member',
					},
				],
				default: 'listWorkspaces',
			},

			// AI Tools Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['aiTools'],
					},
				},
				options: [
					{
						name: 'Chat Completion',
						value: 'chatCompletion',
						description: 'Generate text using AI language models',
						action: 'Chat completion',
					},
					{
						name: 'Generate Image',
						value: 'generateImage',
						description: 'Generate images from text prompts',
						action: 'Generate image',
					},
					{
						name: 'Photo Maker',
						value: 'photoMaker',
						description: 'Customize realistic human photos',
						action: 'Photo maker',
					},
					{
						name: 'Speech to Text',
						value: 'speechToText',
						description: 'Transcribe audio to text',
						action: 'Speech to text',
					},
				],
				default: 'chatCompletion',
			},

			// VOD Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['vod'],
					},
				},
				options: [
					// Channel Operations
					{
						name: 'List Channels',
						value: 'listChannels',
						description: 'List all VOD channels',
						action: 'List channels',
					},
					{
						name: 'Get Channel',
						value: 'getChannel',
						description: 'Get channel information',
						action: 'Get channel',
					},
					// Media Operations
					{
						name: 'List Videos',
						value: 'listVideos',
						description: 'List all videos in a channel',
						action: 'List videos',
					},
					{
						name: 'Get Video',
						value: 'getVideo',
						description: 'Get video details',
						action: 'Get video',
					},
					{
						name: 'Upload Video',
						value: 'uploadVideo',
						description: 'Upload a new video',
						action: 'Upload video',
					},
					{
						name: 'Update Video',
						value: 'updateVideo',
						description: 'Update video metadata',
						action: 'Update video',
					},
					{
						name: 'Delete Video',
						value: 'deleteVideo',
						description: 'Delete a video',
						action: 'Delete video',
					},
					// Folder Operations
					{
						name: 'List Folders',
						value: 'listFolders',
						description: 'List all folders in a channel',
						action: 'List folders',
					},
					{
						name: 'Create Folder',
						value: 'createFolder',
						description: 'Create a new folder',
						action: 'Create folder',
					},
					// Player Operations
					{
						name: 'List Players',
						value: 'listPlayers',
						description: 'List all video players',
						action: 'List players',
					},
					{
						name: 'Create Player',
						value: 'createPlayer',
						description: 'Create a new video player',
						action: 'Create player',
					},
					// Analytics
					{
						name: 'Get Statistics',
						value: 'getStatistics',
						description: 'Get video or channel statistics',
						action: 'Get statistics',
					},
					// Encoding
					{
						name: 'List Encodings',
						value: 'listEncodings',
						description: 'List available encoding profiles',
						action: 'List encodings',
					},
				],
				default: 'listVideos',
			},

			// Common Parameters

			// Organization ID (for operations that need it)
			{
				displayName: 'Organization ID',
				name: 'organizationId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['account'],
						operation: ['getOrganization'],
					},
				},
				description: 'The ID of the organization',
			},

			// Domain ID
			{
				displayName: 'Domain ID',
				name: 'domainId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['domain'],
						operation: ['getDomain', 'listDnsRecords', 'createDnsRecord', 'updateDnsRecord', 'deleteDnsRecord'],
					},
				},
				description: 'The ID of the domain',
			},

			// DNS Record ID
			{
				displayName: 'Record ID',
				name: 'recordId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['domain'],
						operation: ['updateDnsRecord', 'deleteDnsRecord'],
					},
				},
				description: 'The ID of the DNS record',
			},

			// DNS Record Fields
			{
				displayName: 'Record Type',
				name: 'recordType',
				type: 'options',
				options: [
					{ name: 'A', value: 'A' },
					{ name: 'AAAA', value: 'AAAA' },
					{ name: 'CNAME', value: 'CNAME' },
					{ name: 'MX', value: 'MX' },
					{ name: 'TXT', value: 'TXT' },
					{ name: 'NS', value: 'NS' },
					{ name: 'SRV', value: 'SRV' },
					{ name: 'CAA', value: 'CAA' },
				],
				default: 'A',
				required: true,
				displayOptions: {
					show: {
						resource: ['domain'],
						operation: ['createDnsRecord', 'updateDnsRecord'],
					},
				},
				description: 'The type of DNS record',
			},

			{
				displayName: 'Record Name',
				name: 'recordName',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['domain'],
						operation: ['createDnsRecord', 'updateDnsRecord'],
					},
				},
				description: 'The name of the DNS record (e.g., www, @, subdomain)',
			},

			{
				displayName: 'Record Value',
				name: 'recordValue',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['domain'],
						operation: ['createDnsRecord', 'updateDnsRecord'],
					},
				},
				description: 'The value of the DNS record (IP address, domain name, text, etc.)',
			},

			{
				displayName: 'TTL',
				name: 'ttl',
				type: 'number',
				default: 3600,
				displayOptions: {
					show: {
						resource: ['domain'],
						operation: ['createDnsRecord', 'updateDnsRecord'],
					},
				},
				description: 'Time to live in seconds',
			},

			// Mail Hosting ID
			{
				displayName: 'Mail Hosting ID',
				name: 'mailHostingId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['mailHosting'],
						operation: ['getMailHosting', 'listMailboxes', 'createMailbox', 'updateMailbox', 'deleteMailbox', 'listAliases', 'createAlias'],
					},
				},
				description: 'The ID of the mail hosting service',
			},

			// Mailbox ID
			{
				displayName: 'Mailbox ID',
				name: 'mailboxId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['mailHosting'],
						operation: ['updateMailbox', 'deleteMailbox'],
					},
				},
				description: 'The ID of the mailbox',
			},

			// Mailbox Creation Fields
			{
				displayName: 'Email Address',
				name: 'emailAddress',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['mailHosting'],
						operation: ['createMailbox'],
					},
				},
				description: 'The email address for the new mailbox',
			},

			{
				displayName: 'Password',
				name: 'password',
				type: 'string',
				typeOptions: {
					password: true,
				},
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['mailHosting'],
						operation: ['createMailbox'],
					},
				},
				description: 'The password for the new mailbox',
			},

			{
				displayName: 'First Name',
				name: 'firstName',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						resource: ['mailHosting'],
						operation: ['createMailbox'],
					},
				},
				description: 'The first name of the mailbox owner',
			},

			{
				displayName: 'Last Name',
				name: 'lastName',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						resource: ['mailHosting'],
						operation: ['createMailbox'],
					},
				},
				description: 'The last name of the mailbox owner',
			},

			// Alias Fields
			{
				displayName: 'Alias Email',
				name: 'aliasEmail',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['mailHosting'],
						operation: ['createAlias'],
					},
				},
				description: 'The alias email address',
			},

			{
				displayName: 'Destination Email',
				name: 'destinationEmail',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['mailHosting'],
						operation: ['createAlias'],
					},
				},
				description: 'The destination email address',
			},

			// Web Hosting ID
			{
				displayName: 'Hosting ID',
				name: 'hostingId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['webHosting'],
						operation: ['getHosting', 'listSites', 'getSite', 'listDatabases', 'createDatabase'],
					},
				},
				description: 'The ID of the hosting account',
			},

			// Site ID
			{
				displayName: 'Site ID',
				name: 'siteId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['webHosting'],
						operation: ['getSite'],
					},
				},
				description: 'The ID of the site',
			},

			// Database Fields
			{
				displayName: 'Database Name',
				name: 'databaseName',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['webHosting'],
						operation: ['createDatabase'],
					},
				},
				description: 'The name of the database',
			},

			{
				displayName: 'Database Type',
				name: 'databaseType',
				type: 'options',
				options: [
					{ name: 'MySQL', value: 'mysql' },
					{ name: 'PostgreSQL', value: 'postgresql' },
					{ name: 'MariaDB', value: 'mariadb' },
				],
				default: 'mysql',
				displayOptions: {
					show: {
						resource: ['webHosting'],
						operation: ['createDatabase'],
					},
				},
				description: 'The type of database',
			},

			// kDrive Parameters
			{
				displayName: 'Drive ID',
				name: 'driveId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['kdrive'],
						operation: ['getDrive', 'listFiles', 'getFileInfo', 'createFolder', 'deleteFile', 'shareFile'],
					},
				},
				description: 'The ID of the kDrive',
			},

			{
				displayName: 'Directory ID',
				name: 'directoryId',
				type: 'string',
				default: '1',
				displayOptions: {
					show: {
						resource: ['kdrive'],
						operation: ['listFiles', 'createFolder'],
					},
				},
				description: 'The ID of the directory (1 for root)',
			},

			{
				displayName: 'File ID',
				name: 'fileId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['kdrive'],
						operation: ['getFileInfo', 'deleteFile', 'shareFile'],
					},
				},
				description: 'The ID of the file',
			},

			{
				displayName: 'Folder Name',
				name: 'folderName',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['kdrive'],
						operation: ['createFolder'],
					},
				},
				description: 'The name of the folder to create',
			},

			// Public Cloud Parameters
			{
				displayName: 'Project ID',
				name: 'projectId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['publicCloud'],
						operation: ['listInstances', 'getInstance', 'startInstance', 'stopInstance', 'rebootInstance'],
					},
				},
				description: 'The ID of the cloud project',
			},

			{
				displayName: 'Instance ID',
				name: 'instanceId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['publicCloud'],
						operation: ['getInstance', 'startInstance', 'stopInstance', 'rebootInstance'],
					},
				},
				description: 'The ID of the cloud instance',
			},

			// Swiss Backup Parameters
			{
				displayName: 'Backup Account ID',
				name: 'backupAccountId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['swissBackup'],
						operation: ['getBackupAccount', 'listDevices', 'getUsage'],
					},
				},
				description: 'The ID of the backup account',
			},

			// Newsletter Parameters
			{
				displayName: 'Newsletter ID',
				name: 'newsletterId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['newsletter'],
						operation: ['listCampaigns', 'createCampaign', 'listContacts', 'addContact'],
					},
				},
				description: 'The ID of the newsletter',
			},

			{
				displayName: 'Campaign ID',
				name: 'campaignId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['newsletter'],
						operation: ['sendCampaign'],
					},
				},
				description: 'The ID of the campaign',
			},

			// Campaign Fields
			{
				displayName: 'Campaign Name',
				name: 'campaignName',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['newsletter'],
						operation: ['createCampaign'],
					},
				},
				description: 'The name of the campaign',
			},

			{
				displayName: 'Subject',
				name: 'subject',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['newsletter'],
						operation: ['createCampaign'],
					},
				},
				description: 'The subject of the campaign',
			},

			{
				displayName: 'HTML Content',
				name: 'htmlContent',
				type: 'string',
				typeOptions: {
					rows: 10,
				},
				default: '',
				displayOptions: {
					show: {
						resource: ['newsletter'],
						operation: ['createCampaign'],
					},
				},
				description: 'The HTML content of the campaign',
			},

			// Contact Fields
			{
				displayName: 'Contact Email',
				name: 'contactEmail',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['newsletter'],
						operation: ['addContact'],
					},
				},
				description: 'The email address of the contact',
			},

			{
				displayName: 'Contact Name',
				name: 'contactName',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						resource: ['newsletter'],
						operation: ['addContact'],
					},
				},
				description: 'The name of the contact',
			},

			// Team Parameters
			{
				displayName: 'Workspace ID',
				name: 'workspaceId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['team'],
						operation: ['getWorkspace', 'listMembers', 'inviteMember'],
					},
				},
				description: 'The ID of the workspace',
			},

			{
				displayName: 'Member Email',
				name: 'memberEmail',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['team'],
						operation: ['inviteMember'],
					},
				},
				description: 'The email address of the member to invite',
			},

			{
				displayName: 'Role',
				name: 'role',
				type: 'options',
				options: [
					{ name: 'Admin', value: 'admin' },
					{ name: 'User', value: 'user' },
					{ name: 'Guest', value: 'guest' },
				],
				default: 'user',
				displayOptions: {
					show: {
						resource: ['team'],
						operation: ['inviteMember'],
					},
				},
				description: 'The role of the member',
			},

			// AI Tools Parameters
			{
				displayName: 'AI Product ID',
				name: 'aiProductId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['aiTools'],
					},
				},
				description: 'The AI API product identifier. Use the API endpoint to retrieve your product ID',
			},

			// Chat Completion Parameters
			{
				displayName: 'Model',
				name: 'aiModel',
				type: 'options',
				options: [
					{ name: 'Granite', value: 'granite' },
					{ name: 'Llama 3', value: 'llama3' },
					{ name: 'Mistral 24B', value: 'mistral24b' },
					{ name: 'Mistral 31', value: 'mistral31' },
					{ name: 'Mixtral', value: 'mixtral' },
					{ name: 'Mixtral 8x22B', value: 'mixtral8x22b' },
					{ name: 'Reasoning', value: 'reasoning' },
				],
				default: 'mixtral',
				displayOptions: {
					show: {
						resource: ['aiTools'],
						operation: ['chatCompletion'],
					},
				},
				description: 'The AI model to use for chat completion',
			},

			{
				displayName: 'Messages',
				name: 'messages',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				required: true,
				displayOptions: {
					show: {
						resource: ['aiTools'],
						operation: ['chatCompletion'],
					},
				},
				description: 'The messages for the chat conversation',
				options: [
					{
						name: 'message',
						displayName: 'Message',
						values: [
							{
								displayName: 'Role',
								name: 'role',
								type: 'options',
								options: [
									{ name: 'System', value: 'system' },
									{ name: 'User', value: 'user' },
									{ name: 'Assistant', value: 'assistant' },
								],
								default: 'user',
								description: 'The role of the message author',
							},
							{
								displayName: 'Content',
								name: 'content',
								type: 'string',
								typeOptions: {
									rows: 3,
								},
								default: '',
								description: 'The content of the message',
							},
						],
					},
				],
			},

			// Image Generation Parameters
			{
				displayName: 'Image Model',
				name: 'imageModel',
				type: 'options',
				options: [
					{ name: 'Flux', value: 'flux' },
					{ name: 'SDXL Lightning', value: 'sdxl_lightning' },
				],
				default: 'sdxl_lightning',
				displayOptions: {
					show: {
						resource: ['aiTools'],
						operation: ['generateImage'],
					},
				},
				description: 'The model to use for image generation',
			},

			{
				displayName: 'Prompt',
				name: 'imagePrompt',
				type: 'string',
				typeOptions: {
					rows: 3,
				},
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['aiTools'],
						operation: ['generateImage', 'photoMaker'],
					},
				},
				description: 'The text prompt to generate the image. For Photo Maker, use trigger words like "man img", "woman img"',
			},

			{
				displayName: 'Images',
				name: 'inputImages',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['aiTools'],
						operation: ['photoMaker'],
					},
				},
				description: 'Base64 encoded images for customization (max 6 images)',
			},

			// Audio Parameters
			{
				displayName: 'Audio File',
				name: 'audioFile',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['aiTools'],
						operation: ['speechToText'],
					},
				},
				description: 'Base64 encoded audio file (max 50MB, formats: mp3, mp4, aac, wav, flac, ogg, opus, wma, m4a)',
			},

			{
				displayName: 'Transcription Model',
				name: 'transcriptionModel',
				type: 'options',
				options: [
					{ name: 'Whisper', value: 'whisper' },
					{ name: 'Whisper V2', value: 'whisperV2' },
				],
				default: 'whisper',
				displayOptions: {
					show: {
						resource: ['aiTools'],
						operation: ['speechToText'],
					},
				},
				description: 'The model to use for speech-to-text transcription',
			},

			// AI Tools Additional Options
			{
				displayName: 'AI Options',
				name: 'aiOptions',
				type: 'collection',
				placeholder: 'Add Option',
				default: {},
				displayOptions: {
					show: {
						resource: ['aiTools'],
					},
				},
				options: [
					// Chat Completion Options
					{
						displayName: 'Max Tokens',
						name: 'max_tokens',
						type: 'number',
						typeOptions: {
							minValue: 1,
							maxValue: 5000,
						},
						default: 1024,
						description: 'Maximum number of tokens to generate',
					},
					{
						displayName: 'Temperature',
						name: 'temperature',
						type: 'number',
						typeOptions: {
							minValue: 0,
							maxValue: 2,
							numberStepSize: 0.1,
						},
						default: 0.5,
						description: 'Sampling temperature (0 = focused, 2 = random)',
					},
					{
						displayName: 'Profile Type',
						name: 'profile_type',
						type: 'options',
						options: [
							{ name: 'Creative', value: 'creative' },
							{ name: 'Standard', value: 'standard' },
							{ name: 'Strict', value: 'strict' },
						],
						default: 'standard',
						description: 'Generation profile for output style',
					},
					{
						displayName: 'Stream',
						name: 'stream',
						type: 'boolean',
						default: false,
						description: 'Whether to stream the response',
					},
					// Image Generation Options
					{
						displayName: 'Number of Images',
						name: 'n',
						type: 'number',
						typeOptions: {
							minValue: 1,
							maxValue: 5,
						},
						default: 1,
						description: 'Number of images to generate',
					},
					{
						displayName: 'Image Size',
						name: 'size',
						type: 'options',
						options: [
							{ name: '1024x1024', value: '1024x1024' },
							{ name: '1024x1792', value: '1024x1792' },
							{ name: '1792x1024', value: '1792x1024' },
						],
						default: '1024x1024',
						description: 'The size of the generated images',
					},
					{
						displayName: 'Quality',
						name: 'quality',
						type: 'options',
						options: [
							{ name: 'Standard', value: 'standard' },
							{ name: 'HD', value: 'hd' },
						],
						default: 'standard',
						description: 'The quality of the generated images',
					},
					{
						displayName: 'Style',
						name: 'style',
						type: 'options',
						options: [
							{ name: 'Cinematic', value: 'cinematic' },
							{ name: 'Comic Book', value: 'comic_book' },
							{ name: 'Digital Art', value: 'digital_art' },
							{ name: 'Disney Character', value: 'disney_charactor' },
							{ name: 'Enhance', value: 'enhance' },
							{ name: 'Fantasy Art', value: 'fantasy_art' },
							{ name: 'Line Art', value: 'line_art' },
							{ name: 'Low Poly', value: 'lowpoly' },
							{ name: 'Neon Punk', value: 'neonpunk' },
							{ name: 'Photographic', value: 'photographic' },
						],
						default: 'photographic',
						description: 'The style of the generated image',
					},
					{
						displayName: 'Negative Prompt',
						name: 'negative_prompt',
						type: 'string',
						typeOptions: {
							rows: 2,
						},
						default: '',
						description: 'What to avoid in the generation (max 350 chars)',
					},
					// Audio Options
					{
						displayName: 'Language',
						name: 'language',
						type: 'string',
						default: 'en',
						description: 'Language code (e.g., en, fr, es, de, it)',
					},
					{
						displayName: 'Response Format',
						name: 'response_format',
						type: 'options',
						options: [
							{ name: 'JSON', value: 'json' },
							{ name: 'Text', value: 'text' },
							{ name: 'SRT', value: 'srt' },
							{ name: 'VTT', value: 'vtt' },
							{ name: 'Verbose JSON', value: 'verbose_json' },
						],
						default: 'text',
						description: 'The format of the transcription output',
					},
				],
			},

			// VOD Parameters
			{
				displayName: 'Channel ID',
				name: 'vodChannelId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['vod'],
						operation: ['getChannel', 'listVideos', 'getVideo', 'uploadVideo', 'updateVideo', 'deleteVideo', 'listFolders', 'createFolder', 'listPlayers', 'createPlayer', 'getStatistics', 'listEncodings'],
					},
				},
				description: 'The ID of the VOD channel',
			},

			{
				displayName: 'Video ID',
				name: 'vodVideoId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['vod'],
						operation: ['getVideo', 'updateVideo', 'deleteVideo'],
					},
				},
				description: 'The ID of the video',
			},

			// Upload Parameters
			{
				displayName: 'Upload Method',
				name: 'uploadMethod',
				type: 'options',
				options: [
					{ name: 'File', value: 'file' },
					{ name: 'URL', value: 'url' },
				],
				default: 'file',
				displayOptions: {
					show: {
						resource: ['vod'],
						operation: ['uploadVideo'],
					},
				},
				description: 'How to upload the video',
			},

			{
				displayName: 'Video File',
				name: 'videoFile',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['vod'],
						operation: ['uploadVideo'],
						uploadMethod: ['file'],
					},
				},
				description: 'Base64 encoded video file',
			},

			{
				displayName: 'Video URL',
				name: 'videoUrl',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['vod'],
						operation: ['uploadVideo'],
						uploadMethod: ['url'],
					},
				},
				description: 'URL of the video to import',
			},

			{
				displayName: 'Video Name',
				name: 'videoName',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['vod'],
						operation: ['uploadVideo'],
					},
				},
				description: 'Name of the video',
			},

			// Update Video Parameters
			{
				displayName: 'Update Fields',
				name: 'updateFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ['vod'],
						operation: ['updateVideo'],
					},
				},
				options: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'Video name',
					},
					{
						displayName: 'Description',
						name: 'description',
						type: 'string',
						typeOptions: {
							rows: 3,
						},
						default: '',
						description: 'Video description',
					},
					{
						displayName: 'Published',
						name: 'published',
						type: 'boolean',
						default: false,
						description: 'Whether the video is published',
					},
					{
						displayName: 'Validated',
						name: 'validated',
						type: 'boolean',
						default: false,
						description: 'Whether the video is validated',
					},
					{
						displayName: 'Tags',
						name: 'tags',
						type: 'string',
						default: '',
						description: 'Comma-separated tags',
					},
				],
			},

			// Folder Parameters
			{
				displayName: 'Folder Name',
				name: 'vodFolderName',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['vod'],
						operation: ['createFolder'],
					},
				},
				description: 'Name of the folder to create',
			},

			{
				displayName: 'Folder ID',
				name: 'vodFolderId',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						resource: ['vod'],
						operation: ['uploadVideo'],
					},
				},
				description: 'Folder ID to upload video to (optional)',
			},

			// Player Parameters
			{
				displayName: 'Player Name',
				name: 'playerName',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['vod'],
						operation: ['createPlayer'],
					},
				},
				description: 'Name of the video player',
			},

			// Statistics Parameters
			{
				displayName: 'Statistics Type',
				name: 'statisticsType',
				type: 'options',
				options: [
					{ name: 'Channel', value: 'channel' },
					{ name: 'Media', value: 'media' },
				],
				default: 'channel',
				displayOptions: {
					show: {
						resource: ['vod'],
						operation: ['getStatistics'],
					},
				},
				description: 'Type of statistics to retrieve',
			},

			{
				displayName: 'Media ID',
				name: 'statisticsMediaId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['vod'],
						operation: ['getStatistics'],
						statisticsType: ['media'],
					},
				},
				description: 'The ID of the media for statistics',
			},

			// VOD Additional Options
			{
				displayName: 'VOD Options',
				name: 'vodOptions',
				type: 'collection',
				placeholder: 'Add Option',
				default: {},
				displayOptions: {
					show: {
						resource: ['vod'],
					},
				},
				options: [
					{
						displayName: 'Auto Publish',
						name: 'auto_publish',
						type: 'boolean',
						default: false,
						description: 'Whether to auto-publish uploaded videos',
					},
					{
						displayName: 'Auto Validate',
						name: 'auto_validate',
						type: 'boolean',
						default: false,
						description: 'Whether to auto-validate uploaded videos',
					},
					{
						displayName: 'Include Subtitles',
						name: 'include_subtitles',
						type: 'boolean',
						default: false,
						description: 'Whether to include subtitles in video data',
					},
					{
						displayName: 'Include Chapters',
						name: 'include_chapters',
						type: 'boolean',
						default: false,
						description: 'Whether to include chapters in video data',
					},
					{
						displayName: 'Date From',
						name: 'date_from',
						type: 'string',
						default: '',
						description: 'Filter statistics from this date (YYYY-MM-DD)',
					},
					{
						displayName: 'Date To',
						name: 'date_to',
						type: 'string',
						default: '',
						description: 'Filter statistics to this date (YYYY-MM-DD)',
					},
				],
			},

			// Pagination and Filtering Options
			{
				displayName: 'Additional Options',
				name: 'additionalOptions',
				type: 'collection',
				placeholder: 'Add Option',
				default: {},
				displayOptions: {
					show: {
						operation: [
							'listOrganizations',
							'listAccounts',
							'listDomains',
							'listDnsRecords',
							'listMailHostings',
							'listMailboxes',
							'listAliases',
							'listHostings',
							'listSites',
							'listDatabases',
							'listDrives',
							'listFiles',
							'listProjects',
							'listInstances',
							'listBackupAccounts',
							'listDevices',
							'listNewsletters',
							'listCampaigns',
							'listContacts',
							'listWorkspaces',
							'listMembers',
							'listChannels',
							'listVideos',
							'listFolders',
							'listPlayers',
							'listEncodings',
						],
					},
				},
				options: [
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						typeOptions: {
							minValue: 1,
							maxValue: 500,
						},
						default: 50,
						description: 'Max number of results to return',
					},
					{
						displayName: 'Page',
						name: 'page',
						type: 'number',
						typeOptions: {
							minValue: 1,
						},
						default: 1,
						description: 'Page number for pagination',
					},
					{
						displayName: 'Order By',
						name: 'order_by',
						type: 'string',
						default: '',
						description: 'Field to order results by',
					},
					{
						displayName: 'Order',
						name: 'order',
						type: 'options',
						options: [
							{
								name: 'Ascending',
								value: 'asc',
							},
							{
								name: 'Descending',
								value: 'desc',
							},
						],
						default: 'asc',
						description: 'Order direction',
					},
					{
						displayName: 'Search',
						name: 'search',
						type: 'string',
						default: '',
						description: 'Search term to filter results',
					},
					{
						displayName: 'With Count',
						name: 'with_count',
						type: 'boolean',
						default: false,
						description: 'Whether to include total count in response',
					},
				],
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const credentials = await this.getCredentials('infomaniakApi');
		const baseURL = 'https://api.infomaniak.com';

		for (let i = 0; i < items.length; i++) {
			try {
				const resource = this.getNodeParameter('resource', i) as string;
				const operation = this.getNodeParameter('operation', i) as string;
				
				let endpoint = '';
				let method = 'GET';
				let body: IDataObject = {};
				const qs: IDataObject = {};

				// Build the request based on resource and operation
				switch (resource) {
					case 'account':
						if (operation === 'getProfile') {
							endpoint = '/1/profile';
						} else if (operation === 'listOrganizations') {
							endpoint = '/1/organizations';
						} else if (operation === 'getOrganization') {
							const organizationId = this.getNodeParameter('organizationId', i) as string;
							endpoint = `/1/organization/${organizationId}`;
						} else if (operation === 'listAccounts') {
							endpoint = '/1/accounts';
						}
						break;

					case 'domain':
						if (operation === 'listDomains') {
							endpoint = '/1/domains';
						} else if (operation === 'getDomain') {
							const domainId = this.getNodeParameter('domainId', i) as string;
							endpoint = `/1/domain/${domainId}`;
						} else if (operation === 'listDnsRecords') {
							const domainId = this.getNodeParameter('domainId', i) as string;
							endpoint = `/1/domain/${domainId}/dns/record`;
						} else if (operation === 'createDnsRecord') {
							method = 'POST';
							const domainId = this.getNodeParameter('domainId', i) as string;
							endpoint = `/1/domain/${domainId}/dns/record`;
							body = {
								type: this.getNodeParameter('recordType', i) as string,
								source: this.getNodeParameter('recordName', i) as string,
								target: this.getNodeParameter('recordValue', i) as string,
								ttl: this.getNodeParameter('ttl', i, 3600) as number,
							};
						} else if (operation === 'updateDnsRecord') {
							method = 'PUT';
							const domainId = this.getNodeParameter('domainId', i) as string;
							const recordId = this.getNodeParameter('recordId', i) as string;
							endpoint = `/1/domain/${domainId}/dns/record/${recordId}`;
							body = {
								type: this.getNodeParameter('recordType', i) as string,
								source: this.getNodeParameter('recordName', i) as string,
								target: this.getNodeParameter('recordValue', i) as string,
								ttl: this.getNodeParameter('ttl', i, 3600) as number,
							};
						} else if (operation === 'deleteDnsRecord') {
							method = 'DELETE';
							const domainId = this.getNodeParameter('domainId', i) as string;
							const recordId = this.getNodeParameter('recordId', i) as string;
							endpoint = `/1/domain/${domainId}/dns/record/${recordId}`;
						}
						break;

					case 'mailHosting':
						if (operation === 'listMailHostings') {
							endpoint = '/1/mail_hostings';
						} else if (operation === 'getMailHosting') {
							const mailHostingId = this.getNodeParameter('mailHostingId', i) as string;
							endpoint = `/1/mail_hostings/${mailHostingId}`;
						} else if (operation === 'listMailboxes') {
							const mailHostingId = this.getNodeParameter('mailHostingId', i) as string;
							endpoint = `/1/mail_hostings/${mailHostingId}/mailboxes`;
						} else if (operation === 'createMailbox') {
							method = 'POST';
							const mailHostingId = this.getNodeParameter('mailHostingId', i) as string;
							endpoint = `/1/mail_hostings/${mailHostingId}/mailboxes`;
							body = {
								mailbox_name: this.getNodeParameter('emailAddress', i) as string,
								password: this.getNodeParameter('password', i) as string,
								first_name: this.getNodeParameter('firstName', i, '') as string,
								last_name: this.getNodeParameter('lastName', i, '') as string,
							};
						} else if (operation === 'updateMailbox') {
							method = 'PATCH';
							const mailHostingId = this.getNodeParameter('mailHostingId', i) as string;
							const mailboxId = this.getNodeParameter('mailboxId', i) as string;
							endpoint = `/1/mail_hostings/${mailHostingId}/mailboxes/${mailboxId}`;
						} else if (operation === 'deleteMailbox') {
							method = 'DELETE';
							const mailHostingId = this.getNodeParameter('mailHostingId', i) as string;
							const mailboxId = this.getNodeParameter('mailboxId', i) as string;
							endpoint = `/1/mail_hostings/${mailHostingId}/mailboxes/${mailboxId}`;
						} else if (operation === 'listAliases') {
							const mailHostingId = this.getNodeParameter('mailHostingId', i) as string;
							endpoint = `/1/mail_hostings/${mailHostingId}/aliases`;
						} else if (operation === 'createAlias') {
							method = 'POST';
							const mailHostingId = this.getNodeParameter('mailHostingId', i) as string;
							endpoint = `/1/mail_hostings/${mailHostingId}/aliases`;
							body = {
								alias: this.getNodeParameter('aliasEmail', i) as string,
								destination: this.getNodeParameter('destinationEmail', i) as string,
							};
						}
						break;

					case 'webHosting':
						if (operation === 'listHostings') {
							endpoint = '/1/hostings';
						} else if (operation === 'getHosting') {
							const hostingId = this.getNodeParameter('hostingId', i) as string;
							endpoint = `/1/hosting/${hostingId}`;
						} else if (operation === 'listSites') {
							const hostingId = this.getNodeParameter('hostingId', i) as string;
							endpoint = `/1/hosting/${hostingId}/sites`;
						} else if (operation === 'getSite') {
							const hostingId = this.getNodeParameter('hostingId', i) as string;
							const siteId = this.getNodeParameter('siteId', i) as string;
							endpoint = `/1/hosting/${hostingId}/site/${siteId}`;
						} else if (operation === 'listDatabases') {
							const hostingId = this.getNodeParameter('hostingId', i) as string;
							endpoint = `/1/hosting/${hostingId}/databases`;
						} else if (operation === 'createDatabase') {
							method = 'POST';
							const hostingId = this.getNodeParameter('hostingId', i) as string;
							endpoint = `/1/hosting/${hostingId}/databases`;
							body = {
								name: this.getNodeParameter('databaseName', i) as string,
								type: this.getNodeParameter('databaseType', i, 'mysql') as string,
							};
						}
						break;

					case 'kdrive':
						if (operation === 'listDrives') {
							endpoint = '/2/drive';
						} else if (operation === 'getDrive') {
							const driveId = this.getNodeParameter('driveId', i) as string;
							endpoint = `/2/drive/${driveId}`;
						} else if (operation === 'listFiles') {
							const driveId = this.getNodeParameter('driveId', i) as string;
							const directoryId = this.getNodeParameter('directoryId', i, '1') as string;
							endpoint = `/2/drive/${driveId}/files/${directoryId}/children`;
						} else if (operation === 'getFileInfo') {
							const driveId = this.getNodeParameter('driveId', i) as string;
							const fileId = this.getNodeParameter('fileId', i) as string;
							endpoint = `/2/drive/${driveId}/files/${fileId}`;
						} else if (operation === 'createFolder') {
							method = 'POST';
							const driveId = this.getNodeParameter('driveId', i) as string;
							const directoryId = this.getNodeParameter('directoryId', i, '1') as string;
							endpoint = `/2/drive/${driveId}/files/${directoryId}/directory`;
							body = {
								name: this.getNodeParameter('folderName', i) as string,
							};
						} else if (operation === 'deleteFile') {
							method = 'DELETE';
							const driveId = this.getNodeParameter('driveId', i) as string;
							const fileId = this.getNodeParameter('fileId', i) as string;
							endpoint = `/2/drive/${driveId}/files/${fileId}`;
						} else if (operation === 'shareFile') {
							method = 'POST';
							const driveId = this.getNodeParameter('driveId', i) as string;
							const fileId = this.getNodeParameter('fileId', i) as string;
							endpoint = `/2/drive/${driveId}/files/${fileId}/share`;
						}
						break;

					case 'publicCloud':
						if (operation === 'listProjects') {
							endpoint = '/1/public-cloud/projects';
						} else if (operation === 'listInstances') {
							const projectId = this.getNodeParameter('projectId', i) as string;
							endpoint = `/1/public-cloud/${projectId}/instances`;
						} else if (operation === 'getInstance') {
							const projectId = this.getNodeParameter('projectId', i) as string;
							const instanceId = this.getNodeParameter('instanceId', i) as string;
							endpoint = `/1/public-cloud/${projectId}/instances/${instanceId}`;
						} else if (operation === 'startInstance') {
							method = 'POST';
							const projectId = this.getNodeParameter('projectId', i) as string;
							const instanceId = this.getNodeParameter('instanceId', i) as string;
							endpoint = `/1/public-cloud/${projectId}/instances/${instanceId}/start`;
						} else if (operation === 'stopInstance') {
							method = 'POST';
							const projectId = this.getNodeParameter('projectId', i) as string;
							const instanceId = this.getNodeParameter('instanceId', i) as string;
							endpoint = `/1/public-cloud/${projectId}/instances/${instanceId}/stop`;
						} else if (operation === 'rebootInstance') {
							method = 'POST';
							const projectId = this.getNodeParameter('projectId', i) as string;
							const instanceId = this.getNodeParameter('instanceId', i) as string;
							endpoint = `/1/public-cloud/${projectId}/instances/${instanceId}/reboot`;
						}
						break;

					case 'swissBackup':
						if (operation === 'listBackupAccounts') {
							endpoint = '/1/swiss-backup/accounts';
						} else if (operation === 'getBackupAccount') {
							const backupAccountId = this.getNodeParameter('backupAccountId', i) as string;
							endpoint = `/1/swiss-backup/${backupAccountId}`;
						} else if (operation === 'listDevices') {
							const backupAccountId = this.getNodeParameter('backupAccountId', i) as string;
							endpoint = `/1/swiss-backup/${backupAccountId}/devices`;
						} else if (operation === 'getUsage') {
							const backupAccountId = this.getNodeParameter('backupAccountId', i) as string;
							endpoint = `/1/swiss-backup/${backupAccountId}/usage`;
						}
						break;

					case 'newsletter':
						if (operation === 'listNewsletters') {
							endpoint = '/1/newsletters';
						} else if (operation === 'listCampaigns') {
							const newsletterId = this.getNodeParameter('newsletterId', i) as string;
							endpoint = `/1/newsletter/${newsletterId}/campaigns`;
						} else if (operation === 'createCampaign') {
							method = 'POST';
							const newsletterId = this.getNodeParameter('newsletterId', i) as string;
							endpoint = `/1/newsletter/${newsletterId}/campaigns`;
							body = {
								name: this.getNodeParameter('campaignName', i) as string,
								subject: this.getNodeParameter('subject', i) as string,
								html_content: this.getNodeParameter('htmlContent', i, '') as string,
							};
						} else if (operation === 'sendCampaign') {
							method = 'POST';
							const campaignId = this.getNodeParameter('campaignId', i) as string;
							endpoint = `/1/newsletter/campaign/${campaignId}/send`;
						} else if (operation === 'listContacts') {
							const newsletterId = this.getNodeParameter('newsletterId', i) as string;
							endpoint = `/1/newsletter/${newsletterId}/contacts`;
						} else if (operation === 'addContact') {
							method = 'POST';
							const newsletterId = this.getNodeParameter('newsletterId', i) as string;
							endpoint = `/1/newsletter/${newsletterId}/contacts`;
							body = {
								email: this.getNodeParameter('contactEmail', i) as string,
								name: this.getNodeParameter('contactName', i, '') as string,
							};
						}
						break;

					case 'team':
						if (operation === 'listWorkspaces') {
							endpoint = '/1/workspaces';
						} else if (operation === 'getWorkspace') {
							const workspaceId = this.getNodeParameter('workspaceId', i) as string;
							endpoint = `/1/workspace/${workspaceId}`;
						} else if (operation === 'listMembers') {
							const workspaceId = this.getNodeParameter('workspaceId', i) as string;
							endpoint = `/1/workspace/${workspaceId}/members`;
						} else if (operation === 'inviteMember') {
							method = 'POST';
							const workspaceId = this.getNodeParameter('workspaceId', i) as string;
							endpoint = `/1/workspace/${workspaceId}/invite`;
							body = {
								email: this.getNodeParameter('memberEmail', i) as string,
								role: this.getNodeParameter('role', i, 'user') as string,
							};
						}
						break;

					case 'aiTools':
						const aiProductId = this.getNodeParameter('aiProductId', i) as string;
						const aiOptions = this.getNodeParameter('aiOptions', i, {}) as IDataObject;

						if (operation === 'chatCompletion') {
							method = 'POST';
							endpoint = `/1/ai/${aiProductId}/openai/chat/completions`;
							const model = this.getNodeParameter('aiModel', i) as string;
							const messagesInput = this.getNodeParameter('messages', i) as any;
							
							const messages = messagesInput.message?.map((msg: any) => ({
								role: msg.role,
								content: msg.content,
							})) || [];

							body = {
								model,
								messages,
							};

							// Add optional parameters
							if (aiOptions.max_tokens) body.max_tokens = aiOptions.max_tokens;
							if (aiOptions.temperature !== undefined) body.temperature = aiOptions.temperature;
							if (aiOptions.profile_type) body.profile_type = aiOptions.profile_type;
							if (aiOptions.stream !== undefined) body.stream = aiOptions.stream;

						} else if (operation === 'generateImage') {
							method = 'POST';
							endpoint = `/1/ai/${aiProductId}/openai/images/generations`;
							const model = this.getNodeParameter('imageModel', i) as string;
							const prompt = this.getNodeParameter('imagePrompt', i) as string;

							body = {
								model,
								prompt,
							};

							// Add optional parameters
							if (aiOptions.n) body.n = aiOptions.n;
							if (aiOptions.size) body.size = aiOptions.size;
							if (aiOptions.quality) body.quality = aiOptions.quality;
							if (aiOptions.style) body.style = aiOptions.style;
							if (aiOptions.negative_prompt) body.negative_prompt = aiOptions.negative_prompt;
							body.response_format = 'b64_json'; // Default to base64 for n8n

						} else if (operation === 'photoMaker') {
							method = 'POST';
							endpoint = `/1/ai/${aiProductId}/images/generations/photo_maker`;
							const prompt = this.getNodeParameter('imagePrompt', i) as string;
							const images = this.getNodeParameter('inputImages', i) as string;

							// Parse images if it's a JSON string array
							let imageArray: string[] = [];
							try {
								imageArray = typeof images === 'string' ? JSON.parse(images) : images;
							} catch {
								imageArray = [images]; // Treat as single image if not JSON
							}

							body = {
								prompt,
								images: imageArray,
							};

							// Add optional parameters
							if (aiOptions.n) body.n = aiOptions.n;
							if (aiOptions.size) body.size = aiOptions.size;
							if (aiOptions.quality) body.quality = aiOptions.quality;
							if (aiOptions.style) body.style = aiOptions.style;
							if (aiOptions.negative_prompt) body.negative_prompt = aiOptions.negative_prompt;
							body.response_format = 'b64_json';

						} else if (operation === 'speechToText') {
							method = 'POST';
							endpoint = `/1/ai/${aiProductId}/openai/audio/transcriptions`;
							const model = this.getNodeParameter('transcriptionModel', i) as string;
							const file = this.getNodeParameter('audioFile', i) as string;

							body = {
								model,
								file,
							};

							// Add optional parameters
							if (aiOptions.language) body.language = aiOptions.language;
							if (aiOptions.response_format) body.response_format = aiOptions.response_format;
						}
						break;

					case 'vod':
						if (operation === 'listChannels') {
							endpoint = '/1/vod/channel';
						} else if (operation === 'getChannel') {
							const channelId = this.getNodeParameter('vodChannelId', i) as string;
							endpoint = `/1/vod/channel/${channelId}`;
						} else if (operation === 'listVideos') {
							const channelId = this.getNodeParameter('vodChannelId', i) as string;
							endpoint = `/1/vod/channel/${channelId}/media`;
						} else if (operation === 'getVideo') {
							const channelId = this.getNodeParameter('vodChannelId', i) as string;
							const videoId = this.getNodeParameter('vodVideoId', i) as string;
							endpoint = `/1/vod/channel/${channelId}/media/${videoId}`;
						} else if (operation === 'uploadVideo') {
							method = 'POST';
							const channelId = this.getNodeParameter('vodChannelId', i) as string;
							endpoint = `/1/vod/channel/${channelId}/upload`;
							const uploadMethod = this.getNodeParameter('uploadMethod', i) as string;
							const videoName = this.getNodeParameter('videoName', i) as string;
							const vodOptions = this.getNodeParameter('vodOptions', i, {}) as IDataObject;

							body = {
								name: videoName,
							};

							if (uploadMethod === 'file') {
								const file = this.getNodeParameter('videoFile', i) as string;
								body.file = file;
							} else {
								const url = this.getNodeParameter('videoUrl', i) as string;
								body.url = url;
							}

							const folderId = this.getNodeParameter('vodFolderId', i, '') as string;
							if (folderId) {
								body.folder = folderId;
							}

							if (vodOptions.auto_publish) body.auto_publish = vodOptions.auto_publish;
							if (vodOptions.auto_validate) body.auto_validate = vodOptions.auto_validate;

						} else if (operation === 'updateVideo') {
							method = 'PUT';
							const channelId = this.getNodeParameter('vodChannelId', i) as string;
							const videoId = this.getNodeParameter('vodVideoId', i) as string;
							endpoint = `/1/vod/channel/${channelId}/media/${videoId}`;
							const updateFields = this.getNodeParameter('updateFields', i, {}) as IDataObject;

							body = {};
							if (updateFields.name) body.name = updateFields.name;
							if (updateFields.description) body.description = updateFields.description;
							if (updateFields.published !== undefined) body.published = updateFields.published;
							if (updateFields.validated !== undefined) body.validated = updateFields.validated;
							if (updateFields.tags) body.tags = updateFields.tags;

						} else if (operation === 'deleteVideo') {
							method = 'DELETE';
							const channelId = this.getNodeParameter('vodChannelId', i) as string;
							const videoId = this.getNodeParameter('vodVideoId', i) as string;
							endpoint = `/1/vod/channel/${channelId}/media/${videoId}`;
						} else if (operation === 'listFolders') {
							const channelId = this.getNodeParameter('vodChannelId', i) as string;
							endpoint = `/1/vod/channel/${channelId}/folder`;
						} else if (operation === 'createFolder') {
							method = 'POST';
							const channelId = this.getNodeParameter('vodChannelId', i) as string;
							endpoint = `/1/vod/channel/${channelId}/folder`;
							const folderName = this.getNodeParameter('vodFolderName', i) as string;
							const vodOptions = this.getNodeParameter('vodOptions', i, {}) as IDataObject;

							body = {
								name: folderName,
							};

							if (vodOptions.auto_publish) body.auto_publish = vodOptions.auto_publish;
							if (vodOptions.auto_validate) body.auto_validate = vodOptions.auto_validate;

						} else if (operation === 'listPlayers') {
							const channelId = this.getNodeParameter('vodChannelId', i) as string;
							endpoint = `/1/vod/channel/${channelId}/player`;
						} else if (operation === 'createPlayer') {
							method = 'POST';
							const channelId = this.getNodeParameter('vodChannelId', i) as string;
							endpoint = `/1/vod/channel/${channelId}/player`;
							const playerName = this.getNodeParameter('playerName', i) as string;

							body = {
								name: playerName,
							};
						} else if (operation === 'getStatistics') {
							const channelId = this.getNodeParameter('vodChannelId', i) as string;
							const statisticsType = this.getNodeParameter('statisticsType', i) as string;
							const vodOptions = this.getNodeParameter('vodOptions', i, {}) as IDataObject;

							if (statisticsType === 'channel') {
								endpoint = `/1/vod/channel/${channelId}/statistics/consumption`;
							} else {
								const mediaId = this.getNodeParameter('statisticsMediaId', i) as string;
								endpoint = `/1/vod/channel/${channelId}/statistics/media/${mediaId}`;
							}

							if (vodOptions.date_from) qs.date_from = vodOptions.date_from;
							if (vodOptions.date_to) qs.date_to = vodOptions.date_to;

						} else if (operation === 'listEncodings') {
							const channelId = this.getNodeParameter('vodChannelId', i) as string;
							endpoint = `/1/vod/channel/${channelId}/encoding`;
						}

						// Add VOD-specific options
						if (operation === 'listVideos' || operation === 'getVideo') {
							const vodOptions = this.getNodeParameter('vodOptions', i, {}) as IDataObject;
							if (vodOptions.include_subtitles) qs.include_subtitles = vodOptions.include_subtitles;
							if (vodOptions.include_chapters) qs.include_chapters = vodOptions.include_chapters;
						}
						break;
				}

				// Add additional options if they exist for list operations
				const listOperations = [
					'listOrganizations', 'listAccounts', 'listDomains', 'listDnsRecords',
					'listMailHostings', 'listMailboxes', 'listAliases', 'listHostings',
					'listSites', 'listDatabases', 'listDrives', 'listFiles', 'listProjects',
					'listInstances', 'listBackupAccounts', 'listDevices', 'listNewsletters',
					'listCampaigns', 'listContacts', 'listWorkspaces', 'listMembers'
				];

				if (listOperations.includes(operation)) {
					const additionalOptions = this.getNodeParameter('additionalOptions', i, {}) as IDataObject;
					if (additionalOptions.limit) {
						qs.limit = additionalOptions.limit;
					}
					if (additionalOptions.page) {
						qs.page = additionalOptions.page;
					}
					if (additionalOptions.order_by) {
						qs.order_by = additionalOptions.order_by;
					}
					if (additionalOptions.order) {
						qs.order = additionalOptions.order;
					}
					if (additionalOptions.search) {
						qs.search = additionalOptions.search;
					}
					if (additionalOptions.with_count !== undefined) {
						qs.with_count = additionalOptions.with_count;
					}
				}

				// Make the API request
				const options: any = {
					method,
					uri: `${baseURL}${endpoint}`,
					headers: {
						Authorization: `Bearer ${credentials.accessToken}`,
						'Content-Type': 'application/json',
					},
					json: true,
				};

				if (Object.keys(qs).length) {
					options.qs = qs;
				}

				if (method !== 'GET' && method !== 'DELETE' && Object.keys(body).length) {
					options.body = body;
				}

				const response = await this.helpers.request(options);

				// Handle API response
				if (response.result === 'error') {
					throw new NodeOperationError(
						this.getNode(),
						`Infomaniak API error: ${response.error?.description || response.error?.message || 'Unknown error'}`,
						{ 
							itemIndex: i,
							description: `Error Code: ${response.error?.code || 'N/A'}`,
						}
					);
				}

				// Handle different response structures
				let responseData = response;
				if (response.result === 'success' && response.data !== undefined) {
					responseData = response.data;
				}

				// If response is an array, add each item separately
				if (Array.isArray(responseData)) {
					for (const item of responseData) {
						returnData.push({
							json: item,
							pairedItem: { item: i },
						});
					}
				} else {
					returnData.push({
						json: responseData,
						pairedItem: { item: i },
					});
				}

			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: {
							error: error.message,
						},
						pairedItem: { item: i },
					});
					continue;
				}
				throw error;
			}
		}

		return [returnData];
	}
}