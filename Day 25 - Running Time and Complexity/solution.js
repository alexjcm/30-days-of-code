function processData(input) {
  //Enter your code here
  input
    .split("\n")
    .slice(1)
    .map((n, i) => {
      console.log(isPrime(n) ? "Prime" : "Not prime");
    });

  function isPrime(n) {
    if (n == 1) return false;

    for (let i = 2; i * i <= n; i++) {
      if (n % i == 0) return false;
    }

    return true;
  }
}
