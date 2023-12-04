import "../css/style.css";
import {opc} from "./menu.js"

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
    <h2 class= "card-title">${opc.name}</h2>
    <img src="${opc,img}" alt="opc image"
    <h3 class= "gender">${opc.gender}</h3>
    </div>
    `)
});
}
Insert(opc)

function filters(){
    let buttons = document.querySelectorAll(".btn")
    buttons.forEach((btn) => buttons.addEventListener("click", function() {
        let category = btn.textContent.toLowerCase()
        let newArr = items.filter((el)=>el.type.includes(category))
        document.querySelector(".total").innerHTML = ""
        insert(newArr)
    }))
}


/* function addcards (arr){
    arr.forEach(el) => {
        DOMSelectors.con
    }
} */