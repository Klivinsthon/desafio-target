let string = prompt("Digite uma palavra")


function inverterString() {
    let stringLength = string.length
    let reverseString = ""

    for (i = stringLength - 1; i >=0 ; i-- ) {
        reverseString += string[i]
    }

    alert(`Palavra original: ${string} \nPalavra invertida: ${reverseString}`)
} inverterString()