function calcularMedia(dados) {
    let soma = 0
    let elementos = dados.length
    let media = 0
    let retornoCalculos = []

    // soma os valores e adiciona na variável soma
    dados.forEach(
        elementoAtual => {
            soma += elementoAtual["valor"]
        }
    )

    // cálculo da média
    media = soma / elementos
    retornoCalculos.push(soma, media)

    return retornoCalculos
}

function diasMedia(dados, media) {
    let dias = 0

    dados.filter(
        elementoAtual => {
            if (elementoAtual["valor"] > media)
                dias++
        }
    )

    return dias
}



export { calcularMedia, diasMedia }