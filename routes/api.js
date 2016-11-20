var builds = require('../controllers/builds');

var routesAPI = function (app) {

	//video routes
	app.get('/builds', builds.get);
}


module.exports = routesAPI;