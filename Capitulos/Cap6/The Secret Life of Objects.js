//Methods  - Propriedades que contêm valores de função 

//simple method

let pessoa = {};

pessoa.estuda=(nome,materia)=>console.log(`${nome} esta estudando ${materia}`);

pessoa.estuda("Matheus","JavaScript");

console.log('-------------------------Methods simples---------------------------')

 let rabbit = {};

  rabbit.eating=(food)=>{console.log(`The rabbit eating ${food}`)}

 rabbit.speak= function(line){
     console.log(`The rabbit says '${line}'`);
 }

 rabbit.speak("I'm alive");
 rabbit.eating("pizza");





console.log('-------------------------METHODS---------------------------')
 /*Quando uma função é colocada num objeto, ela se torna um metodo e esta sendo referenciada pelo
 objeto que a chama.. */
 function estuda(materia){
     console.log(`${this.nome} esta estudando ${materia}`)
 }

 pessoa1= {nome:"Matheus",estuda};
 pessoa2= {nome:"Luiz"};
pessoa1.estuda("Matematica")

console.log('--------FUNÇÃO CALL()-----------------')
    //Com o call()método, você pode escrever um método que pode ser usado em objetos diferentes.
    //Ela mei oque chama outro objeto para ser referenciado
    
    //whiteRabbit.hi.call(hungryRabbit);
    //speak.call(hungryRabbit, "Burp!");

   //Tão pode ser usado com uma função , recendo como parametro  um objeto e o parametro da função
   estuda.call(pessoa1,"Matematica")
   pessoa1.estuda.call(pessoa2,"Matematica")

console.log('--------CLASSES-----------------')



   