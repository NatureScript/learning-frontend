// ===============================================
// Lesson 4.2: DOM Manipulation (script.js)
// ===============================================

// ส่วนที่ 1: การเลือก Element (Selecting Elements)
// JavaScript มีหลายวิธีในการเลือก Element ใน HTML
console.log("--- 1. Selecting Elements ---");

// 1.1 เลือก Element ด้วย ID (วิธีที่พบบ่อยและตรงไปตรงมาที่สุดสำหรับ Element เดียว)
// document.getElementById() จะส่งคืน Element เดียว หรือ null ถ้าไม่พบ
const firstParagraph = document.getElementById('firstParagraph');
console.log("Element with ID 'firstParagraph':", firstParagraph);

const targetDiv = document.getElementById('targetDiv');
console.log("Element with ID 'targetDiv':", targetDiv);

// 1.2 เลือก Element ด้วย Class Name (ส่งคืน HTMLCollection - คล้าย Array)
// document.getElementsByClassName() จะส่งคืน collection ของ Elements
const sampleParagraphs = document.getElementsByClassName('sample-paragraph');
console.log("Elements with Class 'sample-paragraph':", sampleParagraphs);
// เข้าถึงแต่ละ Element ด้วย index
console.log("First sample paragraph:", sampleParagraphs[0]);
console.log("Second sample paragraph:", sampleParagraphs[1]);

// 1.3 เลือก Element ด้วย Tag Name (ส่งคืน HTMLCollection)
// document.getElementsByTagName() จะส่งคืน collection ของ Elements
const allParagraphs = document.getElementsByTagName('p');
console.log("All Paragraph elements:", allParagraphs);

// 1.4 เลือก Element ด้วย CSS Selector (แนะนำที่สุดสำหรับโค้ดสมัยใหม่)
// document.querySelector() - ส่งคืน Element แรกที่ตรงกับ Selector
const firstHighlight = document.querySelector('.highlight');
console.log("First element with class 'highlight':", firstHighlight);

const specificParagraph = document.querySelector('#firstParagraph'); // ใช้ ID ก็ได้
console.log("Specific paragraph using querySelector with ID:", specificParagraph);

// document.querySelectorAll() - ส่งคืน NodeList ของ Elements ทั้งหมดที่ตรงกับ Selector
const allHighlights = document.querySelectorAll('.highlight');
console.log("All elements with class 'highlight' (NodeList):", allHighlights);
// สามารถใช้ forEach กับ NodeList ได้โดยตรง
allHighlights.forEach(el => {
    console.log("Highlight element text:", el.textContent);
});

// ===============================================

// ส่วนที่ 2: การแก้ไขเนื้อหาและ Attributes (Modifying Content & Attributes)
console.log("\n--- 2. Modifying Content & Attributes ---");

const contentToChange = document.getElementById('contentToChange');
const myImage = document.getElementById('myImage');
const myLink = document.getElementById('myLink');

if (contentToChange) {
    // 2.1 เปลี่ยนข้อความภายใน Element
    // textContent: ปลอดภัยกว่า, ใส่แค่ข้อความธรรมดา
    contentToChange.textContent = "ข้อความนี้ถูกเปลี่ยนโดย JavaScript (textContent)!";

    // innerHTML: สามารถใส่ HTML tags ได้, ควรระมัดระวังเรื่องความปลอดภัย (XSS)
    // contentToChange.innerHTML = "ข้อความนี้ถูกเปลี่ยนโดย <strong>JavaScript (innerHTML)!</strong>";
}

if (myImage) {
    // 2.2 เปลี่ยน Attributes ของ Element (เช่น src, alt, width)
    myImage.src = "https://via.placeholder.com/200/FF0000/FFFFFF?text=New+Image"; // เปลี่ยนรูปภาพเป็นสีแดง
    myImage.alt = "New Red Image";
    myImage.width = 200; // เปลี่ยนขนาด
    myImage.height = 200;
}

if (myLink) {
    // 2.3 เปลี่ยน href และ text ของลิงก์
    myLink.href = "https://www.w3schools.com/";
    myLink.textContent = "W3Schools Link";
    // เปลี่ยน attribute target
    myLink.setAttribute('target', '_self'); // ทำให้เปิดในหน้าต่างเดิม
}

// ===============================================

// ส่วนที่ 3: การแก้ไขสไตล์ (Modifying Styles)
console.log("\n--- 3. Modifying Styles ---");

const styledBox = document.getElementById('styledBox');
const toggleStyleBtn = document.getElementById('toggleStyleBtn');

if (styledBox) {
    // เข้าถึงและเปลี่ยน Property ใน CSS โดยตรง
    // ใช้ camelCase สำหรับ Property ที่มีขีดกลาง (hyphenated) เช่น background-color เป็น backgroundColor
    styledBox.style.backgroundColor = '#d4edda'; // สีเขียวอ่อน
    styledBox.style.color = '#155724'; // สีเขียวเข้ม
    styledBox.style.fontSize = '1.2rem';
    styledBox.style.border = '1px solid #c3e6cb';
}

// 3.1 การสลับสไตล์ด้วยปุ่ม (จะใช้ Event Listener ในส่วนที่ 7)
// ฟังก์ชันนี้จะถูกเรียกเมื่อกดปุ่ม "สลับสไตล์"
let isStyled = false; // ตัวแปรสำหรับติดตามสถานะ

function toggleBoxStyle() {
    if (styledBox) {
        if (!isStyled) {
            styledBox.style.backgroundColor = '#f8d7da'; // สีแดงอ่อน
            styledBox.style.transform = 'scale(1.05)';
            styledBox.style.transition = 'all 0.3s ease-in-out';
            styledBox.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
            styledBox.style.borderRadius = '15px';
            isStyled = true;
        } else {
            styledBox.style.backgroundColor = '#d4edda'; // กลับเป็นสีเดิม
            styledBox.style.transform = 'scale(1)';
            styledBox.style.boxShadow = 'none';
            styledBox.style.borderRadius = '8px';
            isStyled = false;
        }
    }
}


// ===============================================

// ส่วนที่ 4: การเพิ่มและลบ Class (Adding/Removing Classes)
// การจัดการ Class เป็นวิธีที่ดีกว่าในการควบคุมสไตล์ เพราะแยก CSS และ JS ออกจากกัน
console.log("\n--- 4. Adding/Removing Classes ---");

const classToggleBox = document.getElementById('classToggleBox');
const addClassBtn = document.getElementById('addClassBtn');
const removeClassBtn = document.getElementById('removeClassBtn');
const toggleClassBtn = document.getElementById('toggleClassBtn');

if (classToggleBox) {
    // 4.1 เพิ่ม Class
    // classList.add(): เพิ่ม class หนึ่งหรือหลาย class
    // classToggleBox.classList.add('highlight'); // จะถูกเรียกด้วยปุ่มแทน

    // 4.2 ลบ Class
    // classList.remove(): ลบ class หนึ่งหรือหลาย class
    // classToggleBox.classList.remove('highlight'); // จะถูกเรียกด้วยปุ่มแทน

    // 4.3 สลับ Class (ถ้ามีให้ลบ, ถ้าไม่มีให้เพิ่ม)
    // classList.toggle(): สลับ class
    // classToggleBox.classList.toggle('hidden'); // จะถูกเรียกด้วยปุ่มแทน
}

// ===============================================

// ส่วนที่ 5: การสร้าง Element ใหม่ (Creating New Elements)
console.log("\n--- 5. Creating New Elements ---");

const itemList = document.getElementById('itemList');
const addItemBtn = document.getElementById('addItemBtn');

// ฟังก์ชันสำหรับเพิ่ม Item ใหม่ใน List
let itemCount = 2; // เริ่มนับจาก Item เดิม 2 ตัว
function addNewItem() {
    if (itemList) {
        itemCount++;
        // 5.1 สร้าง Element ใหม่
        const newItem = document.createElement('li'); // สร้าง <li> element

        // 5.2 กำหนดเนื้อหาให้ Element ที่สร้างขึ้น
        newItem.textContent = `Item ใหม่ ${itemCount} (เพิ่มโดย JS)`;

        // 5.3 เพิ่ม Class (ถ้าต้องการ)
        newItem.classList.add('new-item-style'); // เพิ่ม class เพื่อให้มีสไตล์

        // 5.4 นำ Element ใหม่ไปต่อท้าย Element Parent
        itemList.appendChild(newItem);
        console.log("Added new item:", newItem);
    }
}

// ===============================================

// ส่วนที่ 6: การลบ Element (Removing Elements)
console.log("\n--- 6. Removing Elements ---");

const elementToRemove = document.getElementById('elementToRemove');
const removeElementBtn = document.getElementById('removeElementBtn');
const removedMessage = document.getElementById('removedMessage');

function removeTheElement() {
    if (elementToRemove && elementToRemove.parentNode) {
        // 6.1 ลบ Element ออกจาก Parent ของมัน
        elementToRemove.parentNode.removeChild(elementToRemove);
        console.log("Element with ID 'elementToRemove' has been removed.");

        if (removedMessage) {
            removedMessage.classList.remove('hidden'); // แสดงข้อความว่าถูกลบแล้ว
        }
    } else if (removedMessage) {
        console.log("Element with ID 'elementToRemove' not found or already removed.");
        removedMessage.textContent = "Element ไม่มีอยู่แล้ว!";
        removedMessage.classList.remove('hidden');
    }
}


// ===============================================

// ส่วนที่ 7: การจัดการ Event (Handling Events)
// Events คือสิ่งที่เราต้องการให้ JavaScript ตอบสนอง (เช่น การคลิกปุ่ม, การพิมพ์)
console.log("\n--- 7. Event Handling ---");

const clickMeBtn = document.getElementById('clickMeBtn');
const eventOutput = document.getElementById('eventOutput');
const myInput = document.getElementById('myInput');
const inputOutput = document.getElementById('inputOutput');

if (clickMeBtn) {
    // 7.1 addEventListener(): วิธีมาตรฐานในการเพิ่ม Event Listener
    // 'click' คือประเภทของ Event
    // ฟังก์ชันที่สองคือ Event Handler ที่จะทำงานเมื่อ Event เกิดขึ้น
    clickMeBtn.addEventListener('click', function() {
        if (eventOutput) {
            eventOutput.textContent = "ปุ่มถูกคลิกแล้ว!";
            eventOutput.style.color = '#28a745'; // เปลี่ยนสีข้อความ
        }
        console.log("Click Me button was clicked!");
    });
}

if (myInput) {
    // 7.2 Event 'input': ทำงานทุกครั้งที่ค่าใน Input เปลี่ยนแปลง
    myInput.addEventListener('input', function() {
        if (inputOutput) {
            inputOutput.textContent = `คุณกำลังพิมพ์: ${myInput.value}`; // myInput.value คือค่าปัจจุบันในช่อง input
        }
        console.log("Input value:", myInput.value);
    });
}

// ===============================================

// ส่วนที่ 8: เชื่อมต่อ Event Listeners กับปุ่มต่างๆ ที่เราสร้างฟังก์ชันไว้ด้านบน
// เนื่องจากฟังก์ชันต่างๆ ถูกสร้างไว้ก่อนแล้ว เราจึงสามารถเรียกใช้ได้ตรงๆ
console.log("\n--- Connecting Button Events ---");

if (toggleStyleBtn) {
    toggleStyleBtn.addEventListener('click', toggleBoxStyle); // เชื่อมปุ่ม "สลับสไตล์" กับฟังก์ชัน toggleBoxStyle
}

if (addClassBtn) {
    addClassBtn.addEventListener('click', () => { // ใช้ Arrow Function เพื่อเรียก method ของ classList
        if (classToggleBox) {
            classToggleBox.classList.add('highlight');
            console.log("Class 'highlight' added.");
        }
    });
}

if (removeClassBtn) {
    removeClassBtn.addEventListener('click', () => {
        if (classToggleBox) {
            classToggleBox.classList.remove('highlight');
            console.log("Class 'highlight' removed.");
        }
    });
}

if (toggleClassBtn) {
    toggleClassBtn.addEventListener('click', () => {
        if (classToggleBox) {
            classToggleBox.classList.toggle('hidden');
            console.log("Class 'hidden' toggled.");
        }
    });
}

if (addItemBtn) {
    addItemBtn.addEventListener('click', addNewItem); // เชื่อมปุ่ม "เพิ่ม Item ใหม่" กับฟังก์ชัน addNewItem
}

if (removeElementBtn) {
    removeElementBtn.addEventListener('click', removeTheElement); // เชื่อมปุ่ม "ลบ Element" กับฟังก์ชัน removeTheElement
}


console.log("\nDOM Manipulation script loaded and ready!");