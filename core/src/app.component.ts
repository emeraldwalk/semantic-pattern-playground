import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';

import { appModule } from './app.module';
import { ITreeNode, patternManifest } from '../src/patterns.manifest';

/**
 * Primary app component
 */
export class AppComponent {
	public static $inject = ['$stateParams', '$element'];

	constructor(
		private _$stateParams: ng.ui.IStateParamsService,
		private _$element: ng.IRootElementService) {
	}

	public patterns: Array<ITreeNode>;

	public $onInit(): void {
		this.patterns = patternManifest.tree.children;
	}

	public get currentPatternId(): string {
		return this._$stateParams['id'];
	}

	public patternIds(patterns: Array<{name: string}>) {
		// unique patternIds
		let names = patterns
			.map(pattern => pattern.name.replace(/\.[^\.]+$/, ''))
			.filter((name, i, array) => i === array.indexOf(name));

		return names;
	}

	public displayName(machineName: string): string {
		return machineName
			.replace(/^\d+_/, '') // leading digits + underscore
			.replace(/(^|-)(.)/g, (match, dash, char: string) => `${dash && ' '}${char.toUpperCase()}`);
	}
}