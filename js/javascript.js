
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
  anchor.addEventListener('click', function(e) {
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


function sendWhatsAppMessage(event) {
    event.preventDefault(); // Evita que se recargue la página
            
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const phoneNumber = "5492212201898"; 

    const text = `Hola, recibí un mensaje desde el formulario de contacto:
    Nombre: ${name}
    Email: ${email}
    Mensaje: ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappURL, "_blank");
}


window.addEventListener('scroll', scrollReveal);

window.addEventListener('load', scrollReveal);