document.addEventListener("DOMContentLoaded", function() {

  // Variables
  const nombre = "Dylan";

  // Función
  function saludar(nombre) {
    return "¡Hola " + nombre + ", bienvenido a mi portafolio!";
  }

  // Botón
  const boton = document.getElementById("boton-saludo");
  const hero = document.querySelector(".hero");

  boton.addEventListener("click", function() {
    // Crea un párrafo nuevo
    let parrafo = document.createElement("p");
    parrafo.textContent = saludar(nombre);
    parrafo.style.color = "#e94560";
    parrafo.style.marginTop = "1rem";
    parrafo.style.fontSize = "1.2rem";
    hero.appendChild(parrafo);
  });

  // Navbar scroll
  const navbar = document.querySelector("nav");
  window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "#e94560";
    } else {
      navbar.style.backgroundColor = "#16213e";
    }
  });

});