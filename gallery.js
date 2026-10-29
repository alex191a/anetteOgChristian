(() => {
  const gallery = document.querySelector('[data-gallery]');
  if (!gallery) return;
  const slides = Array.from(gallery.querySelectorAll('.photo-slide'));
  const count = gallery.querySelector('.gallery-count');
  let current = 0;
  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.hidden = i !== current; });
    count.replaceChildren(document.createTextNode(String(current + 1).padStart(2, '0') + ' '));
    const separator = document.createElement('span');
    separator.textContent = '/';
    count.append(separator, document.createTextNode(' ' + slides.length));
  }
  gallery.querySelector('[data-prev]').addEventListener('click', () => show(current - 1));
  gallery.querySelector('[data-next]').addEventListener('click', () => show(current + 1));
})();
