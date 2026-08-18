/* =========================
   PASSWORD
========================= */

function checkPassword() {

    const password =
        document.getElementById("passwordInput").value;

    if (password === "1906") {

        document.getElementById("passwordScreen")
            .style.display = "none";

        document.getElementById("websiteContent")
            .style.display = "block";

        // Play music after unlocking
        const music =
            document.getElementById("music");

        music.play().catch(() => {
            console.log("Music requires user interaction.");
        });

    } else {

        alert("Wrong Password 🖤");

    }

}


/* =========================
   OPEN GIFT
========================= */

function openGift() {

    const music =
        document.getElementById("music");

    music.play().catch(() => {
        console.log("Music requires user interaction.");
    });

    document.getElementById("giftSection")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.innerHTML = "🖤";

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.top = "-30px";

    heart.style.fontSize =
        (Math.random() * 15 + 12) + "px";

    heart.style.opacity =
        Math.random() * 0.6 + 0.3;

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "5";

    heart.style.animation =
        `fall ${Math.random() * 5 + 6}s linear`;

    document.getElementById("hearts")
        .appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 12000);

}

setInterval(createHeart, 500);


/* =========================
   HEART ANIMATION
========================= */

const style =
    document.createElement("style");

style.innerHTML = `

@keyframes fall {

    0% {

        transform:
        translateY(0)
        rotate(0deg);

        opacity: 0;

    }

    10% {

        opacity: 1;

    }

    100% {

        transform:
        translateY(110vh)
        rotate(360deg);

        opacity: 0;

    }

}

.fade-in {

    opacity: 0;

    transform:
    translateY(40px);

    transition:
    all 1s ease;

}

.fade-in.show {

    opacity: 1;

    transform:
    translateY(0);

}

`;

document.head.appendChild(style);


/* =========================
   SCROLL ANIMATION
========================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


document.querySelectorAll(
    ".section, .polaroid, .reason-card, .final-section, .ending"
).forEach(element => {

    element.classList.add("fade-in");

    observer.observe(element);

});


/* =========================
   POLAROID EFFECT
========================= */

const polaroids =
    document.querySelectorAll(".polaroid");

polaroids.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "scale(1.08) rotate(0deg)";

            card.style.zIndex = "20";

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

            card.style.zIndex = "";

        }
    );

});


/* =========================
   PARALLAX HERO
========================= */

window.addEventListener(
    "scroll",
    () => {

        const hero =
            document.querySelector(".hero");

        if (!hero) return;

        const scroll =
            window.pageYOffset;

        hero.style.backgroundPositionY =
            scroll * 0.4 + "px";

    }
);


/* =========================
   MENSIVE QUOTES
========================= */

const quotes = [

    "Two months with you feels like a beautiful beginning. 🖤",

    "I would still choose you, over and over again.",

    "Thank you for choosing to stay with me. 🤍",

    "You are my favorite part of these two months.",

    "From chasing you to finally having you. 🖤",

    "I hope there will be countless more months with you.",

    "You and me, that's still my favorite story.",

    "Happy 2nd Mensive, my beloved. 🖤"

];


const quoteElement =
    document.createElement("div");

quoteElement.className =
    "floating-quote";

quoteElement.innerText =
    quotes[0];

document.body.appendChild(
    quoteElement
);


let currentQuote = 0;


setInterval(() => {

    currentQuote++;

    if (currentQuote >= quotes.length) {

        currentQuote = 0;

    }

    quoteElement.style.opacity = "0";

    setTimeout(() => {

        quoteElement.innerText =
            quotes[currentQuote];

        quoteElement.style.opacity = "1";

    }, 500);

}, 5000);


/* =========================
   QUOTE STYLE
========================= */

const quoteStyle =
    document.createElement("style");

quoteStyle.innerHTML = `

.floating-quote {

    position: fixed;

    bottom: 20px;

    left: 50%;

    transform:
    translateX(-50%);

    background:
    rgba(255,255,255,0.08);

    border:
    1px solid rgba(255,255,255,0.15);

    backdrop-filter:
    blur(12px);

    -webkit-backdrop-filter:
    blur(12px);

    padding:
    12px 20px;

    border-radius:
    50px;

    font-size:
    13px;

    color:
    #ffffff;

    text-align:
    center;

    z-index:
    999;

    transition:
    opacity .5s ease;

    white-space:
    nowrap;

    box-shadow:
    0 5px 25px rgba(0,0,0,.3);

}

@media (max-width: 600px) {

    .floating-quote {

        font-size:
        11px;

        padding:
        10px 16px;

        max-width:
        85vw;

        white-space:
        normal;

    }

}

`;

document.head.appendChild(
    quoteStyle
);


/* =========================
   MUSIC VOLUME
========================= */

const music =
    document.getElementById("music");

if (music) {

    music.volume = 0.45;

}


/* =========================
   ENTER KEY PASSWORD
========================= */

const passwordInput =
    document.getElementById("passwordInput");

if (passwordInput) {

    passwordInput.addEventListener(
        "keypress",
        function(event) {

            if (event.key === "Enter") {

                checkPassword();

            }

        }
    );

}


/* =========================
   PREVENT HEARTS WHEN
   PASSWORD SCREEN IS OPEN
========================= */

const passwordScreen =
    document.getElementById("passwordScreen");

const heartContainer =
    document.getElementById("hearts");

setInterval(() => {

    if (
        passwordScreen &&
        passwordScreen.style.display !== "none"
    ) {

        heartContainer.style.display =
            "none";

    } else {

        heartContainer.style.display =
            "block";

    }

}, 300);
