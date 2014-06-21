function AddressBook(){

	this.db = require('../config/db').database;

}

AddressBook.prototype.add_address = function(address, next) {
	
	this.db.getDB(function(err, db){
		
		db.address_book.insert(address, function(err){
			if(err){console.log('error occurred');}

			next();

		});


	});

};

AddressBook.prototype.get_addresses = function(next) {

	this.db.getDB(function(err, db){

		db.address_book.find().toArray(function(err, items){
			if(err){console.log('error occurred');}
			next(items);
		});


	});

};

var self = module.exports = AddressBook;