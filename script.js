document.addEventListener("DOMContentLoaded", function() {

  // Botón saludo
  const boton = document.getElementById("boton-saludo");
  boton.addEventListener("click", function() {
    alert("¡Hola! Bienvenido a mi portafolio 👋");
  });

  // Navbar cambia al hacer scroll
  const navbar = document.querySelector("nav");
  window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "#e94560";
    } else {
      navbar.style.backgroundColor = "#16213e";
    }
  });

});