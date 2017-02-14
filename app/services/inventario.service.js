module.exports = InventarioService

InventarioService.$inject = []

function InventarioService() {
    var Movimentos = require('../database/models/movimentos')
    var Itens = require('../database/models/itens')

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
        return Movimentos.getEntradas()
    }

    function getSaidas() {
        return movimentos.filter(value => value.tipo === 'S');
    }    

    function getMovimentos() {
        return Movimentos.getAll()
    }

    function criaItem(nome) {
        return Itens.insert({nome: nome, quantidade: 0})
    }
    
    function saveMovimento(movimento) {
        return Movimentos.insert(movimento)
    }

    return {
        getListaInventario,
        getEntradas,
        saveMovimento,
        criaItem
    }
}