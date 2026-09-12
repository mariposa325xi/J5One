const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
nav.addEventListener('click', () => {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
});

const players = [...document.querySelectorAll('audio')];
players.forEach(player => player.addEventListener('play', () => {
  players.filter(other => other !== player).forEach(other => other.pause());
}));
