document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".slider img"); 
    let currentIndex = 0; //fillon me imazhin e pare
    const intervalTime = 3000; 

    function changeImage() {//therret funksionin 
        images.forEach((img, index) => {
            img.classList.remove("active"); //active-vetem imazhit aktual
        });
        images[currentIndex].classList.add("active"); 
        currentIndex = (currentIndex + 1) % images.length; 
    }

    changeImage(); //perserit funksionin çdo 3 sekonda.
    setInterval(changeImage, intervalTime); 
});

function updateClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");

    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        "sq": {
            "title": "Mirësevini në Restorantin Tonë",
            "description": "Përjetoni shijen e përsosmërisë",
            "menu": "Menu",
            "contact": "Kontakt",
            "home": "Home!",
            "about": "Rreth Nesh",
            "services": "Shërbimet"
        },
        "en": {
            "title": "Welcome to Our Restaurant",
            "description": "Taste of perfection.",
            "menu": "Menu",
            "contact": "Contact",
            "home": "Home",
            "about": "About Us",
            "services": "Services"
        }
    };

    function changeLanguage(lang) {
        document.querySelectorAll("[data-key]").forEach(element => {
            const key = element.getAttribute("data-key");
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

       
        document.title = translations[lang]["title"];

       
        localStorage.setItem("selectedLanguage", lang);
    }

   
    const savedLanguage = localStorage.getItem("selectedLanguage") || "sq";
    document.getElementById("languageSwitcher").value = savedLanguage;
    changeLanguage(savedLanguage);

 
    document.getElementById("languageSwitcher").addEventListener("change", function () {
        changeLanguage(this.value);
    });
});


