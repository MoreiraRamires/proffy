const proffys = [
  //Rafael
  {
    name: "Rafael Ramires",
    avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQFACFPS0Df6Zg/profile-displayphoto-shrink_100_100/0?e=1602720000&v=beta&t=1NbTWBxhAa7Arg13e0dqddbdlIcgFIX3mTXRFJsf6tQ",
    whatsapp: "97302-8809",
    bio: "Professor de História Graduado pela Universidade Presbiteriana Mackenzie. ",
    subject: "História",
    const: "40",
    weekday: [1],
    time_from: [990],
    time_to: [1232]
  },
  //Laura
  {
    name: "Laura Ramires",
    avatar: "",
    whatsapp: "973242-8809",
    bio: "Professora de Letras Graduado pela Universidade Presbiteriana Mackenzie. ",
    subject: "Português",
    const: "40",
    weekday: [],
    time_from: [],
    time_to: []
  }

]

function pageLanding(req, res) {
  return res.sendFile(__dirname + "/views/index.html")
}
function pageStudy(req, res) {
  return res.sendFile(__dirname + "/views/study.html")
}
function pageGiveClasses(req, res) {
  return res.sendFile(__dirname + "/views/give-classes.html")
}

const express = require('express')
const server = express()


server
  .use(express.static("public"))
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .listen(5000)