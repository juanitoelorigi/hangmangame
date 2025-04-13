let palabra = "";
let letrasAcertadas = new Set();
let errores = 0;
const partesHorca = [
  "rope",
  "head",
  "body",
  "left-arm",
  "right-arm",
  "left-leg",
  "right-leg",
];

// Inicializa la visualización de la palabra y resetea variables
function inicializarJuego() {
  const display = document.getElementById("word-display");
  display.innerHTML = palabra
    .split("")
    .map(
      () => `<input type="text" class="letter-input" maxlength="1" disabled>`
    )
    .join("");
  letrasAcertadas = new Set();
  errores = 0;
  // Oculta las partes del ahorcado (se muestran a medida que se cometen errores)
  partesHorca.forEach((part) => {
    document.getElementById(part).style.display = "none";
  });
  document.getElementById("guessInput").value = "";
  document.getElementById("guessInput").focus();
}

function actualizarPantalla() {
  const inputs = document.querySelectorAll("#word-display .letter-input");
  palabra.split("").forEach((letra, i) => {
    if (letrasAcertadas.has(letra.toUpperCase())) {
      inputs[i].value = letra.toUpperCase();
      inputs[i].classList.add("correct");
    }
  });
}

function verificarVictoria() {
  // Compara la cantidad de letras acertadas con las únicas de la palabra
  return (
    Array.from(letrasAcertadas).length ===
    new Set(palabra.toUpperCase().split("")).size
  );
}

function manejarInput(e) {
  const input = e.target;
  const letra = input.value.toUpperCase();

  if (!/^[A-ZÑ]$/.test(letra)) {
    input.value = "";
    return;
  }

  if (palabra.toUpperCase().includes(letra)) {
    letrasAcertadas.add(letra);
    actualizarPantalla();
    input.value = "";

    if (verificarVictoria()) {
      setTimeout(() => showWinModal(), 100);
    }
  } else {
    input.classList.add("incorrect");
    setTimeout(() => {
      input.classList.remove("incorrect");
      input.value = "";
    }, 1000);

    document.getElementById(partesHorca[errores]).style.display = "block";
    errores++;

    if (errores === partesHorca.length) {
      setTimeout(() => showLoseModal(), 100);
    }
  }
}

// Muestra el modal de victoria
function showWinModal() {
  document.getElementById("winModal").style.display = "flex";
}

// Muestra el modal de derrota y actualiza el mensaje con la palabra oculta
function showLoseModal() {
  document.getElementById("loseModal").style.display = "flex";
  document.getElementById("loseMessage").textContent =
    "La palabra era: " + palabra.toUpperCase();
}

// Reinicia el juego mostrando nuevamente el modal para ingresar la palabra
function restartGame() {
  document.getElementById("winModal").style.display = "none";
  document.getElementById("loseModal").style.display = "none";
  document.getElementById("startModal").style.display = "flex";
  document.getElementById("wordInput").value = "";
}

// Eventos de los botones de los modales
document.getElementById("startButton").addEventListener("click", () => {
  const inputWord = document.getElementById("wordInput").value.trim();
  if (inputWord === "") return;
  palabra = inputWord.toUpperCase();
  document.getElementById("startModal").style.display = "none";
  inicializarJuego();
});

document.getElementById("restartButton").addEventListener("click", restartGame);
document
  .getElementById("restartButtonLose")
  .addEventListener("click", restartGame);

// Evento para el input de letras
document.getElementById("guessInput").addEventListener("input", manejarInput);
