let Numbers=[4,2,5];

let remember=(task)=>{
    Numbers.push(task);
}
let getTask= ()=> Numbers.shift();

let remberUrgently=(task)=>{
    Numbers.unshift(task);
}

remember(10);
console.log(Numbers);
//Remove o primeiro do Array
getTask();
console.log(Numbers);
//Acrescenta na primeira posição
remberUrgently(5);
console.log(Numbers);
