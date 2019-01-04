var express = require('express');
var router = express.Router();

var Logs = require('../models/logs');
var config = require('../constants/constants');
var data = config.common;
var errors = config.errors;
var success = config.success;

router.get('/:email', function(req, res, next) {
  let userInfo = req.params;
  let query = req.query;
  let filter = {
  	email: userInfo.email
  }

  if(query.type !== 'all')
  	filter.logType = query.type;

  if(query.from && query.to){
    filter.timeStamp = {
      $gt: Math.round(new Date(query.from).getTime()),
      $lt: Math.round(new Date(query.to).getTime())
    }
  }console.log(filter);

  Logs.find(filter)
	.select({_id: 0})
	.limit(parseInt(query.limit))
  .skip(parseInt(query.limit) * parseInt(query.page))
  .sort({
  	timeStamp: 'desc'
  })
	.exec(function(err, response){console.log(err);
		if(err)
			res.status(400).json({message: errors.SOMETHING_WENT_WRONG, type: "error"});
		else if(response == null){
			res.status(400).json({message: errors.SOMETHING_WENT_WRONG, type: "error"});
		} else{
			res.status(200).json({message: success.REDIRECTING, type: "success", data: response});
		}
	});
});

module.exports = router;
