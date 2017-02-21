let fs = require('fs');
let path = require('path');

console.log('Building manifests...');

let pathMap = {};
let fileTree = {
	name: 'patterns',
	children: []
};

let stack = ['patterns'];
let nodeStack = [fileTree];

let lessImports = [];

while (stack.length > 0) {
	let pop = stack.shift();
	let node = nodeStack.shift();

	if (fs.statSync(pop).isDirectory()) {
		for (let item of fs.readdirSync(pop).filter(item => item !== '.gitkeep')) {
			stack.push(path.join(pop, item));
			let childNode = {
				name: item,
				children: []
			};
			nodeStack.push(childNode);
			node.children.push(childNode);
		}
	}
	else {
		let match = pop.match(/([^\/\\]+)\.([^\.]+)$/);
		let key = path.relative(process.cwd(), pop);
		key = key.split('.')[0].replace(/\\/g, '/');
		pathMap[key] = pathMap[key] || {
			name: match[1]
		};
		pathMap[key][match[2]] = true;
		delete node.children;

		if(match[2] === 'less') {
			let lessImport = `@import '../../../${key}.less';`;
			lessImports.push(lessImport);
		}
	}
}

let patternManifest = {
	map: pathMap,
	tree: fileTree
};

let asJson = JSON.stringify(patternManifest, undefined, '\t');

fs.writeFileSync(
	path.resolve(__dirname, '..', 'core/src/styles/patterns.manifest.less'),
	`${lessImports.join('\n')}`
)

fs.writeFileSync(
	path.resolve(__dirname, '..', 'core/src/patterns.manifest.ts'),
`export interface ITreeNode {
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
export const patternManifest: IPatternManifest = ${asJson};`);

console.log('done.');
process.exit();