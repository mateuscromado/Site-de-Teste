

//ocultar e exibir o menu

document.getElementById("sanduiche").addEventListener("click",function(){
    var ocultar = document.getElementById("menu-js")

    ocultar.classList.remove("menu-ocultar")
})

document.getElementById("sanduiche").addEventListener("click", function() {
    var elemento = document.getElementById("menu-js");
    elemento.classList.add("menu-ocultar");
});