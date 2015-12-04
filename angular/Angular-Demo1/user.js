var model = require("./model/user.js");

module.exports=function(req,res,next) {
	var action = req.query.action;
	var result = null;
	if(action=='get') {
		result = model.getUsers(req.query.filter);
	}
	else if(action=='save') {
		result = model.addUser(req.body);
	}
	else if(action=='login') {
		result = model.login(req.body);
	}

	res.json(result);
	res.end();
}