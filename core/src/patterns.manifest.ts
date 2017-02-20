export interface ITreeNode {
	name: string;
	children?: Array<ITreeNode>;
}
export interface IPatternManifest {
	map: {
		[key: string]: {
			name: string,
			html?: boolean,
			json?: boolean,
			less?: boolean
		}
	},
	tree: ITreeNode;
}
export const patternManifest: IPatternManifest = {
	"map": {
		"patterns/0_elements/01_reset": {
			"name": "01_reset",
			"html": true,
			"less": true
		},
		"patterns/0_elements/headers": {
			"name": "headers",
			"html": true
		},
		"patterns/1_components/person-editor": {
			"name": "person-editor",
			"html": true,
			"json": true,
			"less": true
		},
		"patterns/1_components/person-selector": {
			"name": "person-selector",
			"html": true,
			"json": true,
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
						"name": "01_reset.html"
					},
					{
						"name": "01_reset.less"
					},
					{
						"name": "headers.html"
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