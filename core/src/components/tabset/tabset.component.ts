export interface ITab {
	label: string;
	content: string;
}

export class TabsetComponent {
	public tabs: Array<ITab>;

	private _selectedTab: ITab;
	public get selectedTab(): ITab {
		return this._selectedTab || this.tabs && this.tabs[0];
	}
	public set selectedTab(value: ITab) {
		this._selectedTab = value;
	}
}