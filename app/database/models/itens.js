var db = require('../db.config')


function getAll() {
    return new Promise((resolve, reject) => {
        db.itens.find({}, (err, itens) => {
            if (err) reject('erro: '+{})
            else resolve(itens)    
        })
    })
}

function insert(item) {
    return new Promise((resolve, reject) => {
      db.itens.insert(item, (err, newDoc) => {
          if (err) reject('erro ao inserir '+err)
          else resolve(newDoc)
      }) 
    })
}
module.exports = {
    getAll,
    insert
}