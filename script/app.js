const forca = document.querySelector('#imagem-forca');
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

let erros;
let letraEscolhida; 
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
        let inputLetras = document.createElement('input');
        inputLetras.type = 'text';
        inputLetras.classList.add('inputLetras');
        displayLetras.appendChild(inputLetras);
    }
}

gerarLetreiro();

// Função para capturar as letras dos botões

function digitarLetras () {
    teclas.forEach(tecla => {
        tecla.addEventListener('click', () => {
            letraEscolhida = tecla.value;  // Armazena o valor do botão
            console.log(letraEscolhida);
        });
    });
}

// Função para comparar as letras 

function compararLetras () {
    letrasIsoladas.forEach(letra => {
        if (letra === letraEscolhida) {
            console.log(`As letras são iguais`);
        }
        else {
            console.log(`As letras são diferentes!`)
        }
    })
    
}

compararLetras();