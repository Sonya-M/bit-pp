/* jshint esversion: 6 */

const control = (function () {

    function setEventHandlers() {
        // set event handlers to be called from the view, which listens
        // for those events
        view.setCreateMovieHandler(handleCreateMovie);
        view.setDeleteMovieHandler(handleDeleteMovie);
        view.setCreateProgramHandler(handleCreateProgram);
        view.setAddMovieToProgHandler(handleAddMovieToProg);
    }

    function onMovieListChanged(movieList) {
        view.displayMovies(movieList);
        view.refreshMovieSelect(movieList);
    }

    function handleCreateMovie(inputData) {
        console.log("inputData: ", inputData);
        try {
            model.createMovie(inputData.title, parseInt(inputData.duration), inputData.genre);
            // model.createMovie(inputData.title, inputData.duration, inputData.genre); 

            console.log("movieList: ", model.getMovieList());
            onMovieListChanged(model.getMovieList());
        } catch (error) {
            // should not happen after validation in View,
            // but just in case...
            view.reportMovieError(`Error on movie create! Check input!`);
        }
    }

    function handleDeleteMovie(movieID) {
        console.log(`calling model.deleteMovie(), passing it ${parseInt(movieID)}............`);
        model.deleteMovie(parseInt(movieID));
        onMovieListChanged(model.getMovieList());
        onProgramChange(model.getProgramList()); // the movie is deleted from the
        // program list as well
        console.log("movieList: ", model.getMovieList());
    }

    function handleCreateProgram(dateInput) {
        try {
            model.createProgram(new Date(dateInput));
            //TODO:
            console.log("created program...");
            onProgramChange(model.getProgramList());
        } catch (error) {
            view.reportProgramError(`Error: ${error.message}`);
        }
    }

    function onProgramChange(programList) {
        view.displayPrograms(programList);
        view.refreshProgramSelect(programList);
        view.refreshMovieSelect(model.getMovieList());
    }
    function handleAddMovieToProg(inputData) {
        try {
            model.addMovieToProgram(parseInt(inputData.programID), parseInt(inputData.movieID));
            onProgramChange(model.getProgramList());
        } catch (error) {
            view.reportProgramError(`Error: ${error.message}`);
        }
    }

    return {
        init: function () {
            view.initDOM();
            setEventHandlers();
            view.addPermanentEventListeners();
            // preload list with some movie suggestions
            model.preloadMovies(onMovieListChanged);

            console.log("App initialized");
        }
    };
})(model, view);