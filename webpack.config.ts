import { Configuration } from 'webpack';
import { execSync } from 'child_process';
import * as path from 'path';

declare var module;
declare var __dirname;

let config: Configuration = {
	entry: './core/src/app.bootstrap',
	resolve: {
		extensions: ['', '.ts']
	},
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loader: 'awesome-typescript-loader'
			},
			{
				test: /\.less$/,
				loader: "style!css!less",
				exclude: [path.resolve(__dirname, 'core/build')]
			}
		]
	},
	output: {
		path: `./core/dist`,
		filename: 'bundle.js'
	},
	externals: {
		'angular': 'angular',
		'angular-ui-router': 'angular-ui-router'
	}
}

module.exports = config;