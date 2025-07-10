import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  generarCarta()
  document.getElementById("boton").addEventListener("click", generarCarta)
  console.log("Hello Rigo from the console!");
};


function generarCarta() {

  let palo = ["♦", "♥", "♠", "♣"]
  let numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

  let paloAleatorio = palo[Math.floor(Math.random() * palo.length)];
  console.log(paloAleatorio)

  let numeroAleatorio = numero[Math.floor(Math.random() * numero.length)];
  console.log(numeroAleatorio)

  document.getElementById("centro").innerHTML = numeroAleatorio
  document.getElementById("arriba").innerHTML = paloAleatorio
  document.getElementById("abajo").innerHTML = paloAleatorio

  if (paloAleatorio == "♥" || paloAleatorio == "♦") {
  document.getElementById("arriba").style.color = "red";
  document.getElementById("abajo").style.color = "red";
} else {
  document.getElementById("arriba").style.color = "black";
  document.getElementById("abajo").style.color = "black";
}
}