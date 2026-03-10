const { createLogger, format, transports } = require('winston');
const { MongoDB } = require('winston-mongodb');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'app.log' }),
    new MongoDB({ db: 'mongodb://localhost/winston_logs', collection: 'logs' }),
  ],
});

module.exports = logger;
