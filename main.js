// Handle mobile menu button
const body = document.querySelector('body');
const menuList = document.querySelector('.menu-list');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.menu-close-btn .times');
const menuItems = Array.from(document.querySelectorAll('.menu-item'));

hamburger.addEventListener('click', () => {
  menuList.classList.add('active');
  closeIcon.classList.add('icon');
});

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    menuItems.forEach((Item) => { Item.classList.remove('active'); });
    menuList.classList.remove('active');
    menuItem.classList.add('active');

    if (menuItem.textContent === 'Program' && !body.classList.contains('homepage')) {
      localStorage.setItem(menuItem.textContent, 'active');
    }
  });
});

// Refresh page when resizing to desktop mode
window.addEventListener('resize', () => {
  if (body.clientWidth >= 768 && menuList.classList.contains('active')) {
    window.location.reload();
  }
});

window.onload = () => {
  if (localStorage.getItem('Program') !== null) {
    menuItems[3].classList.add(localStorage.getItem('Program'));
    localStorage.removeItem('Program');
  }
};