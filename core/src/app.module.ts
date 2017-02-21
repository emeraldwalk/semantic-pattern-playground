import './styles/_bundle';

import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import { AppComponent } from './app.component';
import { templateProvider as appTemplate } from './app.component.tpl';
import { patternComponentMap } from './components/pattern/pattern.component';
import { PatternDetailComponent } from './components/pattern_detail/pattern_detail.component';
import { templateProvider as patternDetailTemplate } from './components/pattern_detail/pattern_detail.component.tpl';
import { states } from './app.routes';

export const appModule = angular.module(
	'patternSandbox',
	['ngSanitize', 'ui.router']);

/**
 * Primary app component.
 */
appModule.component('app', {
	template: appTemplate,
	controller: AppComponent
});

appModule.component('patternDetail', {
	template: patternDetailTemplate,
	controller: PatternDetailComponent
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