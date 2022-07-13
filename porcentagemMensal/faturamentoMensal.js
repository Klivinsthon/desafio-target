let sp = 67836.43
let rj = 36678.66
let mg = 29229.88
let es = 27165.48
let outros = 19849.53
let total = (sp + rj + mg + es + outros)

function calcularPorcentagem() {
    let retorno = []

    // representação de SP
    let porcentagemSP = (sp * 100 / total)
    porcentagemSP = parseFloat(porcentagemSP.toFixed(2))

    // representação do RJ
    let porcentagemRJ = (rj * 100 / total)
    porcentagemRJ = parseFloat(porcentagemRJ.toFixed(2))

    // representação de MG
    let porcentagemMG = (mg * 100 / total)
    porcentagemMG = parseFloat(porcentagemMG.toFixed(2))

    // representação do ES
    let porcentagemES = (es * 100 / total)
    porcentagemES = parseFloat(porcentagemES.toFixed(2))

    // representação dos outros estados
    let porcentagemOutros = (outros * 100 / total)
    porcentagemOutros = parseFloat(porcentagemOutros.toFixed(2))

    retorno.push(total, porcentagemSP, porcentagemRJ, porcentagemMG, porcentagemES, porcentagemOutros)
    
    return retorno
}

export default calcularPorcentagem

