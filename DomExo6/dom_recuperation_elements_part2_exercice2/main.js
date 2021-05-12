//Correction => C

//1

let content = document.getElementById("content").children[0]

console.log(content);

//C
let exo1 = document.getElementsByTagName("h3");
console.log(exo1[0]);

//2
//C
console.log(exo1[1]);

let nv3 = document.getElementById("titreNiv3")
console.log(nv3);

//3
//C
//console.log(exo1[1].previousElementSibling)

console.log(nv3.previousElementSibling);

//4
//C - let exo4 = document.getElementByTagName("p")[1].nextElementSibling \n console.log(exo4)
let petitpara = document.getElementsByClassName("petitParagraphe")[0]
let grandpara = petitpara.nextElementSibling
console.log(grandpara);

//5
//C - let exo5 = document.getElementsByTagName('ul)[0]; - console.log(exo5)
let lesli = document.querySelectorAll("li.important")[0].parentElement
console.log(lesli);

//6
//C - let exo6 = document.getElementsByTagName('ul')[0].parentElement.firstElementChild.

let listele = document.getElementById("listElements").children[0]
console.log(listele);

//7
//C - let exo7 = document.getElementsByTagName('li')[4]; console.log(exo7)

let long = document.getElementsByClassName("important").length - 1
let exo7 = document.getElementsByClassName("important")[long].nextElementSibling

console.log(exo7);

//8
//C let exo8 = document.getElementsByTagName('p')[4] console.log(exo8)

let textgen = document.getElementById("textGeneral").nextElementSibling.nextElementSibling
console.log(textgen);

//9

let prespan = document.getElementsByTagName("span")[1]

console.log(prespan.parentElement)

//10

let spannico = document.getElementsByTagName("b")[1]

console.log(spannico.previousSibling.nextElementSibling.innerText);

//11

let txtgnrl = document.querySelector("#textGeneral")
console.log(txtgnrl);


//12

let leslii = document.querySelectorAll("li");

leslii.forEach(e => console.log(e))
