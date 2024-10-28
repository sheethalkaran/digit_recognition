// static/script.js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const result = document.getElementById('result');

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);

let drawing = false;

function startDrawing(e) {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

function stopDrawing() {
    drawing = false;
    ctx.closePath();
}

function draw(e) {
    if (!drawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}

document.getElementById('predictButton').addEventListener('click', () => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = Array.from(imageData.data)
        .filter((_, i) => (i + 1) % 4 === 0)
        .map(pixel => (pixel === 0 ? 0 : 255));

    const resizedData = new Array(28 * 28).fill(0);
    for (let y = 0; y < 28; y++) {
        for (let x = 0; x < 28; x++) {
            const index = Math.floor(y * (canvas.height / 28)) * canvas.width + Math.floor(x * (canvas.width / 28));
            resizedData[y * 28 + x] = data[index] === 0 ? 0 : 255;
        }
    }

    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: resizedData }),
    })
    .then(response => response.json())
    .then(data => {
        result.innerText = `Predicted Digit: ${data.digit}`;
    });
});

document.getElementById('clearButton').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    result.innerText = '';
});
