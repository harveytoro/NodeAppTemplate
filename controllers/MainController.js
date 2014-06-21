function MainController(){

	this.AddressBook = require('../models/AddressBook');
	this.AddrB = new this.AddressBook();

}

MainController.prototype.index_action = function(req, res){

	/*
	Add an address

	var addr = {
		name: 'Jose Doe',
		street: '1 first road',
		postcode: 'W1 9RF',
		city: 'London'
	}
	self.AddrB.add_address(addr, function(){
		res.render('index', 
		{header:'Node.js + Express + Bootstrap', text:'Using vash templating '});
	});

    */

	self.AddrB.get_addresses(function(items){

		res.render('index', 
		{header:'Node.js + Express + Bootstrap', text:'Using vash templating ', addresses: items});

	});


};

MainController.prototype.form_action = function(req, res) {

	console.log(req.param('emailinput'));

};
MainController.prototype.param_action = function(req, res){

	res.render('index', 
		{header:'Node.js + Express + Bootstrap', text:'Action method that reads parameters: '
		+ req.param('q') + '2nd parameter: '+ req.param('q2')});

};

MainController.prototype.error_action = function(req, res){

	res.status(404);
	res.render('index', {header: '404 File Not Found'});

};

var self = module.exports = new MainController();