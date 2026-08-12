const button = document.querySelector('.menu');
const nav = document.querySelector('#nav');

if (button && nav) {
  button.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
  }));
}

const timers = [
  { target: new Date('2027-08-02T07:40:41Z').getTime(), fields: ['start-days', 'start-hours', 'start-minutes', 'start-seconds'] },
  { target: new Date('2027-08-02T08:44:47Z').getTime(), fields: ['total-days', 'total-hours', 'total-minutes', 'total-seconds'] },
];
function updateCountdown() {
  timers.forEach(({ target, fields }) => {
    const remaining = Math.max(0, target - Date.now());
    const values = [Math.floor(remaining / 86400000), Math.floor(remaining / 3600000) % 24, Math.floor(remaining / 60000) % 60, Math.floor(remaining / 1000) % 60];
    fields.forEach((id, index) => {
      const field = document.getElementById(id);
      if (field) field.textContent = String(values[index]).padStart(2, '0');
    });
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);
