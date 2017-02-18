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
		for (let item of fs.readdirSync(pop)) {
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
		let match = pop.match(/([^\/\\]+)(\.[^\.]+)$/);
		let key = pop.split('.')[0];
		pathMap[key] = pathMap[key] || {
			name: match[1],
			ext: []
		};
		pathMap[key].ext.push(match[2]);
		delete node.children;

		if(match[2] === '.less') {
			let lessImport = `@import '../../${pop.replace(/\\/g, '/')}';`;
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
	'./core/src/patterns.manifest.ts',
	`export const patternManifest = ${asJson};`);

fs.writeFileSync(
	'./core/src/patterns.manifest.less',
	`${lessImports.join('\n')}`
)

process.exit();