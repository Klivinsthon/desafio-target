let parada = prompt("Digite o número que quer comparar")
let flag
let impressao = ""

function fibonacci() {
    let a = 0
    let b = 1
    let c = 0
    
    while(c < parada) {
        c = a + b
        
        if (parada == c)
            flag = true
        else
            flag = false

            if (c == 1)
                impressao += `${a}, ${b}, ${c}`
            else 
                impressao += `, ${c}`
            a = b
            b = c
    }

    if (flag == true)
        flag = `O número escolhido pertence à sequência`
    else
        flag = `O número escolhido não pertence à sequência`

    alert(`Sequência de Fibonacci: ${impressao} \nNúmero escolhido: ${parada} \n${flag}`)
} fibonacci()