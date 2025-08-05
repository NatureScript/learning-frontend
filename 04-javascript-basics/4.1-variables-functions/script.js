// ===============================================
// Lesson 4.1: Variables and Functions (script.js)
// ===============================================

// ส่วนที่ 1: ตัวแปร (Variables)
// ตัวแปรคือชื่อที่เราใช้เก็บข้อมูล
// JavaScript มี 3 วิธีหลักในการประกาศตัวแปร: var, let, และ const

// 1. var (เป็นวิธีเก่า, มี scope กว้าง, ไม่ค่อยแนะนำให้ใช้ในโค้ดใหม่ๆ)
var oldStyleVariable = "ฉันคือตัวแปรแบบ var";
console.log("var:", oldStyleVariable); // แสดงผลใน Console ของเบราว์เซอร์

// 2. let (วิธีที่แนะนำสำหรับการเปลี่ยนแปลงค่าได้)
// block-scoped: มีผลเฉพาะใน block ที่ประกาศ (เช่น ใน {})
let userName = "Alice";
let userAge = 30;
console.log("let:", "ชื่อ:", userName, "อายุ:", userAge);

// ค่าของตัวแปร let สามารถเปลี่ยนแปลงได้
userName = "Bob";
userAge = 25;
console.log("let (ค่าใหม่):", "ชื่อ:", userName, "อายุ:", userAge);

// 3. const (วิธีที่แนะนำสำหรับการประกาศค่าคงที่, ไม่เปลี่ยนแปลงค่าได้)
// block-scoped: มีผลเฉพาะใน block ที่ประกาศ
const appName = "My JavaScript App";
const PI = 3.14159;
console.log("const:", "ชื่อแอป:", appName, "ค่า PI:", PI);

// ข้อควรระวัง: ไม่สามารถเปลี่ยนค่าของ const ได้!
// PI = 3.14; // ถ้า uncomment บรรทัดนี้ จะเกิด TypeError: Assignment to constant variable.

// ===============================================

// ส่วนที่ 2: ฟังก์ชัน (Functions)
// ฟังก์ชันคือกลุ่มของโค้ดที่สามารถนำกลับมาใช้ซ้ำได้
// ช่วยให้โค้ดเป็นระเบียบและจัดการง่าย

// 1. การประกาศฟังก์ชันแบบพื้นฐาน (Function Declaration)
function greetUser(name) {
    // โค้ดภายในฟังก์ชัน
    let greetingMessage = "สวัสดีครับ, " + name + "!";
    console.log("ฟังก์ชัน greetUser:", greetingMessage);
    return greetingMessage; // ส่งค่ากลับ
}

// การเรียกใช้ฟังก์ชัน
let welcomeMessage = greetUser("สมชาย"); // เรียกใช้ฟังก์ชันและส่งค่า "สมชาย" เข้าไป
greetUser("สุชาดา"); // เรียกใช้ฟังก์ชันอีกครั้ง

// 2. ฟังก์ชันที่ไม่มี Argument (ค่าที่รับเข้ามา)
function showAppName() {
    console.log("ฟังก์ชัน showAppName:", "ยินดีต้อนรับสู่ " + appName);
}
showAppName(); // เรียกใช้

// 3. ฟังก์ชันที่ทำการคำนวณ
function addNumbers(num1, num2) {
    let sum = num1 + num2;
    console.log("ฟังก์ชัน addNumbers:", num1, "+", num2, "=", sum);
    return sum; // ส่งผลรวมกลับ
}

let result1 = addNumbers(10, 5); // result1 จะมีค่า 15
let result2 = addNumbers(20, 30); // result2 จะมีค่า 50
console.log("ผลรวมครั้งแรก:", result1);
console.log("ผลรวมครั้งที่สอง:", result2);


// ===============================================

// ส่วนที่ 3: การโต้ตอบกับ HTML (พื้นฐาน)
// เราจะใช้ JavaScript ในการเข้าถึง Element ใน HTML และแก้ไขเนื้อหา

// 1. เข้าถึง Element ด้วย ID
// document.getElementById('id-ของ-element')
const greetingDiv = document.getElementById('greetingOutput');
const calculationDiv = document.getElementById('calculationResult');

// 2. แสดงผลลัพธ์จากฟังก์ชันใน HTML
// innerHTML ใช้สำหรับใส่เนื้อหา HTML (รวมถึงข้อความ) เข้าไปใน Element
if (greetingDiv) { // ตรวจสอบว่า Element มีอยู่จริงก่อน
    greetingDiv.innerHTML = "<h3>ข้อความทักทายจาก JS:</h3>" + greetUser("คุณเจมส์");
}

if (calculationDiv) { // ตรวจสอบว่า Element มีอยู่จริงก่อน
    let finalCalculation = addNumbers(123, 456);
    calculationDiv.innerHTML = "<h3>ผลการคำนวณจาก JS:</h3>" + "123 + 456 = " + finalCalculation;
}

// ===============================================

// ส่วนที่ 4: การคอมเมนต์โค้ดใน JavaScript
// คอมเมนต์ช่วยให้โค้ดอ่านง่ายและเข้าใจง่ายขึ้น
// Single-line comment: ใช้ //
/*
  Multi-line comment:
  ใช้ /* และ */ เพื่อคอมเมนต์หลายบรรทัด
*/

console.log("โค้ด JavaScript ทำงานเสร็จสิ้น!");