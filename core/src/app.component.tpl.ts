export const templateProvider = [
	'$element',
	($element: ng.IRootElementService) => {
		$element.addClass('sps-app');
		return `<div>
			<section class="sps-masthead">
				<span class="sps-masthead__title">Semantic Pattern Sandbox</span>
			</section>
			<nav class="sps-navbar">
				<ul class="sps-navbar__categories">
					<li class="sps-navbar__category"
						ng-repeat="category in $ctrl.patterns">{{$ctrl.displayName(category.name)}}
						<ul class="sps-navbar__category-dropdown"><li
							ng-repeat="patternId in $ctrl.patternIds(category.children)">
							<a class="sps-navbar__nav-link"
							ui-sref-active="sps-navbar__nav-link--active"
							ui-sref="app.pattern({id: patternId})">{{$ctrl.displayName(patternId)}}</a>
						</li></ul>
					</li>
				</ul>
			</nav>
			<div class="sps-main">
				<h1 class="sps-main__header-primary">{{$ctrl.displayName($ctrl.currentPatternId)}}</h1>
				<ui-view></ui-view>
			</div>
			<div class="sps-footer">
				&copy; Emeraldwalk 2017
			</div>
		</div>`;
	}];