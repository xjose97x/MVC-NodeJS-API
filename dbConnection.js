var mongoose = require("mongoose");

exports.connect = function(){
	mongoose.connect('mongodb://localhost:27017/NAME_OF_DB', function(err, db) {
	    if (err) {
	        console.log('Unable to connect to the server. Please start the server. Error:', err);
	    } else {
	        console.log('Connected to Server successfully!');
	    }
	});
};
