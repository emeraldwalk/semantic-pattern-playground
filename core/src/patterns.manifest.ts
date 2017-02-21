export interface ITreeNode {
	name: string;
	children?: Array<ITreeNode>;
}
export interface IPatternManifest {
	map: {
		[key: string]: {
			name: string,
			html?: boolean,
			json?: Object,
			less?: boolean
		}
	},
	tree: ITreeNode;
}
export const patternManifest: IPatternManifest = {
	"map": {
		"patterns/0_elements/01_reset": {
			"name": "01_reset",
			"less": true
		},
		"patterns/0_elements/02_fonts": {
			"name": "02_fonts",
			"less": true
		},
		"patterns/0_elements/headers": {
			"name": "headers",
			"html": true,
			"less": true
		},
		"patterns/1_components/person-editor": {
			"name": "person-editor",
			"html": true,
			"json": {
				"firstName": "John",
				"lastName": "Doe"
			},
			"less": true
		},
		"patterns/1_components/person-list-editor": {
			"name": "person-list-editor",
			"html": true,
			"json": {
				"people": [
					{
						"firstName": "Jeff",
						"lastName": "Smith"
					},
					{
						"firstName": "James",
						"lastName": "Jones"
					}
				]
			}
		},
		"patterns/1_components/person-selector": {
			"name": "person-selector",
			"html": true,
			"json": {
				"selected": "Jane Doe"
			},
			"less": true
		}
	},
	"tree": {
		"name": "patterns",
		"children": [
			{
				"name": "0_elements",
				"children": [
					{
						"name": "01_reset.less"
					},
					{
						"name": "02_fonts.less"
					},
					{
						"name": "headers.html"
					},
					{
						"name": "headers.less"
					}
				]
			},
			{
				"name": "1_components",
				"children": [
					{
						"name": "person-editor.html"
					},
					{
						"name": "person-editor.json"
					},
					{
						"name": "person-editor.less"
					},
					{
						"name": "person-list-editor.html"
					},
					{
						"name": "person-list-editor.json"
					},
					{
						"name": "person-selector.html"
					},
					{
						"name": "person-selector.json"
					},
					{
						"name": "person-selector.less"
					}
				]
			}
		]
	}
};