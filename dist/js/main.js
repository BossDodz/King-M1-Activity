/* SELECT DOM ITEMS */
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuImg = document.querySelector('.menu-image');
const navItems = document.querySelectorAll('.nav-item'); // Select all nav items

// Set init state of Menu
let showMenu = false;

// Menu click event listener
menuBtn.addEventListener('click', () => {
    // Toggle Menu Function
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuImg.classList.add('show');

        // Loop through each nav item
        navItems.forEach(item => item.classList.add('show'));

        // Set Menu State
        showMenu = true;
    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuImg.classList.remove('show');

        // Loop through each nav item
        navItems.forEach(item => item.classList.remove('show'));

        // Set Menu State
        showMenu = false;
    }
});