module.exports = InventarioService

InventarioService.$inject = []

function InventarioService() {
    return {
        getListaInventario,
        getEntradas
    }

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
        return [
            {
                data: '06/02/20170',
                lista: [
                    { nome: "HD", quantidade: "5" },
                    { nome: "Memoria DDR3", quantidade: "8" },
                    { nome: "Fonte ATX", quantidade: "20" },
                    { nome: "Cabo USB A/B", quantidade: "6" },
                    { nome: "Mouse", quantidade: "3" }
                ]
            }
        ]
    }
}