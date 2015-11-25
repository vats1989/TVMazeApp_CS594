var async = require('async');
var fs = require('fs');

module.exports.saveFact = function (fact, callback) {
	var file = 'facts.json';

	async.waterfall([
		function read(next) {
			fs.readFile(file, 'utf8', function (err, data) {
				// if the file is not found then no need to parse data
				if (err && err.code === 'ENOENT') {
					next(null, [fact])
				} else {
					// always try/catch JSON.parse
					try {
						var facts = JSON.parse(data);
						facts.push(fact);
						next(err, facts);
					} catch (e) {
						next(e);
					}
				}
			});
		},
		function write(facts, next) {
			fs.writeFile(file, JSON.stringify(facts, null, '\t'), function(err) {
				next(err, 'successful')
			});
		}
	], function done(err, result) {
			console.log(err, result)
			callback(err, result);
	});

};