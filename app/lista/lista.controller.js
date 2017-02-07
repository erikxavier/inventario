module.exports = ListaController;

ListaController.$inject = ['InventarioService']
function ListaController(InventarioService) {
    let vm = this;

    vm.lista = InventarioService.getListaInventario()

    vm.addItem = function(item) {
        item.quantidade++;
    }

    vm.removeItem = function(item) {
        if (item.quantidade) item.quantidade--;
    }

    vm.activateItem = function(item) {
        vm.activeItem = item
    }
}