document.querySelectorAll('.hover-sfx').forEach(el => {
  el.addEventListener('mouseenter', () => {
    const sfxName = el.getAttribute('data-sfx');
    const audio = new Audio(`assets/${sfxName}.wav`);
    audio.play();
    el.classList.add('active');
    setTimeout(() => el.classList.remove('active'), 500);
  });
});
