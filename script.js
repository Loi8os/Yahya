document.addEventListener("DOMContentLoaded", function () {
    const giftBox = document.getElementById("giftBox");
    const boxLid = document.getElementById("boxLid");
    const ribbon = document.getElementById("ribbon");
    const card = document.getElementById("card");
    let isOpened = false;

    giftBox.addEventListener("click", function () {
        if (!isOpened) {
            ribbon.style.transform = "scale(1.5)";
            setTimeout(() => {
                ribbon.style.opacity = "0";
                boxLid.style.transform = "translateY(-60px)";
                card.classList.add("show");
                createEffects();
            }, 500);
            isOpened = true;
        }
    });

    card.addEventListener("click", function () {
        card.classList.toggle("flipped");
    });

    function createEffects() {
        for (let i = 0; i < 15; i++) {
            createFloatingElement("💖"); // قلوب
        }

        for (let i = 0; i < 7; i++) {
            createFloatingElement("🎈"); // بالونات
        }
    }

    function createFloatingElement(emoji) {
        let element = document.createElement("div");
        element.className = "effect";
        element.innerHTML = emoji;
        document.body.appendChild(element);

        setRandomPosition(element);

        setTimeout(() => element.remove(), 5000);
    }

    function setRandomPosition(element) {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const randomX = Math.random() * screenWidth;
        const randomY = Math.random() * screenHeight;
        element.style.left = `${randomX}px`;
        element.style.top = `${randomY}px`;
    }
});
