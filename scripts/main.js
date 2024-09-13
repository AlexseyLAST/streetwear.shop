const nav = document.querySelector(".nav__menu");
const burger = document.querySelector(".burger")
const productBtn = document.querySelector(".product-btn")
const modalOrderWindow = document.querySelector(".modal__order-window")
const modalClose = document.querySelector(".order-window_close")

burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    nav.classList.toggle('active');
})

productBtn.addEventListener('click', function(){
    modalOrderWindow.classList.toggle('active');
})

modalClose.addEventListener('click', function(){
    modalOrderWindow.classList.toggle('active');
})

