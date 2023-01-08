let containerDePreguntas = document.getSelection("#preg-1");
let preguntas = ["a",  "h", "r"];
let preguntas2 = Math.floor(Math.random() * preguntas.length);
containerDePreguntas.innerHTML = "hola";
document.write(preguntas[preguntas2]);