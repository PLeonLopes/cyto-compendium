// Botão de Toggle (lua/sol)
(function () {
  var html = document.documentElement;
  var btn  = document.getElementById('themeToggle');

  function applyTheme(theme) {
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }

  btn.addEventListener('click', function () {
    var isDark = html.classList.contains('dark');
    applyTheme(isDark ? 'light' : 'dark');
  });
})();
