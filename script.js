
let menuElem = document.querySelector('.nav_menu_items')
let btniconElem = document.querySelector('.header_icon')
let btncloseElem = document.querySelector(('.header_icon i'))

btniconElem.addEventListener('click', function () {
  if (btncloseElem.classList.contains('fa-bars')) {
    menuElem.style.left = '0'
    btncloseElem.classList = 'fa fa-times'
  } else {
    menuElem.style.left = '-16rem'
    btncloseElem.classList = 'fa fa-bars'
  }
})