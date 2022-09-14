menuBars = document.querySelector('.menu-bars')
header = document.querySelector('.header')
NavOpenMenu = document.querySelector('.nav-open')
NavCloseMenu = document.querySelector('.close-open')


const openNav = () => {
  NavOpenMenu.style.display ='flex'
}

const closeNav = () => {
  NavOpenMenu.style.display ='none'
}

menuBars.addEventListener('click', () => {
  openNav()
})

NavCloseMenu.addEventListener('click', () => {
  closeNav()
})