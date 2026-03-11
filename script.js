// --- NAVEGAÇÃO ENTRE SECÇÕES ---
function navigate(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('visible');
    section.classList.add('hidden');
  });

  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('visible');
  }

  // Atualiza o estado visual dos botões do menu
  document.querySelectorAll('.nav-button').forEach(btn => {
    btn.classList.remove('active');
  });

  if (event && event.target && event.target.classList.contains('nav-button')) {
    event.target.classList.add('active');
  }
}

window.onload = () => {
  navigate('beggining');
};

// --- LÓGICA DO CARROSSEL (SISTEMA DE DESLIZE) ---
let currentSlide = 0;

function moveSlide(direction) {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;

  // Atualiza o índice do slide atual
  currentSlide += direction;

  // Loop infinito: se passar do último volta ao primeiro, se for antes do primeiro vai ao último
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  // Calcula a percentagem de deslocamento (cada slide ocupa 100% da largura da track)
  const offset = -currentSlide * 100;
  
  // Aplica a transformação CSS para deslizar suavemente
  track.style.transform = `translateX(${offset}%)`;
}

// --- LÓGICA DOS MODAIS (LEARN MORE) ---

// Abrir Modal
document.querySelectorAll('.learn-more').forEach(button => {
  button.addEventListener('click', () => {
    const gameId = button.getAttribute('data-game');
    const modal = document.getElementById('modal-' + gameId);
    if (modal) {
        modal.classList.remove('hidden');
        // Pequeno timeout para garantir que a animação de entrada do CSS funcione
        setTimeout(() => {
            modal.style.opacity = "1";
        }, 10);
    }
  });
});

// Fechar Modal (Botão X)
document.querySelectorAll('.modal .close').forEach(span => {
  span.addEventListener('click', () => {
    const modal = span.closest('.modal');
    modal.classList.add('hidden');
  });
});

// Fechar Modal (Clicar fora da caixa branca)
window.addEventListener('click', (e) => {
  document.querySelectorAll('.modal').forEach(modal => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
});