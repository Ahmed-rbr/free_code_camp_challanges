function tribonacciSequence(startSequence, length) {
  for (let i = 0; i < length - 3; i++) {
    const lastThree = startSequence
      .slice(-3)
      .reduce((acc, num) => (acc += num), 0);

    startSequence.push(lastThree);
  }
  if (length < startSequence.length) {
    return startSequence.slice(0, length);
  }
  return startSequence;
}
console.log(tribonacciSequence([0, 0, 1], 0));
