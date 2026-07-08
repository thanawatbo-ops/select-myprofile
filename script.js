// ===== State =====
let isDark = false;
 
// ===== Element References =====
const toggleButton = document.querySelector('#theme-toggle');
const footer = document.querySelector('#card-footer');

// แอดเพิ่ม: ตัวแปรอ้างอิงสำหรับระบบเปลี่ยนชื่อ
const nameInput = document.querySelector('#name-input');
const cardName = document.querySelector('#card-name');
 
// ===== Event: สลับธีม =====
toggleButton.addEventListener('click', () => {
  isDark = !isDark;
  document.body.classList.toggle('dark', isDark);
 
  // ใช้ template literal ตามมาตรฐานของวิชา
  toggleButton.textContent = isDark ? `☀️ โหมดกลางวัน` : `🌙 โหมดกลางคืน`;
});

// ===== Event: เปลี่ยนชื่อตาม Textbox แบบ Real-time =====
// ตั้งค่าเริ่มต้นให้ในช่อง Textbox มีชื่อเดิมของคุณแสดงอยู่ก่อน
if (nameInput && cardName) {
  nameInput.value = cardName.textContent;

  // ดักจับเมื่อมีการพิมพ์ข้อมูลลงในช่อง
  nameInput.addEventListener('input', () => {
    // ถ้ายกเลิกการพิมพ์จนว่างเปล่า ให้ใส่คำเตือนสั้นๆ แต่ถ้ามีตัวอักษรก็ให้เปลี่ยนตามที่พิมพ์
    if (nameInput.value.trim() === "") {
      cardName.textContent = "กรุณากรอกชื่อของคุณ";
    } else {
      cardName.textContent = nameInput.value;
    }
  });
}
 
// ===== Footer: ปีอัตโนมัติด้วย template literal =====
const currentYear = new Date().getFullYear();
footer.textContent = `© ${currentYear} — Deploy ด้วย GitHub Pages 🚀`;