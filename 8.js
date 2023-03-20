function kelipatan() {
  angka = 15;

  for (let index = 1; index <= angka; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
      console.log("ApiJava");
    } else if (index % 3 == 0) {
      console.log("Api");
    } else if (index % 5 == 0) {
      console.log("Java");
    } else {
      console.log(index);
    }
  }
}

kelipatan();
