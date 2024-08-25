
document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        const options = box.querySelector(".options");
        const colorInput = box.querySelector("input[type='color']");
        const sizeInput = box.querySelector("input[type='range']");

        box.addEventListener("click", () => {
            if (options.style.display === "flex") {
                options.style.display = "none";
                box.style.width = "50%";
                box.style.height = "100px";
            } else {
                options.style.display = "flex";
                box.style.width = "80%";
                box.style.height = "200px";
            }
        });

        colorInput.addEventListener("input", () => {
            box.style.backgroundColor = colorInput.value;
        });

        sizeInput.addEventListener("input", () => {
            box.style.height = `${sizeInput.value}px`;
        });
    });
});
