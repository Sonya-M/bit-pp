// #Airport

// In your IDE of choice, create a new JavaScript file named airport.js and make
// it so that all code written in the file follows JS strict mode.

// Create an anonymous immediately-invoking function that will hold the main
// execution of all program calls. Writing a simple command console.log("Hi")
// inside this function and running the code should output "Hi" in the console.

// Create constructor functions with properties representing the following:

// - `Person` - name, surname
// - `Seat` - number, category (can be "b" for business or "e" for economy)
// - `Passenger` - person (instance of Person), seat (instance of Seat)
// - `Flight` - route, date and list of passengers (initially empty)
// - `Airport` - name (should be a hard-coded value "Nikola Tesla"), list of
//   flights

// If category is not provided for Seat, assume it’s economy ("e").

// If seat number is not provided, assign a random number between 10 and 100.

// Add `getData` method to `Person`. It should return a formatted string
// containing the name and surname of the person.

// "John", "Snow" -> "John Snow"

// Add `getData` method to `Seat`. It should return a formatted string
// containing a seat number and category.

// 	12, "B" -> "12, B"

// Add `getData` method to `Passenger`. It should return a formatted string
// containing a seat number, category letter (always in uppercase), a name and
// surname. To display seat data, use `getData` method of the Seat object. The
// same goes for the person data.

// personObj, seatObj -> 12, B, John Snow

// Add `addPassenger` method to `Flight`. It should receive `Passenger` and add
// the passenger to the passenger list of a given flight.

// Add `addFlight` method to `Airport`. It should add the flight to the list of
// flights of the airport.

// Add `getData` method to `Flight`. It should return a formatted string
// containing a date, route, all data related to the flight and list of
// passengers with their data.

// 25.10.2017, Belgrade - Paris

// 	1, B, John Snow

// 	2, E, Cersei Lannister

// Inside your immediately-invoking function, add `createFlight` function that
// receives a route (ex. Belgrade - New York) and date as parameters and returns
// a created `Flight`.

// Inside your immediately-invoking function, add `createPassenger` function
// that receives a first name, last name, seat number and category and returns a
// created `Passenger`.

// In you main program function, create an instance of the `Airport` object.

// Create two instances of the `Flight` object using the `createFlight` function
// and the following data:

// route: "Belgrade - New York"         date: "Oct 25 2017"

// route: "Barcelona - Belgrade"        date: "Nov 11 2017"

// Create four instances of the `Passenger` object using the `createPassenger`
// function with the following data:

// Name: "John"     surname: "Snow"         seat number: 1      category: "b"

// Name: "Cersei"   surname: "Lannister"    seat number: 2      category: "b"

// Name: "Daenerys"     surname: "Targaryen"    seat number: 14

// Name: "Tyrion"   surname: "Lannister"    

// Add the first two passengers to the first flight and the second two to the
// second flight using the Flight’s `addPassenger` method.

// Add the created flight instances to the airport using Airport’s `addFlight`
// method.

// Call Airport’s `getData` method to display the airport data output in the
// following manner:

// Airport: Nikola Tesla, total passengers: 4

// 	25.10.2017, Belgrade - Paris

// 	1, B, John Snow

// 	2, E, Cersei Lannister

// 	11.11.2017, Barcelona - Belgrade

// 	3, E, Daenerys Targaryen

// 	4, E, Tyrion Lannister

// ##Hints

// - List is a synonym for array, so when we say a list of flights, it’s
//   actually an array of flight objects   
// - Use JS built-in Date()object to parse input date
// - Use \t and \n special strings to format output
// - Use built-in String methods to transform text from lowercase to uppercase
// - Use Array’s built-in methods to add and remove elements from an array

// ##Extra

// Modify `Flight` `getData` method to return a formatted string as date and
// route (as the first and the last consonant of the starting location - the
// first and the last consonant of the destination location) of the current
// flight.

// "Belgrade - Paris", "25.09.2017" -> 25.09.2017 BD - PS

// While adding passenger with `addPassenger` method, make sure that:

// - Two passengers can not have the same seat number;
// - The flight can not have more than 100 passengers;
// - If a passenger with the same full name exists in a flight list, you should
//   replace the existing passenger’s data with new data (e.g. it can happen
//   when a passenger changes seats).

// Modify Passenger’s `getData` method to return full category name "business"
// for "b" and "economy" for "e".

// Add the total number of passengers in business category for each flight and
// the total number of business category passengers for the airport to final
// output.

// rewritten using classes

/* jshint esversion: 6 */

(function () {
    /**
     * @param {number} lo 
     * @param {number} hi 
     * @returns random number in range [lo, hi); if hi < lo, swaps the two args
     */
    function randomInteger(lo, hi) {
        if (lo > hi) {
            [lo, hi] = [hi, lo];
        }
        return Math.floor(Math.random() * (hi - lo)) + lo;
    }
    /**
     * @param {Date} date 
     * @returns a string representation of given date, containing only the month,
     * date and year 
     */
    function getDateString(date) {
        return date.getDate() + "." + (date.getMonth() + 1) +
            "." + date.getFullYear();
    }
    /**
     * Assumes given string contains at least 2 consonants!!!
     * @param {string} string 
     * @returns a string consisting of the first and last consonant of given string 
     */
    function getFirstAndLastCons(string) {
        const vowels = "aeiou";
        string = string.toLowerCase();
        let i = 0;
        while (vowels.indexOf(string[i]) >= 0 && i < string.length) i++;
        let result = string[i];
        i = string.length - 1;
        while (vowels.indexOf(string[i]) >= 0 && i >= 0) i--;
        result += string[i];
        return result.toUpperCase();
    }

    class Person {
        /**
         * @param {string} name 
         * @param {string} surname 
         */
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        }
        /**
         * @returns a string representation of this person
         */
        getData() {
            return this.name + " " + this.surname;
        }
        /**
         * @param {Person} that 
         * @returns true if this person's name and surname are identical to
         * that persons name and surname, false otherwise
         */
        equals(that) {
            return (that instanceof Person &&
                this.name === that.name &&
                this.surname === that.surname);
        }
    }

    class Seat {
        /**
         * @param {number} number if not provided, defaults to a random number
         * between 10 and 100
         * @param {string} category can have one of 2 values: "b" for business, 
         * "e" for economy; if none is provided, defaults to "E"
         */
        constructor(number, category = "E") {
            if (category.toUpperCase() !== "B") {
                this.category = "E";
            } else {
                this.category = category.toUpperCase();
            }
            if (number && Number.isFinite(parseInt(number))) this.number = number;
            else this.number = randomInteger(10, 101);
        }
        /**
         * @returns string representation of this seat
         */
        getData() {
            return `${this.number}, ${this.category}`;
        }
        /**
         * @returns detailed string representation of this seat
         */
        getVerboseData() {
            let cat = (this.category === "B") ? "business" : "economy";
            return `${this.number}, ${cat}`;
        }
    }

    class Passenger extends Person {
        /**
         * @param {string} name 
         * @param {string} surname 
         * @param {Seat} seat 
         */
        constructor(name, surname, seat) {
            super(name, surname);
            this.seat = seat;
        }
        /**
         * @returns string representation of this passenger
         */
        getData() {
            return `${this.seat.getVerboseData()}, ${super.getData()}`; //!!!
        }

    }
    class Route {
        /**
         * 
         * @param {string} from 
         * @param {string} to 
         */
        constructor(from, to) {
            this.from = from;
            this.to = to;
        }
        /**
         * @returns string representation of this route
         */
        getData() {
            return `${this.from} - ${this.to}`;
        }
        /**
         * 
         * @returns string representing coded data for this route
         */
        getCodedData() {
            return `${getFirstAndLastCons(this.from)} - ${getFirstAndLastCons(this.to)}`;
        }
    }

    class Flight {
        /**
         * @param {Route} route 
         * @param {Date} date 
         */
        constructor(route, date) {
            this.route = route;
            this.date = date;
            this.passengers = [];
            // boolean array; seat numbers are represented by array indices+1
            // seatsTaken[i] === true if seat i is taken, false otherwise
            this.seatsTaken = new Array(101);
            // seat at index 0 is ignored, but just in case...:
            this.seatsTaken[0] = true;
            for (let i = 1; i < this.seatsTaken.length; i++) {
                this.seatsTaken[i] = false;
            }
        }
        /**
         * @param {Passenger} passenger 
         * @returns the index of the passenger in this flights passenger list,
         * or -1 if the passenger is not on the list
         */
        getPassengerIndex(passenger) {
            for (let i = 0; i < this.passengers.length; i++) {
                if (this.passengers[i].equals(passenger)) {
                    return i;
                }
            }
            return -1;
        }
        /**
         * if there are less than
         * 100 passengers on this flight in total, adds it to this  flight's list
         * of passengers. 
         * @param {Passenger} passenger 
         * @returns true if the given passenger was added to the list, false
         * otherwise
         */
        addPassenger(passenger) {
            if (this.passengers.length === 100) {
                console.log("Flight full! Cannot add more than 100 passengers.");
                return false;
            }
            let passengerIndex = this.getPassengerIndex(passenger);
            if (passengerIndex !== -1) {
                // just remove it from the list, you'll add it in the next if block,
                // which will take care of the seat problem as well
                this.seatsTaken[this.passengers[passengerIndex].seat.number] = false; // first free up the seat
                this.passengers.splice(passengerIndex, 1);
            }
            let seatNumber = passenger.seat.number;
            while (this.seatsTaken[seatNumber]) {
                // to avoid too much randomInteger() calls when more seats are taken
                if (this.passengers.length < 30) {
                    seatNumber = randomInteger(10, 100);
                } else {
                    seatNumber = 1;
                    while (this.seatsTaken[seatNumber]) seatNumber++;
                }
            }
            passenger.seat.number = seatNumber;
            this.passengers.push(passenger);
            this.seatsTaken[seatNumber] = true;
            return true;
        }
        /**
         * @returns string representation of this flight
         */
        getData() {
            const result = [];
            result.push(getDateString(this.date));
            result.push(`, ${this.route.getCodedData()}\n`);
            for (let i = 0; i < this.passengers.length; i++) {
                result.push(`\t${this.passengers[i].getData()}\n`);
            }
            return result.join("");
        }
        /**
         * @returns number of passengers on this flight
         */
        getNPassengers() {
            return this.passengers.length;
        }
    }

    class Airport {
        /**
         * @param {string} name 
         * @param {Array<Flight>} flightList array of Flight objects; if not given,
         * defaults to an empty array
         */
        constructor(name, flightList) {
            this.name = name;
            if (flightList && Array.isArray(flightList)) this.flights = flightList;
            else this.flights = [];
        }
        /**
         * If given flight is instance of Fligt,
         * adds it to this airport's list of flights
         * @param {Flight} flight
         * @returns true if given flight was added to the list, false otherwise 
         */
        addFlight(flight) {
            if (flight instanceof Flight) {
                this.flights.push(flight);
                return true;
            } else {
                return false;
            }
        }
        /**
         * @returns total number of passengers this airport's flight list
         */
        getTotalPassengers() {
            return this.flights.reduce(function (accumulator, current) {
                return accumulator + current.getNPassengers();
            }, 0);
        }
        getData() {
            let result = `Airport: ${this.name}, total passengers: ${this.getTotalPassengers()}\n\n`;
            for (let i = 0; i < this.flights.length; i++) {
                result += `\t${this.flights[i].getData()}\n`;
            }
            return result;
        }
    }

    /**
     * 
     * @param {string} route in the format "origin - destination"
     * @param {Date} date 
     * @returns an instance of Flight, created from given arguments
     */
    function createFlight(route, date) {
        let origin = route.slice(0, route.indexOf("-"));
        origin = origin.trim(); // trim whitespace
        let destination = route.slice(route.lastIndexOf("-") + 1, route.length);
        destination = destination.trim();
        // console.log(origin, destination);
        const flight = new Flight(new Route(origin, destination), date);
        return flight;
    }

    /**
     * 
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {number} seatNum 
     * @param {string} seatCategory only 2 valid values, "e" and "b"
     * @returns 
     */
    function createPassenger(firstName, lastName, seatNum, seatCategory) {
        return new Passenger(firstName, lastName,
            new Seat(seatNum, seatCategory));
    }

    const airport1 = new Airport("Nikola Tesla");

    const flight1 = createFlight("Belgrade - Paris", new Date(2017, 9, 25));
    // console.log(flight1.getData());
    const flight2 = createFlight("Barcelona - Belgrade", new Date(2017, 10, 11));
    // console.log(flight2.getData());

    // create passengers:
    const passenger1 = createPassenger("John", "Snow", 1, "b");
    const passenger2 = createPassenger("Cersei", "Lannister", 2, "b");
    const passenger3 = createPassenger("Daenerys", "Targaryen", 14);
    const passenger4 = createPassenger("Tyron", "Lannister");
    const passenger5 = createPassenger("Barry", "White", 14); // test same seat number
    const passenger6 = createPassenger("Sonja", "Musicki", 2, "e");
    const passenger7 = createPassenger("Sonja", "Musicki", 1, "B"); // test change of seat number



    // console.log(passenger1, passenger2, passenger3, passenger4);

    flight1.addPassenger(passenger1);
    flight1.addPassenger(passenger2);

    flight2.addPassenger(passenger3);
    flight2.addPassenger(passenger4);
    flight2.addPassenger(passenger5);
    flight2.addPassenger(passenger6);
    flight2.addPassenger(passenger7);

    airport1.addFlight(flight1);
    airport1.addFlight(flight2);

    // console.log(airport1);
    console.log(airport1.getData());

})();