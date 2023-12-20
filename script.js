





const carrossel = document.getElementById("carr")
var largura = document.querySelector("body").offsetWidth
var i =0
var contador = 1
var movimento = 0

function rodar(){
    i +=1
    var largura = document.querySelector("body").offsetWidth;
    movimento = largura*i


   
    if(largura <= 1024){
        contador = 2
    }
    if(largura <= 900){
        contador = 5
    }
    if(largura <= 768){
        contador = 5
    }
    if(largura <= 600){
        contador = 5
    }
    if(largura <= 380){
        contador = 5
    }

    



    if(i>contador){
        carrossel.style.marginLeft = "0px"
        i = 0
    }else{
        carrossel.style.marginLeft = `-${movimento}px`
    }

    console.log(largura )
}
var o = 0 
var medi =0 
function voltar(){
    o+=1

    var largura1 = document.querySelector("body").offsetWidth;


    carrossel.style.marginLeft = `${largura1}px`
    if(o > medi ){
        carrossel.style.marginLeft = 0
    }

}


console.log(largura);



