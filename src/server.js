
// Dados
const proffys = [
  //Rafael
  {
    name: "Rafael Ramires",
    avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQFACFPS0Df6Zg/profile-displayphoto-shrink_100_100/0?e=1602720000&v=beta&t=1NbTWBxhAa7Arg13e0dqddbdlIcgFIX3mTXRFJsf6tQ",
    whatsapp: "11973029907",
    bio: "Professor de História Graduado pela Universidade Presbiteriana Mackenzie. ",
    subject: "História",
    cost: "40",
    weekday: [1],
    time_from: [990],
    time_to: [1232]
  },

  //Laura
  {
    name: "Laura Ramires",
    avatar: "https://image.freepik.com/vetores-gratis/empresaria-elegante-avatar-feminino_24877-18073.jpg",
    whatsapp: "11971759771",
    bio: "Professora de Letras Graduado pela Universidade Presbiteriana Mackenzie. ",
    subject: "Português",
    cost: "40",
    weekday: [],
    time_from: [],
    time_to: []
  },

  //Mariana
  {
    name: "Rodolfo ",
    avatar: "data:image/png;base64,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",
    whatsapp: "11968290266",
    bio: "Professora de Matemática Graduada pela PUC. ",
    subject: "Matemática",
    cost: "40",
    weekday: [],
    time_from: [],
    time_to: []
  }

]
const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação Física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",

]
const weekdays = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
]

// funcionalidades
function getSubject(subjectNumber) {
  const position = +subjectNumber - 1
  return subjects[position]
}


function pageLanding(req, res) {
  return res.render("index.html")
}
function pageStudy(req, res) {
  console.log(req.query)
  const filters = req.query
  return res.render("study.html", { proffys, filters, subjects, weekdays })
}
function pageGiveClasses(req, res) {
  const data = req.query
  const isNotEmpity = Object.keys(data).length > 0

  //se tiver dados 
  if (isNotEmpity) {

    data.subject = getSubject(data.subject)
    //adicionar a lista de proffys
    proffys.push(data)

    return res.redirect("/study")
  }

  // se nao tiver dados redirecionar para 

  return res.render("give-classes.html", { subjects, weekdays })
}

// serviddor
const express = require('express')
const server = express()


//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
})


server
  //arquivos estaticos configados
  .use(express.static("public"))
  //rotas da importacao
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .listen(5000)