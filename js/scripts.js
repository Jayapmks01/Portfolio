/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('show');
        }, index * 200); // delay biar muncul satu-satu (smooth)
    });
});

const text = "Helping brands grow through impactful visual & social media design.";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 40);
    }
}

typingEffect(); 

document.querySelectorAll(".bg-light.rounded-4").forEach(card => {
    const bar = card.querySelector(".progress-bar");
    const width = bar.dataset.width;

    card.addEventListener("mouseenter", () => {
        bar.style.setProperty("width", width, "important");
    });

    card.addEventListener("mouseleave", () => {
        bar.style.setProperty("width", "0%", "important");
    });
});

window.addEventListener("scroll", function () {
    const btn = document.getElementById("scrollTopBtn");
    if (!btn) return;

    btn.style.display = window.scrollY > 100 ? "block" : "none";
});

document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("scrollTopBtn");
    if (!btn) return;

    btn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("darkModeToggle");

    // load dari localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    if (toggle) {
        toggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            // simpan state
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
            } else {
                localStorage.setItem("darkMode", "disabled");
            }
        });
    }
});
