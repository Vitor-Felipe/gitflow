const moment = require('moment');
moment.locale('pt-BR'); 

exports.now = moment().format('YYYY-MM-DD HH:mm:ss');
exports.today = moment().format('YYYY-MM-DD');

