const footer = document.getElementsByClassName("main-footer")[0];
footer.textContent = footer.textContent + new Date().getFullYear();

const stepsWrappers = document.getElementsByClassName("step-wrapper");
for (let step of stepsWrappers) {
    step.style.backgroundColor = `rgb(${randomIntFromInterval(
        130,
        200
    )}, ${randomIntFromInterval(20, 75)}, ${randomIntFromInterval(40, 130)})`;
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
