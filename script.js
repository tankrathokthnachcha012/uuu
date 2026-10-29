
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
const backToTop = document.getElementById("backToTop");

// เปิดและปิดเมนูบนมือถือ
menuToggle.addEventListener("click", function () {
  const isOpen = navbar.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// เมื่อกดเมนู ให้ปิดเมนูบนมือถือ
navbar.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navbar.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// แสดงปุ่มกลับขึ้นด้านบนเมื่อเลื่อนหน้าเว็บ
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// กดปุ่มเพื่อกลับขึ้นด้านบน
backToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// แสดงปีปัจจุบันในส่วนท้ายเว็บไซต์
document.getElementById("year").textContent =
  new Date().getFullYear();

