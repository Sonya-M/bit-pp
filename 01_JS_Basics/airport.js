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


(function () {
    "use strict";

    /**
     * 
     * @param {number} lo 
     * @param {number} hi 
     * @returns number in range [lo, hi); if hi < lo, swaps the two args
     */
    function randomInteger(lo, hi) {
        if (lo > hi) {
            [lo, hi] = [hi, lo];
        }
        return Math.floor(Math.random() * (hi - lo)) + lo;
    }

    function testRandomInteger() {
        var lo = 10;
        var hi = 12;
        var nTrials = 10;
        var result = [];
        for (var i = 0; i < nTrials; i++) {
            result.push(randomInteger(hi, lo));
        }
        console.log(result);
    }

    /**
     * 
     * @param {Date} date 
     * @returns a string representation of given date, containing only the month,
     * date and year 
     */
    function getFullDateFromDateString(date) {
        // var dateVals = date.toString().split(" ");
        // var result = dateVals[1] + " " + dateVals[2] + " " + dateVals[3];

        var result = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

        return result;
    }

    /**
     * Assumes given string contains at least 2 consonants!!!
     * @param {string} string 
     * @returns a string consisting of the first and last consonant of given string 
     */
    function getFirstAndLastCons(string) {
        var vowels = "aeiou";
        string = string.toLowerCase();
        var i = 0;
        while (vowels.indexOf(string[i]) >= 0 && i < string.length) i++;
        var result = string[i];
        i = string.length - 1;
        while (vowels.indexOf(string[i]) >= 0 && i >= 0) i--;
        result += string[i];

        return result.toUpperCase();
    }
    
    /**
     * 
     * @param {string} name 
     * @param {string} surname 
     */
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function () {
            return this.name + " " + this.surname;
        }
        /**
         * 
         * @param {Person} that 
         * @returns true if this person's name and surname are identical to
         * that persons name and surname, false otherwise
         */
        this.equals = function (that) {
            return that instanceof Person && this.name === that.name
                && this.surname === that.surname;
        }
    }

    /**
     * 
     * @param {number} number if not provided, defaults to a random number
     * between 10 and 100
     * @param {string} category can have one of 2 values: "b" for business, 
     * "e" for economy; if none is provided, defaults to "E"
     */
    function Seat(number, category) {
        if (!category || category.toUpperCase() !== "B") {
            this.category = "E";
        } else {
            this.category = category.toUpperCase();
        }
        if (number) this.number = number;
        else this.number = randomInteger(10, 101);
        /**
         * 
         * @returns a string representation of this seat
         */
        this.getData = function() {
            return this.number + ", " + this.category;
        }
        this.getVerboseData = function () {
            var cat;
            if (this.category === "B") cat = "business";
            else cat = "economy";
            return this.number + ", " + cat;
        }
    }
    
    /**
     * 
     * @param {Person} person 
     * @param {Seat} seat 
     */
    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;
        /**
         * 
         * @returns a string representation of this passenger
         */
        this.getData = function () {
            // return this.seat.getData() + ", " + this.person.getData();
            return this.seat.getVerboseData() + ", " + this.person.getData();

        }
    }

    /**
     * 
     * @param {string} from 
     * @param {string} to 
     */
    function Route(from, to) {
        this.from = from;
        this.to = to;
        /**
         * 
         * @returns a string representation of this passenger
         */
        this.getData = function () {
            return this.from + " - " + this.to;
        }
        this.getCodedData = function () {
            var origin = getFirstAndLastCons(this.from);
            var destination = getFirstAndLastCons(this.to);
            return origin + " - " + destination;
        }
    }

    /**
     * 
     * @param {Route} route 
     * @param {Date} date 
     */
    function Flight(route, date) {
        this.route = route;
        this.date = date;
        this.passengers = [];
        this.seatsTaken = []; // keep track of taken seats, updated in the
        // this.addPassenger method

        /**
         * 
         * @param {Passenger} passenger 
         * @returns the index of the passenger in this flights passenger list,
         * or -1 if the passenger is not on the list
         */
        this.getPassengerIndex = function (passenger) {
            for (var i = 0; i < this.passengers.length; i++) {
                if (this.passengers[i].person.equals(passenger.person)) {
                    return i;
                }
            }
            return -1;
        }
        /**
         * if given passenger is an instance of Passenger, and there are less than
         * 100 passengers on this flight in total, adds it to this  flight's list
         * of passengers. 
         * @param {Passenger} passenger 
         * @returns true if the given passenger was added to the list, false
         * otherwise
         */
        this.addPassenger = function (passenger) {
            if (this.passengers.length === 100) {
                console.log("Flight full! Cannot add more than 100 passengers.");
                return false;
            }
            var passengerIndex = this.getPassengerIndex(passenger);
            if (passengerIndex !== -1) {
                // just remove it from the list, you'll add it in the next if block,
                // which will take care of the seat problem as well
                this.passengers.splice(passengerIndex, 1);
            }
            if (passenger instanceof Passenger) {
                // two passengers cannot have the same seat number, so:
                var seatNumber = passenger.seat.number;
                while (this.seatsTaken.indexOf(seatNumber) >= 0) {
                    var seatNumber = randomInteger(10, 100);
                    // passenger.seat = new Seat(seatNumber, passenger.seat.category);
                    passenger.seat.number = seatNumber;
                }
                this.passengers.push(passenger);
                this.seatsTaken.push(passenger.seat.number);
                return true;
            } else {
                return false;
            }
            // TODO: If a passenger with the same full name exists in a flight
            // list, you should replace the existing passenger’s data with new
            // data (e.g. it can happen when a passenger changes seats).
        }
        this.getData = function () {
            var result = [];
            var date = getFullDateFromDateString(this.date);
            // result.push(date + ", " + this.route.getData() + "\n");
            result.push(date + ", " + this.route.getCodedData() + "\n");
            for (var i = 0; i < this.passengers.length; i++) {
                result.push("\t" + this.passengers[i].getData() + "\n");
            }
            return result.join("");
        }
        this.getNPassengers = function () {
            return this.passengers.length;
        }
    }

    /**
     * 
     * @param {string} name 
     * @param {Array<Flight>} flightList array of Flight objects; if not given,
     * defaults to an empty array
     */
    function Airport(name, flightList) {
        this.name = name;
        if (flightList && Array.isArray(flightList)) this.flights = flightList;
        else this.flights = [];
        /**
         * Adds given flight to this airport's list of flights
         * @param {Flight} flight
         * @returns true if given flight was added to the list, false otherwise 
         */
        this.addFlight = function (flight) {
            if (flight instanceof Flight) {
                this.flights.push(flight);
                return true;
            } else {
                return false;
            }
        }
        this.getTotalPassengers = function () {
            var sum = 0;
            for (var i = 0; i < this.flights.length; i++) {
                sum += this.flights[i].getNPassengers();
            }
            return sum;
        }
        this.getData = function () {
            var result = "Airport: " + this.name + ", total passengers: "  
                + this.getTotalPassengers() + "\n\n";
            for (var i = 0; i < this.flights.length; i++) {
                result += "\t" + this.flights[i].getData();
                result += "\n";
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
        var origin = route.slice(0, route.indexOf("-"));
        origin = origin.trim(); // trim whitespace
        var destination = route.slice(route.lastIndexOf("-") + 1, route.length);
        destination = destination.trim();
        // console.log(origin, destination);
        var flight = new Flight(new Route(origin, destination), date);
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
        return new Passenger(new Person(firstName, lastName),
            new Seat(seatNum, seatCategory));
    }

    // test all
    // testRandomInteger();
    // var seat = new Seat();
    // var seat2 = new Seat();
    // var seat3 = new Seat(20, "b");
    // var testSeat = new Seat(200, "bla");
    // console.log("Test seat: " + testSeat.getData());
    // console.log(seat);
    // console.log("Seat3: " + seat3.getData());
    // var ps = new Person("John", "Snow");
    // var ps2 = new Person("Jane", "Doe");
    // console.log(ps.getData())
    // console.log(seat.getData())
    // var psngr = new Passenger(ps, seat);
    // console.log(psngr.getData());
    // var route1 = new Route("Belgrade", "Munich");
    // console.log(route1);
    // console.log(route1.getData());
    // var flight1 = new Flight(route1, new Date());
    // console.log(flight1);
    // console.log(flight1.getData());
    // flight1.addPassenger(psngr);
    // console.log(flight1.getData());
    // var passenger2 = new Passenger(ps2, seat2);
    // flight1.addPassenger(passenger2);
    // console.log(flight1.getData());
    // var flight2 = createFlight("Paris - Rome", new Date());
    // console.log(flight2);
    // console.log(flight2.getData());
    // var passenger3 = createPassenger("Sonja", "Musicki", 1, "b");
    // console.log(passenger3);
    // console.log(passenger3.getData());

    // test getFirstAndLastCons
    // console.log(getFirstAndLastCons("Belgrade"));
    // console.log(getFirstAndLastCons("Paris"));

    // test Person.equals()
    // var person1 = new Person("sonja", "musicki");
    // var person2 = new Person("sonja", "musicki");
    // var person3 = new Person("blabla", "truć");
    // console.log(person1.equals(person2));
    // console.log(person3.equals(person2));

    
    /////////////////////////////
    
    var airport1 = new Airport("Nikola Tesla");

    var flight1 = createFlight("Belgrade - Paris", new Date(2017, 9, 25));
    // console.log(flight1.getData());
    var flight2 = createFlight("Barcelona - Belgrade", new Date(2017, 10, 11));
    // console.log(flight2.getData());

    // create passengers:
    var passenger1 = createPassenger("John", "Snow", 1, "b");
    var passenger2 = createPassenger("Cersei", "Lannister", 2, "b");
    var passenger3 = createPassenger("Daenerys", "Targaryen", 14);
    var passenger4 = createPassenger("Tyron", "Lannister");
    var passenger5 = createPassenger("Barry", "White", 14); // test same seat number
    var passenger6 = createPassenger("Sonja", "Musicki", 2, "e");
    var passenger7 = createPassenger("Sonja", "Musicki", 1, "B"); // test change of seat number



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

    // test Flight.hasPassenger()
    // console.log(flight2.getPassengerIndex(passenger5));
    // console.log(flight2.getPassengerIndex(passenger1));
})();