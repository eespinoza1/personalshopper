document.addEventListener('DOMContentLoaded', () => {

    /*========= CAMBIAR FONDO DEL HEADER AL HACER SCROLL =========*/
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /*========= MENÚ MÓVIL (HAMBURGUESA) =========*/
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show-menu');
        });
    }

    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    });

    /*========= ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ) =========*/
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');
        question.addEventListener('click', () => {
            const openItem = document.querySelector('.faq__item.active');
            
            // Si hay otro item abierto y no es el que clickeamos, lo cerramos
            if (openItem && openItem !== item) {
                openItem.classList.remove('active');
            }
            
            // Abrimos o cerramos el item clickeado
            item.classList.toggle('active');
        });
    });

    /*========= SIMULACIÓN DE ENVÍO DE FORMULARIO =========*/
    const form = document.querySelector('.form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue
            alert('¡Solicitud enviada con éxito! Pronto te contactaremos por WhatsApp.');
            form.reset(); // Limpia los campos del formulario
        });
    }

});