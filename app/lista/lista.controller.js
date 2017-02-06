module.exports = ListaController;

ListaController.$inject = []
function ListaController() {
    let vm = this;

    vm.lista = [
        {nome: "HD",quantidade: "5"},
        {nome: "Memoria DDR3",quantidade: "8"},
        {nome: "Fonte ATX",quantidade: "20"},
        {nome: "Cabo USB A/B",quantidade: "6"},
        {nome: "Mouse",quantidade: "3"}
    ]

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