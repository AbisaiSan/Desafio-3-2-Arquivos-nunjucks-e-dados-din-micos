//Fazendo a requisação do express
const express = require('express')

//Template Engines
const nunjucks = require('nunjucks')

//colocando o express no server
const server = express()

const courses = require('./data')

//Configurando o express para arquivos estáticos
server.use(express.static('public'))

server.set("view engine","njk")

nunjucks.configure("views", {
  express:server,
  autoescape:false
})

server.get("/", function(req, res){
  return res.render("about")
})
server.get("/portfolio", function(req, res){
  return res.render("portfolio")
})

server.get("/cursos", function(req, res){

  const cursos = {
    titleCurso:'<h1><strong> Cursos 100% online e gratuitos</strong> para você entrar com o pé<br> direito nas tecnologias mais desejadas do mercado.</h1> <p>Descubra o caminho para dominar a <strong>OmniStack.</strong></p>',
  }

  return res.render("cursos", {cursos} )
})



server.listen(5000, function(){
  console.log("server is running!")
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});