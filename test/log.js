
var logger = require('bragi');
var bragi_stderr = require('../index.js');

logger.transports.empty();
logger.transports.add( new bragi_stderr({}) );



logger.log('groupname', 'Hello world');
