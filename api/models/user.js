var database = require('../services/database');
var mongoose = database.mongoose; 

var schema = mongoose.Schema;

/* schema for user */
var userSchema = new schema({
	password: String,
	email: {
		type: String,
		unique: true
	},
	name: {
		type: String,
		lowercase: true,
		trim: true
	},	
	status: {
		type: Boolean,
		default: true
	},
	currentBalance: Number,
	accountNumber: Number,
	timeStamp: Number
},
{ 
	versionKey: false 
});

var userModel = mongoose.model("users", userSchema);
module.exports = userModel;