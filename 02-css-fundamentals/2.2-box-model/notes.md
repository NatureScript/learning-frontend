สิ่งสำคัญที่เพิ่มเข้ามาในโค้ด HTML นี้:

<link rel="stylesheet" href="style.css">: เหมือนเดิม ใช้ลิงก์ไฟล์ HTML กับ CSS

<li><a href="/index.html">Back to Main Page</a></li>: เราจะใช้ Absolute Path From Root อีกครั้ง เพื่อให้ลิงก์กลับ Main Page 

<div> Elements พร้อม Class ต่างๆ:

content-box: จะใช้สาธิต box-sizing: content-box;

border-box: จะใช้สาธิต box-sizing: border-box;

example-box: จะใช้สาธิตการทำงานของ margin, border, padding

no-margin-overlap: จะใช้สาธิตพฤติกรรมของ margin-collapse (ถ้ามีเวลา)
---------

คำอธิบายโค้ด CSS สำหรับ Box Model:
* { box-sizing: border-box; }: นี่คือ Property ที่สำคัญที่สุดในบทนี้ครับ! การตั้งค่านี้จะเปลี่ยนพฤติกรรมเริ่มต้นของ Box Model

content-box (Default): เมื่อคุณกำหนด width และ height มันจะกำหนดขนาดเฉพาะ Content Area เท่านั้น padding และ border จะถูก เพิ่มออกไปด้านนอก ทำให้ขนาดโดยรวมของ Element ใหญ่กว่า width ที่กำหนด

border-box: เมื่อคุณกำหนด width และ height มันจะ รวม padding และ border เข้าไปในขนาดที่กำหนดแล้ว ทำให้ขนาดโดยรวมของ Element ตรงกับ width ที่ตั้งไว้ ทำให้คาดเดาขนาดได้ง่ายขึ้นและทำงานกับ Layout ได้สะดวกขึ้นมาก นี่คือเหตุผลที่นักพัฒนาส่วนใหญ่ใช้ box-sizing: border-box; เป็นค่า Default ใน Universal Selector 

padding: คือระยะห่างระหว่าง Content กับ Border ของ Element

border: คือเส้นขอบที่ล้อมรอบ Content และ Padding

margin: คือระยะห่างระหว่าง Border ของ Element หนึ่ง กับ Element อื่นๆ ที่อยู่รอบข้าง
---------

2.2-box-model/style.css ที่กล่าวมา
เป็นการวางรากฐานเพื่อแสดงให้เห็นถึง content-box, border-box, padding, border, และ margin

ยังมีประเด็นสำคัญของ Box Model ที่จะเรียนรู้เพิ่มเติมคือ:
Margin Collapsing (การยุบตัวของ Margin):

เป็นพฤติกรรมเฉพาะของ margin ในแนวตั้ง (top/bottom) ที่เมื่อ Element สองตัวที่มี margin ติดกัน (เช่น paragraph สองอัน) margin ที่ซ้อนทับกันจะถูกยุบให้เหลือแค่ margin ที่มีค่ามากที่สุดเพียงค่าเดียว ไม่ใช่รวมกัน. นี่เป็นสิ่งที่ทำให้หลายคนสับสนตอนเริ่มต้น

มี div.no-margin-overlap ใน HTML เตรียมไว้แล้วสำหรับทดลองเรื่องนี้

Inline vs. Block Elements:

Box Model ทำงานแตกต่างกันเล็กน้อยสำหรับ Element ประเภท display: block; (เช่น div, p, h1) และ display: inline; (เช่น span, a, strong)

Element แบบ Block จะขึ้นบรรทัดใหม่เสมอและสามารถกำหนด width/height ได้

Element แบบ Inline จะอยู่บรรทัดเดียวกันกับข้อความและไม่สามารถกำหนด width/height ได้โดยตรง (หรือได้ผลลัพธ์ที่ไม่คาดคิด)

การเข้าใจ display Property จึงสำคัญมากในการควบคุม Box Model

display Property ที่ใช้บ่อย (เกี่ยวข้องกับ Box Model):

block: เป็นค่า Default ของ div, p, h1 ทำให้ Element ขึ้นบรรทัดใหม่และกินพื้นที่เต็มความกว้าง

inline: เป็นค่า Default ของ span, a ทำให้ Element อยู่ในบรรทัดเดียวกับข้อความ

inline-block: เป็นการผสมผสาน! ทำให้ Element อยู่ในบรรทัดเดียวกันได้เหมือน inline แต่ก็สามารถกำหนด width, height, margin, padding ได้เหมือน block เหมาะสำหรับปุ่มหรือรูปภาพที่ต้องการจัดเรียงแนวนอนแต่ก็ควบคุมขนาดได้

flex / grid: เป็นระบบ Layout ที่ทรงพลังมากในยุคปัจจุบัน ซึ่งจะทำงานร่วมกับ Box Model ในการจัดวาง Element (แต่จะไปเรียนรู้ลึกๆ ในบทเรียน Layout โดยเฉพาะ)

