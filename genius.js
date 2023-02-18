


randomColor = function (e) {
    e.style.background = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
    console.log(e.style.background)
}

const geometryCalculate = (width, height) => {

    const widthInput = document.getElementById(width);
    const widthInputValue = Number(widthInput.value);
    const heightInput = document.getElementById(height);
    const heightInputValue = Number(heightInput.value);

    if (!widthInput.value || !heightInput.value) {
        alert('Please insert all values')
        return;
    }
    if (widthInputValue < 0 || heightInputValue < 0) {
        alert('please give a positive value')
        return;
    }
    if (!widthInputValue || !heightInputValue) {
        alert('Please insert a Number')
        return;
    }
    const areaTotal = (widthInputValue * heightInputValue).toFixed(2);
    return areaTotal;
};

// Common function for create Html....
const createHtml = (name, value) => {
    return `  <li>
  <div class="flex justify-between card-total-show mb-4">
      <p>${name} <span id="rectagle-area">${value} </span> cm<sup>2</sup></p>
      <button class=" text-white p-1  rounded-lg bg-blue-500 ">Convt to
          m<sup>2</sup></button>
  </div>
</li>`
}


document.getElementById('triangle-btn').addEventListener('click', () => {
    const triangle = geometryCalculate('triangle-width', 'triangle-height')
    const triangleAreaTotal = (0.5 * triangle).toFixed(2);
    if (!isNaN(triangleAreaTotal)) {
        document.getElementById('click-serial').insertAdjacentHTML("beforeend", createHtml("Triangle", triangleAreaTotal))
    }
    else {
        return;
    }
});

document.getElementById('rectangle-btn').addEventListener('click', () => {
    const rectangleAreaTotal = geometryCalculate('rectangle-width', 'rectangle-height');
    if (rectangleAreaTotal) {

        document.getElementById('click-serial').insertAdjacentHTML("beforeend", createHtml("Rectangle", rectangleAreaTotal))

    }
});

document.getElementById('parallelogram-btn').addEventListener('click', () => {
    const parallelogramTotal = geometryCalculate('parallelogram-width', 'parallelogram-height');
    if (parallelogramTotal) {

        document.getElementById('click-serial').insertAdjacentHTML("beforeend", createHtml('Parlogram', parallelogramTotal))

    }
})
document.getElementById('rhombus-btn').addEventListener('click', () => {
    const rhombus = geometryCalculate('rhombus-width', 'rhombus-height');
    const rhombusTotal = (0.5 * rhombus).toFixed(2);

    if (!isNaN(rhombusTotal)) {

        document.getElementById('click-serial').insertAdjacentHTML("beforeend", createHtml('Rhombus', rhombusTotal))

    }
})
document.getElementById('Pentagon-btn').addEventListener('click', () => {
    const pentagon = geometryCalculate('pentagon-width', 'pentagon-height');
    const pentagonTotal = (0.5 * pentagon).toFixed(2);
    if (!isNaN(pentagonTotal)) {

        document.getElementById('click-serial').insertAdjacentHTML("beforeend", createHtml('Pentagon', pentagonTotal))

    }
})
document.getElementById('ellipse-btn').addEventListener('click', () => {
    const ellipse = geometryCalculate('ellipse-width', 'ellipse-height');
    const ellipseTotal = (3.14 * ellipse).toFixed(2);
    if (!isNaN(ellipseTotal)) {


        document.getElementById('click-serial').insertAdjacentHTML("beforeend", createHtml('EllipseTotal', ellipseTotal))

    }
})

