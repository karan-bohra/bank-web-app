var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Logs = require('../models/logs');
var config = require('../constants/constants');
var data = config.common;
var errors = config.errors;
var success = config.success;

router.post('/', function(req, res, next) {
  let depositInfo = req.body;

  User.update(
		{email: depositInfo.email},
		{
			$inc: {
				currentBalance: depositInfo.amount
			}
		},
		function(err, doc){
			if(err){
				res.status(400).json({message: errors.SOMETHING_WENT_WRONG, type: "error"});
				return 0;
			}
			
			let logObject = {
				email: depositInfo.email,
				logType: 'deposit',
				amount: depositInfo.amount,
				timeStamp: new Date().getTime()
			}

			let newLog = new Logs(logObject);

			newLog.save(function(err, response){
				if(err)
					res.status(400).json({message: errors.SOMETHING_WENT_WRONG, type: "error"});
				else
					res.status(200).json({message: success.REDIRECTING, type: "success", data: response});
			});
		}
	);
});

module.exports = router;