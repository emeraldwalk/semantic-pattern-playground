import { patternManifest } from './patterns.manifest';

export const states = [
	{
		name: 'app',
		url: '',
		abstract: true,
		template: '<sps-app></sps-app>'
	},
	{
		name: 'app.default',
		url: '',
	},
	{
		name: 'app.pattern',
		url: '/pattern/:id',
		template: '<sps-pattern-detail></sps-pattern-detail>'
	}
];