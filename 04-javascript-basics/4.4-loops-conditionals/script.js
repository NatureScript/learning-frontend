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