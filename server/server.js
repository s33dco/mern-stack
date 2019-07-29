const config = require('config');
const app = require('./app');
const logger = require('./startup/logger');

const port = process.env.PORT || config.get('backend_port');

app.listen(port, () => {
	logger.info(`** listening on port ${port}...`);
});
