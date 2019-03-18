/* As abstrações escondem detalhes e nos dão a capacidade de falar sobre
problemas em um nível mais alto (ou mais abstrato). */
/*O segundo é mais curto e mais fácil de interpretar. Mas você precisa entender
mais algumas palavras relacionadas */
//Sema abstraction
/*
for(let i=0;i<10;i++){
    console.log(i);
}*/
/* N times
 function repeatLog(n){
    for(let i=0;i<n;i++){
        console.log(i);
    }
 }
 */
//Can pass our action as a function value 
let repeat=(n,action)=>{
    for(let i=0;i<n;i++){
        action(i)
    }
}
repeat(3,console.log);

let labels =[];

repeat(5,i=>{
    labels.push(`Unit ${i+1}`);
});

console.log(labels);


