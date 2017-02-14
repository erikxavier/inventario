var db = require('../db.config')

function getAll() {
    return new Promise((resolve, reject) => {
        db.estoque.find({}, (err, itens) => {
            if (err) reject('não foi possivel conectar ao banco de dados '+err)
            else resolve(itens)
        })
    })
}


module.exports = {
    getAll
}