module.exports = InventarioService

InventarioService.$inject = []

function InventarioService() {
    var Movimentos = require('../database/models/movimentos')
    var movimentos = []
    movimentos.push({
        data: new Date(),
        tipo: 'E',
        relatorio: "Descrição",
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
        return Movimentos.getAll()
    }

    function getSaidas() {
        return movimentos.filter(value => value.tipo === 'S');
    }    

    function getMovimentos() {
        return Movimentos.getAll()
    }
    
    function saveMovimento(movimento) {
        return Movimentos.insert(movimento)
    }

    return {
        getListaInventario,
        getEntradas,
        saveMovimento
    }
}