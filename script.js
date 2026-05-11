/* LOADING */

setTimeout(() => {

  const loading =
    document.getElementById("loading");

  if(loading){

    loading.style.opacity = "0";

    setTimeout(() => {

      loading.style.display = "none";

    }, 800);

  }

}, 3000);


/* TÍTULO DIGITANDO */

const titulo =
  document.getElementById("titulo");

const texto =
  "Aprenda programação do zero 😎";

let contador = 0;

function digitar(){

  if(
    titulo &&
    contador < texto.length
  ){

    titulo.innerHTML +=
      texto.charAt(contador);

    contador++;

    setTimeout(digitar, 80);

  }

}

if(titulo){

  titulo.innerHTML = "";

  digitar();

}


/* BOTÃO HERO */

function entrar(){

  const mensagem =
    document.getElementById("mensagem");

  if(titulo){

    titulo.innerHTML =
      "Você entrou para o ZERO CODE 🚀";

  }

  if(mensagem){

    mensagem.innerHTML =
      "Agora sua jornada DEV começou 😎🔥";

  }

}


/* MENU MOBILE */

function abrirMenu(){

  const menu =
    document.getElementById("menu");

  if(menu){

    menu.classList.toggle("ativo");

  }

}


/* TEMA */

function trocarTema(){

  document.body.classList.toggle("light");

}


/* RELÓGIO */

function atualizarRelogio(){

  const relogio =
    document.getElementById("relogio");

  if(!relogio) return;

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
      "projeto1.png",

    tecnologia:
      "HTML • CSS • JavaScript",

    link:
      "https://henrixn7.github.io/zero-code/"
  },

  {
    nome:
      "Landing Page DEV",

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
    nome:
      "Projeto Hacker",

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

const cards =
  document.getElementById("cards");

/* MOSTRAR PROJETOS */

function mostrarProjetos(lista){

  if(!cards) return;

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

        <h3>
          ${projeto.nome}
        </h3>

        <p>
          ${projeto.descricao}
        </p>

        <small>
          ${projeto.tecnologia}
        </small>

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

  revelar();

}

mostrarProjetos(projetos);


/* BUSCA */

function buscarProjeto(){

  const busca =
    document
      .getElementById("busca")
      .value
      .toLowerCase();

  const filtrados =
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

}


/* MODAL */

function abrirModal(index){

  const projeto =
    projetos[index];

  const modal =
    document.getElementById("modal");

  const tituloModal =
    document.getElementById("modalTitulo");

  const descricaoModal =
    document.getElementById("modalDescricao");

  if(modal){

    modal.style.display = "flex";

  }

  if(tituloModal){

    tituloModal.innerHTML =
      projeto.nome;

  }

  if(descricaoModal){

    descricaoModal.innerHTML =
      projeto.descricao;

  }

}

function fecharModal(){

  const modal =
    document.getElementById("modal");

  if(modal){

    modal.style.display = "none";

  }

}

window.addEventListener("click", (event) => {

  const modal =
    document.getElementById("modal");

  if(event.target === modal){

    fecharModal();

  }

});


/* TERMINAL */

const terminal =
  document.getElementById("terminalTexto");

const comandos = [

  "> iniciando zero code...",

  "> carregando html...",

  "> carregando css...",

  "> carregando javascript...",

  "> preparando projetos...",

  "> sistema online com sucesso ✅"

];

let linhaAtual = 0;

function animarTerminal(){

  if(!terminal) return;

  if(linhaAtual < comandos.length){

    terminal.innerHTML +=
      comandos[linhaAtual] + "\n";

    linhaAtual++;

    setTimeout(animarTerminal, 700);

  }

}

setTimeout(animarTerminal, 1200);


/* CURSOR NEON */

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


/* PARTÍCULAS */

const canvas =
  document.getElementById("particulas");

if(canvas){

  const ctx =
    canvas.getContext("2d");

  canvas.width =
    window.innerWidth;

  canvas.height =
    window.innerHeight;

  let particulas = [];

  function criarParticulas(){

    particulas = [];

    for(let i = 0; i < 70; i++){

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

  window.addEventListener("resize", () => {

    canvas.width =
      window.innerWidth;

    canvas.height =
      window.innerHeight;

    criarParticulas();

  });

}