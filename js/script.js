window.addEventListener("DOMContentLoaded", () => {
    "use strict";
    
    const header = document.querySelector("header"),
    promo = document.querySelector(".promo"),
    menu = document.querySelector('.menu'),
    menu_item = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger'),
    body = document.getElementById("body");

    
    windowScroll();

    hamburger.addEventListener("click", () => {
        if(hamburger.classList.contains("hamburger_active")){
            hamburger.classList.remove("hamburger_active");
            menu.classList.remove("menu_active");
            body.style.overflow = "";
        } else {
            hamburger.classList.add("hamburger_active");
            menu.classList.add("menu_active");
            body.style.overflow = "hidden";
        };
    });

    menu_item.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove("hamburger_active");
            menu.classList.remove("menu_active");
            body.style.overflow = "";
        })
    })

    function windowScroll(){
        let lastScrollTop = promo.scrollHeight + header.offsetHeight;

        window.addEventListener("scroll", () => {
            // I.
            // Простой скролл после какого-либо блока срабатывается эффект скролл 
            // if(window.pageYOffset > promo.scrollHeight + header.offsetHeight){
            //     header.style.cssText = "position: fixed; width: 100%; z-index: 10;";
            // } else {
            //     header.style.cssText = "position: relative;";
            // }
    
    
            // II.
            // скроллим вниз, ничего нет. Скроллим вверх появляется меню
            if(window.pageYOffset > lastScrollTop){
                header.style.cssText = "position: none";
            } else {
                header.style.cssText = "position: fixed; width: 100%; z-index: 10;";
            }
    
            if(window.pageYOffset === 0){
                console.log("Yes");
                header.style.cssText = "position: none";
            }
            lastScrollTop = window.pageYOffset;
        })
    }

    class ScrollToEffect{

        static bindButton(button_trigger_selector, scrollToSelector) {
            this.btn_trigger = document.querySelector(button_trigger_selector);
            this.scrollToBlock = document.querySelector(scrollToSelector);

            this.btn_trigger.addEventListener("click", event => {
                if(event && event.target){
                    event.preventDefault();
                    this.scrollTo(this.scrollToBlock)
                }
            })
        }

        static scrollTo(elem){
            window.scroll({
                left: 0,
                top: elem.offsetTop,
                behavior: 'smooth'
            })
        }
    }

    ScrollToEffect.bindButton("#for-require", "#require");
    ScrollToEffect.bindButton("#for-socials", "#socials");

})
