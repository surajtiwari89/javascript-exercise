function Car(color,weight){
    this.colorprpty=color;
    this.weightprpty=weight;
    this.engineRunning=false;
}

const mycar=new Car("Red",48);
console.log(mycar.colorprpty);

mycar.colorprpty="violet"
console.log(mycar.colorprpty)

Car.prototype.startEngine=function(){
    this.engineRunning=true;
}

mycar.startEngine()
console.log(mycar.engineRunning)


class Carmy{
    constructor(color,wt){
        this.color1= color;
        this.wt1=wt;
        this.enginestatus=false;
        this.something = 'what';
    }

    startEngine(){
        this.enginestatus=true;
    }
}

const carmymy = new Carmy("red",46);
console.log(carmymy.color1)
console.log(carmymy.enginestatus)//!this is false
carmymy.startEngine()//!this is makes it true
console.log(carmymy.enginestatus)//! Now it is true
process.stdout.write(carmymy.something) // this is another way to print output on javascript

