function toggleMenu() {
    var hamburger = document.querySelector('.hamburger');
    var subMenu = document.getElementById('subMenu');

    hamburger.classList.toggle('open');

    if (subMenu.style.display === 'none') {
        subMenu.style.display = 'block';
    } else {
        subMenu.style.display = 'none';
    }
}
