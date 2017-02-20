export const template =
`<div>
	<nav class="sps-navbar">
		<ul class="sps-navbar__categories">
			<li class="sps-navbar__category"
				ng-repeat="category in $ctrl.patterns">{{$ctrl.displayName(category.name)}}
				<ul class="sps-navbar__category-dropdown"><li ui-sref-active="active"
						ng-repeat="pattern in category.children | filter:'.html'">
						<a ui-sref="app.pattern({id: $ctrl.patternId(pattern.name)})">{{$ctrl.displayName(pattern.name)}}</a>
				</li></ul>
			</li>
		</ul>
	</nav>
	<h1>{{$ctrl.currentPatternId}}</h1>
	<ui-view></ui-view>
</div>`;