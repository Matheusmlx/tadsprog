//Javascript Object Notation

//function JSON.stringify and JSON.parse 

let pessoa={squirrel:false ,events:["weekend"]};
console.log(typeof pessoa);
console.log(pessoa)
console.log('--------convertando para json-------------')
let pessoaj=JSON.stringify(pessoa);
console.log(typeof pessoaj);
console.log(pessoaj)
console.log('--------convertando para outro-------------')
console.log(JSON.parse(pessoaj));
//sendo especificando na conversão para obj
console.log(JSON.parse(pessoaj).squirrel)


