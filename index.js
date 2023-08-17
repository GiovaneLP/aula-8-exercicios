/*Exercício 1 interpretação

1 - Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

a.  false
b.  false
c.  true
d.  boolean

2 - Seu colega se aproxima de você falando que o código dele não funciona como devia.
Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

sim, será impresso no console o primeiro número no lado do segundo número.

3 - Ainda sobre o exercício anterior.
Sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
primeiroNumero = Number(primeiroNumero)
segundoNumero = Number(segundoNumero)
const soma = primeiroNumero + segundoNumero
console.log(soma)

Exercício 2 escrita

1 - Faça um programa que:

a) Pergunte a idade do usuário.

b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga.

c) Imprima no console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true/false).

d) Imprima no console a diferença de idade (não tem problema se sair um número negativo).

Dica: não se esqueça de converter as respostas para o tipo número.

let idade = prompt("Qual é a sua idade")
let idadeAmigo = prompt("Qual é a idade do seu melhor amigo(a)")
console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeAmigo )
idade = Number(idade)
idadeAmigo = Number(idadeAmigo)
console.log("diferença de idade:", idade - idadeAmigo)

2. Faça um programa que:

a) Peça ao usuário que insira um número par.

b) Imprima no console o resto da divisão desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código.

Dica: não se esqueça de converter as respostas para o tipo número.

let par = prompt("insira um número par")
par = Number(par)
console.log("resto da divisão:", par / 2 )
//Ele mostra o número que você colocou dividido por 2.
//Quando o número é ímpar o resultado vai estar quebrado, não vai ser um número inteiro.

3. Faça um programa que:
a) Pergunte ao usuário sua idade em anos.

b) Imprima no console a idade do usuário em meses.

c) Imprima no console a idade do usuário em dias.

d) Imprima no console a idade do usuário em horas.

let idade = prompt("Qual é a sua idade")
idade = Number(idade)
meses = idade * 12
meses = Number(meses)
dias = idade * 365
dias = Number(dias)
horas = dias * 24
console.log("idade em meses:", meses)
console.log("idade em dias:", dias)
console.log("idade em horas:", horas)

4. Faça um programa que pergunte ao usuário dois números.
Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas por true/false:

a) O primeiro numero é maior que segundo? true/false

b) O primeiro numero é igual ao segundo? true/false

c) O primeiro numero é divisível pelo segundo? true/false

d) O segundo numero é divisível pelo primeiro? true/false

Dica: O true/false vai depender dos números inseridos e do resultado das operações.

let numero1 = prompt("digite um número?")
let numero2 = prompt("digite outro número?")
console.log("O número", numero1, "é maior que", numero2, "?", numero1 > numero2 )
console.log("O número", numero1, "é igual a", numero2, "?", numero1 === numero2 )
let divisao = numero1 % numero2 === 0
let divisao2 = numero2 % numero1 === 0
console.log("O número", numero1, "é divisível por", numero2, "?", divisao )
console.log("O número", numero2, "é divisível por", numero1, "?", divisao2 )

*/



