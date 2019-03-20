/*O método map() invoca a função callback passada
 por argumento para cada elemento do Array e devolve um novo Array como resultado. */

 /*Exemplo 1 */
 var numbers=[1,4,9];
 var roots=numbers.map(Math.sqrt);
 console.log(roots);

 console.log('--------EXEMPLO 2--------');
 /*
var more2=numbers.map(function maisdois(numero){
    return numero+=2;
});
*/
let numeros=numero => numero+=2;

var more2=numbers.map(numeros);
console.log(more2);

console.log('--------EXEMPLO 3--------');
var description=numbers.map(number=>`Posicao ${number}`)
 
console.log(description);

console.log('--------EXEMPLO 4--------');
var par=numbers.map(number=>number%2==0);
console.log(par);

console.log('--------EXEMPLO 5--------');

var people=[
    {name:'Matheus',sex:'M'},
    {name:'Thomas', sex:'M'},
    {name:'Myla', sex:'F'},
    {name:'TIsaBela', sex:'F'},
    {name:'Luiza', sex:'F'}
]
//Retorna todos 
//var womans= people.map(woman=>woman.sex=='M');
//Retorna apenas que passaram do teste 
var womans= people.filter(woman=>woman.sex=='M');
console.log(womans);