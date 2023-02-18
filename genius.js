


randomColor = function (e) {
    e.style.background = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
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
    console.log(widthInputValue, heightInputValue)
    const areaTotal = (widthInputValue * heightInputValue);
    return areaTotal;
};

// Common function for create Html....
const createHtml = (name, value) => {
    return `  <li>
  <div class="flex justify-between card-total-show mb-4">
      <p>${name} <span id="rectagle-area">${value} </span> cm<sup>2</sup></p>
      <button class=" text-white p-1  rounded-lg bg-blue-500 ">Convert to
          m<sup>2</sup></button>
  </div>
</li>`
}


document.getElementById('triangle-btn').addEventListener('click', () => {
    const areaTotal = geometryCalculate('triangle-width', 'triangle-height')
    const triangleAreaTotal = 0.5 * areaTotal;
    if (triangleAreaTotal) {

        document.getElementById('click-serial').insertAdjacentHTML("beforeend", createHtml("Triangle", triangleAreaTotal))
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

        document.getElementById('click-serial').insertAdjacentHTML("beforeend", createHtml('Paralogram', parallelogramTotal))

    }
})
document.getElementById('rhombus-btn').addEventListener('click', () => {
    const rhombus = geometryCalculate('rhombus-width', 'rhombus-height');

    if (rhombus) {

        document.getElementById('click-serial').insertAdjacentHTML("beforeend", createHtml('Rhombus', rhombus))

    }
})
document.getElementById('Pentagon-btn').addEventListener('click', () => {
    const pentagon = geometryCalculate('pentagon-width', 'pentagon-height');
    if (pentagon) {

        document.getElementById('click-serial').insertAdjacentHTML("beforeend", createHtml('Pentagon', pentagon))

    }
})
document.getElementById('ellipse-btn').addEventListener('click', () => {
    const ellipseTotal = geometryCalculate('ellipse-width', 'ellipse-height');
    if (ellipseTotal) {


        document.getElementById('click-serial').insertAdjacentHTML("beforeend", createHtml('EllipseTotal', ellipseTotal))

    }
})

