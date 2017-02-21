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
		if(match[2] === 'json') {
			pathMap[key][match[2]] = JSON.parse(String(fs.readFileSync(pop)));
		}
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
			json?: Object,
			less?: boolean
		}
	},
	tree: ITreeNode;
}
export const patternManifest: IPatternManifest = ${asJson};`);

// let distCopy = [
// 	{ from: 'node_modules/angular/angular.js', to: 'docs/dist/angular.js' },
// 	{ from: 'node_modules/angular-sanitize/angular-sanitize.js', to: 'docs/dist/angular-sanitize.js' },
// 	{ from: 'node_modules/angular-ui-router/release/angular-ui-router.js', to: 'docs/dist/angular-ui-router.js' }
// ];

// for(let map of distCopy) {
// 	let from = fs.readFileSync(path.resolve(__dirname, '..', map.from));
// 	fs.writeFileSync(
// 		path.resolve(__dirname, '..', map.to),
// 		from);
// }

console.log('done.');
process.exit();