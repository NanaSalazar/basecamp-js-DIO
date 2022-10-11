//ECMAScript Error DOMException
//Try catch
/*

function verificaPalindromo(string) {
    if (!string) throw 'String inválida!'

    return string === string.split('').reverse().join('')
}

function tryCatchExemplo(string) {
    try {
        return verificaPalindromo(string)
    }
    catch(e) {
        throw e
    }
    finally {
        console.log(string)
        console.log('A string enviada foi: ' + string)
    }
}
tryCatchExemplo('arara')

const meuErro = new Error('Mensagem de Erro')
meuErro.name = 'Invalid Message'

throw meuErro

*/

//=======

const myArr = [1, 2, 3, 4, 5]

function validation(arr, number) {

    try {
        if(!arr && !number) throw new ReferenceError('Envie os parâmetros corretamente.')
        if (typeof arr !== 'object') throw new TypeError('O array precisa ser do tipo Object')
        if (typeof number !== 'number') throw new TypeError('O número precisa ser do tipo número')
        if (arr.length !== number) throw new RangeError('O tamanho é inválido')

        return arr
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log('Este erro é um Reference Error')
            console.log(e.message)
        } else if(e instanceof TypeError){
            console.log('Este erro é um Type Error')
            console.log(e.message)
        } else if(e instanceof RangeError){
            console.log('Este erro é um Range Error')
            console.log(e.message)
        } else {
            console.log('Erro de um tipo inesperado:' + e)
        }
    }
    
}

console.log(validation(myArr))