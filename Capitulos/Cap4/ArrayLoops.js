//In the tableFor function, there's a loop like this:
//Adicionando objetos dentro do array
let pessoa=[];
function addEntry(nome,idade){
    pessoa.push({nome,idade});
}
addEntry('Matheus',21);
addEntry('Luiz',18);
addEntry('Pedro',17);

//Classical JavaScript
for(let i=0;i<pessoa.length;i++){
    let entry=pessoa[i];
    console.log(entry);
}
//Modern JavaScript
for(let entry of pessoa){
    console.log(`${entry.idade}`)
}