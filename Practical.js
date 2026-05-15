function calculateSum() {
    const n = parseInt(document.getElementById("numberInput").value);
    const resultElement = document.getElementById("result");

    if (isNaN(n) || n < 1) {
        resultElement.textContent = "Please enter a valid positive integer.";
        return;
    }
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    resultElement.textContent = `The sum of even numbers from 1 to ${n} is: ${sum}`;
}