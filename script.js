/* LOADING */

setTimeout(() => {

  const loading =
    document.getElementById("loading");

  if(loading){

    loading.style.display = "none";

  }

}, 3000);

/* TÍTULO */

const titulo =
  document.getElementById("titulo");

titulo.innerHTML =
  "Aprenda programação do zero 😎";

/* BOTÃO HERO */

function entrar(){

  const mensagem =
    document.getElementById("mensagem");

  titulo.innerHTML =
    "Você entrou para o ZERO CODE 🚀";

  mensagem.innerHTML =
    "Agora sua jornada DEV começou 😎🔥";

}

/* MENU MOBILE */

function abrirMenu(){

  const menu =
    document.getElementById("menu");

  menu.classList.toggle("ativo");

}

/* TEMA */

function trocarTema(){

  document.body.classList.toggle("light");

}

/* RELÓGIO */

function atualizarRelogio(){

  const relogio =
    document.getElementById("relogio");

  const agora =
    new Date();

  const horas =
    agora.getHours()
      .toString()
      .padStart(2, "0");

  const minutos =
    agora.getMinutes()
      .toString()
      .padStart(2, "0");

  const segundos =
    agora.getSeconds()
      .toString()
      .padStart(2, "0");

  relogio.innerHTML =
    `${horas}:${minutos}:${segundos}`;

}

setInterval(atualizarRelogio, 1000);

atualizarRelogio();

/* PROJETOS */

const projetos = [

  {
    nome:
      "ZERO CODE",

    descricao:
      "Meu primeiro site profissional de programação.",

    imagem:
      "projeto1.png"
  },

  {
    nome:
      "Landing Page DEV",

    descricao:
      "Página moderna criada para treinar frontend.",

    imagem:
      "projeto2.png"
  },

  {
    nome:
      "Projeto Hacker",

    descricao:
      "Interface estilo hacker com terminal animado.",

    imagem:
      "projeto3.jpg"
  }

];

/* MOSTRAR PROJETOS */

const cards =
  document.getElementById("cards");

function mostrarProjetos(){

  if(!cards) return;

  cards.innerHTML = "";

  projetos.forEach(projeto => {

    cards.innerHTML += `

      <div class="card">

        <img
          src="${projeto.imagem}"
          alt="${projeto.nome}"
        >

        <h3>
          ${projeto.nome}
        </h3>

        <p>
          ${projeto.descricao}
        </p>

      </div>

    `;

  });

}

mostrarProjetos();

/* TERMINAL */

const terminal =
  document.getElementById("terminalTexto");

if(terminal){

  terminal.innerHTML =

`> iniciando sistema...
> carregando html...
> carregando css...
> carregando javascript...
> sistema online ✅`;

}

/* CURSOR */

const cursor =
  document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

  if(cursor){

    cursor.style.left =
      e.clientX + "px";

    cursor.style.top =
      e.clientY + "px";

  }

});

document.addEventListener("mousedown", () => {

  if(cursor){

    cursor.classList.add("clicando");

  }

});

document.addEventListener("mouseup", () => {

  if(cursor){

    cursor.classList.remove("clicando");

  }

});

/* REVEAL */

function revelar(){

  const reveals =
    document.querySelectorAll(".reveal");

  reveals.forEach(reveal => {

    const alturaTela =
      window.innerHeight;

    const topo =
      reveal.getBoundingClientRect().top;

    if(topo < alturaTela - 100){

      reveal.classList.add("active");

    }

  });

}

window.addEventListener("scroll", revelar);

revelar();