const shrinkMenu = () => {
    const mainMenu = document.getElementById("main-menu");
    const mainLogo = document.getElementById("mbc-main-logo");
    const mbcStickyLogo2 = document.getElementById("sticky-mbclogo2");
    if (!mainMenu) return;
    let offset = mainLogo.offsetHeight;
    if (
        document.body.scrollTop >= offset ||
        document.documentElement.scrollTop >= offset
    ) {
        mainMenu.classList.add("sticky-menu");
        mbcStickyLogo2.classList.add("show-mbc-logo2");
    } else {
        mainMenu.classList.remove("sticky-menu");
        mbcStickyLogo2.classList.remove("show-mbc-logo2");
    }
};