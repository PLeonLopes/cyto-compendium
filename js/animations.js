// Animação de entrada
(function () {
  var elements = document.querySelectorAll(
    '.avatar, .header, .divider, .section-label, .author-card, .link-card, .footer'
  );

  elements.forEach(function (el, i) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

    setTimeout(function () {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 80 + i * 60);
  });
})();
