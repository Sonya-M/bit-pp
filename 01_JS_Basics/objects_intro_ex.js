(function objectsIntroExercises() {
    "use strict"

// 1. Create an object that represents your favourite coffee. Please include
//    coffee name, strength, flavour, milk, sugar, … everything you like!

/**
 * Coffee constructor
 * @param {string} name 
 * @param {number} strength 
 * @param {string} flavor 
 * @param {boolean} milk 
 * @param {boolean} sugar 
 * @param {string} brand
 */
    function Coffee(name, strength, flavor, milk, sugar, brand) {
        this.name = name;
        this.strength = strength;
        this.flavor = flavor;
        this.milk = milk;
        this.sugar = sugar;
        this.brand = brand;
    }

    var myFavCoffee = 
    new Coffee("vanilio", 4, "vanilla", true, false, "Nespresso");
    console.log(myFavCoffee);

// 2. Create an object that represents your favourite movie. Please include
//    title, actors, director, genre, popularity. 

    /**
     * Movie constructor
     * @param {string} title 
     * @param {string array} actors 
     * @param {string} director 
     * @param {string} genre 
     * @param {number} popularity 
     */
    function Movie(title, actors, director, genre, popularity) {
        this.title = title;
        this.actors = actors;
        this.director = director;
        this.genre = genre;
        this.popularity = popularity;
    }

    var myFavMovie = new Movie("Spaceballs", ["Mel Brooks", "John Candy", 
    "Rick Moranis", "Bill Pullman"], "Mel Brooks", "SF comedy", 10);
    console.log(myFavMovie);

// 3. Write a function that creates an object that represents a project. Each
//    project is described by: description,  programming language, git
//    repository, boolean status that says if the project is in development or
//    not. Add a method that prints out the project's repository,  a method that
//    checks if the project is written in JavaScript as well as a method that
//    checks if the project is in development or not.

/**
 * Project constructor
 * @param {string} description 
 * @param {string array} programmingLgs programming languages used in project
 * @param {string} gitRepo the url of the project's repository
 * @param {boolean} inDev is this project in development
 */
    function Project(description, programmingLgs, gitRepo, inDev) {
        this.description = description;
        this.programmingLgs = programmingLgs;
        this.gitRepo = gitRepo;
        this.inDev = inDev;
        
        this.printRepository = function() {
            return("Repository URL: " + this.gitRepo);
        };

        this.inJS = function() {
            for (var i = 0; i < programmingLgs.length; i++) {
                if (programmingLgs[i].toLowerCase() === "js")
                    return true;
            }
            return false;
        }

        this.inDevelopment = function() {
            return this.inDev;
        }
    }

    var projectObject = new Project("BIT-web", ["HTML", "CSS"], 
        "https://github.com/Sonya-M/bit-web.git", true);
    console.log(projectObject);
    console.log("Type of projectObject created using a constructor: " + typeof projectObject);
    console.log(projectObject.printRepository());
    console.log("Is the project written in js? " + projectObject.inJS());
    console.log("Is the project in development? " + projectObject.inDevelopment());

    // Another way - use a regular fn that returns an object:
    // In addition to using constructor functions and the new operator to create
    // objects, you can also use a normal function to create objects without
    // the new operator
   /**
    * 
    * @param {string} description 
    * @param {string array} programmingLgs programming languages used in project
    * @param {string} gitRepo the url of the project's repository
    * @param {boolean} inDev is this project in development
    * @returns an object representing a project
    */
    function createProject(description, programmingLgs, gitRepo, inDev) {
        return {
            description: description,
            programmingLgs: programmingLgs,
            gitRepo: gitRepo,
            inDev: inDev,

            printRepository: function() {
                return("Repository URL: " + gitRepo);
            },

            inJS: function() {
                for (var i = 0; i < programmingLgs.length; i++) {
                    if (programmingLgs[i].toLowerCase() === "js")
                        return true;
                }
                return false;
            },

            inDevelopment: function() {
                return inDev;
            },

            printRepository: function() {
                return("Repository URL: " + gitRepo);
            },
        };
    }

    var myProject = createProject("BIT-web", ["HTML", "CSS"], 
        "https://github.com/Sonya-M/bit-web.git", true);
    console.log(myProject);
    console.log("Type of object returned by a regular fn: " + typeof myProject);
    console.log(myProject.printRepository());
    console.log("Is the project written in js? " + myProject.inJS());
    console.log("Is the project in development? " + myProject.inDevelopment());

// 4. Write a function that creates an object that represents a culinary recipe.
//     Each recipe is described by: name, type of cuisine, complexity (value
//     from 1 to 5), list of ingredients, preparing time, preparing instruction.
//     ◦ Add a method that prints out all the ingredients necessary for the meal
//     preparation. ◦ Add a method that checks if a meal can be prepared for 15
//     minutes. ◦ Add a method that changes the type of cuisine to the given
//     value. ◦ Add a method that delete a given ingredient from the list of
//     ingredients.  

/**
 * 
 * @param {string} name 
 * @param {string} cuisine 
 * @param {number} complexity value from 1 to 5
 * @param {string array} ingredients list of ingredients
 * @param {number} prepTime in minutes
 * @param {string} instructions prep instructions
 */
function Recipe(name, cuisine, complexity, ingredients, prepTime, instructions) {
    this.name = name;
    this.cuisine = cuisine;
    this.complexity = complexity;
    this.ingredients = ingredients;
    this.prepTime = prepTime;
    this.instructions = instructions;

    this.printIngredients = function () {
        return "Ingredients for " + this.name + ":\n"
            + this.ingredients;
    }

    this.in15Mins = function() {
        return prepTime <= 15;
    }
    /**
     * sets this Recipe's cuisine to newCuisine
     * @param {string} newCuisine 
     */
    this.setCuisine = function(newCuisine) {
        this.cuisine = newCuisine;
    }
    /**
     * Removes given ingredient from the list of ingredients,
     * if it's in the list.
     * @param {string} ingredient 
     * @returns true if the ingredient was removed, false if no such 
     * ingredient is in the list
     */
    this.removeIngredient = function(ingredient) {
        var index = this.ingredients.indexOf(ingredient);
        if (index > -1) {
            ingredients.splice(index, 1);
            return true;
        }
        return false;
    }
}

var myRecipe = new Recipe("falafel", "Middle East", 3, 
    ["chickpeas", "garlic", "cumin", "coriander", "onion"], 
    60, "Soak chickpeas for 1 hr, blitz with other ingredients "
    + "make little balls and bake/fry");

    console.log(myRecipe);
    console.log(myRecipe.printIngredients());
    console.log("Can it be prepared in 15 mins? " + myRecipe.in15Mins());
    myRecipe.removeIngredient("cumin");
    console.log("Ingredients after calling myRecipe.removeIngredient(\"cumin\"): " + myRecipe.printIngredients());



})();