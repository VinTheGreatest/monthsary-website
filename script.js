
/* ===== CREATE THE STARRY SKY ===== */
const starsContainer = document.getElementById("stars");

for (let i = 0; i < 100; i++) {
    const star = document.createElement("span");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    star.style.animationDuration = (2 + Math.random() * 3) + "s";

    // Some stars will be a little bigger.
    const size = 1 + Math.random() * 2.5;
    star.style.width = size + "px";
    star.style.height = size + "px";

    starsContainer.appendChild(star);
}

/* ===== SECRET SURPRISE BUTTON ===== */
const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");

surpriseBtn.addEventListener("click", function () {
    const isHidden = surpriseMessage.hidden;

    surpriseMessage.hidden = !isHidden;

    if (isHidden) {
        surpriseBtn.textContent = "Aww, I love you! 💜";
        surpriseMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    } else {
        surpriseBtn.textContent = "Tap for a surprise 💜";
    }
});

/* ===== BACKGROUND MUSIC PLAYER ===== */
const loveSong = document.getElementById("loveSong");
const musicBtn = document.getElementById("musicBtn");
const musicStatus = document.getElementById("musicStatus");

musicBtn.addEventListener("click", async function () {
    if (loveSong.paused) {
        try {
            await loveSong.play();

            musicBtn.textContent = "❚❚ Pause";
            musicStatus.textContent = "Playing our little love song ♡";
        } catch (error) {
            musicStatus.textContent =
                "Couldn't play the song. Check music/oursong.mp3";
            musicBtn.textContent = "▶ Try again";
            console.error("Music playback failed:", error);
        }
    } else {
        loveSong.pause();
        musicBtn.textContent = "▶ Play";
        musicStatus.textContent = "Paused for now. Press play anytime ♡";
    }
});

/* ===== UPDATE MUSIC STATUS IF PLAYBACK ENDS ===== */
loveSong.addEventListener("error", function () {
    musicStatus.textContent =
        "Add your song to the music folder to play it ♡";
});

loveSong.addEventListener("ended", function () {
    musicBtn.textContent = "▶ Play";
    musicStatus.textContent = "Song finished ♡";
});
