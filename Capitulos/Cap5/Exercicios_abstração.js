/* Codigo nao abstrato
for(let i=0;i<=50;i++){
    console.log(i);
}*/
let Intervalo= (c,f,action)=>{
    for(let i=c;i<f;i++){
        action(i);
    }
}
let numbers=[];

    Intervalo(1,5,action=>
        numbers.push(`Unit ${action}`)
        )

    console.log(numbers)    
