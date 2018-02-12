// function Automobile(wheels) {
//     this.wheels = wheels;
//     this.setColor = () => {
//         return this.color
//     }
// }

// function Sedan(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.doors = (4)
// }
// function Camry(){

// }
// Sedan.prototype = new Automobile(4)

// Camry.prototype = new Sedan(
//     'Toyota', 'Camry')

// const camry = new Camry()
// console.log(camry.doors)
// console.log(camry.wheels)
// camry.year=2018
// console.log(2018)


class Automobile{
    constructor(wheels){
    this.wheels=wheels;
    this.color=null
    }
    setColor(color){
        this.color=color
    }
    getColor(){
        return this.color
    }}

class Motorcycle extends Automobile{
    constructor(make, model, year){
        super(2)
        this.make=make;
        this.year=year;
        this.model=model;

    }
}

const motorcycle = new Motorcycle()

class Sedan extends Automobile{
    constructor(doors){
        this.doors=doors
    }
}

class Maybach extends Sedan{
    constructor(make, model, year){
        super(4)
        this.make=make
        this.model=model
        this.year=year
    }
}
const MyNewCar=new Maybach('Mercedes', 'maybach', '2018')

