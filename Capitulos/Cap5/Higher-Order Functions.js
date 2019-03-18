/*
let total=0,count=1;
while(count<=10){
    console.log(total);
    total+=count;
    count+=1;

    }
//console.log(total);
//The second relies on two external functions and is one line long.
console.log(sum(range(1, 10)));
*/
function greaterThan(n){
    return m=>m>n;
}
let greaterThan10=greaterThan(10);
//console.log(greaterThan10(11));

//And we can have functions tha change other functions 
function noisy(f){
    return(...args)=>{
        console.log(`Calling with ${args}`);
        let result=f(...args);
        console.log(`called with ${args} returned ${result}`);
        return result;
    };
}
noisy(Math.min)(5,4,10);

