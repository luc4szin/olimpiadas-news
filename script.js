/* let entrada = parseInt(prompt("Digite o ano que você nasceu"));
alert(2023 + entrada);
alert(typeof entrada); */

let section = document.querySelector("section");

function toDark() {
  section.classList.add("dark");
  section.classList.remove("light");
}

function toDarkToggle() {
  section.classList.toggle("dark");
}

function toLight() {
  section.classList.add("light");
  section.classList.remove("dark");
}
