var header_top = {
    init: function() {
        this.clickmenu__MB('.header__top__menu', '.menu__MB', 'showmenu');
        this.clickmenu__MB('#menu1 .show--menu', '#menu1', 'showmenu2');
        this.clickmenu__MB('#menu2 .show--menu', '#menu2', 'showmenu2');
    },
    clickmenu__MB: function(listMenu, menuButton, shomenuu) {
        var header__top__menu = document.querySelector(listMenu);

        var menu__MB = document.querySelector(menuButton);

        menu__MB.addEventListener('click', function() {
            header__top__menu.classList.toggle(shomenuu);
        })
    }
}
header_top.init();