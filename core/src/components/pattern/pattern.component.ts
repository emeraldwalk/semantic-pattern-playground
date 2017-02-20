import { ITreeNode, patternManifest } from '../../../src/patterns.manifest';

/**
 * Keys for any configs with .html
 */
let componentKeys = Object
	.keys(patternManifest.map)
	.filter(key => patternManifest.map[key].html);

export const patternComponentMap = {};

for (let key of componentKeys) {
	let config = patternManifest.map[key];
	let selector = patternIdToSelector(config.name);
	let componentName = dashToCamelCase(selector);

	patternComponentMap[componentName] = {
		templateUrl: ($element: ng.IRootElementService) => {
			$element.addClass(`c-${selector}`);
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
	};
}

/**
 * Convert a pattern id to a valid component selector.
 */
export function patternIdToSelector(id: string): string {
	return id.replace(/^\d+_?/, '');
}

/**
 * Convert a dashed-string to camelCase.
 */
export function dashToCamelCase(text: string): string {
	return text.replace(/(-)(.)/g, (match, dash, char: string) => char.toUpperCase());
}