// main.js

document.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio('src/assets/audio/background-music.mp3');
    const playPauseButton = document.getElementById('play-pause-button');
    let isPlaying = false;

    // Play or pause the background music
    playPauseButton.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playPauseButton.textContent = 'Play Music';
        } else {
            audio.play();
            playPauseButton.textContent = 'Pause Music';
        }
        isPlaying = !isPlaying;
    });

    // Set the birthday message from config
    const birthdayMessageElement = document.getElementById('birthday-message');
    birthdayMessageElement.textContent = birthdayMessage; // Assuming birthdayMessage is defined in config.js

    // Smooth animations can be initialized here
    // Example: using GSAP or AOS for animations
});