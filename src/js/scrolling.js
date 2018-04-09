//Прокрутка в окне
var menu = document.getElementById('menu');
var header = document.getElementById('header');
var menuWrapper = document.getElementById('menu-wrapper');
var footer = document.getElementById('footer');

menu.style.top = header.clientHeight + 'px';  

header.onload = function() {
    menu.style.top = header.clientHeight + 'px';    
}

menuWrapper.onscroll = function() {
    var menuTrigger = menuWrapper.scrollHeight - footer.clientHeight - menu.clientHeight - header.clientHeight;
    
    header.style.top = menuWrapper.scrollTop  + 'px';
    
    if (menuWrapper.scrollTop < menuTrigger ) {
        menu.style.top = menuWrapper.scrollTop + header.clientHeight + 'px';
    }
};


