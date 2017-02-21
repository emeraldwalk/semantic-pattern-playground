import { patternManifest } from '../../patterns.manifest';
import { ITab } from '../tabset/tabset.component';

export class PatternDetailComponent {
	public static $inject = ['$sce', '$stateParams', '$templateRequest'];
	constructor(
		private _$sce: ng.ISCEService,
		private _$stateParams: ng.ui.IStateParamsService,
		private _$templateRequest: ng.ITemplateRequestService) {
	}

	public templateSrc: string;
	public lessSrc: string;
	public jsonSrc: string;

	public srcTabs: Array<ITab>;

	public $onInit(): void {
		this.srcTabs = [];

		let keys = Object.keys(patternManifest.map);

		/**
		 * Build a config with .html and .less paths
		 */
		let config;
		keys.some(key => {
			if (patternManifest.map[key].name === this._$stateParams['id']) {
				config = {
					html: patternManifest.map[key].html && `${key}.html`,
					less: patternManifest.map[key].less && `${key}.less`,
					json: patternManifest.map[key].json && `${key}.json`
				};
				return true;
			}
		});

		if (config && config.html) {
			this._$templateRequest(`${config.html}`).then(value => {
				this.templateSrc = this._$sce.trustAsHtml(value);
				this.srcTabs.push({
					label: 'Source',
					content: this.templateSrc
				});
			});
		}

		if (config && config.less) {
			this._$templateRequest(`${config.less}`).then(value => {
				this.lessSrc = this._$sce.trustAsHtml(value);
				this.srcTabs.push({
					label: 'Styles',
					content: this.lessSrc
				});
			});
		}

		if (config && config.json) {
			this._$templateRequest(`${config.json}`).then(value => {
				this.jsonSrc = this._$sce.trustAsHtml(value);
				this.srcTabs.push({
					label: 'Data',
					content: this.jsonSrc
				});
			});
		}
	}
}