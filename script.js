const carrossel = document.getElementById("carr")
var largura = document.querySelector("body").offsetWidth
var i =0
var contador = 1

function rodar(){
    i +=1
    var largura = document.querySelector("body").offsetWidth;
    largura = largura*i


    if(largura <= 1024 && largura >= 650){
        contador = 2    

    }

    



    if(i>contador){
        carrossel.style.left = "0px"
        i = 0
    }else{
        carrossel.style.left = `-${largura}px`
    }

    console.log(largura )
}


console.log(largura)



