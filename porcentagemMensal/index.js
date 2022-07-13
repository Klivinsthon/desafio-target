import calcularPorcentagem from "./faturamentoMensal.js";

function imprimir() {
    let total = calcularPorcentagem()[0]
    let representacaoSP = calcularPorcentagem()[1]
    let representacaoRJ = calcularPorcentagem()[2]
    let representacaoMG = calcularPorcentagem()[3]
    let representacaoES = calcularPorcentagem()[4]
    let representacaoOutros = calcularPorcentagem()[5]
    
    alert(`* FATURAMENTO TOTAL: ${total} \n* PERCENTUAL SP: ${representacaoSP}% \n* PERCENTUAL RJ: ${representacaoRJ}% \n* PERCENTUAL MG: ${representacaoMG}% \n* PERCENTUAL ES: ${representacaoES}% \n* PERCENTUAL DEMAIS ESTADOS: ${representacaoOutros}%`)
} imprimir()