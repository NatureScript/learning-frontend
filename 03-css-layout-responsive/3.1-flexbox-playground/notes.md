#### คำอธิบายโค้ด HTML:

<header> และ <nav>: สำหรับส่วนหัวและลิงก์ "Back to Main Page" (ซึ่งใช้ href="/index.html" เพื่อชี้กลับไปที่ Main Page หลักของโปรเจกต์เมื่อเปิดด้วย Live Server)

<main>: ส่วนหลักของเนื้อหา

<section class="flex-container-example">: ตัวอย่างพื้นฐานของ Flex Container

<div class="flex-container">: นี่คือ Flex Container (Parent) ที่เราจะใช้ CSS กำหนดให้เป็น Flexbox

<div class="flex-item">: นี่คือ Flex Items (Children) ที่จะถูกจัดเรียงภายใน Container

<section class="flex-direction-example">: ตัวอย่างการใช้ flex-direction เพื่อเปลี่ยนการจัดเรียงเป็นแถวหรือคอลัมน์
---------

### คำอธิบายโค้ด CSS (หัวใจของ Flexbox):

display: flex; (บน .flex-container):

นี่คือ Property ที่สำคัญที่สุด! การกำหนด display: flex; บน Parent Element (ในที่นี้คือ .flex-container) จะทำให้มันกลายเป็น Flex Container และ Element ลูกๆ ที่อยู่ข้างใน (ในที่นี้คือ .flex-item) จะกลายเป็น Flex Items และถูกจัดเรียงด้วย Flexbox 

ถ้าไม่มี display: flex; Element ลูกๆ จะยังคงเป็น Block-level Element ปกติและขึ้นบรรทัดใหม่

แกนหลัก (Main Axis) และ แกนขวาง (Cross Axis):

flex-direction: กำหนดทิศทางของแกนหลัก

row (ค่า Default): แกนหลักวิ่งตามแนวนอน (จากซ้ายไปขวา)

column: แกนหลักวิ่งตามแนวตั้ง (จากบนลงล่าง)

justify-content: ควบคุมการจัดเรียง Flex Items ตาม แกนหลัก

center: จัดกลาง

flex-start: ชิดเริ่มต้น (ซ้ายถ้า row, บนถ้า column)

flex-end: ชิดสุดท้าย (ขวาถ้า row, ล่างถ้า column)

space-between: กระจาย Item โดยมีช่องว่างเท่าๆ กัน ระหว่าง Items (Item แรกและสุดท้ายชิดขอบ)

space-around: กระจาย Item โดยมีช่องว่างเท่าๆ กัน รอบๆ Items (Item แรกและสุดท้ายมีช่องว่างที่ขอบด้วย)

space-evenly: กระจาย Item โดยมีช่องว่างเท่าๆ กัน ทั้งหมด (รวมถึงที่ขอบด้วย)

align-items: ควบคุมการจัดเรียง Flex Items ตาม แกนขวาง

flex-start: ชิดเริ่มต้นของแกนขวาง

flex-end: ชิดสุดท้ายของแกนขวาง

center: จัดกลางตามแกนขวาง

stretch: ยืด Item ให้เต็มแกนขวาง (ถ้า Item ไม่มีขนาดที่กำหนดไว้)

baseline: จัดเรียงตามเส้นฐานของข้อความใน Item

gap:

เป็น Property ใหม่ที่สะดวกมาก! ใช้กำหนด ระยะห่างระหว่าง Flex Items ครับ ไม่ต้องใช้ margin ที่ Item แล้วต้องมาจัดการ margin-collapse หรือ margin ด้านสุดท้าย

