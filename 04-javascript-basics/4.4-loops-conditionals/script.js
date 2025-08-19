// ===============================================
// Lesson 4.4: Loops and Conditionals
// ===============================================

// --- Part 1: Conditional Statements ---
console.log("--- Part 1: Conditional Statements ---");

// 1.1 if Statement
// ใช้เมื่อต้องการรันโค้ดก็ต่อเมื่อเงื่อนไขเป็นจริง (true) เท่านั้น
let temperature = 25;

if (temperature > 20) {
    console.log("1.1 It's a warm day!");
}

let isRaining = true;
if (isRaining) { // เงื่อนไขเป็น true อยู่แล้ว
    console.log("1.1 Don't forget your umbrella!");
}

// 1.2 if...else Statement
// ใช้เมื่อต้องการรันโค้ดชุดหนึ่งเมื่อเงื่อนไขเป็นจริง และอีกชุดหนึ่งเมื่อเงื่อนไขเป็นเท็จ (false)
let age = 18;

if (age >= 18) {
    console.log("1.2 You are old enough to vote.");
} else {
    console.log("1.2 You are too young to vote.");
}

// 1.3 if...else if...else Statement
// ใช้เมื่อมีหลายเงื่อนไขที่จะต้องตรวจสอบตามลำดับ
let score = 75;

if (score >= 90) {
    console.log("1.3 Grade: A");
} else if (score >= 80) {
    console.log("1.3 Grade: B");
} else if (score >= 70) {
    console.log("1.3 Grade: C");
} else {
    console.log("1.3 Grade: Fail");
}

// 1.4 switch Statement
// ใช้เมื่อคุณมีตัวแปรเดียวที่ต้องการตรวจสอบค่าที่เป็นไปได้หลายค่า
let day = "Monday";
console.log("1.4 Using switch for day:", day);

switch (day) {
    case "Monday":
        console.log("  It's the start of the week.");
        break; // สำคัญมาก: ใช้ break เพื่อออกจาก switch เมื่อพบ case ที่ตรงกัน
    case "Friday":
        console.log("  It's almost weekend!");
        break;
    case "Sunday":
        console.log("  It's a weekend!");
        break;
    default: // ทำงานเมื่อไม่มี case ไหนตรงกันเลย
        console.log("  It's a regular weekday.");
}

// 1.5 Logical Operators with Conditionals
// && (AND): ทั้งสองเงื่อนไขต้องเป็นจริง
// || (OR): หนึ่งในเงื่อนไขเป็นจริงก็พอ
// ! (NOT): กลับค่าความจริง (true เป็น false, false เป็น true)

let isLoggedIn = true;
let hasPermission = false;

if (isLoggedIn && hasPermission) {
    console.log("1.5 Access granted to admin panel.");
} else {
    console.log("1.5 Access denied. Check login and permissions.");
}

let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("1.5 Enjoy your day off!");
} else {
    console.log("1.5 Back to work.");
}

let isSunny = true;
if (!isSunny) { // !isSunny คือ false
    console.log("1.5 It's not sunny today.");
} else {
    console.log("1.5 It is sunny today.");
}
// --- Part 2: Loops ---
console.log("\n--- Part 2: Loops ---"); // เพิ่มบรรทัดว่างเพื่อแยกส่วนใน Console

// 2.1 for Loop
// ใช้เมื่อรู้จำนวนรอบที่แน่นอน
console.log("2.1 For Loop:");
for (let i = 0; i < 5; i++) { // i = initializer; condition; increment/decrement
    console.log("  Loop iteration (for):", i);
}
// ใช้ for loop วนซ้ำ Array
let fruits = ["Apple", "Banana", "Cherry", "Date"];
console.log("2.1 Looping through fruits with for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log("  ", fruits[i]);
}


// 2.2 while Loop
// ใช้เมื่อไม่รู้จำนวนรอบที่แน่นอน แต่รู้เงื่อนไขที่จะหยุด
console.log("2.2 While Loop:");
let count = 0;
while (count < 3) {
    console.log("  Loop iteration (while):", count);
    count++; // สำคัญ: ต้องเพิ่มค่าตัวนับ มิฉะนั้นจะเกิด Infinite Loop (วนไม่รู้จบ)
}

// ตัวอย่าง while loop ที่ซับซ้อนขึ้น: ทอยลูกเต๋าจนกว่าจะได้ 6
console.log("2.2 Rolling a dice until 6:");
let diceRoll = 0;
let attempts = 0;
while (diceRoll !== 6) {
    diceRoll = Math.floor(Math.random() * 6) + 1; // สุ่มตัวเลข 1-6
    attempts++;
    console.log(`  Attempt ${attempts}: Rolled a ${diceRoll}`);
}
console.log(`  It took ${attempts} attempts to roll a 6.`);


// 2.3 forEach Method (สำหรับ Arrays)
// เป็น method ที่ใช้งานง่ายสำหรับ Array โดยเฉพาะ
console.log("2.3 ForEach Method (for Arrays):");
let colors = ["Red", "Green", "Blue"];
colors.forEach(function(color, index) { // function จะรับ element และ index เข้ามา
    console.log(`  Color at index ${index}: ${color}`);
});
// สามารถใช้ Arrow Function ได้ (เป็นรูปแบบที่นิยมกว่า)
colors.forEach((color) => {
    console.log(`  Another color: ${color}`);
});


// 2.4 for...of Loop (สำหรับ Iterables เช่น Arrays, Strings)
// ใช้วนซ้ำ "ค่า" ของ Element
console.log("2.4 For...of Loop:");
let animals = ["Dog", "Cat", "Bird"];
for (let animal of animals) {
    console.log("  Animal:", animal);
}
// ใช้กับ String
let greeting = "Hello";
console.log("2.4 Looping through string with for...of:");
for (let char of greeting) {
    console.log("  Character:", char);
}


// 2.5 for...in Loop (สำหรับ Objects)
// ใช้วนซ้ำ "ชื่อ Property (key)" ของ Object
console.log("2.5 For...in Loop:");
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};
for (let key in car) {
    console.log(`  ${key}: ${car[key]}`); // ใช้ key เพื่อเข้าถึง value
}

// 2.6 Break and Continue Statements
// break: ใช้เพื่อหยุด loop ทันที
console.log("2.6 Break Statement:");
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        console.log("  Breaking loop at i =", i);
        break; // Loop จะหยุดที่นี่
    }
    console.log("  Current i (before break):", i);
}

// continue: ใช้เพื่อข้ามรอบปัจจุบันของ loop ไปยังรอบถัดไป
console.log("2.6 Continue Statement:");
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log("  Skipping iteration at i =", i);
        continue; // ข้ามการทำงานที่เหลือในรอบนี้ ไปรอบถัดไปทันที
    }
    console.log("  Current i (after continue):", i);
}