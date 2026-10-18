
/* ==========================================
   YOUR GRADUATION PARTY DETAILS
   Change the information in this section.
   ========================================== */

const party = {
    graduateName: "SYED ALEE HASSAN",

    degree: "A-LEVELS",

    date: "Sunday, 15 November 2026",

    time: "7:00 PM onwards",

    venue: "Al Haaj Akhtar Hall, Karachi",

    // Enter your brother's WhatsApp number.
    // Include country code, without + or spaces.
    // Example format: 923001234567
    whatsappNumber: "923333348440",

    // Paste your venue's Google Maps link here.
    // You can get it using Google Maps → Share → Copy link.
    mapsLink: "https://maps.app.goo.gl/N3sHXnrttNnftHCbA"
};


/* ==========================================
   CONNECT THE HTML ELEMENTS
   ========================================== */

const intro = document.getElementById("intro");
const openButton = document.getElementById("openButton");
const card = document.getElementById("card");
const rsvpButton = document.getElementById("rsvpButton");
const mapButton = document.getElementById("mapButton");


/* ==========================================
   INSERT THE GRADUATION DETAILS
   ========================================== */

document.getElementById("graduateName").textContent =
    party.graduateName;

document.querySelector(".degree").textContent =
    party.degree;

document.getElementById("partyDate").textContent =
    party.date;

document.getElementById("partyTime").textContent =
    party.time;

document.getElementById("partyVenue").textContent =
    party.venue;


/* ==========================================
   OPEN THE INVITATION
   ========================================== */

openButton.addEventListener("click", function () {

    // Prevent the invitation from opening twice.
    if (intro.classList.contains("opening")) {
        return;
    }

    intro.classList.add("opening");

    // Wait for the envelope animation.
    setTimeout(function () {

        intro.style.display = "none";

        card.classList.add("show");
        card.setAttribute("aria-hidden", "false");

        // Celebrate!
        createConfetti();

    }, 1100);

});


/* ==========================================
   CONFETTI ANIMATION
   ========================================== */

function createConfetti() {

    const colors = [
        "#d6b45d",
        "#f6e8c5",
        "#ffffff",
        "#b18c42"
    ];

    // Create 70 confetti pieces.
    for (let i = 0; i < 70; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti");

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        piece.style.animationDuration =
            2 + Math.random() * 2 + "s";

        document.body.appendChild(piece);

        // Remove confetti after animation.
        setTimeout(function () {
            piece.remove();
        }, 5000);

    }

}


/* ==========================================
   RSVP ON WHATSAPP
   ========================================== */

rsvpButton.addEventListener("click", function () {

    const message =
        `Hello! I would like to RSVP for ${party.graduateName}'s graduation party on ${party.date}.`;

    const whatsappURL =
        "https://wa.me/" +
        party.whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    // Open WhatsApp with the invitation message.
    window.open(whatsappURL, "_blank", "noopener");

});





/* ==========================================
   GOOGLE MAPS BUTTON
   ========================================== */

mapButton.addEventListener("click", function (event) {

    // Check whether a real Google Maps link was added.
    if (
        !party.mapsLink.startsWith("https://") ||
        party.mapsLink.includes("PASTE_")
    ) {
        event.preventDefault();

        alert("Please add your Google Maps venue link in script.js");

        return;
    }

    // Open Google Maps in a separate tab.
    event.preventDefault();

    window.open(
        party.mapsLink,
        "_blank",
        "noopener,noreferrer"
    );

});

