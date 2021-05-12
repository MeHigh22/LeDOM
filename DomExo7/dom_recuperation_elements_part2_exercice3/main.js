//1

let ladiv = document.querySelector("div#content")
console.log(ladiv);

//2

let lesdiv = document.querySelectorAll("div#content")
console.log(lesdiv);

//3

let lesli = document.querySelector("li.important")
console.log(lesli);

//4

let leslii = document.querySelectorAll("li.important")
console.log(leslii);

//5

leslii.forEach(e => {
    let strE = e.innerText;
    console.log(strE.substr(0, strE.length - 1) + strE.charAt(strE.length - 1).toUpperCase())
})

//6

let grandPara = document.getElementsByClassName('grandParagraphe')

let petitP = document.getElementById("content").children[1]

console.log(petitP);