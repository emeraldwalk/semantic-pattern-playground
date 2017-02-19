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
		templateProvider: [
			'$stateParams',
			($stateParams: ng.ui.IStateParamsService) => {
				return `<div class="sps-pattern__render"><${$stateParams['id']}></${$stateParams['id']}></div>
				<pre class="sps-pattern__html">{{$ctrl.templateSrc}}</pre>
				<pre class="sps-pattern__less">{{$ctrl.lessSrc}}</pre>`;
			}],
		controllerAs: '$ctrl',
		controller: class {
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

				if(config && config.html) {
					this._$templateRequest(`${config.html}`).then(value => {
						this.templateSrc = this._$sce.trustAsHtml(value);
					});
				}

				if(config && config.less) {
					this._$templateRequest(`${config.less}`).then(value => {
						this.lessSrc = this._$sce.trustAsHtml(value);
					});
				}
			}
		}
	}
];