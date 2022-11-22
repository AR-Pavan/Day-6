class Circle{
   constructor(radius,color){
    this.radius = radius;
    this.color = color; 
   }

   get getRadius(){
       return this.radius; 
   }
    set setRadius(newRadius){
    this.radius  = newRadius;
   }

   get getColor(){
    return this.color;
   }

   set setColor(newColor){
    this.color = newColor;
   }

}

let circle = new Circle(1.0,"red");

function toString(obj) {
    let str = JSON.stringify(obj);
    return str;
}
let getrad = circle.getRadius;
console.log("get Radius : ",getrad);

circle.setRadius = 1.0;
console.log("set Radius : ",circle.radius);

console.log("get color : ",circle.getColor);

circle.setColor = "blue";
console.log("set color : ",circle.color);

let objToString = toString(circle);
console.log("object to string : ",objToString);

function getArea(obj){
   let r = obj.radius;
   return r * Math.PI;
}

console.log("Area : ",getArea(circle));

function getCircumference(obj){
    let r = obj.radius;
    return 2 * Math.PI * r; 
}

console.log("Circumference : ",getCircumference(circle));