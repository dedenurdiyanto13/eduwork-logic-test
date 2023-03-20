function highAndLow() {
  let number = [4, 2, 6, 88, 3, 11];
  let low = Number.POSITIVE_INFINITY,
    high = 0;

  for (let i = 0; i < number.length; i += 1) {
    if (number[i] > high) high = number[i];
    if (number[i] < low) low = number[i];
  }
  console.log(`Low : ${low}, High : ${high}`);
}

highAndLow();
