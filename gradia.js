import init, { run } from "./pkg/gradia_wasm.js";

init().then(() => {
  window.run = run;
  const stackElements = document.getElementsByClassName("gradia");

  for (let i = 0; i < stackElements.length; i++) {
    const stackElement = stackElements[i];
    const code = stackElement.innerText.trim();
    stackElement.innerHTML = run(code);
  }
});
