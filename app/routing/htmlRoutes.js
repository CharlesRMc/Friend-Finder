const express = require('express');
const path = require('path');

var app = express();

var home = function () {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'app/public/home.html'), function (err) {
            if (err) {
                next(err);
            } else {
                console.log('Send: homepage');
            }
        });
    });
    var survey = function (req, res) {
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, 'app/public/survey.html'), function(err) {
            if (err) {
                next(err);
            } else {
                console.log('Send: survey page');
            };
        });
    });
};

module.exports = {
    home: home,
    survey: survey
}