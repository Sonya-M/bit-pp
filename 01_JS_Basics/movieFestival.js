// Festival

// In your IDE of choice, create a new JavaScript file named festival.js and
// make it so that all code written in the file follows strict mode.

// Create an anonymous immediately-invoking function that will hold the main
// execution of all program calls. Writing a simple command console.log(“Hi”)
// inside this function and running code should output “Hi“ in the console.

// Create constructor functions with properties representing the following: •
//     Genre - name • Movie - title, genre (instance of Genre), length • Program
//     - date, list of movies (initially empty) and total number of movies •
//     Festival - name, list of programs (initially empty), and number of movies
//     in all programs

// Add method getData to Genre which returns formatted string as first and last
// letter of genre name "Action" -> AN "Drama" -> DA "Comedy" -> CY

// Add getData method to Movie. It should return a formatted string consisting
// of the movie title, length and genre acronym. The Shawshank Redemption,
// 130min, AN

// Add addMovie method to Program. It should receive a Movie and add the movie
// to the movie list of a given program. 

// Add addProgram method to Festival. It should receive a Program and add the
// program to the list of the given festival’s programs. 

// Add getData method to Program. It should return a formatted string of all
// data related to the program. The string should contain date, program length
// (calculated from length of all movies in a list) and data about movies in a
// list (see the example below). To display movie data, use Movie’s getData
// method.

// Date, program length from all movies First movie title, length and genre
//      Second movie title, length and genre Third movie title, length and genre
//      Fourth movie name and length and genre

// Add method getData to Festival which return formatted string like festival
// name, number of movies in all programs and all programs listed. Use Programs
// getData method to list all programs. (example output is shown below)

// Weekend festival has 4 movie titles 28.10.2017, program duration 368min
//  Spider-Man: Homecoming, 133min, AN War for the Planet of the Apes, 140min,
//  DA The Dark Tower, 95min, WN 29.10.2017, program duration 108min Deadpool,
//  108min, CY

// Inside your immediately-invoking function, add createMovie function that
// receives a movie title, movie length and genre (as a string) as parameters
// and returns a created Movie.

// Inside your immediately-invoking function, add createProgram function that
// receives a date and returns a created Program.

// Start creating your movie festival.

// In your main program function, create an instance of the Festival object. 

// Create two instances of Program using createProgram function.

// Create four instances of Movie object using createMovie function. Add all
// created movies to both programs using the addMovie method.

// Add the created program instances to the created festival instance using
// festival’s addProgram method.

// Display festival’s data using getData method.

// Hints • List is a synonym for array, so when we say a list of movies, it’s
//     actually an array of movie objects • Use JS built-in Date()object to
//     create Date object • Use \t and \n special strings to format output • Use
//     built-in String methods to transform text from lowercase to uppercase •
//     Use Array’s built-in methods to add and remove elements from an array

// Additional features: Festival.js

// When adding a movie to the movie list, make sure that there are no more than
// 4 movies of the same genre. Also, length of all movies in a list can not be
// longer than 8 hours.

// Handle error when you enter text instead of a number for movie length. Try to
// stop program execution when this type of error happens.
 
// Modify the festival so that it accepts maximum number of movies. Handle the
// error if text is inserted instead of a number for maximum number of movies. 

// If there are no programs added to the festival, instead of program data
// display a message informing the user that the program is yet to be announced.

// Weekend festival Program to be announced

(function () {
    "use strict";

    /**
     * Genre constructor
     * @param {string} name 
     */
    function Genre(name) {
        this.name = name;
        this.getData = function () {
            return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
        }
    }

    /**
     * @param {Date} date 
     * @returns a string representation of given date, containing only the date, month and year
     */
    function getDateString(date) {
        var result = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
        return result;
    }

    /**
     * Movie constructor
     * @param {string} title 
     * @param {Genre} genre 
     * @param {number} length 
     * @throws Error if duration is not a number
     */
    function Movie(title, genre, duration) {
        this.title = title;
        this.genre = genre;
        if (typeof duration !== "number") {
            throw new Error("Movie constructor: duration must be a number!");
        }
        this.duration = duration;
        /**
         * @returns a string representation of this Movie
         */
        this.getData = function () {
            return this.title + ", " + this.duration + " min, " + this.genre.getData();
        }
    }  

    /**
     * Program constructor
     * @param {Date} date 
     */
    function Program(date) {
        this.date = date;
        this.movieList = [];
        this.nMovies = function () {
            return this.movieList.length;
        }
        /**
         * Adds given movie to this Program.
         * There can be no more than 4 movies of the same genre, and the length
         * of all movies in a list can be no longer than 8 hrs
         * @param {Movie} movie 
         */
        this.addMovie = function (movie) {
            if (this.getNMoviesOfGenre(movie.genre) === 4) {
                console.log("Cannot add more than 4 movies of one genre!");
                return;
            }
            if (this.getProgramLength() + movie.duration > 480) {
                console.log("Program length cannot be more than 8 hours long!");
                return;
            }
            this.movieList.push(movie);
        }
        /**
         * @param {Genre} genre 
         * @returns the number of movies in this Program of given genre
         */
        this.getNMoviesOfGenre = function (genre) {
            var sum = 0;
            for (var i = 0; i < this.movieList.length; i++) {
                if (this.movieList[i].genre.name === genre.name) sum++;
            }
            return sum;

            // return this.movieList.reduce(function (sum, current) {
            //     if (current.genre.name === genre) {
            //        return  sum + 1;
            //     }
            // });
        }
        /**
         * @returns the total length of movies in this Program
         */
        this.getProgramLength = function () {
            var sum = 0;
            for (var i = 0; i < this.movieList.length; i++) {
                sum += this.movieList[i].duration;
            }
            return sum;
        }
        /**
         * @returns a string representation of this Program
         */
        this.getData = function () {
            var result = "";
            result += getDateString(this.date);
            result += ", " + this.getProgramLength() + " min\n";
            for (var i = 0; i < this.movieList.length; i++) {
                result += "\t\t" + this.movieList[i].getData() + "\n"
            }
            return result;

        }
    }

    /**
     * Festival constructor
     * @param {string} name 
     * @param {number} maxNMovies 
     */
    function Festival(name, maxNMovies) {
        this.name = name;
        this.maxMovies = maxNMovies;
        this.programList = [];
        /**
         * Adds program to this Festival, if the number of movies in
         * given program doesn't exceed this.maxMovies
         * @param {Program} program 
         */
        this.addProgram = function (program) {
            if (this.totalMovies() + program.nMovies() > this.maxMovies) {
                console.log("Max number of movies would be exceeded!")
                return;
            } 
            this.programList.push(program);
        }
        /**
         * @returns The total number of movies in this festivals program list
         */
        this.totalMovies = function () {
            var sum = 0;
            for (var i = 0; i < this.programList.length; i++) {
                sum += this.programList[i].nMovies();
            }
            return sum;
        }
        /**
         * @returns a string representation of this festival
         */
        this.getData = function () {
            if (this.programList.length === 0) {
                return  this.name + "\n\tProgram to be announced";
            }
            var result = this.name + " has " + this.totalMovies()
                + " movie titles\n";
            for (var i = 0; i < this.programList.length; i++) {
                result += "\t" + this.programList[i].getData();

            }
            return result;
        }
    }
    /**
     * @param {string} title 
     * @param {number} duration 
     * @param {string} genre 
     * @returns a Movie instance from given params
     */
    function createMovie(title, duration, genre) {
        var g = new Genre(genre);
        return new Movie(title, g, duration);
    }
    // console.log(createMovie("X-men", 200, "horror").getData());
    /**
     * @param {Date} date 
     * @returns a Program instance
     */
    function createProgram(date) {
        return new Program(date);
    }

    ////////////////////////////////////
    // test ............................
    var date1 = new Date("2021-07-01");
    var date2 = new Date("2021-07-02");
    // console.log(createProgram(date1).getData());

    var f1 = new Festival("Cannes", 3);
    var p1 = createProgram(date1);
    var p2 = createProgram(date2);
    var m1 = createMovie("The Shawshank Redemption", 130, "comedy");
    var m2 = createMovie("Deadpool", 90, "action");
    var m3 = createMovie("Shrek", 120, "comedy");
    var m4 = createMovie("Spaceballs", 100, "comedy");
    var m6 = createMovie("Lala", 10, "comedy");
    var m5 = createMovie("Haha", 90, "comedy");
    var m7 = createMovie("Boohoo", 50, "comedy");
    // var m7 = createMovie("Haha", "90", "comedy"); // throws error

    p1.addMovie(m1);
    p1.addMovie(m2);
    p2.addMovie(m3);
    p2.addMovie(m4);
    p2.addMovie(m5);
    p2.addMovie(m1);
    p2.addMovie(m6);
    f1.addProgram(p2);
    f1.addProgram(p1);
    console.log(f1.getData());

    var f2 = new Festival("Empty festival");
    console.log(f2.getData());

    var f3 = new Festival("The Weekend Festival");
    var p3 = createProgram(date2);
    p3.addMovie(m2);
    p3.addMovie(m3);
    p3.addMovie(m4);
    p3.addMovie(m5);
    p3.addMovie(m7);

    f3.addProgram(p1);
    f3.addProgram(p3);
    console.log(f3.getData());
    ////////////////////////////////////






    // var g1 = new Genre("action");
    // var g2 = new Genre("comedy");
    // // console.log(g1.getData());
    // var m1 = new Movie("The Shawshank Redemption", g1, 130);
    // var m2 = new Movie("Shrek", g1, 120);
    // // console.log(m1.getData());
    // var date1 = new Date("2021-07-01");
    // console.log(getDateString(date1));
    // console.log(date1);
    // var p1 = new Program(date1);
    // p1.addMovie(m1);
    // p1.addMovie(m2);
    // console.log(p1);
    // console.log("-------------------------------");
    // console.log("Program length: " + p1.getProgramLength());
    // console.log(p1.getData());

    // var date2 = new Date("2021-07-02");
    // var p2 = new Program(date2);
    // var m3 = new Movie("Deadpool", g2, 98);
    // var m4 = new Movie("Spaceballs", g2, 100);

    // p2.addMovie(m3);
    // p2.addMovie(m4);


    // var f1 = new Festival("Cannes");
    // f1.addProgram(p1);
    // f1.addProgram(p2);
    // console.log(f1);
    // console.log(f1.totalMovies());
    // console.log(f1.getData());






})();