const carrossel = document.getElementById("carr");
var largura = document.querySelector("body").offsetWidth;
var i = 0;
var contador = 1;
var movimento = 0;

function rodar() {
    i += 1;
    var largura = document.querySelector("body").offsetWidth;
    movimento = largura * i;

    if (largura == 1025) {
        contador = 0;
    }
    if (largura <= 1024) {
        contador = 2;
    }
    if (largura <= 768) {
        contador = 5;
    }
    if (largura <= 600) {
        contador = 5;
    }
    if (largura <= 380) {
        contador = 5;
    }

    if (i > contador) {
        carrossel.style.left = "0px";
        i = 0;
    } else {
        carrossel.style.left = `-${movimento}px`;
    }

    console.log(largura);
}

function voltar() {
    o += 1;

    var largura1 = document.querySelector("body").offsetWidth;

    carrossel.style.left = `${largura1}px`;
    if (o > medi) {
        carrossel.style.left = 0;
    }
}

// Adiciona um listener para o evento de clique nos botões do slider
document.querySelector("#anterior").addEventListener("click", function (event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    voltar();
});

document.querySelector("#proximo").addEventListener("click", function (event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    rodar();
});


console.log(largura);
