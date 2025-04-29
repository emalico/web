document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const emailInput = document.querySelectorAll("input")[0];
  const passwordInput = document.querySelectorAll("input")[1];

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert("Ju lutem plotsoni të gjitha fushat.");
      return;
    }

    const isEmail = email.includes("@");
    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

    if (isEmail && !emailRegex.test(email)) {
      alert("Email-i nuk eshte në format të sakt.");
      return;
    }

    alert("Hyrja u krye me sukses!");
    form.reset();
  });
});
