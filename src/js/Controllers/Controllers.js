'use strict';

global.__webpack_public_path__ = '/';

var angular = require('angular');

module.exports = angular
        .module('boilerplate.controllers', [])
        .controller('HomeCtrl', ['$scope', '$log', require('js/Controllers/Home')])
;