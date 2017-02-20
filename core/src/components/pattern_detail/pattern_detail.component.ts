import { patternManifest } from '../../patterns.manifest';

export class PatternDetailComponent {
	public static $inject = ['$sce', '$stateParams', '$templateRequest'];
	constructor(
		private _$sce: ng.ISCEService,
		private _$stateParams: ng.ui.IStateParamsService,
		private _$templateRequest: ng.ITemplateRequestService) {
	}

	public templateSrc: string;
	public lessSrc: string;

	public $onInit(): void {
		let keys = Object.keys(patternManifest.map);

		/**
		 * Build a config with .html and .less paths
		 */
		let config;
		keys.some(key => {
			if (patternManifest.map[key].name === this._$stateParams['id']) {
				config = {
					html: patternManifest.map[key].html && `${key}.html`,
					less: patternManifest.map[key].less && `${key}.less`
				};
				return true;
			}
		});

		if (config && config.html) {
			this._$templateRequest(`${config.html}`).then(value => {
				this.templateSrc = this._$sce.trustAsHtml(value);
			});
		}

		if (config && config.less) {
			this._$templateRequest(`${config.less}`).then(value => {
				this.lessSrc = this._$sce.trustAsHtml(value);
			});
		}
	}
}