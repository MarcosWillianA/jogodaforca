const forca = document.querySelector('#imagemForca');
const dica = document.querySelector('#dica');
const displayLetras = document.querySelector('#displayLetras');
const teclas = document.querySelectorAll('.teclas');
teclas.innerHTML = teclas.value
const reiniciar = document.querySelector('#botao-reiniciar');

const palavras = {
    país: ['brasil', 'argentina', 'mexico', 'alemanha', 'espanha', 'frança', 'japão', 'china', 'índia', 'rússia', 'egito', 'turquia', 'austrália', 'gana', 'senegal', 'filipinas', 'mali'],
    nome: ['marcos', 'miguel', 'rosângela', 'érica', 'gabriel', 'enzo', 'valentina', 'pedro', 'paulo', 'alex', 'jéssica', 'suzana', 'mônica', 'larissa', 'ronaldo', 'tomás', 'beatriz', 'bianca', 'juliana'],
    animal: ['leão', 'capivara', 'tigre', 'elefante', 'girafa', 'canguru', 'vespa', 'cavalo', 'golfinho', 'tucano', 'jacaré', 'urso', 'raposa', 'lobo', 'pinguim', 'zebra', 'pantera', 'avestruz', 'cobra', 'lagarto', 'guaxinim'],
    objeto: ['mesa', 'cadeira', 'livro', 'telefone', 'computador', 'caneta', 'garrafa', 'relógio', 'janela', 'porta', 'sofa', 'carteira', 'chave', 'espelho', 'prato', 'fogão', 'bicicleta', 'teclado', 'monitor', 'colher'],
    anatomia: ['cabeça', 'braço', 'perna', 'mão', 'pé', 'olho', 'orelha', 'nariz', 'boca', 'coração', 'pulmão', 'estômago', 'fígado', 'rim', 'dente', 'língua', 'joelho', 'tornozelo', 'pulso', 'costela'],
    comida: ['arroz', 'feijão', 'banana', 'maçã', 'laranja', 'tomate', 'cenoura', 'batata', 'pão', 'queijo', 'frango', 'peixe', 'ovo', 'alface', 'brócolis', 'chocolate', 'açúcar', 'sal', 'mel', 'iogurte']
}

let erros = 0;
let letraEscolhida = ''; 
let inputLetras;
let escolha = escolherPalavra(palavras);


// Função para escolher palavra aleatória 

function escolherPalavra (objeto) {
    chaves = Object.keys(objeto);
    chaveAleatoria = chaves[Math.floor(Math.random() * chaves.length)];
    arrayEscolhido = objeto[chaveAleatoria];
    palavraAleatoria = arrayEscolhido[Math.floor(Math.random() * arrayEscolhido.length)];
    return {
        chave: chaveAleatoria, 
        string: palavraAleatoria
    }
}

console.log(`Chave escolhida: ${escolha.chave}, string escolhida: ${escolha.string}`);
dica.innerHTML = `dica: ${escolha.chave}`;
letrasIsoladas = escolha.string.split('');
console.log(letrasIsoladas);

// Função para gerar os letreiros aleatoriamente

function gerarLetreiro () {
    for (i = 0; i < escolha.string.length; i++) {
        inputLetras = document.createElement('input');
        inputLetras.type = 'text';
        inputLetras.classList.add('inputLetras');
        displayLetras.appendChild(inputLetras);
    }
    return inputLetras;
}

gerarLetreiro();

// Função para capturar as letras dos botões // Comparar 

function digitarLetras () {
    teclas.forEach(tecla => {
        tecla.addEventListener('click', () => {
            letraEscolhida = tecla.value;  // Armazena o valor do botão
            tecla.style.pointerEvents = 'none';
            tecla.style.opacity = '0.5'
            tecla.style.color = '#FF0000'
            console.log(letraEscolhida);

            //Fazer a comparação e colocar as letras corretas no letreiro: 

            letrasIsoladas.forEach((letra, indice) => {
                if (letraEscolhida === letra) {
                    document.querySelectorAll('.inputLetras')[indice].value = letra;
                    tecla.style.color = '#FFFF00';
                }
            }) 

            if (letrasIsoladas.includes(letraEscolhida) === false) {
                erros++;
                console.log(erros);
                forca.setAttribute('src', `img/forca0${erros}.png`);
                if (erros > 5) {
                    teclas.forEach(tecla => {
                        tecla.style.pointerEvents = 'none';
                    })
                    console.log('Game Over!');
                    letrasIsoladas.forEach((letra, indice) => {
                        document.querySelectorAll('.inputLetras')[indice].value = letra;
                    }) 
                    return;
                }
            }
        });
    });
}

digitarLetras();