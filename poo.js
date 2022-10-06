class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this._saldo = 0
    }

    get saldo() {
        return this._saldo
    }

    set saldo(valor) {
        this._saldo = valor
    }

    sacar(valor) {
        if(valor > this._saldo) {
            return 'Operação recusada'
        }
        this._saldo = this._saldo - valor
        return this._saldo
    }

    depositar(valor) {
        this._saldo = this._saldo + valor
        return this._saldo
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoDeCredito) {
        super(agencia, numero)
        this.tipo = 'Conta Corrente'
        this._cartaoDeCredito = this.cartaoDeCredito
    }

    get cartaoDeCredito() {
        return this._cartaoDeCredito
    }

    set cartaoDeCredito(valor) {
        this._cartaoDeCredito = valor
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = 'Conta Poupança'
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo)
        this.tipo = 'Conta Universitária'
    }

    sacar(valor) {
        if(valor > 500) {
            return 'Operação recusada'
        }

        this._saldo = this._saldo - valor
        return this._saldo
    }
}