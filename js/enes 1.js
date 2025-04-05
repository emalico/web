document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        "sq": {
            "title": "Mirësevini në Restorantin Tonë",
            "description": "Shijoni ushqimin më të mirë në qytet!",
            "menu": "Menu",
            "contact": "Kontakt",
            "welcome": "Mirësevini te ne!",
            "about": "Rreth Nesh",
            "services": "Shërbimet"
        },
        "en": {
            "title": "Welcome to Our Restaurant",
            "description": "Enjoy the best food in town!",
            "menu": "Menu",
            "contact": "Contact",
            "welcome": "Welcome to us!",
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
