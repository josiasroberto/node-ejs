const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
  const items = [
    // passando objeto do js pro ejs (pode vir de qualquer arquivo js)
    {
      title: "D",
      message: "eveloping apps easily",
    },
    {
      title: "E",
      message: "JS uses Javascript to render HTML",
    },
    {
      title: "M",
      message: "on ami, c'est très facile d'utiliser",
    },
    {
      title: "A",
      message: "h véi, só vai",
    },
    {
      title: "I",
      message: "nstall EJS",
    },
    {
      title: "S",
      message: "imples de usar",
    },
  ];

  const subtitle = "Uma linguagem de modelagem para criação de página HTML utlizando Javascript"

  res.render("pages/index", {
    qualities: items,
    subtitle: subtitle,
  });
});

app.get("/sobre", function(req, res){
  res.render("pages/about"); 

});
//não precisa escrever about.ejs ou index.ejs (já está especificado em app.set)

app.listen(8080);
console.log("Rodando");