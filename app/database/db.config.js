var Datastore = require('nedb')
var remote = require('electron').remote
var path = require('path')
var userDataPath = remote.app.getPath('userData')

var estoqueDbPath = path.join(userDataPath, 'estoque.db')
var movimentosDbPath = path.join(userDataPath, 'movimentos.db')
var itensDbPath = path.join(userDataPath, 'itens.db')

var db = {}
db.estoque = new Datastore({filename: estoqueDbPath, autoload: true})
db.movimentos = new Datastore({filename: movimentosDbPath, autoload: true})
db.itens = new Datastore({filename: itensDbPath, autoload: true})

module.exports = db