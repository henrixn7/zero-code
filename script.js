let titulo = document.getElementById("titulo");

let texto = "Aprenda programação do zero 😎";

let contador = 0;

/* DIGITANDO */

function digitar(){

  if(contador < texto.length){

    titulo.textContent += texto.charAt(contador);

    contador++;

    setTimeout(digitar, 80);

  }

}

titulo.textContent = "";

digitar();

/* BOTÃO HERO */

function entrar(){

  let mensagem =
    document.getElementById("mensagem");

  titulo.textContent =
    "Você entrou para o ZERO CODE 🚀";

  mensagem.textContent =
    "Agora sua jornada DEV começou 😎🔥";

}

/* MENU MOBILE */

function abrirMenu(){

  document
    .getElementById("menu")
    .classList.toggle("ativo");

}

/* TEMA */

function trocarTema(){

  document.body.classList.toggle("light");

}

/* RELÓGIO */

function atualizarRelogio(){

  let relogio =
    document.getElementById("relogio");

  let agora = new Date();

  let horas =
    agora.getHours()
      .toString()
      .padStart(2, "0");

  let minutos =
    agora.getMinutes()
      .toString()
      .padStart(2, "0");

  let segundos =
    agora.getSeconds()
      .toString()
      .padStart(2, "0");

  relogio.textContent =
    `${horas}:${minutos}:${segundos}`;

}

setInterval(atualizarRelogio, 1000);

atualizarRelogio();

/* PROJETOS */

let projetos = [

  {
    nome: "ZERO CODE",

    descricao:
      "Meu primeiro site profissional de programação.",

    imagem:
      "projeto1.png",

    tecnologia:
      "HTML • CSS • JavaScript",

    link:
      "https://henrixn7.github.io/zero-code/"
  },

  {
    nome: "Landing Page DEV",

    descricao:
      "Página moderna criada para treinar frontend.",

    imagem:
      "projeto2.png",

    tecnologia:
      "HTML • CSS",

    link:
      "https://github.com/henrixn7"
  },

  {
    nome: "Projeto Hacker",

    descricao:
      "Interface estilo hacker com terminal animado.",

    imagem:
      "projeto3.jpg",

    tecnologia:
      "JavaScript • CSS",

    link:
      "https://github.com/henrixn7/zero-code"
  }

];

let cards =
  document.getElementById("cards");

/* MOSTRAR PROJETOS */

function mostrarProjetos(lista){

  cards.innerHTML = "";

  if(lista.length === 0){

    cards.innerHTML =
      "<p>Nenhum projeto encontrado.</p>";

    return;

  }

  lista.forEach((projeto,index) => {

    cards.innerHTML += `

      <div class="card reveal">

        <img
          src="${projeto.imagem}"
          alt="${projeto.nome}"
        >

        <h3>${projeto.nome}</h3>

        <p>${projeto.descricao}</p>

        <small>${projeto.tecnologia}</small>

        <div class="card-buttons">

          <button onclick="abrirModal(${index})">
            Detalhes
          </button>

          <a
            href="${projeto.link}"
            target="_blank"
            class="btn-demo"
          >
            Ver Online
          </a>

        </div>

      </div>

    `;

  });

}

mostrarProjetos(projetos);

/* BUSCA */

function buscarProjeto(){

  let busca =
    document
      .getElementById("busca")
      .value
      .toLowerCase();

  let filtrados =
    projetos.filter(projeto =>

      projeto.nome
        .toLowerCase()
        .includes(busca)

      ||

      projeto.descricao
        .toLowerCase()
        .includes(busca)

    );

  mostrarProjetos(filtrados);

  revelar();

}

/* MODAL */

function abrirModal(index){

  let projeto = projetos[index];

  document
    .getElementById("modal")
    .style.display = "flex";

  document
    .getElementById("modalTitulo")
    .textContent = projeto.nome;

  document
    .getElementById("modalDescricao")
    .textContent =
      projeto.descricao;

}

function fecharModal(){

  document
    .getElementById("modal")
    .style.display = "none";

}

window.onclick = function(event){

  let modal =
    document.getElementById("modal");

  if(event.target === modal){

    fecharModal();

  }

};

/* TERMINAL */

let terminalTexto =
  document.getElementById("terminalTexto");

let comandos = [

  "> iniciando zero code...",

  "> carregando html...",

  "> carregando css...",

  "> carregando javascript...",

  "> preparando projetos...",

  "> sistema online com sucesso ✅"

];

let linhaAtual = 0;

function animarTerminal(){

  if(linhaAtual < comandos.length){

    terminalTexto.textContent +=
      comandos[linhaAtual] + "\n";

    linhaAtual++;

    setTimeout(animarTerminal, 700);

  }

}

setTimeout(animarTerminal, 1200);

/* PARTÍCULAS */

const canvas =
  document.getElementById("particulas");

const ctx =
  canvas.getContext("2d");

canvas.width =
  window.innerWidth;

canvas.height =
  window.innerHeight;

let particulas = [];

/* CRIAR PARTÍCULAS */

function criarParticulas(){

  particulas = [];

  for(let i = 0; i < 100; i++){

    particulas.push({

      x:
        Math.random() * canvas.width,

      y:
        Math.random() * canvas.height,

      raio:
        Math.random() * 3,

      velocidadeX:
        Math.random() - 0.5,

      velocidadeY:
        Math.random() - 0.5

    });

  }

}

criarParticulas();

/* ANIMAÇÃO PARTÍCULAS */

function animarParticulas(){

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  particulas.forEach(particula => {

    ctx.beginPath();

    ctx.arc(
      particula.x,
      particula.y,
      particula.raio,
      0,
      Math.PI * 2
    );

    ctx.fillStyle = "#00ffcc";

    ctx.fill();

    particula.x +=
      particula.velocidadeX;

    particula.y +=
      particula.velocidadeY;

    if(
      particula.x < 0 ||
      particula.x > canvas.width
    ){

      particula.velocidadeX *= -1;

    }

    if(
      particula.y < 0 ||
      particula.y > canvas.height
    ){

      particula.velocidadeY *= -1;

    }

  });

  requestAnimationFrame(
    animarParticulas
  );

}

animarParticulas();

/* RESPONSIVO */

window.addEventListener("resize", () => {

  canvas.width =
    window.innerWidth;

  canvas.height =
    window.innerHeight;

  criarParticulas();

});

/* REVEAL */

function revelar(){

  let reveals =
    document.querySelectorAll(".reveal");

  reveals.forEach(reveal => {

    let windowHeight =
      window.innerHeight;

    let revealTop =
      reveal.getBoundingClientRect().top;

    let revealPoint = 100;

    if(
      revealTop <
      windowHeight - revealPoint
    ){

      reveal.classList.add("active");

    }

  });

}

window.addEventListener("scroll", revelar);

revelar();

/* LOADING */

window.addEventListener("load", () => {

  const loading =
    document.getElementById("loading");

  setTimeout(() => {

    loading.classList.add("sumir");

  }, 3000);

});

/* CURSOR NEON */

const cursor =
  document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

  cursor.style.left =
    e.clientX + "px";

  cursor.style.top =
    e.clientY + "px";

});

document.addEventListener("mousedown", () => {

  cursor.classList.add("clicando");

});

document.addEventListener("mouseup", () => {

  cursor.classList.remove("clicando");

});