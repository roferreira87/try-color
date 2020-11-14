const bolas = document.getElementsByClassName('ball');
const textoCor = document.getElementById('rgb-color');
const textoResposta = document.getElementById('answer')
const botaoReiniciar = document.getElementById('reset-game')
const cores = [];

function numeroAleatorio(mul) {
    const numero = Math.floor(Math.random() * mul);
    return numero;
}

function corAleatoria() {
    const rgb = `rgb(${numeroAleatorio(256)}, ${numeroAleatorio(256)}, ${numeroAleatorio(256)})`;
    return rgb;
}

function cliqueNaBola(event){
    const corSelecionada = event.target.style.backgroundcolor;
    if (corSelecionada === textoCor.textContent) {
        textoResposta.textContent = 'Acertou';
    } else {
        textoResposta.textContent = 'Errou! Tente novamente!';
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

adicionaCorAleatoria();

function reiniciajogo() {
    window.location.reload();
}

botaoReiniciar.addEventListener('click', reiniciajogo);
