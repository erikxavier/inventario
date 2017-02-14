var db = require('../db.config')

function getAll() {
    return new Promise((resolve, reject) => {
        db.movimentos.find({}, (err, itens) => {
            if (err) reject('erro: '+err)
            else resolve(itens)    
        })
    })
}

function getEntradas() {
    return new Promise((resolve, reject) => {
        db.movimentos.find({"tipo": "E"}, (err, itens) => {
            if (err) reject('erro: '+err)
            else resolve(itens)    
        })
    })
}

function getSaidas() {
    return new Promise((resolve, reject) => {
        db.movimentos.find({"tipo": "S"}, (err, itens) => {
            if (err) reject('erro: '+err)
            else resolve(itens)    
        })
    })
}

function insert(item) {
    console.log(item)
    return new Promise((resolve, reject) => {
      if (['E','S'].indexOf(item.tipo) === -1) return reject('Tipo de movimento inválido')
      db.movimentos.insert(item, (err, newDoc) => {
          if (err) reject('erro ao inserir '+err)
          else {
              if (newDoc.tipo === 'E') {
                  newDoc.lista.forEach((item) => {
                      db.itens.find({"_id": item._id}, (err, oldItem) => {
                          if (!err) {
                            let novaQuantidade = item.quantidade+oldItem.quantidade
                            db.itens.update({"_id": item._id}, {$set: {quantidade: novaQuantidade}})
                          }
                      })                      
                  })
              } else {
                  newDoc.lista.forEach((item) => {
                      db.itens.find({"_id": item._id}, (err, oldItem) => {
                          if (oldItem.quantidade < item.quantidade) {
                            db.movimentos.remove(newDoc, {})
                            return reject("Não foi possível remover mais do que existe no estoque")
                          } 
                      })
                  })
                  newDoc.lista.forEach((item) => {
                      db.itens.find({"_id": item._id}, (err, oldItem) => {
                          if (!err) {
                            let novaQuantidade = oldItem.quantidade-item.quantidade
                            db.itens.update({"_id": item._id}, {$set: {quantidade: novaQuantidade}})
                          }
                      })                      
                  })                  
              }
              resolve(newDoc)}
      }) 
    })
}
module.exports = {
    getAll,
    getEntradas,
    getSaidas,
    insert
}