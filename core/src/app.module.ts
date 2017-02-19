declare function require(path: string);
require("../src/app.less");
require("../src/patterns.manifest.less");

import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import { ITreeNode, patternManifest } from '../src/patterns.manifest';
import { AppComponent } from './app.component';
import { states } from './app.routes';

export const appModule = angular.module('patternSandbox', ['ngSanitize', 'ui.router']);

appModule.component('app', {
	template: AppComponent.template,
	controller: AppComponent
});

/**
 * Routing
 */
appModule.config([
	'$stateProvider',
	($stateProvider: ng.ui.IStateProvider) => {
		states.forEach(state => $stateProvider.state(state));
	}]);

/**
 * Convert a dashed-string to camelCase.
 */
function dashToCamelCase(text: string) {
	return text.replace(/(-)(.)/g, (match, dash, char: string) => char.toUpperCase());
}

/**
 * Keys for any configs with .html
 */
let componentKeys = Object
	.keys(patternManifest.map)
	.filter(key => patternManifest.map[key].html);

for (let key of componentKeys) {
	let config = patternManifest.map[key];
	appModule.component(dashToCamelCase(config.name), {
		templateUrl: ($element: ng.IRootElementService) => {
			$element.addClass(`c-${config.name}`);
			return `${key}.html`;
		},
		controller: class {
			public static $inject = ['$http', '$scope'];
			constructor(
				private _$http: ng.IHttpService,
				private _$scope: ng.IScope) {
			}

			public $onInit(): void {
				if (config.json) {
					this._$http.get(`${key}.json`)
						.then(content => {
							for (let key in content.data) {
								this._$scope[key] = content.data[key];
							}
						});
				}
			}
		}
	});
}