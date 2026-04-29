document.getElementById("ano").textContent = new Date().getFullYear();

function scrollToSurpresa() {
  document.getElementById("surpresa").scrollIntoView({ behavior: "smooth" });
}

function mostrarSurpresa() {
  document.getElementById("mensagem-surpresa").textContent =
    "🎉 Você é incrível, Tatiane! Que sua vida seja cheia de felicidade! 💖✨";
}