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


// refactored version of movieFestival.js, rewritten
// using the sweetest syntactic sugar, class syntax

/* jshint esversion: 6 */

(function () {

    // utility functions
    /**
    * @param {Date} date 
    * @returns a string representation of given date, containing only the date, month and year
    */
    function getDateString(date) {
        const result = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
        return result;
    }

    class Genre {
        /**
         * Genre constructor
         * @param {string} name 
         */
        constructor(name) {
            this.name = name;
        }
        getData() {
            return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
        }
    }

    class Movie {
        /**
         * Movie constructor
         * @param {string} title 
         * @param {Genre} genre 
         * @param {number} length 
         * @throws Error if duration is not a number
         */
        constructor(title, genre, duration) {
            this.title = title;
            this.genre = genre;
            if (typeof duration !== "number") {
                throw new Error("Movie constructor: duration must be a number");
            }
            this.duration = duration;
        }
        getData() {
            return `${this.title}, ${this.duration} min, ${this.genre.getData()}`;
        }
    }


    class Program {
        /**
         * Program constructor
         * @param {Date} date 
         */
        constructor(date) {
            this.date = date;
            this.movieList = [];
            this.maxProgramLength = 480; // max program length in minutes
        }
        /**
         * @returns the number of movies in this program
         */
        nMovies() {
            return this.movieList.length;
        }
        /**
         * Adds given movie to this Program.
         * There can be no more than 4 movies of the same genre, and the length
         * of all movies in a list can be no longer than this.maxProgramLength 
         * @param {Movie} movie 
         */
        addMovie(movie) {
            if (this.getNMoviesOfGenre(movie.genre) === 4) {
                console.log("Cannot add more than 4 movies of the same genre!");
                return;
            }
            if (this.getProgramLength() + movie.duration > this.maxProgramLength) {
                console.log(`Program length cannot be more than ${this.maxProgramLength / 60} hours long`);
                return;
            }
            this.movieList.push(movie);
        }
        /**
         * @param {Genre} genre 
         * @returns the number of movies in this Program of given genre
         */
        getNMoviesOfGenre(genre) {
            let sum = 0;
            for (let i = 0; i < this.movieList.length; i++) {
                if (this.movieList[i].genre.name === genre.name) sum++;
            }
            return sum;

            // TODO: CHECK THIS - BUGGY
            // return this.movieList.reduce(function (sum, current) {
            //     if (current.genre.name === genre.name) {
            //        return  sum + 1;
            //     } else {
            //        return sum; // perhaps like this? (still haven't tested it)
            //     }
            // }, 0);
        }
        getProgramLength() {
            // let sum = 0;
            // for (let i = 0; i < this.movieList.length; i++) {
            //     sum += this.movieList[i].duration;
            // }
            // return sum;
            // TODO: check this
            return this.movieList.reduce(function (accumulator, current) {
                return accumulator + current.duration;
            }, 0);
        }
        getData() {
            let result = `${getDateString(this.date)}, ${this.getProgramLength()} min\n`;
            for (let i = 0; i < this.movieList.length; i++) {
                result += `\t\t ${this.movieList[i].getData()}\n`;
            }
            return result;
        }
    }

    class Festival {
        /**
         * @param {string} name 
         * @param {number} maxNMovies if undefined, defaults to Infinity
         */
        constructor(name, maxNMovies) {
            this.name = name;
            if (!maxNMovies) this.maxMovies = Infinity;
            else if (typeof maxNMovies !== "number") {
                // try to get a number from string first
                maxNMovies = parseInt(maxNMovies);
                if (isNaN(maxNMovies)) {
                    console.log("invalid argument: maxNMovies - number of movies will be unlimited");
                    maxNMovies = Infinity;
                }
            }
            this.maxMovies = maxNMovies;
            this.programList = [];
        }
        /**
         * Adds program to this Festival, if the number of movies in
         * given program doesn't exceed this.maxMovies
         * @param {Program} program 
         */
        addProgram(program) {
            if (this.totalMovies() + program.nMovies() > this.maxMovies) {
                console.log("Max number of movies would be exceeded!");
                return;
            }
            this.programList.push(program);
        }
        /**
         * @returns The total number of movies in this festivals program list
         */
        totalMovies() {
            return this.programList.reduce(function (accumulator, current) {
                return accumulator + current.nMovies();
            }, 0);
        }
        getData() {
            if (this.programList.length === 0) {
                return this.name + "\n\tProgram to be announced";
            }
            let result = `${this.name} has ${this.totalMovies()} movie titles\n`;
            for (let i = 0; i < this.programList.length; i++) {
                result += `\t${this.programList[i].getData()}`;
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
        const g = new Genre(genre);
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

    // let g1 = new Genre("drama");
    // console.log(g1.getData())

    ////////////////////////////////////
    // test ............................
    const date1 = new Date("2021-07-01");
    const date2 = new Date("2021-07-02");
    // console.log(createProgram(date1).getData());

    const f1 = new Festival("Cannes", 10);
    const p1 = createProgram(date1);
    const p2 = createProgram(date2);
    const m1 = createMovie("The Shawshank Redemption", 130, "comedy");
    const m2 = createMovie("Deadpool", 90, "action");
    const m3 = createMovie("Shrek", 120, "comedy");
    const m4 = createMovie("Spaceballs", 100, "comedy");
    const m6 = createMovie("Lala", 10, "comedy");
    const m5 = createMovie("Haha", 90, "comedy");
    const m7 = createMovie("Boohoo", 50, "comedy");
    // const m7 = createMovie("Haha", "90", "comedy"); // throws error
    const m8 = createMovie("Hahahaha", 10, "comedy");

    p1.addMovie(m1);
    p1.addMovie(m2);
    p2.addMovie(m3);
    p2.addMovie(m4);
    p2.addMovie(m5);
    p2.addMovie(m6);
    p2.addMovie(m8); // the 5th comedy, should not be added
    f1.addProgram(p1);
    f1.addProgram(p2);
    console.log(f1.getData());

    const f2 = new Festival("Empty festival");
    console.log(f2.getData());

    const f3 = new Festival("The Weekend Festival", "6");
    const p3 = createProgram(date2);
    p3.addMovie(m2);
    p3.addMovie(m3);
    p3.addMovie(m4);
    p3.addMovie(m5);
    p3.addMovie(m7);

    f3.addProgram(p1);
    f3.addProgram(p3);
    console.log(f3.getData());
    ////////////////////////////////////


})();