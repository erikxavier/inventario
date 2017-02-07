const angular = require('angular');


angular.module('app', [require('angular-ui-router')])
    .service('InventarioService', require('./services/inventario.service'))
    .config(require('./route.config'));