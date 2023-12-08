const titulo = document.querySelector(".header_title h3");
const desconto = document.querySelector("#typed p");
typeWrite(titulo);
typeWrite(desconto);

function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 75 * i);
  });
}