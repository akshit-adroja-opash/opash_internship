const mongoose = require('mongoose');
const Transport = require('winston-transport');

export class MongoDBTransport extends Transport {
  constructor(opts) {
    super(opts);
    this.connection = mongoose.createConnection({
        host: 'localhost',
        port: 27017,
        dbName: 'winston_logs',
        pass: 'admin123',
    })


   
  }

  log(info, callback) {
    setImmediate(() => {
      this.emit('logged', info);
    });
    const { level, message, timestamp } = info;
    const logEntry = {
      level,
      message,
      timestamp,
    };
    this.connection.collection('logs').insertOne(logEntry, (err) => {
      if (err) {
        console.error('Error inserting log entry into MongoDB:', err);
      }    });  


    callback();
  }
};