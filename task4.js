//write a class to calculate the uber price.

class Uber {
    constructor(model,type,capacity,distance,price){
        this.model = model;
        this.type = type;
        this.capacity = capacity;
        this.distance = distance;
        this.price = price||10;
    }
}

function calculate(obj){
    return obj.distance * obj.price;
}
let car1 = new Uber("Innova","SUV","7-seater",10);
console.log("Rs.",calculate(car1));
