class ModalWin {
  renderModalWin() {
    const element = document.createElement("div");
    element.classList.add("modal");
    element.id = "winModal";
    element.style.display = "none";
    element.innerHTML = `
            <!-- Modal de victoria -->
      <div class="modal-content">
        <h2>¡Ganaste!</h2>
        <button  id="restartButton" class="glowbutton">Volver A Jugar</button>
      </div>

          `;

    document.body.appendChild(element);
  }
}

const Instance = new ModalWin();
export const renderModalWin = Instance.renderModalWin.bind(Instance);
