(() => {
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const apply = (theme) => {
    const dark = theme === 'dark';
    root.dataset.theme = dark ? 'dark' : 'light';
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    document.querySelector('meta[name="theme-color"]').content = dark ? '#25282b' : '#ffffff';
  };
  try { apply(localStorage.getItem('academic-theme')); } catch { apply('light'); }
  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    apply(theme);
    try { localStorage.setItem('academic-theme', theme); } catch { /* Optional preference storage. */ }
  });
  document.getElementById('year').textContent = String(new Date().getFullYear());
})();
