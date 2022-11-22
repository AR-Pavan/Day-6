//Write a “person” class to hold all the details;

class Person {
    constructor(name, age, dob, native, mobile, email, batch) {
        this.name=name;
        this.age=age;
        this.dob=dob;
        this.native=native;
        this.mobile=mobile;
        this.email=email;
        this.batch=batch;
    }
}
var p = new Person("Raghu", "23", "20-Sep-1999", "Anantapur", "999999999", "helloraghu@gmail.com", "FSD-B29WE-ENGLISH");
console.log(p);