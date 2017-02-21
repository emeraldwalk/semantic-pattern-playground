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

	let bindings = {};
	for (let key in config.json || {}) {
		bindings[key] = '<';
	}

	patternComponentMap[componentName] = {
		templateUrl: ($element: ng.IRootElementService) => {
			$element.addClass(`sps-pattern sps-${selector}`);
			return `${key}.html`;
		},
		bindings,
		controller: class {
			public static $inject = ['$scope', '$http'];
			constructor(
				private _$scope: ng.IScope,
				private _$http: ng.IHttpService) {
			}

			public $onInit(): void {
				if(config.json) {
					// refreshing in case the manifest hasn't been rebuilt
					this._$http.get(`${key}.json`).then(content => {
						for (let key in content.data) {
							this._$scope[key] = this[key] || content.data[key];
						}
					});
				}
			}

			public $onChanges(): void {
				for(let key in bindings) {
					this._$scope[key] = this[key];
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