declare function require(path: string);
require("../src/patterns.manifest.less");

import * as angular from 'angular';
import { patternManifest } from '../src/patterns.manifest';

export const appModule = angular.module('patternSandbox', []);

/**
 * Convert a dashed-string to camelCase.
 */
function dashToCamelCase(text: string) {
	return text.replace(/(-)(.)/g, (match, dash, char: string) => char.toUpperCase());
}

/**
 * Filter out configs by extension.
 */
function getConfigs(ext: string): Array<{ name: string, url: string, hasData: boolean }> {
	return Object
		.keys(patternManifest.map)
		.filter(key => patternManifest.map[key].ext.indexOf(ext) > -1)
		.map(key => ({
			name: patternManifest.map[key].name,
			url: `${key}${ext}`,
			hasData: patternManifest.map[key].ext.indexOf('.json') > -1
		}));
}

getConfigs('.html').forEach(config => {
	appModule.component(dashToCamelCase(config.name), {
		templateUrl: ($element: ng.IRootElementService) => {
			$element.addClass(`c-${config.name}`);
			return config.url;
		},
		controller: class {
			public static $inject = ['$http', '$scope'];
			constructor(
				private _$http: ng.IHttpService,
				private _$scope: ng.IScope) {
			}

			public $onInit(): void {
				if (config.hasData) {
					this._$http.get(config.url.replace(/\.html$/, '.json'))
						.then(content => {
							for(let key in content.data) {
								this._$scope[key] = content.data[key];
							}
						});
				}
			}
		}
	});
});