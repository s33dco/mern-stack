const webpackMerge = require('webpack-merge');
const commonConfig = require('./build-utils/webpack.common');
const devConfig = require('./build-utils/webpack.dev');
const prodConfig = require('./build-utils/webpack.prod');
const logger = require('./server/startup/logger');

module.exports = env => {
	let envConfig;
	if (env === 'prod') {
		envConfig = prodConfig;
		logger.info('** building for production');
	} else {
		envConfig = devConfig;
		logger.info('** building for development');
	}
	return webpackMerge(commonConfig, envConfig);
};
