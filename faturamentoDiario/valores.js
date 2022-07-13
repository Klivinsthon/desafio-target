function calcularMenorFaturamento(dados) {
    let valores = []
    let retornoFaturamento = []

    // armazena apenas os valores do json no array valores
    dados.forEach(
        elementoAtual => {
            valores.push(elementoAtual["valor"])
        }
    )

    let faturamento = Math.min(...valores) // método usado para localizar o menor valor dentro do array
    let dia = ""

    // busca a data que corresponde ao menor valor do array
    dados.forEach(
        elementoAtual => {
            if (elementoAtual["valor"] == faturamento)
            dia = elementoAtual["dia"]
        }
    )

    retornoFaturamento.push(dia, faturamento)

    return retornoFaturamento
}

function calcularMaiorFaturamento(dados) {
    let valores = []
    let retornoFaturamento = []

    // armazena apenas os valores do json no array valores
    dados.forEach(
        elementoAtual => {
            valores.push(elementoAtual["valor"])
        }
    )

    let faturamento = Math.max(...valores) // método usado para localizar o menor valor dentro do array
    let dia = ""

    // busca a data que corresponde ao menor valor do array
    dados.forEach(
        elementoAtual => {
            if (elementoAtual["valor"] == faturamento)
            dia = elementoAtual["dia"]
        }
    )

    retornoFaturamento.push(dia, faturamento)

    return retornoFaturamento
}

export {calcularMaiorFaturamento, calcularMenorFaturamento}