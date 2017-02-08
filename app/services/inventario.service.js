module.exports = InventarioService

var _ = require('lodash')
InventarioService.$inject = []

function InventarioService() {
    var movimentos = []
    movimentos.push({
        data: new Date(),
        tipo: 'E',
        relatorio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        lista: [
            { nome: "HD", quantidade: "5" },
            { nome: "Memoria DDR3", quantidade: "8" },
            { nome: "Fonte ATX", quantidade: "20" },
            { nome: "Cabo USB A/B", quantidade: "6" },
            { nome: "Mouse", quantidade: "3" }
        ]
    })

    function getListaInventario() {
        return [
            { nome: "HD", quantidade: "5" },
            { nome: "Memoria DDR3", quantidade: "8" },
            { nome: "Fonte ATX", quantidade: "20" },
            { nome: "Cabo USB A/B", quantidade: "6" },
            { nome: "Mouse", quantidade: "3" }
        ]
    }

    function getEntradas() {
        return movimentos.filter(value => value.tipo === 'E');
    }

    function getSaidas() {
        return movimentos.filter(value => value.tipo === 'S');
    }    

    function saveMovimento(movimento) {
        movimentos.push(movimento)
    }

    return {
        getListaInventario,
        getEntradas,
        saveMovimento
    }
}