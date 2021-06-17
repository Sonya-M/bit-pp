// Employees and Managers

//     1. Create constructor functions with properties representing the following:
//         ◦ Person: name, surname
//         ◦ Employee: inherits Person and has job and salary
//         ◦ Developer: inherits from Employee and has specialization
//         ◦ Manager: inherits from Employee and has department

//     2. All developers should inherit method:
//         ◦ getSpecialization which prints out the name of the specialization

//     3. All managers should inherit methods:
//         ◦ getDepartment which prints out the name of the department
//         ◦ changeDepartment which sets the department value on the given value

//     4. All employees should inherit methods:
//         ◦ getData which returns the name, surname and salary 
//         ◦ getSalary which prints out the salary
//         ◦ increaseSalary which increases the salary by 10% 

/**
 * @param {string} name 
 * @param {string} surname 
 */
function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}
/**
 * @returns {string} this person's full name
 */
Person.prototype.getFullName = function () {
    return `${this.name} ${this.surname}`;
}
/**
 * @param {string} name 
 * @param {string} surname 
 * @param {string} job 
 * @param {number} salary 
 */
function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Object.defineProperty(Employee.prototype, "constructor", {
    value: Employee,
    enumerable: false,
    writable: true
});
/**
 * @returns {number} this employer's salary
 */
Employee.prototype.getSalary = function () {
    return this.salary;
}
/**
 * @returns {string} representation of this employee
 */
Employee.prototype.getData = function () {
    return `${Person.prototype.getFullName.call(this)}, salary: ${this.getSalary()}`;
}
Object.defineProperty(Employee.prototype, "SALARY_INCREASE", {
    value: .1,
    enumerable: true,
    writable: false
})
/**
 * Increases this employee's salary by Employee.prototype.SALARY_INCREASE, 
 * rounded to the nearest integer
 */
Employee.prototype.increaseSalary = function () {
    this.salary = Math.round(this.salary * (1 + this.SALARY_INCREASE));
}

/**
 * @param {string} name 
 * @param {string} surname 
 * @param {string} job 
 * @param {number} salary 
 * @param {string} specialization 
 */
function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}
Developer.prototype = Object.create(Employee.prototype);
Object.defineProperty(Developer.prototype, "constructor", {
    value: Developer,
    enumerable: false,
    writable: true
});
/**
 * @returns {string} this developer's specialization
 */
Developer.prototype.getSpecialization = function () {
    return this.specialization;
}
/**
 * @param {string} name 
 * @param {string} surname 
 * @param {string} job 
 * @param {number} salary 
 * @param {string} department 
 */
function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}
Manager.prototype = Object.create(Employee.prototype);
Object.defineProperty(Manager.prototype, "constructor", {
    value: Manager,
    enumerable: false,
    writable: true
});
/**
 * @returns {string}
 */
Manager.prototype.getDepartment = function () {
    return this.department;
}
/**
 * @param {string} newDept 
 */
Manager.prototype.changeDepartment = function (newDept) {
    this.department = newDept;
}

///////////////////////////////////////////////////////////////////////////////
// TESTING
///////////////////////////////////////////////////////////////////////////////

var emp1 = new Employee("Jo", "Smith", "Joes job", 100);
console.log(emp1.getData());
console.log("Employee.prototype.constructor: " + Employee.prototype.constructor);
console.log("Increasing emp1's salary....");
emp1.increaseSalary();
console.log(emp1.getData());
var developer1 = new Developer("James", "Dev", "JS developer", 200, "JS");
console.log(developer1.getData());
console.log("Increasing developer1's salary....");
developer1.increaseSalary();
console.log(developer1.getData());
console.log("developer1.getSpecialization(): " + developer1.getSpecialization());
var manager1 = new Manager("Mary", "Bossy", "manager", 500, "HR");
console.log(manager1.getData());
console.log(manager1);
console.log(manager1.getDepartment());
console.log("Changing manager1's department...");
manager1.changeDepartment("Customer service");
console.log(manager1.getDepartment());
console.log(manager1);

