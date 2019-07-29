const express = require('express');
const morgan = require('morgan');
const path = require('path');
const config = require('config');
const logger = require('./logger');

const initialize = app => {
	const middlewares = [
		morgan('dev', { stream: logger.stream }),
		express.json({ extended: false })
	];

	app.use(middlewares);

	// define Routes

	// app.use('/api/users', users);

	// serve static assests in production
	if (config.util.getEnv('NODE_ENV') === 'production') {
		app.use(express.static('production'));
		app.get('*', (req, res) => {
			res.sendFile(path.resolve(__dirname, 'production', 'index.html'));
		});
	}
};

module.exports = initialize;
