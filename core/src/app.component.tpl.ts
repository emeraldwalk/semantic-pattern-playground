export const template =
`<div>
	<nav>
		<ul>
			<li ng-repeat="category in $ctrl.patterns">{{category.name}}
				<ul><li ui-sref-active="active"
						ng-repeat="pattern in category.children | filter:'.html'">
						<a ui-sref="app.pattern({id: $ctrl.patternId(pattern.name)})">{{pattern.name}}</a>
				</li></ul>
			</li>
		</ul>
	</nav>
	<h1>{{$ctrl.currentPatternId}}</h1>
	<ui-view></ui-view>
	<!--<pre><ng-bind-html>{{$ctrl.patternHtml}}</ng-bind-html></pre>-->
</div>`;