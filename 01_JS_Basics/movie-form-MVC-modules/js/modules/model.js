/* jshint esversion: 6 */

const MOVIE_DATA_URL = "../data/movies.json";

const storage = {
    movieList: [],
    programList: []
};

////////////////////////////////
// utility + helper functions //
////////////////////////////////
// source: https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript/122704#122704
function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (let attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

/**
 * @param {Date} date 
 * @returns a string representation of given date, containing only the date, month and year
 */
function getDateString(date) {
    const result = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    return result;
}

function getMovieFromID(id) {
    for (let i = 0; i < storage.movieList.length; i++) {
        if (storage.movieList[i].id === id) return storage.movieList[i];
    }
    return null;
}
/**
 * Genre constructor
 * @param {string} name 
 */
function Genre(name) {
    this.name = name;
}
Genre.prototype.getData = function () {
    return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
};

/**
 * Movie constructor
 * @param {string} title 
 * @param {Genre} genre 
 * @param {number} duration 
 * @throws Error if duration is not a (parsable) number
 */
function Movie(id, title, genre, duration) {
    if (isNaN(id)) throw new Error("Movie constructor: id must be a number");
    this.id = id;
    this.title = title;
    this.genre = genre;
    this.duration = duration;
    if (typeof this.duration !== "number") {
        this.duration = parseInt(duration);
        //     console.log(`this.title: ${this.title}; this.genre: ${this.genre} this.duration: ${this.duration}
        // duration: ${duration}`);
        if (isNaN(this.duration))
            throw new Error("Movie constructor: duration must be a number");
    }
}

Movie.prototype.getData = function () {
    return `${this.title}, ${this.duration} min, ${this.genre.getData()}`;
};

const MAX_PROGRAM_LENGTH = 480; // max program length in minutes
const MAX_MOVIES_OF_SAME_GENRE = 4;

/**
 * Program constructor
 * @param {Date} date 
 */
function Program(id, date) {
    this.id = id;
    this.date = date;
    this.movieList = []; // the list of movieIDs; the actual movie objects
    // with corresponding ids are stored in storage.movieList
}
/** @returns the number of movies in this program */
Program.prototype.nMovies = function () {
    return this.movieList.length;
};
/**
 * @param {Genre} genre 
 * @returns the number of movies in this Program of given genre
 */
Program.prototype.getNMoviesOfGenre = function (genre) {
    var sum = 0;

    for (let i = 0; i < this.movieList.length; i++) {
        if (getMovieFromID(this.movieList[i]).genre.name === genre.name) sum++;
    }
    return sum;
};
/**
 * Adds given movie to this Program.
 * There can be no more than 4 movies of the same genre, and the length
 * of all movies in a list can be no longer than MAX_PROGRAM_LENGTH 
 * @param {Movie} movie 
 * @throws Error if adding a movie would exceed max program length(MAX_PROGRAM_LENGTH) and
 * when trying to add more than 4 movies of the same genre
 */
Program.prototype.addMovie = function (movieID) {

    const movie = getMovieFromID(movieID);

    if (this.getNMoviesOfGenre(movie.genre) === MAX_MOVIES_OF_SAME_GENRE) {
        throw new Error("Cannot add more than " +
            MAX_MOVIES_OF_SAME_GENRE + " movies of the same genre!");
    }
    if (this.getProgramLength() + movie.duration > MAX_PROGRAM_LENGTH) {
        throw new Error(`Program length cannot be more than ${MAX_PROGRAM_LENGTH / 60} hours long`);
    }
    this.movieList.push(movieID);
};

Program.prototype.removeMovie = function (movieID) {
    for (let i = 0; i < this.movieList.length; i++) {
        if (this.movieList[i] === movieID) {
            this.movieList.splice(i, 1);
            return; // movieIDs are unique
        }
    }
    // not sure about the filter fn
    // this.movieList = this.movieList.filter(id => id !== movieID);
};

Program.prototype.getProgramLength = function () {
    // var sum = 0;
    // for (let i = 0; i < this.movieList.length; i++) {
    //     sum += this.movieList[i].duration;
    // }
    // return sum;
    // TODO: check this
    return this.movieList.reduce(function (accumulator, current) {
        return accumulator + getMovieFromID(current).duration;
    }, 0);
};

Program.prototype.getData = function () {
    let result = `${getDateString(this.date)}, ${this.getProgramLength()} min\n`;
    for (let i = 0; i < this.movieList.length; i++) {
        result += `\t\t ${getMovieFromID(this.movieList[i]).getData()}\n`;
    }
    return result;
};

Program.prototype.getDataAsHTML = function () {
    let result = `${getDateString(this.date)}, ${this.getProgramLength()} min<br><blockquote>`;
    for (let i = 0; i < this.movieList.length; i++) {
        result += `${getMovieFromID(this.movieList[i]).getData()}<br>`;
    }
    result += `</blockquote>`;
    return result;
};

Program.prototype.getShortData = function () {
    return `${getDateString(this.date)}, ${this.nMovies()} movies, duration: ${this.getProgramLength()} min`;
};

// Fns to be returned by the IIFE
/**
 * @param {string} title 
 * @param {number} duration 
 * @param {string} genre 
 * @returns a Movie instance from given params
 */
function createMovie(title, duration, genre) {
    const g = new Genre(genre);
    const id = storage.movieList.length ? storage.movieList[storage.movieList.length - 1].id + 1 : 0;
    const m = new Movie(id, title, g, duration);
    storage.movieList.push(m);
    //  return m; // use for testing
}

/**
 * if movie with given id exists in storage, removes it from storage.movieList
 * as well as from all created programs movieLists
 * @param {number} movieID 
 */
function deleteMovie(movieID) {
    for (let i = 0; i < storage.movieList.length; i++) {
        if (storage.movieList[i].id === movieID) {
            storage.movieList.splice(i, 1);
        }
    }
    // delete the movie from the programs containing it
    for (let p of storage.programList) {
        p.movieList = p.movieList.filter(id => id !== movieID);
    }
}

/**
 * Creates a program, associating it with a unique ID, and adds it
 * to storage.programList
 * @param {Date} date 
 */
function createProgram(date) {
    const id = storage.programList.length ? storage.programList[storage.programList.length - 1].id + 1 : 0;
    const p = new Program(id, date);
    storage.programList.push(p);

    console.log(storage.programList); // TODO: delete afterwards
    // return p; // use for testing
}

/**
 * @param {number} id 
 * @returns program with given id, or null if no such program in storage
 */
function getProgramFromID(id) {
    for (let i = 0; i < storage.programList.length; i++) {
        if (storage.programList[i].id === id) return storage.programList[i];
    }
    return null;
}

function addMovieToProgram(programID, movieID) {
    getProgramFromID(programID).addMovie(movieID);
}

function loadMoviesFromJSON(callback) {
    const request = new XMLHttpRequest();
    request.open("GET", MOVIE_DATA_URL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        if (!request.response) return;
        const movies = request.response;
        for (let i = 0; i < movies.length; i++) {
            try {
                createMovie(movies[i].title, parseInt(movies[i].duration), movies[i].genre);
            } catch (error) {
                console.log("loadMoviesFromJSON: ", error.message);
            }
        }
        callback(getMovieList());
    };
    request.onerror = function () {
        console.log("Unexpected error on loadMoviesFromJSON");
    };
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function getMovieList() {
    // return storage.movieList; // <- instead of that, use this:

    // Ivanovi predlozi
    // const mappedMovies = {};
    // storage.movieList.forEach(movie => {
    //     mappedMovies[movie.id] = movie.getData();
    // });
    // return mappedMovies;

    return storage.movieList.map(movie => ({ id: movie.id, printValue: movie.getData() }));
}
function getProgramList() {
    // return storage.programList; // <- instead of that, use this:
    return storage.programList.map(prog => ({
        id: prog.id,
        shortData: prog.getShortData(),
        dataAsHTML: prog.getDataAsHTML(),
    }));
}

// console.log("getMovieListCopy()", getMovieListCopy());
console.log("storage.movieList: ", storage.movieList);

export { getMovieList, createMovie, deleteMovie, getProgramList, createProgram, addMovieToProgram, loadMoviesFromJSON };