import axios from "axios";
function App() {
 function getAPI() {
 axios
 .get("https://testeservidorgabi.onrender.com/")
 .then((resposta) => console.log(resposta))
 .catch((erro) => console.log(erro));
 }
}

// falta o map
