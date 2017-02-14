const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')


// Referencia global do objeto window 
let win

function createWindow() {
    
    //Cria a janela
    win = new BrowserWindow({
        width: 1024, 
        height:768,
        autoHideMenuBar: true,
    })

    //Carrega o index.html no app
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))

    //Abrir DevTools
    win.webContents.openDevTools()

    win.on('close', () => {
        //Caso a aplicação tenha multiplas janelas, implementar a logica oara fechar apenas a janela correta (win é um array)
        win = null
    })
}

//Metodo chamado quando o electron inicializa e esta pronto para criar as janelas de browser
app.on('ready', createWindow)

//Sair quando todas as janelas forem fechadas
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})


