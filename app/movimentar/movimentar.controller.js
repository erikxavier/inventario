module.exports = MovimentarController

MovimentarController.$inject = ['InventarioService']
function MovimentarController(InventarioService) {
    let vm = this;

    // vm.itens = [
    //     "HD",
    //     "Pen Drive",
    //     "Mouse USB",
    //     "Processador 1055",
    //     "Memória RAM DDR3 4GB",
    //     "Teclado USB",
    //     "Cabo USB para Impressora",        

    // ]

    vm.selectItem = function(item) {
        vm.selectedItem = item;
    }

    vm.adicionaItemLista = function(item) {
        vm.movimento.lista.push(item)        
        //vm.itens.splice(vm.itens.indexOf(item),1)
    }

    vm.criaItem = function(item) {
        InventarioService.criaItem(item)
            .then(vm.adicionaItemLista)
            .catch()
    }

    vm.novoMovimento = function() {
        vm.movimento = {
            data: new Date(),
            tipo: "E",
            lista: []
        }
    }

    vm.salvarMovimento = function() {
        vm.movimento.data = new Date(vm.movimento.data)
        console.log(vm.movimento)
        InventarioService.saveMovimento(vm.movimento)
            .then((newMov) => {
                console.log('movimento salvo com sucesso'+newMov)
                vm.movimento = null;
            })
            .catch((err) => console.log(err))
        
    }
}