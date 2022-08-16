var display = "" //variavel pra consumo interno
var $display = document.querySelector('.calc-display') //variavel do elemento dom

//limpa display
function clean() {
    display = ""
    updateDisplay(display)
}
function validate(operator) {
    let operators = ['+', '-', '*', '/']

    // Valida se já não existe operador como último caracter
    if (operators.indexOf(operator) > -1) {
        if (display.length == 0) {
            return false
        }

        return operators.indexOf(display[display.length - 1]) == -1
    }

    return true
}

//calcula
function calc() {
    try {
        var computed = eval(display)

        updateDisplay(computed)
    } catch (error) {
        updateDisplay('erro')
    }
}
//atualiza a tela
function updateDisplay(value) {
    $display.innerHTML = value
}
//cuida co click dos botões
function handleClick(value) {
    if(validate(value)) {
        display += value
        updateDisplay(display)
    }
}