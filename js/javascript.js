particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#3ea0bb', '#52c2f2', '#ffffff']
        },
        shape: {
            type: ['circle', 'triangle'],
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.6,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#52c2f2',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});


const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const scrollReveal = () => {
    const elements = document.querySelectorAll('.animate-fade-up');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
};
window.addEventListener('scroll', scrollReveal);
window.addEventListener('load', scrollReveal);
emailjs.init("QWeScG0XRysJsxH-C");
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();  

    const submitButton = document.querySelector("button[type='submit']");
    submitButton.disabled = true;
    const serviceID = "service_6ol8ytw";
    const templateID = "template_zeq9vik";

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Mensaje enviado!',
                text: 'Tu mensaje ha sido enviado exitosamente.',
                confirmButtonColor: '#3498db'
            });
            // Clear form fields
            event.target.reset();
        }, (err) => {
            // Use SweetAlert for error handling as well
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hubo un error al enviar el mensaje.',
                confirmButtonColor: '#d33',
                titleText: 'Oops...',
                textColor: '#333'
            });
        })
        .finally(() => {
            submitButton.disabled = false;
        });
});

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const menuLinks = document.querySelectorAll('.nav-link');
    const closeMenu = document.querySelector('.close-menu');

    // Toggle mobile menu
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when close icon is clicked
    if (closeMenu) {
        closeMenu.addEventListener('click', () => {
            burger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    }

});


