const toggleMobileMenu = (x) => {
    x.classList.toggle("change");
    const menuContent = document.getElementById("main-menu");
    menuContent.classList.toggle("slide-menu");
}