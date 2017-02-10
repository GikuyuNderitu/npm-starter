module.exports = function(mongoose) {
	'use strict';
	const UserSchema = new mongoose.Schema({
		name: String,
		age: Number
	})
	mongoose.model('User', UserSchema)

	return mongoose.model('User')
};
