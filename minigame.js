let neymar
let gramado
let gol
const tamanho = 64
const velocidade = 64
const tamanhos = 576

let andarX = 0
let andarY = 0

let botao

// Executada apenas uma vez ao iniciar o programa
function setup() {
    createCanvas(576, 576);

    gramado = loadImage('gramado.jpg')
    neymar = loadImage('neymar.png')
    gol = loadImage('gol.jpg')

}

// Executa até que o programa se encerre
function draw() {
    background(220);

    if (andarX < 0) {
        andarX = 0
    }

    if (andarY < 0) {
        andarY = 0
    }

    if (andarX > tamanho * 8) {
        andarX = tamanho * 8
    }

    if (andarY > tamanho * 8) {
        andarY = tamanho * 8
    }

    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            image(gramado, 0, 0)
        }
    }

    image(neymar, andarX, andarY, tamanho, tamanho)

    if (andarX === tamanho * 8 && andarY === tamanho * 4) {
        // Criar um retângulo
        rect(160, 160, 256, 256)
        // Escrever o texto ganhou
        textSize(35)
        text('GOOOOL!!!', 200, 300)
        // Criar um botão
        botao = createButton('Reiniciar')
        // Resetar o jogo
        botao.mousePressed(reset)
        // Parar o jogo (loop)
        noLoop()
    }

}

function reset() {
    andarX = 0
    andarY = 0
    botao.remove()
    loop()
}

// É chamada uma vez sempre que uma tecla é pressionada.
function keyPressed() {
    //UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW
    if (keyIsDown(DOWN_ARROW)) {
        andarY += velocidade
    }

    if (keyIsDown(UP_ARROW)) {
        andarY -= velocidade
    }

    if (keyIsDown(RIGHT_ARROW)) {
        andarX += velocidade
    }

    if (keyIsDown(LEFT_ARROW)) {
        andarX -= velocidade
    }
}