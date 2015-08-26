'use strict';

global.__webpack_public_path__ = '/';

var angular = require('angular');

require('angular-bootstrap/ui-bootstrap');
require('angular-animate');
require('angular-sanitize');

var app = angular.module('boilerplate', [
    'ui.bootstrap',
    'ui.router',
    require('js/Controllers/Controllers').name,
    require('js/Services/Services').name,
    require('js/Config/Config').name
]);

// Run
app.run(['$rootScope', '$window', '$log', require('./Run')]);

module.exports = app;