import './style.css'
import {opc} from './menu'
import { DOMSelectors } from './dom'


function add(arr) {
  remove();
  arr.forEach((bruh) => {
    DOMSelectors.container.insertAdjacentHTML("afterend",
    `
    <div class="card">
    <h3 class="character-name">${bruh.name}</h3>
    <h4 class="age">${bruh.age}</h4>
    <img src="${bruh.img}" alt="" class="card-img">
    </div>
    `);
  });
}
add(opc);
console.log(opc)

//theming
document.getElementById("Theme").addEventListener("click", function(){
if (document.body.classList.contains("lightmode")){
  document.body.classList.add("darkmode");
  document.body.classList.remove("lightmode");
} else {
  document.body.classList.add("lightmode");
  document.body.classList.remove("darkmode")
}
});

function remove(){
  DOMSelectors.container.innerHTML = "";
}



let buttons= document.querySelectorAll(".btn")


const filterbtns = (buttons.forEach((buttons) => buttons.addEventListener("click", function(){
  let type = buttons.textContent;
  let newArr = opc.filter((menu) => menu.type.includes(type));
  remove();
  add(newArr);
})))



DOMSelectors.form.addEventListener("click", function(event){
  event.preventDefault();
  remove();
  filterbtns();
})











/* 
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
  <img src="${opc.img}" alt="opc image"
  <h3 class= "gender">${opc.gender}</h3>
  </div>
  `)
});
}
Insert(opc)

function section(){
  opc.container.insertAdjacentHTML("afterbegin", 
  `<div class="section">
  <button class = "remove">Remove</button>
  <h1> ${opc.name.value}</h1>
  <h2> ${opc.lastName.value}</h2>
  <img src= "${opc.img.value}" alt="img" class="img"</h3>
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
} 

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
}) */