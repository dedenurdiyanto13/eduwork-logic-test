function lengthChar() {
  angka = [1, 4, 7, 9, 12];
  low = 2;
  high = 15;

  result = [];
  angka.forEach((element) => {
    if (element >= low && element <= high) {
      result.push(element);
    }
  });
  console.log(result.length);
}

lengthChar();
