const menuBars = document.querySelector('.menu-bars');
const NavOpenMenu = document.querySelector('.nav-open');
const NavCloseMenu = document.querySelector('.close-open');

const openNav = () => {
  NavOpenMenu.style.display = 'flex';
};

const closeNav = () => {
  NavOpenMenu.style.display = 'none';
};

menuBars.addEventListener('click', () => {
  openNav();
});

NavCloseMenu.addEventListener('click', () => {
  closeNav();
});