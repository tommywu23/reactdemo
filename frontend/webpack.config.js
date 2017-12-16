var path = require('path');
var webpack = require('webpack');
require('babel-polyfill');

const PATHS = {
	build: path.join(__dirname, 'build')
};

module.exports = {
	entry: ['babel-polyfill', './src/index.js'], //entry为入口文件，即webpack以这个文件为基础打包成另一个文件，所以entry文件包括了要导入的文件
	//devtool: 'source-map', //打包时同时创建一个新的sourcemap文件，浏览器调试需要定位文件就是依赖于sourcemap
	output: {
		path: PATHS.build,
		publicPath: '/',
		filename: 'assets/bundle.js'
	},
	devServer: {
		historyApiFallback: true,
		inline: true,
		port: 9000
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['env', 'react', 'stage-0']
				}
			},
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
				loader: 'file-loader?name=images/[name].[ext]'
			}
		]
	},
	plugins: [new webpack.NoEmitOnErrorsPlugin()]
};
