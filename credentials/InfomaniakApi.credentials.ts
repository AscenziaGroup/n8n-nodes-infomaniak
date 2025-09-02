import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class InfomaniakApi implements ICredentialType {
	name = 'infomaniakApi';
	displayName = 'Infomaniak API';
	documentationUrl = 'https://developer.infomaniak.com';
	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
			description: 'The access token for the Infomaniak API. You can generate one from your Infomaniak dashboard.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.infomaniak.com',
			url: '/1/profile',
			method: 'GET',
		},
	};
}