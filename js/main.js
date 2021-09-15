document.addEventListener('DOMContentLoaded',()=>{
    const header = document.querySelector('.header-container');
    const hMenu = document.querySelector('.header__menu');
    const hlMenu = document.querySelector('.header__listmenu');
    const bWrap = document.querySelector('.body-wrap');
    const hdmClose=document.querySelector('.listmenu--close')
    window.addEventListener('scroll',()=>{
        (this.scrollY > 0) ? header.classList.add('fixed') : header.classList.remove('fixed');   
    })
    hMenu.addEventListener('click',()=>{
        hlMenu.classList.add('hlm__active');
    })
    bWrap.addEventListener('click', () => {
        hlMenu.classList.remove('hlm__active');
    })
    hdmClose.addEventListener('click', () => {
        hlMenu.classList.remove('hlm__active');
    })
},false)