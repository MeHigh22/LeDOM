let h1 = document.getElementsByTagName("h1");
console.log(h1[1].innerText);

let lesli = document.querySelectorAll("li");

console.log(lesli[3].innerText);

let para = document.getElementsByTagName("p");


let premsp = para[0].innerText.toUpperCase()

console.log(premsp);

lesli.forEach(element => {
    console.log(element);
    return element.style.textTransform ="uppercase";
});

//Fait le bonus aussi.

let ul = document.getElementsByTagName('ul')[0];
let ul_li = Array.from(ul.getElementsByTagName('li'));

ul_li.forEach(li => {
    console.log(li.innerText.toLocaleUpperCase());
})

//Plusieurs façons de le faire. Array.from