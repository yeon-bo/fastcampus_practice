export class Keyboard {
  #swichEl;
  #fontSelectEl;
  #containerEl;
  #keyboardEl;

  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#containerEl = document.getElementById("container");
    this.#swichEl = this.#containerEl.querySelector("#switch");
    this.#fontSelectEl = this.#containerEl.querySelector("#font");
    this.#keyboardEl = this.#containerEl.querySelector("#keyboard");
  }

  #addEvent() {
    this.#swichEl.addEventListener("change", this.#onChangeTheme);
    this.#fontSelectEl.addEventListener("change", this.#onChangeFont);
    document.addEventListener("keydown", (event) => {
      if (this.#keyboardEl.querySelector(`[data-code=${event.code}]`)) {
        this.#keyboardEl.querySelector(`[data-code=${event.code}]`).classList.add("active");
      }
    });
    document.addEventListener("keyup", (event) => {
      if (this.#keyboardEl.querySelector(`[data-code=${event.code}]`)) {
        this.#keyboardEl.querySelector(`[data-code=${event.code}]`).classList.remove("active");
        });
        }
  }

  #onChangeTheme(event) {
    document.documentElement.setAttribute(
      "theme",
      event.target.checked ? "dark-mode" : ""
    );
  }

  #onChangeFont(event) {
    document.body.style.fontFamily = event.target.value;
  }
}
