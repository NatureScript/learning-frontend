# บทเรียน 1.5: ตาราง HTML

## แนวคิดหลัก:
- `<table>`: แท็กหลักสำหรับข้อมูลตาราง
- `<thead>`: กลุ่มส่วนหัวของตาราง
- `<tbody>`: กลุ่มส่วนเนื้อหาของตาราง
- `<tr>`: แถวของตาราง
- `<th>`: เซลล์หัวข้อของตาราง (ตัวหนา, จัดกลางโดยค่าเริ่มต้น)
- `<td>`: เซลล์ข้อมูลปกติของตาราง

## ข้อสังเกตเพิ่มเติม:
- ตารางใช้สำหรับแสดงข้อมูลที่เป็นโครงสร้าง ไม่ใช่เพื่อจัด Layout ของหน้าเว็บ
- ควรใช้ `<thead>` และ `<tbody>` เพื่อความหมายที่ดีขึ้น (Semantic) แม้จะไม่ได้มีผลต่อการแสดงผลโดยตรง

การเพิ่มความซับซ้อนภายหลัง: ตาราง HTML ยังมีคุณสมบัติและแท็กอื่นๆ อีกมากที่สามารถใช้ได้ เช่น:

<caption>: ชื่อตาราง
<colgroup> / <col>: สำหรับจัดกลุ่มคอลัมน์และกำหนดสไตล์
rowspan / colspan attributes: สำหรับการรวมเซลล์ (Merge Cells)
และที่สำคัญคือ การจัดรูปแบบด้วย CSS ซึ่งจะทำให้ตารางดูสวยงามและจัด Layout ได้ดีขึ้นมาก
---

# Lesson 1.5: HTML Tables

## Key Concepts:
- `<table>`: The main container for tabular data.
- `<thead>`: Table header group.
- `<tbody>`: Table body group.
- `<tr>`: Table row.
- `<th>`: Table header cell (bold, centered by default).
- `<td>`: Table data cell.

## Additional Notes:
- Tables are used for displaying structured data, not for page layout.
- It is recommended to use `<thead>` and `<tbody>` for better semantics, even if they don't directly affect the visual display.

### Further Complexity:
HTML tables also have many other properties and tags that can be used, such as:

* `<caption>`: Table title/caption
* `<colgroup>` / `<col>`: For grouping columns and defining styles
* `rowspan` / `colspan` attributes: For merging cells

And importantly, styling with CSS will make tables look much better and improve their layout.