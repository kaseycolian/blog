const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: [
		'./src/main/resources/static/js/mainViewCalls.js'
		// './src/main/resources/static/js/test.js'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/main/resources/static/survivingCodingBootcamp.html'
		})
	],
	devServer: {
		contentBase: './dist'
	},
}