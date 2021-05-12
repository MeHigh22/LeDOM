let myBody = document.getElementsByTagName("body")[0];

let firstChild = myBody.firstElementChild
let lastChilde = myBody.lastElementChild

console.log(firstChild);
console.log(lastChilde);

let div1 = document.getElementsByTagName("div")[0];

let exo4 = div1.children

console.log(exo4);

let premierli = document.getElementsByTagName("li")[0]

let premierli2 = premierli.nextElementSibling;

console.log(premierli2);

let deuxiemeli = document.getElementsByTagName("li")[1];

let deuxiemeli2 = deuxiemeli.previousElementSibling;

console.log(deuxiemeli2);