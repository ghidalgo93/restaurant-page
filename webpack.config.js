const path = require('path');

module.exports = {
	mode: 'development', 
	entry: './src/index.js',
	devtool: 'source-map', 
	devServer: {
		contentBase: './dist'
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
