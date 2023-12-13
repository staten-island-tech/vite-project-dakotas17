import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))


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