document.addEventListener("DOMContentLoaded", function() {
  const banner = document.getElementById("cookie-banner");
  const overlay = document.getElementById("page-overlay");
  const acceptBtn = document.getElementById("acceptCookies");
  const rejectBtn = document.getElementById("rejectCookies");

  // Verifica si el usuario ya ha tomado una decisión
  const cookiesDecision = localStorage.getItem("cookiesDecision");

  if (!cookiesDecision) {
    banner.style.display = "block";
    overlay.style.display = "block";
  } else {
    banner.style.display = "none";
    overlay.style.display = "none";
  }

  function hideBanner(decision) {
    localStorage.setItem("cookiesDecision", decision);
    banner.style.display = "none";
    overlay.style.opacity = "0";
    setTimeout(() => overlay.style.display = "none", 300);
  }

  acceptBtn.addEventListener("click", () => hideBanner("accepted"));
  rejectBtn.addEventListener("click", () => hideBanner("rejected"));
});
 
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    toggle.addEventListener("click", function () {
      menu.classList.toggle("show");
    });
  });
    
    // Slider
const frases = [
      {
        texto: "Procuremos más ser padres de nuestro porvenir que hijos de nuestro pasado.",
        autor: "Miguel de Unamuno"
      },
      {
        texto: "El secreto de la vida consiste en saber lo que quieres y recordar lo que eres.",
        autor: "Pío Baroja"
      },
      {
        texto: "Vencerse a sí mismo es la mayor de las victorias.",
        autor: "Pedro Calderón de la Barca"
      },
      {
        texto: "El esfuerzo es la magia que transforma los éxitos en realidad",
        autor: "Rafael Nadal"
      }
    ];

    const fraseEl = document.getElementById("frase");
    const autorEl = document.getElementById("autor");
    const botonesContainer = document.querySelector(".botones");

    let indice = 0;

    // Crear botones
    frases.forEach((_, i) => {
      const btn = document.createElement("button");
      btn.classList.add("boton");
      if (i === 0) btn.classList.add("activo");
      btn.addEventListener("click", () => mostrarFrase(i));
      botonesContainer.appendChild(btn);
    });

    function mostrarFrase(i) {
      indice = i;
      fraseEl.textContent = "“" + frases[i].texto + "”";
      autorEl.textContent = "— " + frases[i].autor;

      document.querySelectorAll(".boton").forEach((btn, idx) => {
        btn.classList.toggle("activo", idx === i);
      });
    }


     // Aboutme
 
   const elements = document.querySelectorAll('.about-left, .about-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('about-left')) {
          entry.target.classList.add('show-left');
        }
        if (entry.target.classList.contains('about-right')) {
          entry.target.classList.add('show-right');
        }
      } else {
       
        entry.target.classList.remove('show-left', 'show-right');
      }
    });
  }, { threshold: 0.2 }); // 20% visible para activar

  elements.forEach(el => observer.observe(el));


      //Workshops

   const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
      item.addEventListener("click", () => {
        item.classList.toggle("active");
        let sign = item.querySelector("span");
        sign.textContent = item.classList.contains("active") ? "−" : "+";
      });
    });

   //Workshops Imagen Animación

document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.container-imgWorkshops');
  if (!el) return;

  const options = {
    root: null,
    rootMargin: '0px 0px -10% 0px', 
    threshold: 0.1
  };

  const restartAnimation = (element) => {   
    element.classList.remove('play');   
    void element.offsetWidth;
    element.classList.add('play');
  };

  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {          
          restartAnimation(entry.target);
        } else {          
          entry.target.classList.remove('play');
        }
      });
    }, options);

    obs.observe(el);
  } else {
        const check = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        restartAnimation(el);
      } else {
        el.classList.remove('play');
      }
    };
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    check();
  }
});
// Conectando con el whatsapp
const whatsappContainer = document.getElementById('whatsapp-container');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        whatsappContainer.classList.add('visible');
    } else {
        whatsappContainer.classList.remove('visible');
    }
});

// Cookies banner
const banner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('acceptCookies');
const rejectBtn = document.getElementById('rejectCookies');


// Verifica si ya se ha dado consentimiento
if (!localStorage.getItem('cookieConsent')) {
banner.style.display = 'block';
}


acceptBtn.addEventListener('click', () => {
localStorage.setItem('cookieConsent', 'accepted');
banner.style.display = 'none';
});


rejectBtn.addEventListener('click', () => {
localStorage.setItem('cookieConsent', 'rejected');
banner.style.display = 'none';
});


