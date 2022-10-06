//====== map

const numbers = [1, 2, 3, 4, 5]
let newNumbers = numbers.map((number) => number * 2)
console.log(newNumbers)


const pairNumber = {
    value: 6,
}

const oddNumber = {
    value: 5,
}

function mapWithThis(arr, thisArg) {
    return arr.map(function (number){
        return number * this.value
    }, thisArg)
}

const _numbers = [2, 3]

console.log('this -> pairNumber', mapWithThis(_numbers, pairNumber))
console.log('this -> oddNumber', mapWithThis(_numbers, oddNumber))



//==== filter

const someNumbers = [1, 2, 5, 8, 11, 14, 16, 19]

const pairNumbers = someNumbers.filter((number) => {
    if(number % 2 === 0) {
        return number
    }
})

console.log(pairNumbers)

//====== reduce

function sumNumbers(arr) {
    return arr.reduce((previous, current) => previous + current)
}

const arr = [1, 2, 3]
console.log(sumNumbers(arr))


const lista = [
    {
        item: 'pão',
        preco: 3
    },
    {
        item: 'leite',
        preco: 4
    },
    {
        item: 'biscoito',
        preco: 2
    },
    {
        item: 'manteiga',
        preco: 7
    }
]

const saldoDisponivel = 50

function saldoFinal (saldoDisponivel, lista) {
    return lista.reduce(function(previous, current){
        return previous - current.preco
    }, saldoDisponivel)
}

console.log(saldoFinal(saldoDisponivel, lista))