document.addEventListener("DOMContentLoaded", () => {
    const sections = ["home", "about", "services", "portfolio", "contact"];
    sections.forEach((id) => {
      fetch(`sections/${id}.html`)
        .then((res) => res.text())
        .then((data) => {
          document.getElementById(id).innerHTML = data;
        });
    });
  });