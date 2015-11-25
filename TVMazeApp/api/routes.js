var superagent = require('superagent');

module.exports = function (app) {
	app.get('/api', function (req, res) {
		console.log(req.query);
		superagent
			.get('http://api.tvmaze.com/search/shows?q=' + req.query.tvshow)
			.query({ json: true })
			.end(function (err, response) {
				if (err) {
					return res.send(err);
				}
					console.log(response.body);
					res.json(response.body);
			});

	});

	app.get('/api/show/:id', function(req,res){
		console.log(req.params.id);
		superagent
		.get('http://api.tvmaze.com/shows/'+req.params.id+'?embed=cast')
		.query({ json:true })
		.end(function(err, response){
			//console.log(response.body);
			res.json(response.body);
		})
	});
}
