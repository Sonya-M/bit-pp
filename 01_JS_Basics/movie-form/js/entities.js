// utility functions
/**
 * @param {Date} date 
 * @returns a string representation of given date, containing only the date, month and year
 */
function getDateString(date) {
    var result = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
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
     * @throws Error if duration is not a (parsable) number
     */
    constructor(title, genre, duration) {
        this.title = title;
        this.genre = genre;
        this.duration = duration;
        if (typeof this.duration !== "number") {
            this.duration = parseInt(duration);
            console.log(`this.title: ${this.title}; this.genre: ${this.genre} this.duration: ${this.duration}
            duration: ${duration}`)
            if (isNaN(this.duration))
            throw new Error("Movie constructor: duration must be a number");
        }
        // this.duration = duration;
    }
    getData() {
        return `${this.title}, ${this.duration} min, ${this.genre.getData()}`;
    }
}

var MAX_PROGRAM_LENGTH = 480; // max program length in minutes
var MAX_MOVIES_OF_SAME_GENRE = 4;

class Program {
    /**
     * Program constructor
     * @param {Date} date 
     */
    constructor(date) {
        this.date = date;
        this.movieList = [];
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
     * of all movies in a list can be no longer than MAX_PROGRAM_LENGTH 
     * @param {Movie} movie 
     * @throws Error if adding a movie would exceed max program length(MAX_PROGRAM_LENGTH) and
     * when trying to add more than 4 movies of the same genre
     */
    addMovie(movie) {
        if (this.getNMoviesOfGenre(movie.genre) === MAX_MOVIES_OF_SAME_GENRE) {
            throw new Error("Cannot add more than " +
            MAX_MOVIES_OF_SAME_GENRE + " movies of the same genre!");
        }
        if (this.getProgramLength() + movie.duration > MAX_PROGRAM_LENGTH) {
            throw new Error(`Program length cannot be more than ${MAX_PROGRAM_LENGTH / 60} hours long`);
        }
        this.movieList.push(movie);
    }
    /**
     * @param {Genre} genre 
     * @returns the number of movies in this Program of given genre
     */
    getNMoviesOfGenre(genre) {
        var sum = 0;
        for (var i = 0; i < this.movieList.length; i++) {
            if (this.movieList[i].genre.name === genre.name) sum++;
        }
        return sum;

        // TODO: CHECK THIS - BUGGY
        // return this.movieList.reduce(function (sum, current) {
        //     if (current.genre.name === genre.name) {
        //         return  sum + 1;
        //     }
        // }, 0);
    }
    getProgramLength() {
        // var sum = 0;
        // for (var i = 0; i < this.movieList.length; i++) {
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
        for (var i = 0; i < this.movieList.length; i++) {
            result += `\t\t ${this.movieList[i].getData()}\n`;
        }
        return result;
    }

    getDataAsHTML() {
        let result = `${getDateString(this.date)}, ${this.getProgramLength()} min<br><blockquote>`;
        for (var i = 0; i < this.movieList.length; i++) {
            result += `${this.movieList[i].getData()}<br>`;
        }
        result += `</blockquote>`;
        return result;
    }
    getShortData() {
        return `${getDateString(this.date)}, ${this.nMovies()} movies, duration: ${this.getProgramLength()} min`;
    }
}
