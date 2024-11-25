// Inicializar AOS (Animate On Scroll)
AOS.init({
    once: true,
    offset: 50,
    duration: 1000,
});

//CLICK MENU MOBILE
function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');

}

// CAROUSEL DE TRABALHOS
let currentIndex = 0;
let autoSlideInterval;

// Função para atualizar o carrossel
function updateCarousel() {
    const carouselContent = document.getElementById("carousel-content");
    carouselContent.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Função para mostrar o slide anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + 5) % 5; // Substitua 5 pelo número total de slides
    updateCarousel();
}

// Função para mostrar o próximo slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % 5; // Substitua 5 pelo número total de slides
    updateCarousel();
}

// Função para ir a um slide específico
function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Função para iniciar o carrossel automático
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000); // Altere 3000 para o tempo desejado (em milissegundos)
}

// Função para parar o carrossel automático
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Eventos para pausar e retomar o carrossel automático ao passar o mouse
const carouselContainer = document.querySelector(".relative");
carouselContainer.addEventListener("mouseenter", stopAutoSlide);
carouselContainer.addEventListener("mouseleave", startAutoSlide);

// Inicia o carrossel automático ao carregar a página
startAutoSlide();

