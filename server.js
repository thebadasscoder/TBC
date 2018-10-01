const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');

const port = process.env.PORT || 8080;
const compiler = Webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer,{
	stats:{
		colors: true
	}
}); 

const server = new WebpackDevServer(compiler, devServerOptions);


server.listen(port, '127.0.0.1', () => {
    console.log('Starting server on localhost:8080');
})
