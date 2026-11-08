
/*
 * FLORES PARA KAORI
 * Control principal de la página
 */

// ========================================
// ELEMENTOS DEL DOM
// ========================================

const welcomeScreen = document.getElementById("welcome");
const gardenScreen = document.getElementById("garden");

const startButton = document.getElementById("start-button");
const morePhrasesButton = document.getElementById("more-phrases-button");

const phrasesList = document.getElementById("phrases-list");

// ========================================
// MOSTRAR FRASES
// ========================================

function renderPhrases(phrases) {

    // Crear un fragmento para insertar todas las frases juntas.
    const fragment = document.createDocumentFragment();

    phrases.forEach((phrase, index) => {

        const card = document.createElement("article");
        const text = document.createElement("p");

        card.classList.add("phrase-card");
        text.textContent = phrase;

        // Pequeño retraso para que aparezcan escalonadamente.
        card.style.animationDelay = `${index * 0.12}s`;

        card.appendChild(text);
        fragment.appendChild(card);
    });

    // Reemplazar únicamente las frases anteriores.
    phrasesList.replaceChildren(fragment);
}

// ========================================
// ABRIR EL JARDÍN
// ========================================

function openGarden() {

    welcomeScreen.classList.add("hidden");
    gardenScreen.classList.remove("hidden");

    const initialPhrases = PhraseManager.getInitialBatch();

    renderPhrases(initialPhrases);

    generateBouquet();

    // Mostrar el botón de música.
    musicButton.classList.remove("hidden");

    // Iniciar la música de fondo.
    playMusic();
}

// ========================================
// MOSTRAR MÁS FRASES
// ========================================

function showMorePhrases() {

    const nextPhrases = PhraseManager.getNextBatch();

    renderPhrases(nextPhrases);
}

// ========================================
// EVENTOS
// ========================================

startButton.addEventListener("click", openGarden);

morePhrasesButton.addEventListener("click", showMorePhrases);

