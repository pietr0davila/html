document.addEventListener("DOMContentLoaded", () => {
    const INPUT = document.querySelector("input#taskInput");
    const BUTTON = document.querySelector("input#btn");
    const TASK_DIV = document.querySelector("section#taskDiv")
    INPUT.focus()
    BUTTON.addEventListener("click", () => {
        let inputValue = INPUT.value;
        let newP = document.createElement("p")
        newP.textContent = inputValue
        TASK_DIV.appendChild(newP)

        INPUT.value = ""
        INPUT.focus()

  });
});
