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

## สิ่งที่อาจเพิ่มเติม:

เนื้อหา HTML ขั้นสูงขึ้น (หรือหัวข้อที่เกี่ยวข้องโดยตรงกับ HTML)

Responsive Images (ภาพสำหรับอุปกรณ์หลากหลาย): เรียนรู้วิธีใช้ <picture> หรือ srcset เพื่อให้ภาพแสดงผลได้ดีบนขนาดหน้าจอและความละเอียดที่แตกต่างกัน
Media Elements (<audio>, <video>): วิธีการฝังไฟล์เสียงและวิดีโอในหน้าเว็บ
Iframes: การฝังเนื้อหาจากเว็บไซต์อื่นเข้ามาในหน้าเว็บของเรา
HTML Entities: การใช้รหัสพิเศษเพื่อแสดงอักขระที่ไม่สามารถพิมพ์ได้โดยตรง
Web Accessibility (A11y): แนวทางปฏิบัติที่ดีที่สุดเพื่อให้เว็บไซต์สามารถเข้าถึงได้โดยผู้ใช้ทุกคน (สำคัญมาก!)
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

### Further Exploration / What's Next?

After mastering the basics of HTML tables, you might want to delve into more advanced HTML topics or related areas. Here are some suggestions:

* **Advanced HTML Content (or Directly Related HTML Topics):**
    * **Responsive Images:** Learn how to use `<picture>` or `srcset` to ensure images display optimally across various screen sizes and resolutions.
    * **Media Elements:** Explore how to embed audio (`<audio>`) and video (`<video>`) files directly into web pages.
    * **Iframes:** Understand how to embed content from other websites into your own page.
    * **HTML Entities:** Discover how to use special character codes to display characters that cannot be directly typed (e.g., copyright symbols, non-breaking spaces).
    * **Web Accessibility (A11y):** Learn best practices to make your website usable and accessible for all users, including those with disabilities (this is crucial!).