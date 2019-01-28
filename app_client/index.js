/* jshint node: true */

"use strict";

module.exports = function(app) {
    /**
    Respond to GET request
    */
    app.get('/', function(req, res) {
        res.sendfile('index.html');
    });
};