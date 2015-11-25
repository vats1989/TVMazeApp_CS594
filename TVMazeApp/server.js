var express = require('express');
var app = express();

app.use(express.static('./client'));

require('./api/routes')(app)

app.get('*', function (req, res) {
	res.sendFile('/client/views/index.html', { root: __dirname });
})
app.listen(8080, function () {
	console.log('Server is running.')
});