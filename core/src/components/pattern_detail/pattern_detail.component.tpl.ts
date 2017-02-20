import { patternIdToSelector } from '../pattern/pattern.component';

/**
 * Build a template for a pattern detail view.
 */
export const templateProvider = [
	'$stateParams',
	($stateParams: ng.ui.IStateParamsService): string => {
	let patternId = patternIdToSelector($stateParams['id']);
	return `<div class="sps-pattern__render"><${patternId}></${patternId}></div>
		<pre ng-if="$ctrl.templateSrc" class="sps-pattern__html">{{$ctrl.templateSrc}}</pre>
		<pre ng-if="$ctrl.lessSrc" class="sps-pattern__less">{{$ctrl.lessSrc}}</pre>`;
	}];