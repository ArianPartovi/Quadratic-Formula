function calculate() {
    var a = document.getElementById('a').value; //declaring variable a
    var b = document.getElementById('b').value; //declaring variable b
    var c = document.getElementById('c').value; //declaring variable c

    var discriminant = b * b - 4 * a * c; //inside of the square root formula
    var root1, root2; // answers are root1 and root 2
    var resultText = '';

    if (discriminant > 0) { //scenario if the inside of the square root is a value greater than 0
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        resultText = `Roots are real and different<br>Root 1 = ${root1.toFixed(2)}<br>Root 2 = ${root2.toFixed(2)}`;
    } else if (discriminant == 0) { //scenario if the inside of the square root is a value equal to 0
        root1 = root2 = -b / (2 * a);
        resultText = `Roots are real and same<br>Root = ${root1.toFixed(2)}`;
    } else { //scenario if the the result is none of the above
        var realPart = (-b / (2 * a)).toFixed(2);
        var imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        resultText = `Roots are complex, No real solution<br>Root 1 = ${realPart} + ${imaginaryPart}i<br>Root 2 = ${realPart} - ${imaginaryPart}i`;
    }

    var resultElement = document.getElementById('result');
    resultElement.innerHTML = resultText;
    resultElement.classList.remove('showResult'); // Reset animation
    // Trigger reflow to restart the animation
    void resultElement.offsetWidth;
    resultElement.classList.add('showResult');
}
