const opc = [
    {
        name: "luffy",
        gender: "man",
        crew: "straw hats",
        devilfruit: "yes"
    },{
        name: "zoro",
        gender: "man",
        crew: "straw hats",
        devilfruit: "no"
    },{
        name:"sanji",
        gender: "man",
        crew: "straw hats",
        devilfruit: "no"
    },{
        name: "nami",
        gender: "woman",
        crew: "straw hat",
        devilfruit: "no"
    },{
        name: "robin",
        gender: "woman",
        crew: "straw hats",
        devilfruit: "yes"
    }
];
const data = opc.filter((gender) => gender.stringGenders.includes('man')).forEach((gender) => console.log(gender));
function check() {
    document.getElementById("myCheck").checked = true;
}
function uncheck() {
    document.getElementById("myCheck").checked = false;
}

filterSelection("all")
function filterSelection(c) {
    var x, i;
    x =
    document.getElementsByClassName("filterDiv");
}