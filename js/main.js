import "../css/style.css";
import {opc} from "./menu"

console.log(opc);


const data = opc.filter((man) => man.stringMan.includes(true)).forEach((man) => console.log(man));
function check() {
    document.getElementById("myCheck").checked = true;
};
function uncheck() {
    document.getElementById("myCheck").checked = false;
}


function section(){
    opc.container.insertAdjacentHTML(
    `<div class="section">
    <h1> ${opc.name.value}</h1>
    <h2> ${opc.gender.value}</h2>
    <h3> ${opc.crew.value}</h3>
</div>`)}

opc.forEach(opc => {
    var div = document.querySelector(opc)
    div.innerHTML = div.innerHTML + `
    <div class="opc-card">
    <div class="badge">Hot</div>
    <div class="product-tumb">
    <img src="" alt="" />
    </div>
    <div class="product-details">
    <span class="product-catagory">dog1,dog2</span>
    <h4><a href="">${opc.name}</a></h4>
    <p>
    ${opc.description}</p>
    <div class="product-bottom-details">
    <div class="product-price">
    <small>$96.00</small>${opc.age}
    </div>
    <button>buy now</button>
    <div class="product-links">
    <a><i class="fa fa-heart"></i></a>
    <a><i class="fa fa-shopping-cart"></i></a>
    </div>
    </div>
    </div>
    </div>`
})