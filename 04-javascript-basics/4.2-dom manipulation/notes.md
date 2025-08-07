### คำอธิบายโค้ด HTML (จุดสำคัญสำหรับ DOM Manipulation):

เรามี div, p, img, a, ul, li, button, input ต่างๆ ที่มีทั้ง id และ class ที่แตกต่างกัน สิ่งเหล่านี้จะเป็น "เป้าหมาย" (Target) ของ JavaScript ในการเข้าถึงและเปลี่ยนแปลง

แต่ละ section ถูกจัดหมวดหมู่ตามประเภทของ DOM Manipulation ที่เราจะเรียนรู้ เพื่อให้เห็นภาพและทดลองได้ง่าย

ปุ่ม (<button>): เราได้เพิ่มปุ่มหลายปุ่ม ซึ่งจะใช้เป็นตัวกระตุ้น (Trigger) การทำงานของ JavaScript โดยการเพิ่ม Event Listener เข้าไป

id และ class Attributes: มีความสำคัญอย่างยิ่งในการใช้ JavaScript เลือก Element ที่ต้องการจัดการ
------

### คำอธิบายโค้ด JavaScript (ทีละส่วน):

ในไฟล์ script.js นี้ ผมได้แบ่งโค้ดออกเป็นส่วนๆ ตามประเภทของการ DOM Manipulation เพื่อให้คุณเข้าใจได้ง่ายขึ้น

การเลือก Element (document.getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll):

นี่คือขั้นตอนแรกและสำคัญที่สุดในการทำ DOM Manipulation คือการ "หา" Element ที่ต้องการจัดการ

getElementById(): ใช้หา Element ด้วย id

getElementsByClassName(): ใช้หา Elements ด้วย class

getElementsByTagName(): ใช้หา Elements ด้วย tag name (เช่น 'p', 'div')

querySelector(): เป็นวิธีที่ทันสมัยและยืดหยุ่นที่สุด ใช้ CSS Selector (เช่น #myId, .myClass, div > p) เพื่อหา Element แรก ที่ตรงกัน

querySelectorAll(): เหมือน querySelector() แต่หา Elements ทั้งหมด ที่ตรงกัน (ส่งคืนเป็น NodeList ซึ่งคล้าย Array และใช้ forEach ได้)

การแก้ไขเนื้อหาและ Attributes (textContent, innerHTML, src, alt, href, setAttribute):

เมื่อเลือก Element ได้แล้ว เราสามารถเปลี่ยนเนื้อหาภายในได้:

textContent: เปลี่ยนข้อความเป็น Text ธรรมดา (ปลอดภัยกว่า)

innerHTML: เปลี่ยนข้อความเป็น HTML (สามารถใส่ Tag ได้ แต่ต้องระวังเรื่องความปลอดภัย XSS)

เรายังสามารถเปลี่ยน Attributes ของ Element ได้โดยตรง (เช่น myImage.src = "...") หรือใช้ setAttribute()

การแก้ไขสไตล์ (element.style.propertyName):

สามารถเปลี่ยน Style CSS ของ Element ได้โดยตรงผ่าน Property style

ชื่อ Property CSS ที่มีขีดกลาง (เช่น background-color) จะต้องเปลี่ยนเป็น camelCase ใน JavaScript (เช่น backgroundColor)

toggleBoxStyle(): เป็นฟังก์ชันที่เตรียมไว้เพื่อสลับสไตล์ของกล่อง ซึ่งจะถูกเรียกโดย Event Listener ในภายหลัง

การเพิ่มและลบ Class (classList.add, classList.remove, classList.toggle):

นี่คือวิธีที่แนะนำในการเปลี่ยนแปลงสไตล์ เพราะเป็นการแยก JavaScript (การทำงาน) ออกจาก CSS (การตกแต่ง)

classList.add(): เพิ่ม class ให้ Element

classList.remove(): ลบ class ออกจาก Element

classList.toggle(): ถ้ามี class นั้นอยู่แล้วให้ลบออก ถ้าไม่มีให้เพิ่มเข้าไป

การสร้าง Element ใหม่ (document.createElement, appendChild):

document.createElement('tagName'): สร้าง Element HTML ใหม่ขึ้นมาในหน่วยความจำ (เช่น <li>)

element.textContent = "...": กำหนดเนื้อหาให้ Element ที่สร้างขึ้นมา

parentNode.appendChild(childElement): นำ Element ที่สร้างขึ้นมาใหม่ไป "ต่อท้าย" Element Parent ที่ต้องการ (ทำให้ปรากฏบนหน้าเว็บ)

การลบ Element (parentNode.removeChild):

ในการลบ Element เราต้องอ้างอิงถึง Parent ของมันก่อน แล้วใช้ parentNode.removeChild(childToRemove)

การจัดการ Event (addEventListener):

นี่คือหัวใจสำคัญของการทำให้เว็บโต้ตอบได้!

element.addEventListener('eventName', functionToRun): ผูก Event (เช่น 'click', 'input') เข้ากับ Event Handler (ฟังก์ชันที่จะทำงานเมื่อ Event เกิดขึ้น)

click: Event เมื่อมีการคลิกเมาส์

input: Event เมื่อค่าในช่อง Input มีการเปลี่ยนแปลง

event.target.value: ใน Event ของ Input, event.target จะอ้างถึง Element Input นั้นๆ และ .value คือค่าปัจจุบันในช่อง Input

เชื่อมต่อ Event Listeners กับปุ่มต่างๆ:

ในส่วนสุดท้าย เราได้เรียกใช้ addEventListener เพื่อผูกปุ่มต่างๆ เข้ากับฟังก์ชันที่เราเตรียมไว้ในแต่ละส่วน ทำให้ปุ่มเหล่านั้นทำงานได้เมื่อถูกคลิก

