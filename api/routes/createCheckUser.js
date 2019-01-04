var express = require('express');
var router = express.Router();

var User = require('../models/user');
var config = require('../constants/constants');
var data = config.common;
var errors = config.errors;
var success = config.success;

router.post('/', function(req, res, next) {
  let userInfo = req.body;

  User.findOne({email: userInfo.email, status: true})
	.select({_id: 0})
	.exec((err, response) => {
		if(err)
			res.status(400).json({message: errors.SOMETHING_WENT_WRONG, type: "error"});

		if(response == null){
			let min = 1111111111111111;
  		let max = 9999999999999999

  		userInfo.accountBalance = 0;
  		userInfo.accountNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  		userInfo.status = true;
  		userInfo.timeStamp = new Date().getTime();

  		let newUser = new User(userInfo);

			newUser.save(function(err, response){
				if(err)
					res.status(400).json({message: errors.SOMETHING_WENT_WRONG, type: "error"});
				else
					res.status(200).json({message: success.REDIRECTING, type: "success"});
			});
		} else{
			res.status(200).json({message: success.LOGED_IN, type: "success"});
		}
	});
});

module.exports = router;