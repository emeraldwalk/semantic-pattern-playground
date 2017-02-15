module.exports = function(input) {
	//console.log('testing template modules...', input, this.request);
	let name = this.request.match(/([^\\\/]+)\.html$/)[1];
	console.log('test: ', name);
	return `module.exports.name = '${name}'; module.exports.content = '${input}';`;
}