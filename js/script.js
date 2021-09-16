function openHamburger(open = true) {
    const hamburger = document.getElementById('hamburger-menu');
    hamburger.style.right = open ? '0%' : '-100%';
}