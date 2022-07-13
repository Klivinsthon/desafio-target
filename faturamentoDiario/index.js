import { calcularMedia, diasMedia } from "./media.js"
import { calcularMaiorFaturamento, calcularMenorFaturamento } from "./valores.js"
import {filtrarFaturamento} from "./filtro.js"

// coleta os dados do arquivo json
async function requisicaoDados() {
    try {
        const requisição = await fetch("./faturamento.json")
        const retornoJson = await requisição.json()
        return retornoJson
    } catch (e) {
        alert(`Algo de errado aconteceu, tente novamente em alguns segundos!`)
    }
}

function imprimirDados(retorno) {
    let retornoFiltro = filtrarFaturamento(retorno)
    let faturamentoTotal = calcularMedia(retornoFiltro)[0].toFixed(2)
    let mediaFaturamento = calcularMedia(retornoFiltro)[1].toFixed(2)
    let menorFaturamento = calcularMenorFaturamento(retornoFiltro)
    let maiorFaturamento = calcularMaiorFaturamento(retornoFiltro)
    let DiasAcimaMedia = diasMedia(retorno, mediaFaturamento)

    alert(
        `* FATURAMENTO TOTAL = ${faturamentoTotal} \n* MAIOR FATURAMENTO = ${maiorFaturamento[1].toFixed(2)} - dia ${maiorFaturamento[0]}  \n* MENOR FATURAMENTO = ${menorFaturamento[1].toFixed(2)} - dia ${menorFaturamento[0]}  \n* MÉDIA MENSAL = ${mediaFaturamento} \n* ${DiasAcimaMedia} DIAS FICARAM ACIMA DA MÉDIA.`
    )
}


requisicaoDados().then(
    retorno => {
        imprimirDados(retorno)
    }
)