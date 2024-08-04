document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', function (e) {
    if (e.target.getAttribute('contenteditable')) {
      return;
    }

    const target = e.target.closest('.ripple-effect');
    if (!target) {
      return;
    }

    const rect = target.getBoundingClientRect();
    const xInside = e.clientX - rect.left;
    const yInside = e.clientY - rect.top;

    if (window.getComputedStyle(target).position === 'static') {
      target.classList.add('prevent-overflow');
    }

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = `${yInside}px`;
    circle.style.left = `${xInside}px`;

    target.appendChild(circle);

    setTimeout(() => {
      target.classList.remove('prevent-overflow');
      circle.remove();
    }, 600);
  });
});
