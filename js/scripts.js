const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");

let movies = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  movies.forEach((movie) => {
    console.log(movie);
    if (
      movie.titulo.toLowerCase().includes(value) ||
      movie.genero.toLowerCase().includes(value)
    ) {
      movie.element.style.visibility = "visible";
    } else if (
      !movie.titulo.toLowerCase().includes(value) &&
      !movie.genero.toLowerCase().includes(value)
    ) {
      movie.element.style.visibility = "hidden";
    }
  });
});

const filmes = [
  {
    titulo: "Infiltrado",
    genero: "genero:" + " Ação",
    duracao: "duração:" + 120 + " minutos",
    src: "img/infiltrado.jpg",
  },
  {
    titulo: "Assassino a preço fixo 2",
    genero: "Ação",
    duracao: 90,
    src: "img/104239.jpg",
  },
  {
    titulo: "Vingadores",
    genero: "genero:" + " Ação e fantasia",
    duracao: "duração:" + 180 + " minutos",
    src: "img/vingadores.jpg",
  },
];
movies = filmes.map((filme) => {
  const card = userCardTemplate.content.cloneNode(true).children[0];
  console.log(card);
  const img = card.querySelector("[data-img]");
  const name = card.querySelector("[data-name]");
  const duration = card.querySelector("[data-duration]");
  const genr = card.querySelector("[data-genr]");

  img.src = filme.src;
  name.textContent = filme.titulo;
  duration.textContent = filme.duracao;
  genr.textContent = filme.genero;
  userCardContainer.append(card);
  return {
    titulo: filme.titulo,
    genero: filme.genero,
    duration: filme.duracao,
    element: card,
  };
});
