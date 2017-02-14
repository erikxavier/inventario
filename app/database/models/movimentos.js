var db = require('../db.config')

function getAll() {
    return new Promise((resolve, reject) => {
        db.movimentos.find({}, (err, itens) => {
            if (err) reject('erro: '+err)
            else resolve(itens)    
        })
    })
}

function insert(item) {
    console.log(item)
    return new Promise((resolve, reject) => {
      if ((item.tipo !== 'E') || (item.tipo !== 'S')) return reject('Tipo de movimento inválido')
      db.movimentos.insert(item, (err, newDoc) => {
          if (err) reject('erro ao inserir '+err)
          else resolve(newDoc)
      }) 
    })
}
module.exports = {
    getAll,
    insert
}