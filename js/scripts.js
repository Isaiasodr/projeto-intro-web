const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");

let movies = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  movies.forEach((movie) => {
    if (
      movie.titulo.toLowerCase().includes(value) ||
      movie.genero.toLowerCase().includes(value)
    ) {
      movie.element.style.visibility = "visible";
    } else {
      movie.element.style.visibility = "hidden";
    }
  });
});

const filmes = [
  {
    titulo: "Infiltrado",
    genero: "gênero:" + " Ação",
    duracao: "duração: " + 120 + " minutos",
    src: "img/infiltrado.jpg",
  },
  {
    titulo: "Assassino a preço fixo 2",
    genero: "gênero: " + "Ação",
    duracao: "duração: " + 99 + " minutos",
    src: "img/104239.jpg",
  },
  {
    titulo: "Vingadores Ultimato",
    genero: "gênero:" + " Ação e fantasia",
    duracao: "duração: " + 200 + " minutos",
    src: "img/vingadores.jpg",
  },
  {
    titulo: "Invocação do mal",
    genero: "gênero:" + " Terror",
    duracao: "duração: " + 90 + " minutos",
    src: "img/invocação do mal.jpg",
  },
  {
    titulo: "Invocação do mal 2",
    genero: "gênero:" + " Terror",
    duracao: "duração: " + 90 + " minutos",
    src: "img/invocação do mal 2.jpg",
  },
  {
    titulo: "A Freira",
    genero: "gênero:" + " Terror",
    duracao: "duração:" + 90 + " minutos",
    src: "img/a freira.jpg",
  },
  {
    titulo: "Harry potter e a Pedra Filosofal",
    genero: "gênero:" + " Fantasia",
    duracao: "duração:" + 90 + " minutos",
    src: "img/harry.jpg",
  },
  {
    titulo: "Harry potter e a Câmara Secreta",
    genero: "gênero:" + " Fantasia",
    duracao: "duração:" + 90 + " minutos",
    src: "img/harry2.webp",
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
