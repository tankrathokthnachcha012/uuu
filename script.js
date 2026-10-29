
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');

    // ซ่อนทุกหน้า
    pages.forEach(function(page) {
        page.classList.remove('active');
    });

    // แสดงหน้าที่เลือก
    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // ปิดเมนูมือถือหลังเลือกหน้า
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.remove('open');

    // เลื่อนกลับไปด้านบน
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('open');
}
