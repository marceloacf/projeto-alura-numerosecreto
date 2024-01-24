let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
exibirMensagemInicial();

function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute(){
    let numeroEscolhido = document.querySelector("input").value;

    if(numeroEscolhido == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou");
        exibirTextoNaTela("p", `Você descobriu o número secreto em ${tentativas} tentativa(s)`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(numeroEscolhido < numeroSecreto){
            exibirTextoNaTela("p", "O número digitado é menor que o número secreto");
        }else{
            exibirTextoNaTela("p", "O número digitado é maior que o número secreto");
        }
        tentativas++;
        limparCampo();
    }
    
}

function gerarNumeroAleatorio(){
    let numeroSorteado = parseInt(Math.random() * 10 + 1);
    let quantidadeDeNumerosSorteados = listaDeNumerosSorteados.length;
    if(quantidadeDeNumerosSorteados == 10){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroSorteado)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroSorteado);
        return numeroSorteado;
    }
    
}

function limparCampo(){
    numeroEscolhido = document.querySelector("input");
    numeroEscolhido.value = "";
}

function reiniciarCampo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}




