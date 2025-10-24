const whatsappContainer = document.getElementById('whatsapp-container');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        whatsappContainer.classList.add('visible');
    } else {
        whatsappContainer.classList.remove('visible');
    }
});

const feeds = [
    {
        nombre: "ABC",
       imagen: "imagenes/Periódico_ABC.jpg",
        rss: "https://www.abc.es/rss/feeds/abc_Espana.xml"
    },
    {
        nombre: "El Periódico",
        imagen: "imagenes/Periódico_El Periódico.jpg",
        rss: "https://www.elperiodico.com/es/cds/rss/?id=board.xml"

    },

    {
        nombre: "El Mundo",
        imagen: "imagenes/Periódico_El Mundo.png",
        rss: "https://e00-elmundo.uecdn.es/elmundo/rss/espana.xml"
    },
    {
        nombre: "El País",
        imagen: "imagenes/Periódico_El Pais.jpg",
        rss: "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/internacional/portada"
    },

    {
        nombre: "La Razón",
       imagen: "imagenes/Periódico_La Razón.jpg",
        rss: "https://www.larazon.es/rss/espana.xml"
    },
    {
        nombre: "La Vanguardia",
      imagen: "imagenes/Periódico_La Vanguardia.jpg",
        rss: "https://www.lavanguardia.com/rss/home.xml"
    },

];
const noticieContainer = document.getElementById("noticieContainer");
async function fetchNews() {
    noticeContainer.innerHTML = "";
    for (let feed of feeds) {
        try {
            const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.rss)}`);
            const data = await res.json();
            const noticia = data.items[0];

            const notice = document.createElement("div");
            notice.className = "notice";
            notice.innerHTML = `
        <img src="${feed.imagen}" alt="${feed.nombre}" >
        <div class="info">          
          <h3 style="margin-top: 12px; margin-bottom: 0px;">${feed.nombre}</h3>
          <p class="titulo" style="font-weight: normal; padding: 10px 0px 20px 0px; height: 120px">${noticia.title}...</p>
          <a href="${noticia.link}" target="_blank" style= "background-color: rgb(24, 74, 123); color: white; padding: 10px 20px; border: none; border-radius: 30px;" >Leer más >></a> 
        </div>`;
            noticeContainer.appendChild(notice);
        } catch (err) {
            console.error("Error con el feed de " + feed.nombre, err);
        }
    }
}

// Hace un llamado Inicial
fetchNews();

//  Para que se actualice cada 24 horas
setInterval(fetchNews, 86400000); 
