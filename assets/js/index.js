function showMenu(){
    let menuMobile = document.querySelector('.mobile-list');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "../assets/img/menuMobile.png"
    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../assets/img/close.png"
    }
}