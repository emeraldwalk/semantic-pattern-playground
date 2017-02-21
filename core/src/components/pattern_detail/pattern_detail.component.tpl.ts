import { patternIdToSelector } from '../pattern/pattern.component';

/**
 * Build a template for a pattern detail view.
 */
export const templateProvider = [
	'$stateParams',
	'$element',
	($stateParams: ng.ui.IStateParamsService, $element: ng.IRootElementService): string => {

	$element.addClass('sps-pattern-detail');

	let patternId = patternIdToSelector($stateParams['id']);
	return `<h2 ng-if="$ctrl.templateSrc" class="sps-pattern-detail__header-code">Pattern</h2>
		<div ng-if="$ctrl.templateSrc" class="sps-pattern-detail__pattern"><${patternId}></${patternId}></div>

		<sps-tabset class="sps-pattern-detail__source" tabs="$ctrl.srcTabs"></sps-tabset>`;
	}];