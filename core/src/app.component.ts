import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';

import { appModule } from './app.module';
import { template } from './app.component.tpl';
import { ITreeNode, patternManifest } from '../src/patterns.manifest';

/**
 * Primary app component
 */
export class AppComponent {
	public static template = template;
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

	public patternId(fileName: string): string {
		return fileName.replace(/\.[^\.]+$/, '');
	}
}