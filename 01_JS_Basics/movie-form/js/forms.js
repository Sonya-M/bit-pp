var movieDiv;
var programListDiv;
var createMovieBtn;
var createProgBtn;
var addMovieToProgBtn;
var titleInput;
var lengthInput;
var genreInput;
var movieForm;
var selectMovie;
var selectProg;
var programForm;
var msgDiv;
var progMsgDiv;
var movieListing;
var programListing;

// lists of key-value pairs: keys are string representations of objects 
// contained in value fields - e.g. key: "Superman, 100 min, AN"; 
// value: Movie {title: "Superman", genre: Genre, duration: 100}
var movieList = [];
var programList = [];



document.addEventListener("DOMContentLoaded", function () {
    initElementVariables();
    loadListFromJSON("../data/movies.json", createMovieFromLiteralAndAddItToList);
    // loadListFromJSON("../data/programs.json", createProgramFromLiteralAndAddItToList);
    setMinDateValue(programForm.querySelector("#progDate"));
    
    // add event listeners
    createMovieBtn.addEventListener("click", getInputAndCreateMovie);
    createProgBtn.addEventListener("click", getInputAndCreateProg);
    addMovieToProgBtn.addEventListener("click", getInputAndAddMovieToProg);

})

/** Initializes variables (document traversal is expensive) */
function initElementVariables() {
    movieForm = document.getElementById("movieForm");
    programForm = document.getElementById("programForm");
    msgDiv = document.getElementById("message");
    progMsgDiv = document.getElementById("progMsgDiv");
    movieDiv = document.getElementById("movies");
    programListDiv = document.getElementById("programs");
    createMovieBtn = document.getElementById("createMovieBtn");
    createProgBtn = document.getElementById("createProgBtn");
    addMovieToProgBtn = document.getElementById("addMovieToProgBtn");
    titleInput = document.getElementById("title");
    lengthInput = document.getElementById("duration");
    genreInput = document.getElementById("genre");
    selectMovie = document.getElementById("selectMovie");
    movieListing = document.getElementById("movieListing");
    programListing = document.getElementById("programListing");
    selectProg = document.getElementById("selectProg");

}
/**
 * Adds all elements contained in the JSON array from given url to given list
 * @param {Array} list 
 * @param {string} jsonURL 
 * @param {function} creator fn that creates required object from an object literal
 */
function loadListFromJSON(jsonURL, createAndAdd) {
    let request = new XMLHttpRequest();
    request.open("GET", jsonURL);
    request.responseType = "json";
    request.send();

    request.onload = function () {
        console.log(request.response);
        if (!request.response) return;
        let listFromJSON = request.response;
        for (let i = 0; i < listFromJSON.length; i++) {
            createAndAdd(listFromJSON[i]);
        }
    }    
}

/**
 * 
 * @param {Movie} movie 
 * @param {string} jsonFile file url
 */
// TODO: finish this!!!
function saveMovieToJSON(movie, jsonFilePath) {
    var movieLiteral = `{"title": ${movie.title}, "genre": ${movie.genre.name}, "duration": ${movie.duration}}`;

    // sources: https://stackoverflow.com/questions/34156282/how-do-i-save-json-to-local-text-file
    

    // this pops up a save file dialog, but works for a single movie
    // function download(content, filePath, contentType) {
    //     var a = document.createElement("a");
    //     var file = new Blob([content], { type: contentType });
    //     a.href = URL.createObjectURL(file);
    //     a.download = filePath;
    //     a.click();
    // }
    // // TODO: this would overwrite all content
    // download(movieLiteral, MOVIES_FROM_INPUT_FILE, "json");
}
/**
 * Creates a Movie instance from given object literal, adds it to movieList and displays it in the relevant containers
 * @param {Object} obj object literal with properties corresponding to a Movie instance
 */
// TODO: test it - appears to be working :)
function createMovieFromLiteralAndAddItToList(obj) {
    var movie = createMovie(obj.title, parseInt(obj.duration), obj.genre);
    movieList.push({
        key: movie.getData(),
        value: movie
    });
    refreshDisplayList(movieList, movieListing);
    refreshDisplayList(movieList, movieDiv);

    addMovieToProgramForm(movie, selectMovie);
}
/**
 * Creates a Program iinstance from given object literal, add it to programList and displays it in the relevant containers
 * @param {Object} obj object literal with properties corresponding to a Program instance
 */
// TODO: Too complicated
function createProgramFromLiteralAndAddItToList(obj) {
    var program = new Program(new Date(obj.date));
    for (let i = 0; i < obj.movieList.length; i++) {
        var nextMovie = createMovie(obj.movieList[i].title, parseInt(obj.movieList[i].duration), obj.movieList[i].genre);
        program.addMovie(nextMovie);
    }
    programList.push(program);
    // refreshDisplayList(programList, programListing);
    addProgramToForm(program, selectProg);
}

function getInputAndAddMovieToProg() {
    if (!validateInput(programForm, progMsgDiv)) return;
    // TODO: get selected program and movie and add it to the list in a try block!!!
    try {
        var selectedMovieString = selectMovie.value;
        console.log(selectedMovieString);
        var selectedProgramString = selectProg.value;
        console.log(selectedProgramString);

        var prog = getObjFromMap(programList, selectedProgramString);
        if (!prog) throw new Error(`unknown error while fetching program!
        Try again!`);

        var movie = getObjFromMap(movieList, selectedMovieString);
        if (!movie) throw new Error(`unknown error while fetching movie!
        Try again!`);

        prog.addMovie(movie);
        // update programList:
        updateMap(programList, selectedProgramString, prog.getData(), prog);
        if (!updateFormSelect(selectProg, selectedProgramString, prog.getData(), prog.getShortData())) {
            throw new Error("updateFormSelect");
        }

    } catch (error) {
        displayErrorMsg(error, progMsgDiv);
    }
    resetForm(programForm); 
    // refreshDisplayList(programList, programListDiv);
    // refreshDisplayList(programList, programListing);
    // refreshProgramDisplay(programListDiv, getShortData);
    // refreshProgramDisplay(programListing, getDataAsHTML);
    refreshProgramListDiv();
    refreshProgramListing();
    
}
/**
 * Replaces the value of option in given select element with given new value
 * @param {DOM element} selectElement form select element
 * @param {string} oldOptionValue 
 * @param {string} newOptionValue 
 * @returns true if value was updated, false otherwise
 */
function updateFormSelect(selectElement, oldOptionValue, newOptionValue, newTextContent) {
    var optionList = selectElement.querySelectorAll("option");
    for (let i = 0; i < optionList.length; i++) {
        if (optionList[i].value === oldOptionValue) {
            optionList[i].value = newOptionValue;
            optionList[i].textContent = newTextContent;
            return true;
        }
    }
    return false;
}

/**
 * 
 * @param {array} map list of key-value pairs, where key is the string 
 * representation of the object contained in the value field
 * @param {string} key 
 * @returns {Object} object corresponding to given key in given map, or null if 
 * key is not found
 */
function getObjFromMap(map, key) {
    var obj = null;
    for (let i = 0; i < map.length; i++) {
        if (map[i].key === key) {
            obj = map[i].value;
            break;
        }
    }
    return obj;
}
/**
 * Removes from given map the object with given key, and adds a new item with
 * given newKey and value
 * @param {array} map list of objects with key-value pairs
 * @param {string} oldKey 
 * @param {string} newKey 
 * @param {Object} value 
 * @returns true if map was updated, false otherwise
 */
function updateMap(map, oldKey, newKey, value) {
    for (let i = 0; i < map.length; i++) {
        if (map[i].key === oldKey) {
            // map.splice(i, 1); // first remove item
            // map.push({ // add new item with newKey and given value
            //     key: newKey,
            //     value: value
            // })

            // remove and replace using splice()
            map.splice(i, 1, { key: newKey, value: value });

            return true;
        }
    }
    return false;
}

/**
 * Sets the minimum value of given date input element
 * @param {input[type=date]} dateInputElement 
 * @param {string} minValue if undefined, set to today
 */
function setMinDateValue(dateInputElement, minValue) {
    if (!minValue) {
        minValue = getValidDateInputString(new Date());
    }
    console.log(minValue);
    dateInputElement.setAttribute("min", minValue);
    dateInputElement.setAttribute("value", minValue);

}
/**
 * 
 * @param {Date} date 
 * @returns {string} valid date string for input element of type date in the format YYYY-MM-DD
 */
function getValidDateInputString(date) {
    var month = date.getMonth() + 1;
    if (month < 10) month = "0" + month;
    var day = date.getDate();
    if (day < 10) day = "0" + day;
    console.log(`${date.getFullYear()}-${month}-${day}`);
    return `${date.getFullYear()}-${month}-${day}`;
}

function validateInput(formElement, errorMsgDiv) {
    var valid = true;
    var inputList = formElement.querySelectorAll("select, input:not(input[type='button'])");
    // console.log(inputList);
    for (let i = 0; i < inputList.length; i++) {
        if (!inputList[i].value) {
            valid = false;
            inputList[i].classList.add("missing");
            var label = document.querySelector("labe ")
            inputList[i].addEventListener("focus", function (e) {
                e.target.classList.remove("missing");
            })
        }
    }
    if (!valid) {
        displayErrorMsg("Please fill out the empty fileds!", errorMsgDiv);
    } else {
        errorMsgDiv.innerHTML = "";
    }
    return valid;
}



/**
 * Displays ginven message at the beginning of given element
 * @param {string} msg 
 * @param {DOM element} element 
 */
function displayErrorMsg(msg, element) {
    var errorPara = document.createElement("p");
    var msgText = document.createTextNode(msg);
    errorPara.appendChild(msgText);
    errorPara.classList.add("errorMsg");
    element.innerHTML = "";
    element.appendChild(errorPara);
}

//TODO
function findLabelFor(el) {
    var idVal = el.id;
    labels = document.getElementsByTagName('label');
    for( let i = 0; i < labels.length; i++ ) {
       if (labels[i].htmlFor == idVal)
            return labels[i];
    }
 }

/**
 * Gets form input values and creates a new Movie instance based on that input.
 * @param {event} e 
 */
function getInputAndCreateMovie() {
    if (!validateInput(movieForm, msgDiv)) return;
    var title = titleInput.value;
    var dur = parseInt(lengthInput.value);
    var genre = genreInput.value;
    var movie = createMovie(title, dur, genre);
    movieList.push({
        key: movie.getData(),
        value: movie
    });
    resetForm(movieForm); 
    refreshDisplayList(movieList, movieDiv);
    refreshDisplayList(movieList, movieListing);
    addMovieToProgramForm(movie, selectMovie);
}

/**
 * Adds movie as an option to given select element
 * @param {Movie} movie 
 * @param {select element} selectElement 
 */
function addMovieToProgramForm(movie, selectElement) {
    var option = document.createElement("option");
    option.setAttribute("value", movie.getData());
    option.textContent = movie.getData();
    selectElement.appendChild(option);
}

function addProgramToForm(program, selectElement) {
    var option = document.createElement("option");
    option.setAttribute("value", program.getData());
    option.textContent = program.getData();
    selectElement.appendChild(option);
}

/**
 * Clears all input fields
 */
function resetForm(formElement) {
    // HTMLFormElement.reset();
    // e.g. document.getElementById('myform').reset();
    formElement.reset();
}

function getInputAndCreateProg() {
    var progDate = programForm.querySelector("#progDate");
    var newProgram = createProgram(new Date(progDate.value));
    programList.push({
        key: newProgram.getData(),
        value: newProgram
    });
    console.log(newProgram.getData());
    // refreshDisplayList(programList, programListDiv);
    // refreshDisplayList(programList, programListing);
    refreshProgramListDiv();
    refreshProgramListing();

    // refreshProgramDisplay(programListDiv, getShortData);
    // refreshProgramDisplay(programListing, getDataAsHTML);

    addProgramToForm(newProgram, programForm.querySelector("#selectProg"));
}
// // TODO: cannot pass methods as you would a regular callback apparently
// function refreshProgramDisplay(containerElement, getDataFn) {
//     containerElement.innerHTML = "";
//     programList.forEach(function (prog) {
//         var nextItem = document.createElement("li");
//         nextItem.innerHTML = prog.value.getDataFn();
//         containerElement.appendChild(nextItem);
//     })
// }
function refreshProgramListDiv() {
    programListDiv.innerHTML = "";
    programList.forEach(function (prog) {
        var nextItem = document.createElement("li");
        var text = document.createTextNode(prog.value.getShortData());
        nextItem.appendChild(text);
        programListDiv.appendChild(nextItem);
    })
}
function refreshProgramListing() {
    programListing.innerHTML = "";
    programList.forEach(function (prog) {
        var nextItem = document.createElement("li");
        // var text = document.createTextNode(prog.value.getDataAsHTML());
        nextItem.innerHTML = prog.value.getDataAsHTML();
        programListing.appendChild(nextItem);
    })
}

/**
 * Refreshes the whole text content of given container to include all elements in given list
 * @param {array} list List of objects containing key-value pairs; keys are string 
 * representations of objects contained in the value field
 * that returns the string representation of that object
 * @param {DOM element} container container element for the list
 */
function refreshDisplayList(list, container) {
    container.innerHTML = "";
    list.forEach(function (element) {
        var nextItem = document.createElement("li");
        var text = document.createTextNode(element.key);
        nextItem.appendChild(text);
        container.appendChild(nextItem);
    })
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

/**
 * @param {Date} date 
 * @returns a Program instance
 */
function createProgram(date) {
    return new Program(date);
}


// function clearErrorFlags() {
//     // clear message div:
//     msgDiv.innerHTML = "";
//     // clear error fields:
//     var errorFields = document.getElementsByClassName("missing");
//     for (let i = 0; i < errorFields.length; i++) {
//         errorFields[i].classList.remove("missing");
//     }
// }