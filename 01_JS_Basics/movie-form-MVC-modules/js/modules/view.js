/* jshint esversion: 6 */
let $movieForm;
let $movieTitleInput;
let $movieDurationInput;
let $movieGenreSelect;
let $createMovieBtn;
let $movieErrorReport;
let $displayedMovieList;
let $programForm;
let $programDateInput;
let $createProgramBtn;
let $selectMovie;
let $selectProgram;
let $addMovieToProgBtn;
let $displayedProgramList;
let $programErrorReport;
let $root;

// the view listens for events, but delegates the handling of those events
// to the controller
// handlers stored as variables - will be set by the controller
// thru setCreateMovieHandler() and setDeleteMovieHandler()
// callbacks set by the Control
let createMovieHandler;
let deleteMovieHandler;
let createProgramHandler;
let addMovieToProgHandler;

function initDOM() {
    $root = document.querySelector("#root");
    setMovieForm();
    $displayedMovieList = document.getElementById("displayedMovieList");

    setProgramForm();
    $displayedProgramList = document.getElementById("displayedProgramList");
}

function setMovieForm() {
    $movieForm = document.getElementById("movieForm");
    $movieForm.classList.add("form-control");
    // add title input
    $movieTitleInput = document.getElementById("title");
    // add duration input
    $movieDurationInput = document.getElementById("duration");
    // add genre select
    $movieGenreSelect = document.getElementById("genres");
    const GENRES = ["--select genre--", "action", "comedy", "crime", "drama", "horror", "romance",
        "sf", "thriller", "western", "other"];
    GENRES.forEach(function (genre) {
        const $option = document.createElement("option");
        $option.value = genre === "--select genre--" ? "" : genre; // "-" for missing value
        $option.textContent = genre;
        $movieGenreSelect.append($option);
    });
    // add create movie button
    $createMovieBtn = document.getElementById("createMovieBtn");

    $movieErrorReport = document.getElementById("movieErrorReport");
}

function setProgramForm() {
    $programForm = document.getElementById("programForm");
    setDateInput();
    $createProgramBtn = document.getElementById("createProgramBtn");
    $selectMovie = document.getElementById("selectMovie");
    $selectProgram = document.getElementById("selectProgram");
    $addMovieToProgBtn = document.getElementById("addMovieToProgBtn");
    $programErrorReport = document.getElementById("programErrorReport");
}

function setDateInput() {
    $programDateInput = document.getElementById("date");
    const todayAsString = getValidDateInputString(new Date());
    $programDateInput.setAttribute("min", todayAsString);
    $programDateInput.value = todayAsString;
}

function addCreateProgramListener() {
    $createProgramBtn.addEventListener("click", event => {
        event.preventDefault(); // prevent reload
        // date input always has a value - (default and min: today)
        createProgramHandler($programDateInput.value);
    });
}

/**
 * 
 * @param {Date} date 
 * @returns {string} valid date string for input element of type date in the format YYYY-MM-DD
 */
function getValidDateInputString(date) {
    let month = date.getMonth() + 1;
    if (month < 10) month = "0" + month;
    let day = date.getDate();
    if (day < 10) day = "0" + day;
    console.log(`${date.getFullYear()}-${month}-${day}`);
    return `${date.getFullYear()}-${month}-${day}`;
}

// unlike these permanent event listeners, delete btns event listeners
// are added dynamically to the displayed list items on each refresh
function addPermanentEventListeners() {
    addInputEventListeners($movieForm.querySelectorAll("input, select"));
    addInputEventListeners($programForm.querySelectorAll("input, select"));
    addCreateMovieListener();
    addCreateProgramListener();
    addAddMovieToProgramListener();
}
function addCreateMovieListener() {
    $movieForm.addEventListener("submit", event => {
        event.preventDefault();
        const input = validateMovieInput();
        if (input) {
            resetInput();
            createMovieHandler(input);
        }
    });
}


function addInputEventListeners($formGroup) {
    $formGroup.forEach(input => {
        input.addEventListener("focus", function (e) {
            if (input.classList.contains("is-invalid"))
                input.classList.remove("is-invalid");
        });
    });
}

function addAddMovieToProgramListener() {
    $addMovieToProgBtn.addEventListener("click", event => {
        event.preventDefault();
        const input = validateAddMovieToProgramInput();
        if (input) {
            addMovieToProgHandler(input);
        }
    });
}


/** Clears all input fields */
function resetInput() {
    $movieForm.querySelectorAll("input, select").forEach(formElement => formElement.value = "");
    $movieErrorReport.textContent = "";
}

/** returns input values as key-value pairs */
function validateMovieInput() {
    // debug
    // console.log(`getMovieInputData().....
    // ${$movieTitleInput.value}
    // ${$movieDurationInput.value}
    // ${$movieGenreSelect.value}`);
    let invalid = false;
    $movieForm.querySelectorAll("input, select").forEach(input => {
        if (!input.value) {
            input.classList.add("is-invalid");
            invalid = true;
        }
    });
    if (invalid) {
        reportMovieError("Please fill out the missing fields!");
        return null;
    } else {
        $movieErrorReport.textContent = "";
    }
    return {
        title: $movieTitleInput.value,
        duration: $movieDurationInput.value,
        genre: $movieGenreSelect.value,
    };
}

function validateAddMovieToProgramInput() {
    let invalid = false;
    $programForm.querySelectorAll("select").forEach(input => {
        if (!input.value) {
            input.classList.add("is-invalid");
            invalid = true;
        }
    });
    if (invalid) {
        reportProgramError("Please provide the missing fields!");
        return null;
    } else {
        $programErrorReport.textContent = "";
    }
    console.log(`$selectProgram.value: ${$selectProgram.value}
            $selectMovie.value: ${$selectMovie.value}`);
    return {

        programID: $selectProgram.value,
        movieID: $selectMovie.value,
    };
}


function displayMovies(movieList) {
    while ($displayedMovieList.firstChild) {
        $displayedMovieList.removeChild($displayedMovieList.firstChild);
    }
    if (movieList.length === 0) {
        // it would be better if the first arg were "beforeBegin", since
        // I am adding a p to a list, but it complicates clearing the content
        // on every add/delete
        $displayedMovieList.insertAdjacentHTML("afterBegin", "<p>No movies</p>");
    } else {
        // const ids = Object.keys(movieList);
        // ids.forEach(id => );
        movieList.forEach(movie => {
            const $li = document.createElement("li");
            $li.id = movie.id;
            // $li.textContent = movieList[id]movie.printValue; // string representation of movie
            $li.textContent = movie.printValue;
            $li.classList.add("list-group-item", "d-flex",
                "justify-content-between", "align-items-center");

            const $deleteBtn = document.createElement("button");
            $deleteBtn.textContent = "X";
            $deleteBtn.classList.add("delete", "btn", "btn-danger");
            $deleteBtn.setAttribute("data-id", movie.id);
            // add event listener to each button
            $deleteBtn.addEventListener("click", (event) => {
                deleteMovieHandler(event.target.getAttribute("data-id"));
            });

            $li.append($deleteBtn);


            $displayedMovieList.append($li);
        });
    }
}

function displayPrograms(programList) {
    while ($displayedProgramList.firstChild) { // clear list
        $displayedProgramList.removeChild($displayedProgramList.firstChild);
    }
    if (programList.length === 0) {
        $displayedProgramList.insertAdjacentHTML("afterBegin",
            "<p>No programs</p>");
    } else {
        programList.forEach(prog => {
            const $li = document.createElement("li");
            $li.classList.add("list-group-item", "d-flex",
                "justify-content-between", "align-items-start");
            $li.id = prog.id; // in case you add deleteProg functionality
            $li.innerHTML = prog.dataAsHTML;
            $displayedProgramList.append($li);
        });
    }
}
function reportMovieError(message) {
    $movieErrorReport.textContent = message ? message : "ERROR";
}
function reportProgramError(message) {
    $programErrorReport.textContent = message ? message : "ERROR";
}

function refreshMovieSelect(movieList) {
    while ($selectMovie.firstChild) {
        $selectMovie.removeChild($selectMovie.firstChild);
    }
    const $placeholderOption = document.createElement("option");
    $placeholderOption.value = "";
    $placeholderOption.textContent = "--select movie--";
    $selectMovie.append($placeholderOption);
    movieList.forEach(movie => {
        const $option = document.createElement("option");
        $option.id = movie.id;
        $option.value = movie.id;
        $option.textContent = movie.printValue;
        $selectMovie.append($option);
    });
}
// TODO: THESE TWO REFRESH FNS SHOULD BE GENERALIZED INTO ONE,
// BUT WOULD THAT BE OVERENGINEERING??????????????????????????
function refreshProgramSelect(programList) {
    while ($selectProgram.firstChild) {
        $selectProgram.removeChild($selectProgram.firstChild);
    }
    const $placeholderOption = document.createElement("option");
    $placeholderOption.textContent = "--select program--";
    $placeholderOption.value = "";
    $selectProgram.append($placeholderOption);
    programList.forEach(program => {
        const $option = document.createElement("option");
        $option.id = program.id;
        $option.value = program.id;
        $option.textContent = program.shortData;
        $selectProgram.append($option);
    });
}

function setCreateMovieHandler(handler) {
    createMovieHandler = handler;
}
function setDeleteMovieHandler(handler) {
    deleteMovieHandler = handler;
}
function setCreateProgramHandler(handler) {
    createProgramHandler = handler;
}
function setAddMovieToProgHandler(handler) {
    addMovieToProgHandler = handler;
}

export { initDOM, addPermanentEventListeners, setCreateMovieHandler, setDeleteMovieHandler, setCreateProgramHandler, setAddMovieToProgHandler, displayMovies, displayPrograms, reportMovieError, reportProgramError, refreshMovieSelect, refreshProgramSelect };