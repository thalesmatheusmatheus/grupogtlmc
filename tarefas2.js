import axios from "axios";
function app() {
 function postAPI() {
 axios
 .post("https://testeservidorgabi.onrender.com/", {add})
 .then((resposta) => console.log(resposta))
 .catch((erro) => console.log(erro));
 }
}

// falta o map