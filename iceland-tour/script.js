const button = document.querySelector('.menu');
const nav = document.querySelector('#nav');

button.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', isOpen);
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  button.setAttribute('aria-expanded', 'false');
}));

const timers = [
  { target: new Date('2026-08-12T16:47:00Z').getTime(), fields: ['start-days', 'start-hours', 'start-minutes', 'start-seconds'] },
  { target: new Date('2026-08-12T17:48:00Z').getTime(), fields: ['total-days', 'total-hours', 'total-minutes', 'total-seconds'] },
  { target: new Date('2026-08-12T17:12:00Z').getTime(), fields: ['uk-start-days', 'uk-start-hours', 'uk-start-minutes', 'uk-start-seconds'] },
  { target: new Date('2026-08-12T18:10:00Z').getTime(), fields: ['uk-max-days', 'uk-max-hours', 'uk-max-minutes', 'uk-max-seconds'] },
];
function updateCountdown() {
  timers.forEach(({ target, fields }) => {
    const remaining = Math.max(0, target - Date.now());
    const values = [Math.floor(remaining / 86400000), Math.floor(remaining / 3600000) % 24, Math.floor(remaining / 60000) % 60, Math.floor(remaining / 1000) % 60];
    fields.forEach((id, index) => { document.getElementById(id).textContent = String(values[index]).padStart(2, '0'); });
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);
