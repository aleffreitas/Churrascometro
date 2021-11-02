let quantidadeAdultos = document.getElementById('totalAdultos');
let quantidadeCriancas = document.getElementById('totalCriancas');
let duracaoChurrasco = document.getElementById('duracao');

let carne = 0.400; // + 6 horas = 650
let cerveja = 1200; // + 6 horas = 2000
let refriAgua = 1000; // + 6 horas = 1500

//criança vale 0.5



function calcular(){
    let crianca = Number(quantidadeCriancas.value) * 0.5;
    let adulto = Number(quantidadeAdultos.value);
    let duracao = Number(duracaoChurrasco.value);

    if(duracao > 6){
        carne = 0.650;
        cerveja = 2000;
        refriAgua = 1500;
    }

    carne *= (crianca + adulto);
    cerveja *= adulto;
    refriAgua *= (crianca + adulto);

    console.log(crianca);
    console.log(adulto);
    console.log(carne.toFixed(1));
    console.log(cerveja);
    console.log(refriAgua);
}


