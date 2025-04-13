class ModalPlay {
  renderModalPlay() {
    const element = document.createElement("div");
    element.classList.add("modal");
    element.id = "startModal";
    element.innerHTML = `
         <!-- Modal inicial para ingresar la palabra -->
      <div class="modal-content">
        <h2>Ingresa la palabra a adivinar, en el Juego del horcado</h2>
        <input type="text" id="wordInput" placeholder="Palabra" />
        <br />
        <button  id="startButton" class="glowbutton">Iniciar Horcado</button>

      </div>
        `;

    document.body.appendChild(element);
  }
}

const Instance = new ModalPlay();
export const renderModalPlay = Instance.renderModalPlay.bind(Instance);
