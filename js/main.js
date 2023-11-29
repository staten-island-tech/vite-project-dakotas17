import "../css/style.css";
import {opc} from "./menu"

document.querySelector(".btn").addEventListener("click", function() {
    document.body.classList.add("pink")
})

console.log(opc);


const data = opc.filter((man) => man.stringMan.includes(true)).forEach((man) => console.log(man));
function check() {
    document.getElementById("myCheck").checked = true;
};
function uncheck() {
    document.getElementById("myCheck").checked = false;
}


function Insert(arr){
arr.forEach((opc) => {
    document.querySelector(".container").insertAdjacentHTML("afterbegin",
    `<div class ="card">
    <h1 class= "card-title">${opc.name}</h1>
    <h2 class= "
    
    `)
})
}

function addcards (arr){
    arr.forEach(el) => {
        DOMSelectors.con
    }
}