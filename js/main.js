import "../css/style.css";
import {opc} from "./menu.js";
import { DOMSelectors } from "./dom";

document.querySelector(".btn").addEventListener("click", function() {
    document.body.classList.add("pink")
})
document.querySelector("#app").innerHTML = `
<h1>Hello??????</h1>
<a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
console.log(opc);


const filterButtons = (buttons.forEach((buttons) => buttons.addEventListener("click", function(){
    let type = buttons.textContent;
    let newArr = Menu.filter((opc) => opc.type.includes(type));
    removeCards();
    addcards(newArr);
})))


function Insert(opc){
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

function section(){
    DOMSelectors.container.insertAdjacentHTML("afterbegin", 
    `<div class="section">
    <button class = "remove">Remove</button>
    <h1> ${opc.name.value}</h1>
    <h2> ${DOMSelectors.lastName.value}</h2>
    <img src= "${DOMSelectors.img.value}" alt="img" class="img"</h3>
    <p></p>
</div>`)}
   section();











function filters(){
    event.preventDefault();
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

//theme button
document.getElementById("theme").addEventListener("click", function() {
    if(document.body.classList.contains("light")){
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    } else{
        document.body.classList.add("light")
        document.body.classList.remove("dark")
    }
});

DOMSelectors.form.addEventListener("click", function(event){
    event.preventDefault();
    removeCards();
    filterButtons();
})