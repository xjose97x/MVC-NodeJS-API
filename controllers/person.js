var Person = require('../models/Person');

module.exports.controller = function(app) {
	//Retrieves all persons from MongoDB
	app.get('/person/getAll', function(req, res) {
		Person.find({}, function(err, persons){
			var personMap = [];
			persons.forEach(function(person){
				personMap.push(person);
			});
			res.setHeader('Content-Type', 'application/json');
			res.sendStatus(200);
			return res.send(personMap);
		});
	});
	//Creates a person. Must send a post request with the following content on body (json-encoded)
	//{
	//	"name" : "ANY_NAME",
	//	"age" : ANY_NUMBER,
	//	"location": "ANY_LOCATION"
	//}
	app.post('/person/create', function(req, res) {
		var person = new Person({
			name: req.body.name,
			age: req.body.age,
			location: req.body.location,
		});
		person.save(function(err){
			if(err){
				console.log("Couldn't insert person. Error: " + err);
				return res.end("Failed");
			}
			return res.end("Success");
		});
	});

};
