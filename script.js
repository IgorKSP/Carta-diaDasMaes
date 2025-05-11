// Lê o parâmetro 'message' da URL e atualiza o conteúdo, se existir
const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get('message');

if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage');
  mainMessageElement.textContent = decodeURIComponent(messageCustom); // decodeURI -> decodeURIComponent é mais seguro
}

// Seleciona os botões
const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');

// Desativa o botão de fechar inicialmente
btnCloseElement.disabled = true;

// Elementos principais
const coverElement = document.querySelector('.cover');
const paperElement = document.querySelector('.paper');
const heartElement = document.querySelector('.heart');

// Abre a carta
btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;

  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1;

    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');

    heartElement.style.display = 'block';
  }, 500);
});

// Fecha a carta
btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');

    heartElement.style.display = 'none';
  }, 500);
});
