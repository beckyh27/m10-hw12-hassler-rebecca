// YOUR CODE HERE
// Your assignment is to create a class named Car in JavaScript. This class will create objects that have three properties:
// 1. make (String) - The car's manufacturer. E.g. Honda
// 2. model (String) - The type of model. E.g. Civic
// 3. year (Integer) - Four digit year the car was made. E.g. 1998



class Car {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
    //Your class should also have the following methods:
    // honk - This method should log "BEEP BEEP!" to the console when called.
    // performMaintenance - This method should use the setTimeout function to log "maintenance complete" to the console after exactly 3 seconds.
    honk() {
        console.log("BEEP BEEP!")
    }
    performMaintenance() {
        setTimeout(function() {
            console.log("maintenance complete")
        }, 3000)
    }
 
}