const bolas = document.getElementsByClassName('ball');
const textoCor = document.getElementById('rgb-color');
const textoResposta = document.getElementById('answer')
const cores = [];

function numeroAleatorio() {
    const numero = Math.floor(Math.random() * 256);
    return numero;
}

function corAleatoria() {
    const rgb = `rgb(${numeroAleatorio(256)}, ${numeroAleatorio(256)}, ${numeroAleatorio(256)})`;
    return rgb;
}

function cliqueNaBola(){
    const corSelecionada = event.target.style.backgroundcolor;
    if (corSelecionada === textoCor.textContent) {
        textoResposta.textContent = 'Acertou'

    } else {
        textoResposta.textContent = 'Errou! Tente novamente.'

    }
}

for (let bola = 0; bola < bolas.length; bola += 1) {
    const cor = corAleatoria();
    bolas[bola].style.backgroundcolor = cor;
    cores[bola] = cor;
    bolas[bola].addEventListener('click', cliqueNaBola);
}

function adicionaCorAleatoria() {
    textoCor.textContent = cores[numeroAleatorio(6)]
}

adicionaCorAleatoria()