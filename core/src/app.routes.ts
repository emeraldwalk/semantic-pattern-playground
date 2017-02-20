import { patternManifest } from './patterns.manifest';

export const states = [
	{
		name: 'app',
		url: '',
		abstract: true,
		template: '<app></app>'
	},
	{
		name: 'app.pattern',
		url: '/pattern/:id',
		template: '<pattern-detail></pattern-detail>'
	}
];