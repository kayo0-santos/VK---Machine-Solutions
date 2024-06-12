const botao = document.querySelector(".btn-produtos");
const elementoPlataformas = document.querySelector(".btn-produtos .produtos");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});