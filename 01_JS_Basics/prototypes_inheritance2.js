// Applications:

//     1. Create constructor functions with properties representing the
//         following: ◦ WebApp: name, url, technologies, licence, stars ◦
//         MobileApp: name, platforms, licence, stars

//     2. All web applications should inherit methods: ◦ getData which prints
//         out all the information ◦ reactBased which checks if one of the used
//         technologies is React

//     3. All mobile applications should inherit methods: ◦ getData which prints
//         out all the informations ◦ forAndroid which checks if one of the
//         platforms the application is developed for is Android

//     4. Both web and mobile applications should inherit methods: ◦ isCCLicence
//         which checks if the licence of the application is CC (Creative
//         Commons) ◦ like which increases the number of stars by one ◦
//         showStars which prints out the number of stars 

/* jshint esversion: 6 */


/**
 * App constructor
 * @param {string} name 
 * @param {string} licence if undefined, defaults to false
 * @param {number} nStars if undefined, defaults to 0
 */
function App(name, licence, nStars) {
    this.name = name;
    this.licence = licence;
    if (nStars) this.nStars = nStars;
    else this.nStars = 0;
}
/**
 * @returns {boolean} true if this app's licence is CC, false otherwise
 */
App.prototype.isCCLicence = function () {
    return this.licence.toLowerCase() === "cc" ||
        this.licence.toLowerCase() === "creative commons";
};
/** Increments this app's number of stars by 1 */
App.prototype.like = function () {
    this.nStars++;
};
/**
 * @returns {number} number of stars for this app
 */
App.prototype.showStars = function () {
    return this.nStars;
};
/**
 * @returns {string} a string representation of this app
 */
App.prototype.getData = function () {
    return `name: ${this.name}; licence: ${this.licence}; stars: ${this.nStars}`;
};
/**
 * @param {string} name 
 * @param {string} url 
 * @param {Array.<string>} technologies 
 * @param {string} licence 
 * @param {number} stars 
 */
function WebApp(name, url, technologies, licence, stars) {
    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
}
WebApp.prototype = Object.create(App.prototype);
Object.defineProperty(WebApp.prototype, "constructor", {
    value: WebApp,
    enumerable: false,
    writable: true
});
/**
 * @returns {string} string representation of this web app
 */
WebApp.prototype.getData = function () { //TODO
    return `${App.prototype.getData.call(this)}
technologies: ${(this.technologies).join(", ")}; 
url: ${this.url}`;
};
WebApp.prototype.reactBased = function () {
    return this.technologies.join(" ").toLowerCase().indexOf("react") >= 0;
};

/**
 * @param {string} name 
 * @param {Array.<string>} platforms 
 * @param {string} licence 
 * @param {number} stars 
 */
function MobileApp(name, platforms, licence, stars) {
    App.call(this, name, licence, stars);
    this.platforms = platforms;
}
MobileApp.prototype = Object.create(App.prototype);
Object.defineProperty(MobileApp.prototype, "constructor", {
    value: MobileApp,
    enumerable: false,
    writable: true
});
/**
 * @returns {string} a string representation of this mobile app
 */
MobileApp.prototype.getData = function () {
    return `${App.prototype.getData.call(this)}
platforms: ${this.platforms.join(", ")}`;
};
/**
 * @returns {boolean} true if app is developed for Android, false otherwise
 */
MobileApp.prototype.forAndroid = function () {
    return this.platforms.join(" ").toLowerCase().indexOf("android") >= 0;
};

///////////////////////////////////////////////////////////////////////////////
// TESTING
///////////////////////////////////////////////////////////////////////////////
const app1 = new App("app1", "CC", 1);
console.log(app1);
app1.like();
console.log("App1 stars after calling like(): " + app1.showStars());
console.log("app1.isCCLicence(): " + app1.isCCLicence());
console.log(app1.getData());
const webApp1 = new WebApp("my web app", "www.sonja.com", ["jQuery", "React"],
    "CC", 5);
console.log(webApp1);
console.log(webApp1.getData());
console.log("webApp1.reactBased(): " + webApp1.reactBased());
const mobApp1 = new MobileApp("my mobile app", ["android", "ios"], "cc", 3);
console.log(mobApp1);
mobApp1.like();
console.log("mobile app after 1 call to like()....");
console.log(mobApp1.getData());
console.log("mobApp1.forAndroid()): " + mobApp1.forAndroid());
const mobApp2 = new MobileApp("my mobile app 2", ["ios"], "cc", 2);
console.log(mobApp2.getData());
console.log("mobApp2.forAndroid()): " + mobApp2.forAndroid());