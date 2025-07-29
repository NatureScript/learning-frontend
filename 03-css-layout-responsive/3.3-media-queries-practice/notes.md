### คำอธิบายโค้ด HTML:

<meta name="viewport" content="width=device-width, initial-scale=1.0">: นี่คือ Meta Tag ที่สำคัญที่สุดสำหรับ Responsive Design! มันบอกเบราว์เซอร์ว่าให้ตั้งค่าความกว้างของ viewport (พื้นที่ที่มองเห็นบนจอ) ให้เท่ากับความกว้างของอุปกรณ์ (width=device-width) และตั้งค่า initial zoom level เป็น 1 (initial-scale=1.0) ถ้าไม่มี Tag นี้ เว็บไซต์ของคุณอาจไม่แสดงผล Responsive อย่างถูกต้องบนมือถือ

<header> และ <nav>: ส่วนหัวและลิงก์ "Back to Main Page"

<main>: ส่วนหลักของเนื้อหา

.intro-section: มีกล่อง 3 กล่องเพื่อสาธิตการเปลี่ยนสีหรือการจัดเรียง

.layout-section: มี Container ที่มี 3 ส่วน (sidebar, main-content, ads) เพื่อสาธิตการเปลี่ยน Layout (เช่น จากคอลัมน์หลายๆ คอลัมน์บน Desktop ไปเป็น Stacked Layout บนมือถือ)

.typography-section: มีข้อความและปุ่ม เพื่อสาธิตการปรับขนาด Font และ Element
---------

### คำอธิบายโค้ด CSS (Media Queries คืออะไร):

Mobile-First Approach (สไตล์พื้นฐาน):

โค้ด CSS ที่อยู่นอก @media Rule จะถูกนำไปใช้กับ ทุกขนาดหน้าจอ ครับ

การเขียนแบบนี้เรียกว่า "Mobile-First" คือการออกแบบและเขียนสไตล์สำหรับหน้าจอขนาดเล็กที่สุด (มือถือ) ก่อน แล้วค่อยขยายไปยังหน้าจอขนาดใหญ่ขึ้น

วิธีนี้มีประสิทธิภาพและเป็นที่นิยมเพราะทำให้แน่ใจว่าเว็บจะแสดงผลได้ดีบนมือถือ ซึ่งเป็นอุปกรณ์ที่คนใช้มากที่สุด

@media Rule (Media Query):

นี่คือคำสั่งพิเศษใน CSS ที่บอกเบราว์เซอร์ว่า "ให้นำชุดของสไตล์เหล่านี้ไปใช้ ก็ต่อเมื่อ เงื่อนไขที่ระบุใน Media Query เป็นจริงเท่านั้น"

@media (min-width: 768px) { ... }:

หมายความว่า: "ให้นำสไตล์ที่อยู่ข้างใน {...} ไปใช้ เฉพาะเมื่อ ความกว้างของ viewport (หน้าจอเบราว์เซอร์) มีค่า อย่างน้อย (min-width) 768 พิกเซล หรือมากกว่า"

นี่คือ Breakpoint (จุดเปลี่ยน) สำหรับ Tablet หรือ Laptop ขนาดเล็ก

@media (min-width: 1024px) { ... }:

หมายความว่า: "ให้นำสไตล์ที่อยู่ข้างใน {...} ไปใช้ เฉพาะเมื่อ ความกว้างของ viewport มีค่า อย่างน้อย 1024 พิกเซล หรือมากกว่า"

นี่คือ Breakpoint สำหรับ Desktop หรือ Laptop ขนาดใหญ่

การปรับสไตล์ภายใน Media Query:

Navigation (header nav ul li):

บน Mobile (display: block;) จะเป็นเมนูแบบ Block (เรียงลงมา)

บน Tablet (min-width: 768px) จะเปลี่ยนเป็น display: inline-block; เพื่อให้เรียงแนวนอน

กล่องใน Intro Section (.intro-section .box):

บน Mobile จะเรียงซ้อนกัน (Block-level) และมีสีแดงอ่อน

บน Tablet (min-width: 768px) จะเปลี่ยนเป็น display: flex; และ flex: 1; ทำให้เรียงแนวนอนและแบ่งพื้นที่เท่าๆ กัน พร้อมเปลี่ยนเป็นสีเหลืองอ่อน

บน Desktop (min-width: 1024px) เปลี่ยนเป็นสีเขียวอ่อน

Layout Section (.layout-container):

บน Mobile จะเรียงซ้อนกัน

บน Tablet (min-width: 768px) จะเปลี่ยนเป็น display: grid; และใช้ grid-template-columns: 1fr 2fr; ทำให้ Main Content กว้างกว่า Sidebar และ Ads จะอยู่ใต้ Main Content

บน Desktop (min-width: 1024px) จะเปลี่ยนเป็น grid-template-columns: 1fr 3fr 1fr; ทำให้เป็น Layout 3 คอลัมน์ที่ชัดเจน (Sidebar, Main Content, Ads) โดยใช้ grid-column และ grid-row จัดตำแหน่ง

