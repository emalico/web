document.addEventListener("DOMContentLoaded", function () {
    const translations = {
    function changeLanguage(lang) {
        document.querySelectorAll("[data-key]").forEach(element => {
            const key = element.getAttribute("data-key");
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    document.getElementById("languageSwitcher").addEventListener("change", function () {
        changeLanguage(this.value);
    });
    }