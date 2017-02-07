module.exports = MovimentarController

MovimentarController.$inject = []
function MovimentarController() {
    let vm = this;

    vm.itens = [
        "HD",
        "Pen Drive",
        "Mouse USB",
        "Processador 1055",
        "Memória RAM DDR3 4GB",
        "Teclado USB",
        "Cabo USB para Impressora",        

    ]

    vm.selectItem = function(item) {
        vm.selectedItem = item;
    }

    vm.adicionaItemLista = function(item) {
        vm.movimento.lista.push(item)        
        vm.itens.splice(vm.itens.indexOf(item),1)
    }

    vm.novoMovimento = function() {
        vm.movimento = {
            data: new Date(),
            lista: []
        }
    }
}