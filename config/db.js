function Database(){}


Database.prototype.setDatabase = function(db) {
	this.mongoData = db;
};

Database.prototype.getDB = function(callback){

	
		callback(null, this.mongoData);
	
	

};


//database connection
module.exports.dbconnect = function(callback){
	var mongodb = require('mongodb');
	var mongoURL = 'mongodb://localhost:27017/datadb';
	var mongoData = null;
 	mongodb.MongoClient.connect(mongoURL, function(err, db){
		if(err){
			console.log('Database connection error.');
		}else{
			
			mongoData = {
				db:db,
				address_book:db.collection('AddressBook')
			};

			console.log('Database connection established');


			callback(mongoData);
		}

	});

}


module.exports.database = new Database();