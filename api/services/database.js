const mongoose = require('mongoose');
const config = require('../constants/constants');
const mongoConfig = config.mDb;


mongoose.Promise = global.Promise;
mongoose.connect(mongoConfig.host + mongoConfig.db, {useNewUrlParser: true});


module.exports = {mongoose:mongoose};