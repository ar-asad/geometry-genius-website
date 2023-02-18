
randomColor = function (e) {
    e.style.background = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
}

const geometryCalculate = (width, height) => {
    const widthInput = document.getElementById(width);
    const widthInputValue = parseInt(widthInput.value);
    const InputValue = document.getElementById(height);
    const heihtInputValue = parseInt(InputValue.value);
    const areaTotal = (widthInputValue * heihtInputValue);
    return areaTotal;
};


document.getElementById('triangle-btn').addEventListener('click', () => {
    const areaTotal = geometryCalculate('triangle-width', 'triangle-height')
    const triangleAreaTotal = 0.5 * areaTotal;
    if (triangleAreaTotal) {
        document.getElementById('triangle-area').innerText = triangleAreaTotal;
        document.getElementById('triangle-card-cal').style.display = "block";
    }
});

document.getElementById('rectangle-btn').addEventListener('click', () => {
    const rectangleAreaTotal = geometryCalculate('rectangle-width', 'rectangle-height');
    if (rectangleAreaTotal) {
        document.getElementById('rectagle-area').innerText = rectangleAreaTotal;
        document.getElementById('rectangle-card-cal').style.display = "block"

    }
})