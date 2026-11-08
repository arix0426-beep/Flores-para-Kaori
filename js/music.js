
/*
 * FLORES PARA KAORI
 * Control de música de fondo
 */

const backgroundMusic = document.getElementById("background-music");
const musicButton = document.getElementById("music-button");

const TARGET_VOLUME = 0.35;
const FADE_DURATION = 2500;

let musicPlaying = false;
let fadeInterval = null;

function updateMusicButton() {
    musicButton.textContent = musicPlaying ? "♫" : "♪";

    musicButton.setAttribute(
        "aria-label",
        musicPlaying ? "Pausar música" : "Reproducir música"
    );

    musicButton.classList.toggle("playing", musicPlaying);
}

function fadeInMusic() {
    clearInterval(fadeInterval);

    backgroundMusic.volume = 0;

    const steps = 50;
    const volumeIncrement = TARGET_VOLUME / steps;
    const intervalTime = FADE_DURATION / steps;

    let currentStep = 0;

    fadeInterval = setInterval(() => {
        currentStep++;

        backgroundMusic.volume = Math.min(
            currentStep * volumeIncrement,
            TARGET_VOLUME
        );

        if (currentStep >= steps) {
            clearInterval(fadeInterval);
            fadeInterval = null;
        }
    }, intervalTime);
}

async function playMusic() {
    try {
        await backgroundMusic.play();

        musicPlaying = true;
        updateMusicButton();

        fadeInMusic();
    } catch (error) {
        console.error("No se pudo reproducir la música:", error);
        musicPlaying = false;
        updateMusicButton();
    }
}

function pauseMusic() {
    clearInterval(fadeInterval);
    fadeInterval = null;

    backgroundMusic.pause();

    musicPlaying = false;
    updateMusicButton();
}

function toggleMusic() {
    if (musicPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

musicButton.addEventListener("click", toggleMusic);

backgroundMusic.loop = true;
backgroundMusic.volume = TARGET_VOLUME;

updateMusicButton();

