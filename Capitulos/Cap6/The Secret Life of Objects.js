//Methods  - Propriedades que contêm valores de função 
//simple method
/*
 let rabbit = {};

  rabbit.eating=(food)=>{console.log(`The rabbit eating ${food}`)}

 rabbit.speak= function(line){
     console.log(`The rabbit says '${line}'`);
 }

 rabbit.speak("I'm alive");
 rabbit.eating("pizza");
 */

 /*Quando uma função é colocada num objeto, ela se torna um metodo e esta sendo referenciada pelo
 objeto que a chama.. */

 function speak(line) {
    console.log(`The ${this.type} coelho says '${line}'`);
    }
 function hi(){console.log(`Ola ${this.type}`)}

    let whiteRabbit = {type: "white", speak,hi};
    let hungryRabbit = {type: "hungry", speak};

    //whiteRabbit.speak("Oh my ears and whiskers, " +"how late it's getting!");
    
    //Com o call()método, você pode escrever um método que pode ser usado em objetos diferentes.
    whiteRabbit.hi.call(hungryRabbit);
    //speak.call(hungryRabbit, "Burp!");

    console.log('--------ArrowFunctions And Functions-----------------')
    
    function normalize(){
        console.log(this.coords.map(n=>n/this.length));
    }

    normalize.call({coords:[0,2,3],length:5})
