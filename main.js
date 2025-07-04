// نافذة التعليمات
function showHelp() {
  document.getElementById('helpModal').classList.remove('hidden');
}
function closeHelp() {
  document.getElementById('helpModal').classList.add('hidden');
}
// تكييف عرض المحتوى
function adjustContentWidth() {
  const windowWidth = window.innerWidth;
  const contentContainers = document.querySelectorAll('.content-container');
  if (windowWidth > 1600) {
    contentContainers.forEach(container => { container.style.width = '75%'; });
  } else if (windowWidth > 1200) {
    contentContainers.forEach(container => { container.style.width = '85%'; });
  } else {
    contentContainers.forEach(container => { container.style.width = '100%'; });
  }
}
adjustContentWidth();
window.addEventListener('resize', adjustContentWidth); 
