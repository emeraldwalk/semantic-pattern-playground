export const templateProvider = [
	'$element',
	($element: ng.IRootElementService) => {
		$element.addClass('sps-tabset');
		return `<div>
			<ul><li class="sps-tabset__tab"
					ng-class="{'sps-tabset__tab--active': tab === $ctrl.selectedTab}"
					ng-click="$ctrl.selectedTab = tab"
					ng-repeat="tab in $ctrl.tabs">{{tab.label}}</li></ul>
			<pre class="sps-tabset__tab-content">{{$ctrl.selectedTab.content}}</pre>
		</div>`;
	}
];