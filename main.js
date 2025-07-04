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

// بيانات التقييمات
const trainers = [
  { name: 'محمد العصيمي', avg: 4.7, count: 3 },
  { name: 'عبدالله الغامدي', avg: 4.3, count: 2 },
  { name: 'ابراهيم السلمي', avg: 3.9, count: 2 },
  { name: 'عبدالرحمن القرني', avg: 4.5, count: 1 },
];

// رسم عدد التقييمات لكل مدرب
const ratingsCountCtx = document.getElementById('ratingsCountChart');
if (ratingsCountCtx) {
  new Chart(ratingsCountCtx, {
    type: 'bar',
    data: {
      labels: trainers.map(t => t.name.split(' ')[0]),
      datasets: [{
        label: 'عدد التقييمات',
        data: trainers.map(t => t.count),
        backgroundColor: '#2563eb',
        borderRadius: 8,
        maxBarThickness: 40,
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, ticks: { stepSize: 1, precision: 0 } },
        x: { grid: { display: false } }
      }
    }
  });
}

// رسم متوسط التقييم لكل مدرب
const avgRatingsCtx = document.getElementById('avgRatingsChart');
if (avgRatingsCtx) {
  new Chart(avgRatingsCtx, {
    type: 'bar',
    data: {
      labels: trainers.map(t => t.name),
      datasets: [{
        label: 'متوسط التقييم',
        data: trainers.map(t => t.avg),
        backgroundColor: [
          '#22c55e', // أخضر
          '#3b82f6', // أزرق
          '#f59e42', // برتقالي
          '#22c55e', // أخضر
        ],
        borderRadius: 8,
        maxBarThickness: 30,
      }]
    },
    options: {
      indexAxis: 'y',
      plugins: { legend: { display: false } },
      scales: {
        x: { min: 0, max: 5, ticks: { stepSize: 1 } },
        y: { grid: { display: false } }
      }
    }
  });
}

// توزيع التقييمات بنجوم
const ratingsDistribution = [0, 1, 2, 2, 3]; // من 1 إلى 5 نجوم
const distContainer = document.getElementById('ratings-distribution');
if (distContainer) {
  for (let i = 1; i <= 5; i++) {
    const count = ratingsDistribution[i-1];
    const div = document.createElement('div');
    div.className = 'flex flex-col items-center';
    div.innerHTML = `<span class="text-lg font-bold mb-1">${count}</span>
      <span class="text-yellow-400">${'★'.repeat(i)}${'☆'.repeat(5-i)}</span>
      <span class="text-xs text-gray-500">${i} نجمة</span>`;
    distContainer.appendChild(div);
  }
} 
