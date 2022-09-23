const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        /*
        switch:
        - É uma seleção múltipla
        - Não é uma expressão relacional(que retorna um valor verdadeiro ou falso)
        - Por padrão é utilizado o "break"
        - Se caso não tiver o "break" ele utiliza um método cascata
        */ 
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break 
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida') 
    }
    console.log('Fim!')
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11) 

//A maioria é feita em modo cascata
/* 

Sempre quando for utilizado este modo "switch" utilizar o "break".
O "break" faz com que saia do bloco e volte.} EXEMPLO ABAIXO:

"
Quadro de Honra
Fim!
Aprovado
Fim!
Recuperação
Fim!
Reprovado
Fim!
Nota inválida
Fim!
Nota inválida
Fim!
"

*/
