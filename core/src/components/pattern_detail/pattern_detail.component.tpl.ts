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
		<div ng-if="$ctrl.templateSrc" class="sps-pattern__render"><${patternId}></${patternId}></div>

		<h2 ng-if="$ctrl.templateSrc" class="sps-pattern-detail__header-code">Source</h2>
		<pre ng-if="$ctrl.templateSrc" class="sps-pattern__html">{{$ctrl.templateSrc}}</pre>

		<h2 ng-if="$ctrl.lessSrc" class="sps-pattern-detail__header-code">Styles</h2>
		<pre ng-if="$ctrl.lessSrc" class="sps-pattern__less">{{$ctrl.lessSrc}}</pre>`;
	}];