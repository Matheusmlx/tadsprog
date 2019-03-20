/*class Calc{
    constructor(num1,num2){
        this.num1=num1;
        this.num2=num2;
    }
    out(){
       console.log( this.num1,this.num2);
    }
}
*/
const Calc=function(num1,num2){
    this.num1=num1;
    this.num2=num2;

    return {
       out:()=>{
           console.log(this.num1,this.num2)
       }
    }
}


const numero=new Calc(4,2);

numero.out.bind({num1:4,num2:45})();


