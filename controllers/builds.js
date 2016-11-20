var buildData = require('./data/builds');

var builds = {};

// controller that handles video listings fetch request.
builds.get = function (req, res) {

	var response = {};
	response.status = 'success';
	response.data = buildData;
	res.send(response);

};

module.exports = builds;