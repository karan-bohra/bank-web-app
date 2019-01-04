var express = require('express');
var router = express.Router();

var User = require('../models/user');
var config = require('../constants/constants');
var data = config.common;
var errors = config.errors;
var success = config.success;

router.get('/:email', function(req, res, next) {
  let userInfo = req.params;

  User.find({email: userInfo.email, status: true})
	.select({password: 0})
	.exec(function(err, response){
		if(err)
			res.status(400).json({message: errors.SOMETHING_WENT_WRONG, type: "error"});

		if(response == null){
			res.status(400).json({message: errors.SOMETHING_WENT_WRONG, type: "error"});
		} else{
			res.status(200).json({message: success.REDIRECTING, type: "success", data: response});
		}
	});
});

module.exports = router;
