export function filtrarFaturamento(dados) {
    let listaFaturamento = []

    // percore o array e retorna apenas os dias com faturamento maior que 0
    dados.forEach(
        elementoAtual => {
            if (elementoAtual["valor"] > 0) {
                listaFaturamento.push(elementoAtual)
            }
        }
    )

    return listaFaturamento
}