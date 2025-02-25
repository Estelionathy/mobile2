<title>par ou ímpar</title>

var input = rrequire('readline-sync')
console.log ('par ou ímpar')
const numero = Number (input.question("Digite um número"))
if (numero % 2 == 0) {
    console.log ('$ {numero} é par!')
}
else {
    console.log ("$ {numero} é ímpar!")
}