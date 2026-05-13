/* =========================
   BOOT SCREEN
========================= */

const bootText =
document.getElementById("boot-text");

const bootScreen =
document.getElementById("boot-screen");

const linhasBoot = [
  "> iniciando sistema...",
  "> carregando módulos...",
  "> verificando acesso...",
  "> conectando terminal...",
  "> carregando interface...",
  "> sistema iniciado com sucesso ✅"
];

let linhaBootAtual = 0;

function escreverBoot(){

  if(
    bootText &&
    linhaBootAtual < linhasBoot.length
  ){

    bootText.innerHTML +=
      linhasBoot[linhaBootAtual] + "\n";

    linhaBootAtual++;

    setTimeout(
      escreverBoot,
      500
    );

  }else{

    setTimeout(() => {

      if(bootScreen){

        bootScreen.style.opacity = "0";

        setTimeout(() => {

          bootScreen.style.display =
            "none";

        },800);

      }

    },700);

  }

}

if(bootText){
  escreverBoot();
}

/* =========================
   LOADING
========================= */

window.addEventListener(
  "load",
  () => {

    const loading =
      document.getElementById("loading");

    setTimeout(() => {

      if(loading){

        loading.style.opacity = "0";

        setTimeout(() => {

          loading.style.display =
            "none";

        },800);

      }

    },1200);

  }
);

/* =========================
   LOGIN
========================= */

function entrarSistema(){

  const usuario =
    document.getElementById("usuario");

  const senha =
    document.getElementById("senha");

  const erro =
    document.getElementById("erro-login");

  const tela =
    document.getElementById("login-screen");

  const plataforma =
    document.getElementById("plataforma");

  if(
    !usuario ||
    !senha ||
    !erro ||
    !tela ||
    !plataforma
  ) return;

  if(
    usuario.value === "admin" &&
    senha.value === "1234"
  ){

    erro.innerHTML = "";

    localStorage.setItem(
      "logado",
      "sim"
    );

    tela.style.opacity = "0";

    setTimeout(() => {

      tela.style.display = "none";

      plataforma.style.display = "block";

    },700);

  }else{

    erro.innerHTML =
      "Acesso negado ❌";

  }

}

document.addEventListener(
  "keydown",
  (event) => {

    if(event.key === "Enter"){

      const tela =
        document.getElementById("login-screen");

      if(
        tela &&
        tela.style.display !== "none"
      ){

        entrarSistema();

      }

    }

  }
);

/* =========================
   LOGIN SALVO
========================= */

window.addEventListener(
  "load",
  () => {

    const tela =
      document.getElementById("login-screen");

    const plataforma =
      document.getElementById("plataforma");

    if(
      localStorage.getItem("logado")
      === "sim"
    ){

      if(tela){
        tela.style.display = "none";
      }

      if(plataforma){
        plataforma.style.display = "block";
      }

    }

  }
);

/* =========================
   HERO DIGITANDO
========================= */

const titulo =
document.getElementById("titulo");

const textoTitulo =
"Aprenda programação do zero 😎";

let contadorTitulo = 0;

function digitarTitulo(){

  if(
    titulo &&
    contadorTitulo < textoTitulo.length
  ){

    titulo.innerHTML +=
      textoTitulo.charAt(contadorTitulo);

    contadorTitulo++;

    setTimeout(
      digitarTitulo,
      70
    );

  }

}

if(titulo){

  titulo.innerHTML = "";

  digitarTitulo();

}

/* =========================
   HERO BUTTON
========================= */

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

/* =========================
   MENU MOBILE
========================= */

function abrirMenu(){

  const menu =
    document.getElementById("menu");

  if(menu){

    menu.classList.toggle("ativo");

  }

}

document.querySelectorAll("nav a")
.forEach(link => {

  link.addEventListener(
    "click",
    () => {

      const menu =
        document.getElementById("menu");

      if(menu){

        menu.classList.remove("ativo");

      }

    }
  );

});

/* =========================
   TEMA
========================= */

function trocarTema(){

  document.body.classList.toggle(
    "light"
  );

  const temaBtn =
    document.querySelector(".tema-btn");

  if(temaBtn){

    temaBtn.innerHTML =
      document.body.classList.contains("light")
      ? "☀️"
      : "🌙";

  }

}

/* =========================
   RELÓGIO
========================= */

function atualizarRelogio(){

  const relogio =
    document.getElementById("relogio");

  if(!relogio) return;

  const agora =
    new Date();

  const horas =
    agora.getHours()
    .toString()
    .padStart(2,"0");

  const minutos =
    agora.getMinutes()
    .toString()
    .padStart(2,"0");

  const segundos =
    agora.getSeconds()
    .toString()
    .padStart(2,"0");

  relogio.innerHTML =
    `${horas}:${minutos}:${segundos}`;

}

setInterval(
  atualizarRelogio,
  1000
);

atualizarRelogio();

/* =========================
   TERMINAL HERO
========================= */

const terminalTexto =
document.getElementById("terminalTexto");

const comandosHero = [
  "> iniciando zero code...",
  "> verificando acesso dev...",
  "> carregando html...",
  "> carregando css...",
  "> carregando javascript...",
  "> sistema online ✅"
];

let linhaHero = 0;

function animarTerminalHero(){

  if(
    terminalTexto &&
    linhaHero < comandosHero.length
  ){

    terminalTexto.innerHTML +=
      comandosHero[linhaHero] + "\n";

    linhaHero++;

    setTimeout(
      animarTerminalHero,
      500
    );

  }

}

if(terminalTexto){

  terminalTexto.innerHTML = "";

  animarTerminalHero();

}

/* =========================
   TERMINAL DEV
========================= */

const terminalHack =
document.getElementById("terminalHack");

const textoHack =
"> ZERO CODE SYSTEM ONLINE\n\n" +
"> Loading developer modules...\n\n" +
"> HTML loaded ✓\n" +
"> CSS loaded ✓\n" +
"> JavaScript loaded ✓\n\n" +
"> Connecting AI core...\n\n" +
"> Access granted ✓\n\n" +
"> Welcome Developer 🚀";

let contadorHack = 0;

function escreverTerminal(){

  if(!terminalHack) return;

  if(contadorHack < textoHack.length){

    terminalHack.innerHTML +=
      textoHack.charAt(contadorHack);

    contadorHack++;

    setTimeout(
      escreverTerminal,
      25
    );

  }

}

if(terminalHack){

  terminalHack.innerHTML = "";

  escreverTerminal();

}

/* =========================
   IA PANEL
========================= */

const iaTexto =
document.getElementById("iaTexto");

const mensagensIA = [
  "ZERO AI conectado...",
  "Analisando progresso DEV...",
  "HTML detectado ✅",
  "CSS detectado ✅",
  "JavaScript em evolução ⚡",
  "Status: jornada iniciada 🚀"
];

let iaIndex = 0;

function animarIA(){

  if(!iaTexto) return;

  iaTexto.innerHTML =
    mensagensIA[iaIndex];

  iaIndex++;

  if(
    iaIndex >= mensagensIA.length
  ){

    iaIndex = 0;

  }

  setTimeout(
    animarIA,
    2200
  );

}

animarIA();

/* =========================
   CHAT IA
========================= */

function enviarPerguntaIA(){

  const input =
    document.getElementById("perguntaIA");

  const chat =
    document.getElementById("chatMensagens");

  if(!input || !chat) return;

  const pergunta =
    input.value.trim();

  if(pergunta === "") return;

  const msgUser =
    document.createElement("div");

  msgUser.classList.add(
    "msg",
    "user"
  );

  msgUser.innerHTML = pergunta;

  chat.appendChild(msgUser);

  input.value = "";

  chat.scrollTop =
    chat.scrollHeight;

  const pensando =
    document.createElement("div");

  pensando.classList.add(
    "msg",
    "ia"
  );

  pensando.innerHTML =
    "ZERO AI está pensando...";

  chat.appendChild(pensando);

  let resposta = "";

  const texto =
    pergunta.toLowerCase();

  if(texto.includes("html")){

    resposta =
      "HTML é a estrutura principal do site.";

  }else if(texto.includes("css")){

    resposta =
      "CSS deixa o site bonito e responsivo.";

  }else if(
    texto.includes("javascript") ||
    texto.includes("js")
  ){

    resposta =
      "JavaScript adiciona lógica e interação.";

  }else{

    resposta =
      "Posso ajudar com HTML, CSS e JavaScript 🚀";

  }

  setTimeout(() => {

    pensando.innerHTML = "";

    let i = 0;

    function digitarIA(){

      if(i < resposta.length){

        pensando.innerHTML +=
          resposta.charAt(i);

        i++;

        setTimeout(
          digitarIA,
          20
        );

      }

    }

    digitarIA();

  },700);

}

/* =========================
   CURSOR
========================= */

const cursor =
document.querySelector(".cursor");

document.addEventListener(
  "mousemove",
  (e) => {

    if(cursor){

      cursor.style.left =
        e.clientX + "px";

      cursor.style.top =
        e.clientY + "px";

    }

  }
);

document.addEventListener(
  "mousedown",
  () => {

    if(cursor){

      cursor.classList.add(
        "clicando"
      );

    }

  }
);

document.addEventListener(
  "mouseup",
  () => {

    if(cursor){

      cursor.classList.remove(
        "clicando"
      );

    }

  }
);

/* =========================
   SIDEBAR
========================= */

function toggleSidebar(){

  const sidebar =
    document.querySelector(
      ".sidebar-dev"
    );

  if(!sidebar) return;

  sidebar.classList.toggle(
    "fechada"
  );

}

/* =========================
   CADASTRO
========================= */

function abrirCadastro(){

  const cadastro =
    document.getElementById(
      "cadastro-box"
    );

  if(cadastro){

    cadastro.style.display =
      cadastro.style.display === "block"
      ? "none"
      : "block";

  }

}

function enviarCadastro(){

  const nome =
    document.getElementById("cadNome");

  const whatsapp =
    document.getElementById("cadWhatsapp");

  const servico =
    document.getElementById("cadServico");

  const mensagem =
    document.getElementById("cadMensagem");

  if(
    !nome.value ||
    !whatsapp.value ||
    !servico.value
  ){

    alert(
      "Preencha nome, WhatsApp e serviço."
    );

    return;

  }

  const texto =
`Olá! Vim pelo site ZERO CODE.

Nome: ${nome.value}
WhatsApp: ${whatsapp.value}
Serviço: ${servico.value}

Mensagem:
${mensagem.value}`;

  const numero =
    "553195428665";

  const link =
    `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(
    link,
    "_blank"
  );

}

/* =========================
   REVEAL
========================= */

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

window.addEventListener(
  "scroll",
  revelar
);

revelar();

/* =========================
   SAIR
========================= */

function sairSistema(){

  localStorage.removeItem(
    "logado"
  );

  location.reload();

}

/* =========================
   MATRIX
========================= */

const matrix =
document.getElementById("matrix");

if(matrix){

  const ctx =
    matrix.getContext("2d");

  matrix.width =
    window.innerWidth;

  matrix.height =
    window.innerHeight;

  const letras =
    "01ZERO CODE DEV";

  const letrasArray =
    letras.split("");

  const fonte = 16;

  const colunas =
    matrix.width / fonte;

  const chuva = [];

  for(let x = 0; x < colunas; x++){

    chuva[x] = 1;

  }

  function desenharMatrix(){

    ctx.fillStyle =
      "rgba(0,0,0,0.05)";

    ctx.fillRect(
      0,
      0,
      matrix.width,
      matrix.height
    );

    ctx.fillStyle =
      "#00ffcc";

    ctx.font =
      fonte + "px monospace";

    for(let i = 0; i < chuva.length; i++){

      const texto =
        letrasArray[
          Math.floor(
            Math.random() *
            letrasArray.length
          )
        ];

      ctx.fillText(
        texto,
        i * fonte,
        chuva[i] * fonte
      );

      if(
        chuva[i] * fonte >
        matrix.height &&
        Math.random() > 0.975
      ){

        chuva[i] = 0;

      }

      chuva[i]++;

    }

  }

  setInterval(
    desenharMatrix,
    35
  );

}

/* =========================
   PARTÍCULAS
========================= */

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

    for(let i = 0; i < 80; i++){

      particulas.push({

        x:
          Math.random() *
          canvas.width,

        y:
          Math.random() *
          canvas.height,

        raio:
          Math.random() * 2 + 1,

        velocidadeX:
          Math.random() - 0.5,

        velocidadeY:
          Math.random() - 0.5

      });

    }

  }

  criarParticulas();

  function conectar(){

    for(let a = 0; a < particulas.length; a++){

      for(let b = a; b < particulas.length; b++){

        const dx =
          particulas[a].x -
          particulas[b].x;

        const dy =
          particulas[a].y -
          particulas[b].y;

        const distancia =
          Math.sqrt(dx*dx + dy*dy);

        if(distancia < 120){

          ctx.strokeStyle =
            `rgba(0,255,204,${
              1 - distancia / 120
            })`;

          ctx.lineWidth = 0.7;

          ctx.beginPath();

          ctx.moveTo(
            particulas[a].x,
            particulas[a].y
          );

          ctx.lineTo(
            particulas[b].x,
            particulas[b].y
          );

          ctx.stroke();

        }

      }

    }

  }

  function animar(){

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    particulas.forEach(p => {

      ctx.beginPath();

      ctx.arc(
        p.x,
        p.y,
        p.raio,
        0,
        Math.PI * 2
      );

      ctx.fillStyle =
        "#00ffcc";

      ctx.fill();

      p.x += p.velocidadeX;
      p.y += p.velocidadeY;

      if(
        p.x < 0 ||
        p.x > canvas.width
      ){

        p.velocidadeX *= -1;

      }

      if(
        p.y < 0 ||
        p.y > canvas.height
      ){

        p.velocidadeY *= -1;

      }

    });

    conectar();

    requestAnimationFrame(animar);

  }

  animar();

}