function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

document.addEventListener('click', (e) => {
    const menuHamburguesa = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

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
        // 🔁 Quita la animación cuando sale de la vista
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

    // Formulario oculto Workshops
  document.getElementById("btnCita").addEventListener("click", function () {
    const form = document.getElementById("formCita");
    form.style.display = form.style.display === "none" ? "block" : "none";
  });
