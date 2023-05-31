// MENU MOBILE
const btnMobile = document.querySelector("#btn-mobile");
function toggleMenu(event) {
  if (event.type === 'touchstart') {
    event.preventDefault()
  }
  const listNav = document.querySelector('.list-nav')
  const headerNav = document.querySelector('.header-nav')
  if (listNav && headerNav) {
    listNav.classList.toggle("active")
    headerNav.classList.toggle("active")
  }

  const active = listNav?.classList.contains("active")

  event.currentTarget.setAttribute("aria-expanded", active)
  if (active) {
    event.currentTarget.setAttribute("aria-label", 'fechar menu')
  } else {
    event.currentTarget.setAttribute("aria-label", 'Abrir menu')
  }
}


if (btnMobile) {
  btnMobile.addEventListener("click", toggleMenu)
  btnMobile.addEventListener("touchstart", toggleMenu)
}


// FUNCIONAMENTO


const funcionamentoOne = document.querySelectorAll('[data-semana]')[0];
const funcionamentoTwo = document.querySelectorAll('[data-semana]')[1]


const diasSemanaOne = funcionamentoOne.dataset.semana.split(',').map(Number);
const diasSemanaTwo = funcionamentoTwo.dataset.semana.split(",").map(Number);

const horarioSemanaOne = funcionamentoOne.dataset.horario.split(',').map(Number);
const horarioSemanaTwo = funcionamentoTwo.dataset.horario.split(",").map(Number);


const dataAgora = new Date();

const diaAgora = dataAgora.getDay()
const horarioAgora = dataAgora.getHours()


const semanaAbertaOne = diasSemanaOne.indexOf(diaAgora) !== -1;
const semanaAbertaTwo = diasSemanaTwo.indexOf(diaAgora) !== -1;


const horarioAbertoOne = (horarioAgora >= horarioSemanaOne[0] && horarioAgora < horarioSemanaOne[1])
const horarioAbertoTwo = (horarioAgora >= horarioSemanaTwo[0] && horarioAgora < horarioSemanaTwo[1])


if (semanaAbertaOne && horarioAbertoOne) {
  funcionamentoOne.classList.add('aberto')
} else {
  funcionamentoOne.classList.add('fechado')
}

if (semanaAbertaTwo && horarioAbertoTwo) {
  funcionamentoTwo.classList.add("aberto")
} else {
  funcionamentoTwo.classList.add('fechado')
}



// PERGUNTAS FREQUENTES

const perguntas = document.querySelectorAll(".perguntas button");

perguntas.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const perguntas = e.currentTarget
    const controls = perguntas.getAttribute("aria-controls")
    const ddElement = document.querySelector('#' + controls)
    ddElement.classList.toggle("ativa")
    if (ddElement.classList.contains('ativa')) {
      perguntas.ariaExpanded = true
    } else {
      perguntas.ariaExpanded = false
    }
  })
})

// SHOW PASSWORD

const passIcon = document.querySelector('.pass-icon');
const password = document.querySelector('.login-senha input')

if (passIcon && password) {
  passIcon.addEventListener('click', () => {
    passIcon.classList.toggle("visivel")
    if (passIcon.classList.contains('visivel')) {
      passIcon.src = 'assets/svg/visivil.svg'
      password.type = 'text';
    } else {
      passIcon.src = 'assets/svg/visivil-block.svg'
      password.type = 'password';
    }
  })
}

// MODAL DE SERVIÇOS
for (let i = 1; i <= 6; i++) {
  const clique = document.querySelectorAll(`.clique-${i}`);
  const modalBg = document.querySelector('.modal-bg-' + i)
  const modal = document.querySelector('.modal-' + i);
  const close = document.querySelectorAll(".close")

  clique.forEach(link => {
    link.addEventListener('click', () => {

      modalBg.classList.add("active")
      modal.classList.add('active')
    })
  })
  close.forEach(close => {
    close.addEventListener("click", () => {
      modal.classList.remove("active")
      modalBg.classList.remove('active')
    })
  })
}


// link active menu

const links = document.querySelectorAll(".list-nav a")

function ativarLink(link) {
  const url = document.location.href
  const href = link.href

  if (url.includes(href)) {
    link.classList.add('active')
  }
}

links.forEach(ativarLink)