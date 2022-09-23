function goodNews(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

goodNews(8.1)
goodNews(6.1)

//-----------------------------------------------------------

function speakTrue(valor) {
    if(valor) {
        console.log('É verdade...' + valor)
    }
}

speakTrue()
speakTrue(null)
speakTrue(undefined)
speakTrue(NaN)
speakTrue('')
speakTrue(0)
speakTrue(-1)
speakTrue(' ')
speakTrue('?')
speakTrue([])
speakTrue([1, 2])
speakTrue({})

//-------------------------------------------------------------

function newsLetter(news) {
    if(news) {
        console.log('A mais concorrida de todos - ' + news)
    }
}

newsLetter(true)
newsLetter(false)
//-------------------------------------------------------------
