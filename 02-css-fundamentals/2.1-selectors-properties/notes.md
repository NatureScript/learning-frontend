<link rel="stylesheet" href="style.css">: บรรทัดนี้ในส่วน <head> คือสิ่งที่ใช้ ลิงก์ ไฟล์ HTML ของเราเข้ากับไฟล์ CSS ที่ชื่อว่า style.css  นี่คือวิธีมาตรฐานในการเชื่อมโยง HTML กับ CSS เพื่อให้ CSS มีผลต่อการแสดงผลของ HTML

Element ต่างๆ สำหรับทดสอบ CSS:

<p> แท็ก p ทั่วไป

<p class="highlight"> และ <strong class="highlight"> : Element ที่มี class ชื่อ highlight ซึ่งเราจะใช้ Selector แบบ Class ใน CSS

<p id="unique-paragraph"> และ <span id="special-span">: Element ที่มี id ชื่อ unique-paragraph และ special-span ซึ่งเราจะใช้ Selector แบบ ID ใน CSS

<div class="card">: Element ที่มี class ชื่อ card ซ้ำกัน เพื่อแสดงให้เห็นว่า Class สามารถใช้ได้กับหลาย Element

### สรุปและข้อคิดเพิ่มเติมสำหรับ Lesson 2.1: CSS Selectors & Properties

ความสำคัญของ Selectors: Selectors คือหัวใจของ CSS , 
ต้องเข้าใจว่า Selector แต่ละประเภท (Universal, Element, Class, ID, Descendant, Child, Pseudo-class, Attribute) ทำงานอย่างไร เพื่อให้สามารถเลือก Element ที่ต้องการตกแต่งได้อย่างแม่นยำและมีประสิทธิภาพ

ลำดับความสำคัญ (Specificity): แม้เราจะยังไม่ได้ลงลึกในบทนี้ แต่ให้จำไว้ว่าถ้า Element เดียวกันถูกเลือกด้วย Selector หลายตัว สไตล์ที่ถูกนำไปใช้จะขึ้นอยู่กับ "ความเฉพาะเจาะจง" ของ Selector  (เช่น ID > Class > Element)

Properties และ Values: คุณได้ลองใช้ Property พื้นฐานหลายตัวแล้ว เช่น background-color, color, font-family, margin, padding สิ่งเหล่านี้คือสิ่งที่ใช้กำหนดรูปลักษณ์ของ Element 

การเชื่อมโยง CSS: อย่าลืมว่าต้องมี <link rel="stylesheet" href="style.css"> ใน <head> ของ HTML เสมอ เพื่อให้ไฟล์ CSS มีผล

การจัดโครงสร้างไฟล์: การจัดระเบียบโฟลเดอร์ให้ถูกต้อง (02-css-fundamentals/2.1-selectors-properties/index.html และ style.css อยู่ในโฟลเดอร์เดียวกัน) ช่วยให้ Path ลิงก์ง่ายขึ้น (href="style.css")

บทเรียน 2.1 นี้เป็นรากฐานที่สำคัญมากสำหรับการเขียน CSS จะใช้ Selectors และ Properties เหล่านี้แทบทุกครั้งที่เขียน CSS 