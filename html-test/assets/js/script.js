function gato(color){
    e = document.querySelector("body")
    e.style.backgroundColor = color
}
btn = document.querySelector("button");
btn.addEventListener("click", gato);

document.addEventListener("keydown", function(event) {
if (event.key === "a" || event.key === "A") {
    agregar(); 
} else if (event.key === "d" || event.key === "D") {
    eliminar();
}
});

function agregar(){
    imgc = document.getElementById("main"); //busca main
    img = document.createElement("img"); //crea img
    img.src = "assets/img/gato.jpeg";
    img.alt = "gato";
    img.id = "cat"
    imgc.appendChild(img); //agrega img en main
}

function eliminar(){
    c = document.getElementById("main").innerHTML = ""; //borra todo
}