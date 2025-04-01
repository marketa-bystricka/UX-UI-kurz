// Získání tlačítka
let mybutton = document.getElementById("scrollToTopBtn");

// Funkce pro zobrazení/skrytí tlačítka
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block"; // Zobrazí tlačítko
  } else {
    mybutton.style.display = "none"; // Skryje tlačítko
  }
};

// Funkce pro hladký přesun na začátek stránky při kliknutí na tlačítko
mybutton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Hladký přechod nahoru
  });
};
