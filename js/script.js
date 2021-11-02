let quantidadeAdultos = document.getElementById('totalAdultos');
let quantidadeCriancas = document.getElementById('totalCriancas');
let duracaoChurrasco = document.getElementById('duracao');
document.getElementById('final').style.display = 'none';

function calcular(){
    
    let carne = 0.400;
    let cerveja = 1200;
    let refriAgua = 1;

    let crianca = Number(quantidadeCriancas.value) * 0.5;
    let adulto = Number(quantidadeAdultos.value);    

    if(crianca < 0 || adulto == "" || duracaoChurrasco.value == 0){
        alert('Preencha os campos antes de calcular.')
    }else{        

        if(duracaoChurrasco.value > 6){
            carne = 0.650;
            cerveja = 2000;
            refriAgua = 1.5;
        }

        carne *= (crianca + adulto);
        cerveja *= adulto;
        refriAgua *= (crianca + adulto);
        
        document.getElementById('totalCarne').innerHTML = `${Math.ceil(carne)} Kg de Carne`;
        document.getElementById('totalCerveja').innerHTML = `${Math.ceil((cerveja/350))} latinhas de Cerveja`;
        document.getElementById('totalRefri').innerHTML = `${Math.ceil((refriAgua/2))} garrafas de 2L de Refri`;
        document.getElementById('totalAgua').innerHTML = `${Math.ceil((refriAgua/2))} garrafas de 2L de Água`;

        document.getElementById('final').style.display = '';
    }
}