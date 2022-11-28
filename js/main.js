const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const finalizar = document.querySelector(".finalizar");
const imgJogador = document.querySelector(".imagem_jogador");
let habilidades =[];

const skills = {
    "dribles": {
        "habilidade": 25,
        "fisico": 10,
        "passes": 17,
        "defesa": -15
    },

    "forca": {
        "habilidade": -15,
        "fisico": 27,
        "passes": -10,
        "defesa": 10
    },
    "chute":{
        "habilidade": 13,
        "fisico": 10,
        "passes": 17,
        "defesa": -5
    },
    "interceptacao":{
        "habilidade": 10,
        "fisico": 15,
        "passes": 10,
        "defesa": 15
    },
    "reflexo":{
        "habilidade": -7,
        "fisico": -25,
        "passes": -12,
        "defesa": 30
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.controle, evento.target.dataset.skill);

    })
});

function manipulaDados(operacao, controle){
    const skill = controle.querySelector("[data-contador]")
    if(operacao == "-"){
        skill.value = parseInt(skill.value) - 1;
    }
    else {
        skill.value = parseInt(skill.value) + 1;
    }

}

function atualizaEstatisticas(operacao, skill) {
    habilidades =[];
    
    if(operacao == "-"){
        estatisticas.forEach( (elemento) => {
            elemento.textContent = parseInt(elemento.textContent) - skills[skill][elemento.dataset.estatistica]
            habilidades.push(elemento.textContent);
        })
    } else {
        estatisticas.forEach( (elemento) => {
            elemento.textContent = parseInt(elemento.textContent) + skills[skill][elemento.dataset.estatistica]
            habilidades.push(elemento.textContent);
        })
    }
}


finalizar.addEventListener("click", () =>{

    maior = Math.max(habilidades);
    var maior = habilidades.reduce(function(a,b){
        return Math.max(a,b);
    }, -Infinity);

    var posicaoMaior = habilidades.indexOf(String(maior));
    switch(posicaoMaior){
        case 0:
            imgJogador.src="./img/neymar.png";
            break;
        case 1:
            imgJogador.src="./img/casemiro.png";
            break;
        case 2:
            imgJogador.src="./img/Marquinhos.png";
            break;
        case 3:
            imgJogador.src="./img/alisson.png"
            break;
        default:
            alert('ERRO')
    }

})

