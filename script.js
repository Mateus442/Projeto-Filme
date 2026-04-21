const filmes = [
    { title: "Venom: Tempo de Carnificina", desc: "Eddie Brock e Venom enfrentam o serial killer Cletus Kasady, que se torna o terrível Carnificina.", poster: "https://br.web.img3.acsta.net/c_310_420/pictures/21/05/10/15/32/2425639.png", trailer: "https://www.youtube.com/watch?v=K1TloEu4EXA" },
    { title: "Homem de Ferro 3", desc: "Tony Stark enfrenta sua maior crise pessoal após o ataque de Nova York e um inimigo misterioso chamado Mandarin.", poster: "https://upload.wikimedia.org/wikipedia/pt/1/19/Iron_Man_3_poster.jpg", trailer: "https://www.youtube.com/watch?v=igfXmU1r_mc" },
    { title: "Até o Último Homem", desc: "A história real de Desmond Doss, um médico que salvou 75 homens na Segunda Guerra sem disparar um único tiro.", poster: "https://br.web.img3.acsta.net/pictures/16/11/21/15/29/457312.jpg", trailer: "https://www.youtube.com/watch?v=KHZG7NnjVxM" },
    { title: "Círculo de Fogo", desc: "Em um futuro próximo, gigantescas criaturas marinhas surgem e a humanidade cria robôs gigantes para combatê-las.", poster: "https://upload.wikimedia.org/wikipedia/pt/f/f3/Pacific_Rim_FilmPoster.jpeg", trailer: "https://www.youtube.com/watch?v=R7J3RJcxv58" }
];

let currentIndex = 0;
let interval;

const hero = document.getElementById('hero');
const heroTitle = document.getElementById('hero-title');
const heroDesc = document.getElementById('hero-desc');
const heroBtn = document.getElementById('hero-btn');
const dotsContainer = document.getElementById('hero-dots');
const cardsContainer = document.getElementById('cards-container');

function updateHero() {
    hero.style.backgroundImage = `url('${filmes[currentIndex].poster}')`;
    heroTitle.textContent = filmes[currentIndex].title;
    heroDesc.textContent = filmes[currentIndex].desc;
    heroBtn.onclick = () => window.open(filmes[currentIndex].trailer, '_blank');
}

function createDots() {
    dotsContainer.innerHTML = '';
    filmes.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.onclick = () => { currentIndex = i; updateHero(); updateDots(); resetInterval(); };
        dotsContainer.appendChild(dot);
    });
}

function updateDots() {
    Array.from(dotsContainer.children).forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % filmes.length;
    updateHero();
    updateDots();
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
}

function createCards() {
    cardsContainer.innerHTML = '';
    filmes.forEach((filme, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${filme.poster}" alt="${filme.title}">
            <div style="padding:18px 16px; text-align:center;">
                <h3 style="font-size:1.28rem; margin-bottom:6px;">${filme.title}</h3>
                <p style="font-size:0.95rem; color:#a3b8d9;">${filme.desc.substring(0, 85)}...</p>
            </div>
        `;
        card.onclick = () => flyCardToCenter(card, index);
        cardsContainer.appendChild(card);
    });
}

// Animação: Card voa para o centro → quando chega na metade, abre o modal
function flyCardToCenter(cardElement, index) {
    const rect = cardElement.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    // Prepara o card para voar
    cardElement.style.position = 'fixed';
    cardElement.style.top = rect.top + 'px';
    cardElement.style.left = rect.left + 'px';
    cardElement.style.width = rect.width + 'px';
    cardElement.style.height = rect.height + 'px';
    cardElement.style.zIndex = '1500';
    cardElement.style.transition = 'none';

    void cardElement.offsetWidth;

    // Inicia o voo para o centro
    cardElement.style.transition = 'all 0.9s cubic-bezier(0.25, 0.1, 0.25, 1)';
    cardElement.style.top = '50%';
    cardElement.style.left = '50%';
    cardElement.style.transform = 'translate(-50%, -50%) scale(1.8)';

    // Quando estiver na metade do caminho (aprox. 450ms), abre o modal
    setTimeout(() => {
        openModal(index);
    }, 450);

    // Depois de terminar a animação, remove o card voador
    setTimeout(() => {
        cardElement.style.transition = 'all 0.4s ease';
        cardElement.style.opacity = '0';
        setTimeout(() => {
            cardElement.remove();
        }, 400);
    }, 950);
}

function openModal(index) {
    const f = filmes[index];
    document.getElementById('modal-title').textContent = f.title;
    document.getElementById('modal-desc').textContent = f.desc;
    document.getElementById('modal-poster').src = f.poster;
    document.getElementById('trailer-btn-modal').onclick = () => window.open(f.trailer, '_blank');
    
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 80);
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        createCards(); // Recreate cards after modal closes
    }, 400);
}

// Inicializar
createDots();
createCards();
updateHero();
updateDots();
interval = setInterval(nextSlide, 5000);

document.addEventListener('keydown', e => { if (e.key === "Escape") closeModal(); });
document.getElementById('modal').addEventListener('click', e => {
    if (e.target.id === 'modal') closeModal();
});