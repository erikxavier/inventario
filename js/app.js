const angular = require('angular');


angular.module('app', [])
    .controller('InventarioController', InventarioController)

InventarioController.$inject = ['$scope']
function InventarioController($scope) {
    let vm = this
    vm.teste = "oi, eu sou o testinho"
}