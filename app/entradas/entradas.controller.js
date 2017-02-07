module.exports = EntradasController

EntradasController.$inject = ['InventarioService']
function EntradasController(InventarioService) {
    vm = this;

    vm.entradas = InventarioService.getEntradas();
}