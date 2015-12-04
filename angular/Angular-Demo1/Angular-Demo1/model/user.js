var users = new Array();
users.push({
	userName: 'admin@test.com',
	password: '123456',
	type: 1
});

exports.getUsers = function(userName) {
	if (userName) {
		var results = [];
		for (index in users) {
			var user = users[index];
			if (user.userName.indexOf(userName) >= 0) {
				results.push(user);
			}
		}

		return results;
	} else {
		return users;
	}
};

exports.addUser = function(userObj) {
	//userName, password, type
	users.push(userObj);
	return true;
}

exports.login = function(loginInfo) {
	
	if (loginInfo) {
		for (index in users) {
			var user = users[index];
			if (user.userName == loginInfo.userName && user.password == loginInfo.password) {
				return true;
			}
		}

		return false;
	} else {
		return false;
	}
}