var path = require('path');

module.exports = function (app) {

    // GET ALL
    app.get('/api/', function (req, res) {
			var queryParams = req.params;
    });

    // POST GET WITH QUERY PARAMS
    app.post('/api/', function (req, res) {
			var body = req.body;
    });

    // PUT CREATE
    app.put('/api/create', function (req, res) {
      var body = req.body;
    });

    // delete a to
    app.delete('/api/:id', function (req, res) {
        var id = req.params.id;
    });

    // application -------------------------------------------------------------
    app.get('/*', function (req, res) {
      res.sendFile(path.resolve(__dirname + '/../src/index.html')); // load the single view file (angular will handle the page changes on the front-end)
    });
};
