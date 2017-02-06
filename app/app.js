const angular = require('angular');


angular.module('app', [require('angular-ui-router')])
    .config(require('./route.config'));