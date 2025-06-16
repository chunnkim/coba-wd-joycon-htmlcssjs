const keyMap = {
  ArrowUp: 'up',
  ArrowLeft: 'left',
  ArrowDown: 'down',
  ArrowRight: 'right',
  a: 'a', A: 'a',
  b: 'b', B: 'b'
};

const display = document.getElementById('display');

function setActive(id, on = true) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('active', on);

  if (on) {
    display.textContent = id;
  } else if (!document.querySelector('.btn.active')) {
    display.innerHTML = '&nbsp;';
  }
}

document.addEventListener('keydown', e => {
  if (keyMap[e.key] && !e.repeat) {
    setActive(keyMap[e.key], true);
  }
});

document.addEventListener('keyup', e => {
  if (keyMap[e.key]) {
    setActive(keyMap[e.key], false);
  }
});

document.querySelectorAll('.btn').forEach(btn => {
  // Mouse events
  btn.addEventListener('mousedown', () => setActive(btn.id, true));
  btn.addEventListener('mouseup', () => setActive(btn.id, false));
  btn.addEventListener('mouseleave', () => setActive(btn.id, false));

  // Touch events
  btn.addEventListener('touchstart', e => {
    e.preventDefault();
    setActive(btn.id, true);
  }, { passive: false });

  btn.addEventListener('touchend', () => setActive(btn.id, false));
});
