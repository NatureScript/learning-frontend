### คำอธิบายโค้ด HTML:

<header> และ <nav>: สำหรับส่วนหัวและลิงก์ "Back to Main Page" เหมือนเดิม

<main>: ส่วนหลักของเนื้อหา

.grid-container: นี่คือ Grid Container (Parent) ที่เราจะใช้ CSS กำหนดให้เป็น Grid

.grid-item: นี่คือ Grid Items (Children) ที่จะถูกจัดเรียงภายใน Grid Container

เรามีตัวอย่าง HTML หลายส่วนเพื่อสาธิตคุณสมบัติต่างๆ ของ CSS Grid:

Basic Grid Layout: โครงสร้างพื้นฐานของ Grid

Defining Columns and Rows: การกำหนดขนาดของคอลัมน์และแถวด้วยค่าคงที่ (px) และหน่วย fr (fractional unit)

Named Grid Lines: การตั้งชื่อให้กับเส้น Grid เพื่อให้อ้างอิงได้ง่ายขึ้น

Grid Gap: การกำหนดระยะห่างระหว่าง Grid Cells

Grid Span: การทำให้ Grid Item ครอบคลุมหลายคอลัมน์หรือหลายแถว
----------

### อธิบายโค้ด CSS (หัวใจของ CSS Grid):

display: grid; (บน .grid-container):

เหมือน Flexbox ครับ นี่คือ Property ที่สำคัญที่สุด! การกำหนด display: grid; บน Parent Element จะทำให้มันกลายเป็น Grid Container และ Element ลูกๆ จะกลายเป็น Grid Items

การกำหนด Grid Structure (บน Grid Container):

grid-template-columns: กำหนดจำนวนและขนาดของ คอลัมน์

ตัวอย่าง: 1fr 1fr คือ 2 คอลัมน์ที่แบ่งพื้นที่เท่าๆ กัน (fr = fractional unit)

ตัวอย่าง: 100px 150px auto คือ คอลัมน์แรก 100px, คอลัมน์สอง 150px, คอลัมน์สามใช้พื้นที่ที่เหลือทั้งหมด

repeat(3, 1fr): สร้าง 3 คอลัมน์ที่แบ่งพื้นที่เท่าๆ กัน

grid-template-rows: กำหนดจำนวนและขนาดของ แถว

auto: ขนาดของแถวจะปรับตามเนื้อหาภายใน

gap / grid-gap:

gap: 20px; (หรือ grid-gap: 20px;): กำหนดช่องว่างทั้งแนวตั้งและแนวนอนระหว่าง Grid Cells

row-gap, column-gap: กำหนดช่องว่างแยกกัน

การจัดวาง Grid Item (บน Grid Item):

grid-column: กำหนดว่า Item จะเริ่มต้นและสิ้นสุดที่เส้นคอลัมน์ใด

grid-column: 1 / 3; (หรือ grid-column-start: 1; grid-column-end: 3;): Item เริ่มต้นที่เส้นคอลัมน์ที่ 1 และสิ้นสุดที่เส้นคอลัมน์ที่ 3 (ซึ่งหมายถึงมันกินพื้นที่ 2 คอลัมน์)

grid-column: span 2;: ทำให้ Item ครอบคลุม 2 คอลัมน์ จากตำแหน่งเริ่มต้นปัจจุบัน (สะดวกมาก)

grid-row: เหมือน grid-column แต่สำหรับแถว

grid-row: span 2;: ทำให้ Item ครอบคลุม 2 แถว

Named Grid Lines (การตั้งชื่อเส้น Grid):

เป็นการกำหนดชื่อให้กับเส้น Grid ใน grid-template-columns หรือ grid-template-rows เช่น [main-start]

ทำให้การอ้างอิงตำแหน่งของ Grid Item ด้วย grid-column หรือ grid-row ทำได้ง่ายขึ้นและอ่านเข้าใจได้ง่ายขึ้นเมื่อ Layout ซับซ้อน