function factorial() {
  let int = 8;

  for (i = int - 1; i >= 1; i--) {
    int *= i;
  }

  console.log(int);
}

factorial();
