require('./server');
const sequelize = require('./libraries/sequelize');

sequelize
	.sync()
	.catch(() => {})
	.finally(() => process.exit(0));
