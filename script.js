// Global variables
let currentTestimonial = 0;
let currentUniversity = 0;
let isVisible = false;

// Data
const countries = [
  { name: "FRANCE", flag: "fr", code: "FR" },
  { name: "TURQUIE", flag: "tr", code: "TR" },
  { name: "ESPAGNE", flag: "es", code: "ES" },
  { name: "TUNISIE", flag: "tn", code: "TN" },
  { name: "EAU (DUBAI)", flag: "ae", code: "AE" },
  { name: "CHYPRE", flag: "cy", code: "CY" },
  { name: "CANADA", flag: "ca", code: "CA" },
  { name: "HONGRIE", flag: "hu", code: "HU" },
  { name: "MAROC", flag: "ma", code: "MA" },
  { name: "BELGIQUE", flag: "be", code: "BE" },
  { name: "USA", flag: "us", code: "US" },
  { name: "ALLEMAGNE", flag: "de", code: "DE" },
];

const services = [
  {
    title: "Inscription & suivis de dossier",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
        </svg>`,
    description: "Accompagnement complet pour vos inscriptions",
  },
  {
    title: "CV et lettre de motivation",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>`,
    description: "Optimisation de votre profil professionnel",
  },
  {
    title: "Assistances logement et visa",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>`,
    description: "Support pour vos démarches administratives",
  },
  {
    title: "Accueil et assistance titre de séjour",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01.99l-2.54 3.38c-.36.48-.85.63-1.37.63s-1.01-.15-1.37-.63L7.17 8.99A2.5 2.5 0 0 0 5.16 8H3.64a1.5 1.5 0 0 0-1.42.37L0 16h2.5v6h2v-6H6v6h2v-6h1.5v6h2v-6H13v6h2v-6h1.5v6h2z"/>
        </svg>`,
    description: "Aide dans vos démarches de régularisation",
  },
  {
    title: "Aide à la recherche de job étudiant",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>`,
    description: "Accompagnement dans votre recherche d'emploi",
  },
];

const testimonials = [
  {
    name: "Marie Dubois",
    text: "Excellent service, ils m'ont aidé à réaliser mon rêve d'étudier en France!",
    country: "France",
    rating: 5,
  },
  {
    name: "Ahmed Hassan",
    text: "Processus très professionnel, je recommande vivement PTS.",
    country: "Canada",
    rating: 5,
  },
  {
    name: "Sophie Martin",
    text: "Grâce à PTS, j'ai pu obtenir ma bourse d'études au Canada.",
    country: "Canada",
    rating: 5,
  },
];

const universities = [
  "Université de Paris",
  "McGill University",
  "Universidad de Barcelona",
  "Université de Tunis",
  "American University of Dubai",
  "University of Cyprus",
];

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeWebsite();
});

function initializeWebsite() {
  // Set visibility flag
  setTimeout(() => {
    isVisible = true;
    document.body.classList.add("loaded");
  }, 100);

  // Initialize components
  initializeMarquee();
  initializeServices();
  initializeTestimonials();
  initializeUniversities();
  initializeScrollAnimations();
  initializeSmoothScrolling();
}

// Marquee functionality
function initializeMarquee() {
  const marqueeLeft = document.getElementById("marquee-left");
  const marqueeRight = document.getElementById("marquee-right");

  // Create country cards for left marquee
  const leftCountries = [...countries, ...countries];
  leftCountries.forEach((country, index) => {
    const countryCard = createCountryCard(country, "left", index);
    marqueeLeft.appendChild(countryCard);
  });

  // Create country cards for right marquee (reversed)
  const rightCountries = [
    ...countries.slice().reverse(),
    ...countries.slice().reverse(),
  ];
  rightCountries.forEach((country, index) => {
    const countryCard = createCountryCard(country, "right", index);
    marqueeRight.appendChild(countryCard);
  });
}

function createCountryCard(country, direction, index) {
  const card = document.createElement("div");
  card.className = "country-card";

  const isLeft = direction === "left";
  const dotColors = isLeft
    ? ["background: #3b82f6;", "background: #10b981;", "background: #3b82f6;"]
    : [
        "background: linear-gradient(to top, #3b82f6, #10b981);",
        "background: linear-gradient(to top, #10b981, #3b82f6);",
        "background: linear-gradient(to top, #3b82f6, #10b981);",
      ];

  const statusContent = isLeft
    ? `<div class="status-dot"></div>Disponible`
    : `<svg style="width: 0.75rem; height: 0.75rem; margin-right: 0.25rem;" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
        </svg>Universités partenaires`;

  card.innerHTML = `
        <div class="country-card-inner">
            <div class="country-flag"><span class="fi fi-${country.flag}"></span></div>
            <h3 class="country-name">${country.name}</h3>
            <div class="country-dots">
                ${
                  isLeft
                    ? dotColors
                        .map(
                          (color) =>
                            `<div class="country-dot" style="${color}"></div>`
                        )
                        .join("")
                    : `<div style="width: 0.25rem; height: 1rem; background: linear-gradient(to top, #3b82f6, #10b981); border-radius: 9999px; opacity: 0.6;"></div>
                     <div style="width: 0.25rem; height: 1.5rem; background: linear-gradient(to top, #10b981, #3b82f6); border-radius: 9999px; opacity: 0.6;"></div>
                     <div style="width: 0.25rem; height: 1rem; background: linear-gradient(to top, #3b82f6, #10b981); border-radius: 9999px; opacity: 0.6;"></div>`
                }
            </div>
            <div class="country-status">
                ${statusContent}
            </div>
        </div>
    `;

  return card;
}

// Services functionality
function initializeServices() {
  const servicesGrid = document.getElementById("services-grid");

  services.forEach((service, index) => {
    const serviceCard = document.createElement("div");
    serviceCard.className = "service-card animate-on-scroll";
    serviceCard.style.animationDelay = `${index * 150}ms`;

    serviceCard.innerHTML = `
            <div class="service-card-inner">
                <div class="service-icon">
                    ${service.icon}
                </div>
                <h3 class="service-title">${service.title}</h3>
                <p class="service-description">${service.description}</p>
            </div>
        `;

    servicesGrid.appendChild(serviceCard);
  });
}

// Testimonials functionality
function initializeTestimonials() {
  const testimonialCard = document.getElementById("testimonial-card");
  const prevBtn = document.getElementById("testimonial-prev");
  const nextBtn = document.getElementById("testimonial-next");

  function updateTestimonial() {
    const testimonial = testimonials[currentTestimonial];

    testimonialCard.innerHTML = `
            <div class="testimonial-stars">
                ${Array(testimonial.rating)
                  .fill()
                  .map(
                    () => `
                    <svg class="star" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                `
                  )
                  .join("")}
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div>
                <p class="testimonial-author">${testimonial.name}</p>
                <p class="testimonial-country">Étudiant en ${
                  testimonial.country
                }</p>
            </div>
        `;

    prevBtn.disabled = currentTestimonial === 0;
    nextBtn.disabled = currentTestimonial === testimonials.length - 1;
  }

  prevBtn.addEventListener("click", () => {
    if (currentTestimonial > 0) {
      currentTestimonial--;
      updateTestimonial();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentTestimonial < testimonials.length - 1) {
      currentTestimonial++;
      updateTestimonial();
    }
  });

  updateTestimonial();
}

// Universities functionality
function initializeUniversities() {
  const universityCard = document.getElementById("university-card");
  const prevBtn = document.getElementById("university-prev");
  const nextBtn = document.getElementById("university-next");

  function updateUniversity() {
    const university = universities[currentUniversity];

    universityCard.innerHTML = `
            <div class="university-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                </svg>
            </div>
            <h3 class="university-name">${university}</h3>
            <p class="university-type">Université partenaire</p>
        `;

    prevBtn.disabled = currentUniversity === 0;
    nextBtn.disabled = currentUniversity === universities.length - 1;
  }

  prevBtn.addEventListener("click", () => {
    if (currentUniversity > 0) {
      currentUniversity--;
      updateUniversity();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentUniversity < universities.length - 1) {
      currentUniversity++;
      updateUniversity();
    }
  });

  updateUniversity();
}

// Scroll animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe all elements with animate-on-scroll class
  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// Add scroll event listener for header background
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.95)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.8)";
  }
});

// Add click handlers for CTA buttons
document.addEventListener("click", (e) => {
  if (e.target.matches(".cta-button, .cta-button-secondary, .contact-btn")) {
    // Add your contact form logic here
    alert("Merci pour votre intérêt ! Nous vous contacterons bientôt.");
  }
});
