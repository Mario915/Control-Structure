//Cuidados com "IF"
function teste1(num) {
    if(num > 7)
    console.log(num)
    console.log('final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {
        console.log(num)// Tomar cuidado com o ";" não usar com as estruturas de controle
    }
}

teste2(6)
teste2(8)