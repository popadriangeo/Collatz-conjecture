/*
 * Start with any positive integer n.
 * Then each term is obtained from the previous term as follows:
 * If the previous term is even, the next term is one half of the previous term.
 * If the previous term is odd, the next term is 3 times the previous term plus 1
 * The conjecture is that no matter what value of n, the sequence will always reach 1.
 */
function getRandomInteger(min, max) {
    const integerMin = Math.ceil(min);
    const integerMax = Math.floor(max);
    return Math.floor(Math.random() * (integerMax - integerMin + 1)) + integerMin;
  };
function stepCounter(n) {
    let counter = 0;
    let listOfNumbers = []

    while (n > 1) {
        listOfNumbers.push(n);
        n = n % 2 ? 3 * n + 1 : n / 2;
        counter++;
    }
    console.table(listOfNumbers);
    console.log(`number has been reached in ${counter} steps`);
    return
}

stepCounter(getRandomInteger(1, 100000000000))