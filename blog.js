const whatsappContainer = document.getElementById('whatsapp-container');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        whatsappContainer.classList.add('visible');
    } else {
        whatsappContainer.classList.remove('visible');
    }
});

const newspapers = [
  {
    name: "El País",
    image: "https://imagenes.elpais.com/resizer/v2/OUERR2CSLVCEHK6PRWMHDPLFF4.jpg?auth=b9dc02e09759d5be881045fb97c5108aaa25b588bfa1e409cdaec74f2abf9acd&width=414",
    title: "España no logrará bajar su deuda del 90% del PIB en los próximos cinco años",
    link: "https://elpais.com/economia/2025-10-15/espana-no-lograra-bajar-su-deuda-del-90-del-pib-en-los-proximos-cinco-anos.html?utm_source=chatgpt.com"
  },
  {
    name: "ABC",
    image: "https://static.abc.es/media/hemeroteca/1934/08/11/abc-madrid-19340811-1-t6w--620x830.jpg",
    title: "El Gobierno recula con los autónomos: las cuotas de los que ganan hasta 1.167 euros se congelan",
    link: "https://www.abc.es/?utm_source=chatgpt.com"
  },
  {
    name: "La Vanguardia",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Portada_La_Vanguardia_num1.jpg/250px-Portada_La_Vanguardia_num1.jpg",
    title: "Los sindicatos denuncian la saturación de Brians 2 tras dos agresiones",
    link: "https://www.lavanguardia.com/?utm_source=chatgpt.com"
  },
  {
    name: "El Español",
    image: "https://s1.elespanol.com/assets/frontpage/v1/static/images/quienes-somos/redaccion.jpg",
    title: "Andalucía mejora en 6 de los 7 indicadores de progreso que mide Europa",
    link: "https://www.elespanol.com/?utm_source=chatgpt.com"
  },
  {
    name: "Libertad Digital",
    image: "https://s1.staticld.com//2024/08/20/1400/700/x-ld/libertad-digital-redes-2.jpg",
    title: "Libertad Digital publica análisis de última hora sobre política y economía",
    link: "https://www.libertaddigital.com/?utm_source=chatgpt.com"
  }
];

const container = document.getElementById('news-container');

newspapers.forEach(news => {
  const card = document.createElement('div');
  card.classList.add('news-card');

  card.innerHTML = `
    <img src="${news.image}" alt="${news.name}">
    <div class="news-content">
      <h2>${news.name}</h2>
      <p>${news.title}</p>
      <a href="${news.link}" target="_blank">Leer noticia</a>
    </div>
  `;

  container.appendChild(card);
});