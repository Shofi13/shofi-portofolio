// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Active nav
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});

// Skill bars
document.querySelectorAll('.bar-fill').forEach(bar => {
  const io = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { bar.style.width = bar.dataset.w + '%'; io.disconnect(); }
  }, { threshold: 0.3 });
  io.observe(bar);
});

// Filter (portofolio)
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    const cat = btn.dataset.cat;
    document.querySelectorAll('.proj').forEach(p => {
      p.style.display = (cat === 'all' || p.dataset.cat === cat) ? '' : 'none';
    });
  });
});

// Contact form
const form = document.getElementById('cf');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button');
    btn.textContent = 'Terkirim ✓';
    btn.style.opacity = '0.6';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Kirim Pesan';
      btn.style.opacity = '';
      btn.disabled = false;
      form.reset();
    }, 3000);
  });
}
