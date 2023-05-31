//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass").Vehicle

//this shows how to call from this module...



//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...
class Car extends VehicleModule{
    constructor(make, model, year, color, milage){
        super(make, model, year, color, milage)
        this.passenger = 0;
        this.maximumPassengers = 5;
        this.maximumSpeed= 160;
        this.fuel = 10;
        this.scheduleService= false;
        this.speed = 0;
        this.started = false;
        this.numberOfWheels = 4;
    }
}
let v = new Car("Mercury", "Sedan", "1965", "color", "50000");
console.log(v.make)
v.start()










//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
