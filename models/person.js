var mongoose = require('mongoose');
var schema = mongoose.Schema;

var personSchema = new schema({
	name: String,
	age: Number,
	location: String
});
var Person = mongoose.model('person', personSchema);
module.exports = Person;
