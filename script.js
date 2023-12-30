function calculate() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;

    var discriminant = b * b - 4 * a * c;
    var root1, root2;
    var resultText = '';

    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        resultText = `Roots are real and different<br>Root 1 = ${root1.toFixed(2)}<br>Root 2 = ${root2.toFixed(2)}`;
    } else if (discriminant == 0) {
        root1 = root2 = -b / (2 * a);
        resultText = `Roots are real and same<br>Root = ${root1.toFixed(2)}`;
    } else {
        var realPart = (-b / (2 * a)).toFixed(2);
        var imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        resultText = `Roots are complex<br>Root 1 = ${realPart} + ${imaginaryPart}i<br>Root 2 = ${realPart} - ${imaginaryPart}i`;
    }

    var resultElement = document.getElementById('result');
    resultElement.innerHTML = resultText;
    resultElement.classList.remove('showResult'); // Reset animation
    // Trigger reflow to restart the animation
    void resultElement.offsetWidth;
    resultElement.classList.add('showResult');
}
