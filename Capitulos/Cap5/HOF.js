var pessoas=[
   {name:'Matheus' ,sexo:'M'},
   {name:'Maria' ,sexo:'F'},
   {name:'Emilia' ,sexo:'F'},
   {name:'Paulo' ,sexo:'M'},
   {name:'Pedro' ,sexo:'M'},
   {name:'Angelica' ,sexo:'F'},
   {name:'Douglas' ,sexo:'M'}
]
//Filter cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida

let mulheres=pessoas.filter(pessoa=> pessoa.sexo==='F');

//console.log(mulheres)
let valores = num=>num>10;


let numeros=[2,5,6,8,10,12,15,16,14,19].filter(valores);
console.log(numeros)