class StickMan {
  renderStickMan() {
    const element = document.createElement("div");
    element.classList.add("hangman-container");
    element.innerHTML = `
      <div id="gallows" class="hangman-part"></div>
      <div id="vertical-beam" class="hangman-part"></div>
      <div id="horizontal-beam" class="hangman-part"></div>
      <div id="rope" class="hangman-part"></div>
      <div id="head" class="hangman-part"></div>
      <div id="body" class="hangman-part"></div>
      <div id="left-arm" class="hangman-part"></div>
      <div id="right-arm" class="hangman-part"></div>
      <div id="left-leg" class="hangman-part"></div>
      <div id="right-leg" class="hangman-part"></div>
      `;

    document.body.appendChild(element);
  }
}

const Instance = new StickMan();
export const renderStickMan = Instance.renderStickMan.bind(Instance);
