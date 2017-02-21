import './styles/_bundle';

import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import { AppComponent } from './app.component';
import { templateProvider as appTemplate } from './app.component.tpl';
import { patternComponentMap } from './components/pattern/pattern.component';
import { PatternDetailComponent } from './components/pattern_detail/pattern_detail.component';
import { templateProvider as patternDetailTemplate } from './components/pattern_detail/pattern_detail.component.tpl';
import { TabsetComponent } from './components/tabset/tabset.component';
import { templateProvider as tabsetTemplate } from './components/tabset/tabset.component.tpl';
import { states } from './app.routes';

export const appModule = angular.module(
	'patternSandbox',
	['ngSanitize', 'ui.router']);

/**
 * Primary app component.
 */
appModule.component('spsApp', {
	template: appTemplate,
	controller: AppComponent
});

appModule.component('spsPatternDetail', {
	template: patternDetailTemplate,
	controller: PatternDetailComponent
});

appModule.component('spsTabset', {
	template: tabsetTemplate,
	bindings: {
		tabs: '<'
	},
	controller: TabsetComponent
});

/**
 * Pattern components.
 */
for(let key in patternComponentMap) {
	appModule.component(key, patternComponentMap[key]);
}

/**
 * Routing
 */
appModule.config([
	'$stateProvider',
	($stateProvider: ng.ui.IStateProvider) => {
		states.forEach(state => $stateProvider.state(state));
	}]);