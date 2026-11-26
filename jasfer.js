
const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

if (menu && navLinks) {
    menu.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        const icon = menu.querySelector("i");

        if (icon) {
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-xmark");
        }
    });

    // Close menu after clicking a link
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");

            const icon = menu.querySelector("i");

            if (icon) {
                icon.classList.add("fa-bars");
                icon.classList.remove("fa-xmark");
            }
        });
    });
}



const typingElement = document.querySelector(".typing");

const professions = [
    "IT Student",
    "Aspiring front-end Developer",
];

let professionIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
    if (!typingElement) return;

    const currentText = professions[professionIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingElement.textContent =
        currentText.substring(0, characterIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && characterIndex === currentText.length) {
        speed = 1500;
        deleting = true;
    } else if (deleting && characterIndex === 0) {
        deleting = false;

        professionIndex++;

        if (professionIndex >= professions.length) {
            professionIndex = 0;
        }

        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        alert(
            "Thank you, " + name +
            "! Your message has been entered."
        );

        contactForm.reset();
    });
}
