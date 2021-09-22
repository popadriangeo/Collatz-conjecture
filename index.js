/*
 * Start with any positive integer n.
 * Then each term is obtained from the previous term as follows:
 * If the previous term is even, the next term is one half of the previous term.
 * If the previous term is odd, the next term is 3 times the previous term plus 1
 * The conjecture is that no matter what value of n, the sequence will always reach 1.
 */

function stepCounter(n) {
    var counter = 0;

    while (n > 1) {
        n = n % 2 ? 3 * n + 1 : n / 2;
        counter++;
    }
    return console.log(counter);
}
