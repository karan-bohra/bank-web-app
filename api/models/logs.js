var database = require('../services/database');
var mongoose = database.mongoose; 

var schema = mongoose.Schema;

var logSchema = new schema({
	email: {
		type: String,
		lowercase: true,
		trim: true
	},
	logType: {
		type: String,
		lowercase: true,
		trim: true
	},
	amount: Number,
	timeStamp: Number
},
{ 
	versionKey: false 
});

var logModel = mongoose.model("logs", logSchema);
module.exports = logModel;