//1 Façon non-dynamique.

let premierdiv = document.getElementsByTagName("div")[2];
let premierdiv1 = premierdiv.firstElementChild
console.log(premierdiv1);

//Façon dynamique Pour choper la dernière div, de façon dynamique, on va créer une variable de longueur pour choper la dernière div.
let long = document.getElementsByTagName('div').length-1;
let exo1 = document.getElementsByTagName("div")[long].firstElementChild
console.log(exo1);

//2

let premierdiv2 = premierdiv.lastElementChild
console.log(premierdiv2);
//Façon dynamique
let exo2 = document.getElementsByTagName("div")[long].lastElementChild

//3 + Méthode Loic

//let exo3 = documlent.getElementsByTagName('div')[2].getElementsByTagName('p')[0]; console.log(exo3.getElementsByTagName('i)[0])

let lei = document.getElementsByTagName("i")[0]

console.log(lei);

//4
let leb = document.getElementsByTagName("b")[0]

//5

let parentss = leb.parentElement
console.log(parentss);

//6

let parrents = lei.parentElement
console.log(parrents);

//7

let numero7 = premierdiv1.nextElementSibling
console.log(numero7);
