// ===============================================
// Lesson 4.3: Data Structures - Arrays & Objects
// ===============================================

// --- Part 1: Arrays ---
console.log("--- Part 1: Arrays ---");

// 1.1 Declaring Arrays
// An array is an ordered list of values.
const fruits = ["Apple", "Banana", "Cherry"];
console.log("1.1 Fruits Array:", fruits); // Output: ["Apple", "Banana", "Cherry"]

// An array can hold different data types
const mixedArray = [1, "Hello", true, null, { name: "Object in Array" }];
console.log("1.1 Mixed Array:", mixedArray);

// 1.2 Accessing Array Elements (using index, 0-based)
console.log("1.2 First fruit:", fruits[0]);   // Output: Apple
console.log("1.2 Second fruit:", fruits[1]);  // Output: Banana
console.log("1.2 Last fruit:", fruits[fruits.length - 1]); // Output: Cherry

// 1.3 Modifying Array Elements
fruits[1] = "Blueberry"; // Change "Banana" to "Blueberry"
console.log("1.3 Modified Fruits Array:", fruits); // Output: ["Apple", "Blueberry", "Cherry"]

// 1.4 Adding Elements to an Array
fruits.push("Grape"); // Add to the end
console.log("1.4 After push (end):", fruits); // Output: ["Apple", "Blueberry", "Cherry", "Grape"]

fruits.unshift("Orange"); // Add to the beginning
console.log("1.4 After unshift (start):", fruits); // Output: ["Orange", "Apple", "Blueberry", "Cherry", "Grape"]

// 1.5 Removing Elements from an Array
const lastFruit = fruits.pop(); // Remove from the end
console.log("1.5 Removed last fruit:", lastFruit); // Output: Grape
console.log("1.5 After pop:", fruits); // Output: ["Orange", "Apple", "Blueberry", "Cherry"]

const firstFruit = fruits.shift(); // Remove from the beginning
console.log("1.5 Removed first fruit:", firstFruit); // Output: Orange
console.log("1.5 After shift:", fruits); // Output: ["Apple", "Blueberry", "Cherry"]

// 1.6 Array Length
console.log("1.6 Number of fruits:", fruits.length); // Output: 3

// 1.7 Iterating over an Array (using forEach) - We'll cover loops more in 4.4
console.log("1.7 Iterating fruits:");
fruits.forEach((fruit, index) => {
    console.log(`  ${index}: ${fruit}`);
});


// --- Part 2: Objects ---
console.log("\n--- Part 2: Objects ---");

// 2.1 Declaring Objects
// An object is a collection of key-value pairs.
// Keys (or property names) are strings (or symbols), and values can be any data type.
const person = {
    name: "Alice",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "hiking"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        zip: "12345"
    }
};
console.log("2.1 Person Object:", person);

// 2.2 Accessing Object Properties
// Dot notation (preferred when property name is known and a valid identifier)
console.log("2.2 Person's name (dot notation):", person.name); // Output: Alice
console.log("2.2 Person's age (dot notation):", person.age);   // Output: 30

// Bracket notation (useful for dynamic property names or names with spaces/special characters)
console.log("2.2 Person's street (bracket notation):", person["address"]["street"]); // Output: 123 Main St
const propertyName = "isStudent";
console.log("2.2 Is student (dynamic bracket notation):", person[propertyName]); // Output: false

// 2.3 Modifying Object Properties
person.age = 31; // Change age
console.log("2.3 Modified age:", person.age); // Output: 31

person["isStudent"] = true; // Change isStudent
console.log("2.3 Modified isStudent:", person.isStudent); // Output: true

// 2.4 Adding New Properties
person.email = "alice@example.com"; // Add new property
console.log("2.4 After adding email:", person);

// 2.5 Deleting Properties
delete person.address; // Delete the address property
console.log("2.5 After deleting address:", person);

// 2.6 Object Methods (Functions inside an object)
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function() { // Method definition
        console.log("2.6 Car started!");
    },
    displayInfo: function() {
        console.log(`2.6 Car Info: ${this.make} ${this.model} (${this.year})`);
    }
};
car.start(); // Calling the method
car.displayInfo(); // Calling another method

// 2.7 Looping through Object Properties (using for...in) - More in 4.4
console.log("2.7 Car properties:");
for (const key in car) {
    if (typeof car[key] !== 'function') { // Exclude methods for simple display
        console.log(`  ${key}: ${car[key]}`);
    }
}