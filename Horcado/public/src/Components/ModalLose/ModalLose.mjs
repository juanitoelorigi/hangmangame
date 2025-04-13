class ModalLose {
  renderModalLose() {
    const element = document.createElement("div");
    element.classList.add("modal");
    element.id = "loseModal";
    element.style.display = "none";
    element.innerHTML = `
          <!-- Modal de derrota -->
      <div class="modal-content">
        <h2 style="color: red">¡Perdiste!</h2>
        <p id="loseMessage"></p>
        
        <button  id="restartButtonLose" class="glowbutton">Reiniciar Juego</button>
      </div>

          `;

    document.body.appendChild(element);
  }
}

const Instance = new ModalLose();
export const renderModalLose = Instance.renderModalLose.bind(Instance);
