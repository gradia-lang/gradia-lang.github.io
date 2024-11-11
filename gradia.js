import init, { run_gradia, Gradia } from "./pkg/gradia_wasm.js";

init().then(() => {
    window.run_gradia = run_gradia;
    window.Gradia = Gradia;

    const gradiaElements = document.getElementsByClassName("gradia");
    for (let i = 0; i < gradiaElements.length; i++) {
        const gradiaElement = gradiaElements[i];
        const code = gradiaElement.innerText.trim();
        gradiaElement.innerHTML = run_gradia(code);
    }
});
