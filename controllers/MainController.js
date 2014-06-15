function MainController(){
	
	// constructor 

}

MainController.prototype.indexAction = function(req, res){


	res.render('index', 
		{header:'Node.js + Express + Bootstrap', text:'Using vash templating'});

};

MainController.prototype.paramAction = function(req, res){

	res.render('index', 
		{header:'Node.js + Express + Bootstrap', text:'Action method that reads parameters: '
		+ req.param('q') + '2nd parameter: '+ req.param('q2')});

};

MainController.prototype.errorAction = function(req, res){

	res.status(404);
	res.render('index', {header: '404 File Not Found'});

};

var self = module.exports = new MainController();