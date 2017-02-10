module.exports =function (mongoose) {
	'use strict'
	const User = require(__dirname + '/../models/user.js')(mongoose)
	function Database() {
		this.user = User
	}
	return new Database()
};
