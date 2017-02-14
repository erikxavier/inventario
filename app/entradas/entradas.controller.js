module.exports = EntradasController

EntradasController.$inject = ['InventarioService']
function EntradasController(InventarioService) {
    vm = this;

    InventarioService.getEntradas()
        .then((entradas) => vm.entradas = entradas)
}