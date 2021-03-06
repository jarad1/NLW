//servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

const nunjucks = require('nunjucks')
const path = require('path')

//configurar nunjucks 
nunjucks.configure(path.resolve('src','views'), {
    express: server,
    noCache: true,
})

server
//receber os dados do req.body
.use(express.urlencoded({ extended: true }))
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(process.env.PORT || 5500)