/* eslint-disable 
import "bootstrap";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";*/

import "./style.css";

window.onload = function() {
  //write your code here

  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#Excusa").innerHTML = Libroexcusas();
  });
  console.log("Hello Rigo from the console!");
};

let Libroexcusas = () => {
  let quien = ["Mi perro", "Mi abuela", "Tu tortuga", "Mi gato"];
  let accion = ["comio ", "meo ", "destrozo ", "rompio ", "pulverizo "];

  let que = ["mi tarea", "mis llaves", "mi movil", "mi raton", "mi router"];
  let cuando = [
    "despues de clase",
    "justo cuando lo necesitaba",
    "cuando estaba terminando",
    "durante mi comida",
    "mientras rezaba",
    "mientras jugaba"
  ];

  let excusita = [
    quien[Math.floor(Math.random() * quien.length)],
    accion[Math.floor(Math.random() * accion.length)],
    que[Math.floor(Math.random() * que.length)],
    cuando[Math.floor(Math.random() * cuando.length)]
  ];

  return excusita.reduce((acc, item) => {
    return (acc += " " + item);
  });
};
