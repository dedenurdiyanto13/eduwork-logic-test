function swap() {
  let a = 10;
  let b = 20;
  console.log("a awal = ", a);
  console.log("b awal = ", b);

  a -= b;
  b += a;
  a = b - a;

  console.log("a final = ", a);
  console.log("b final = ", b);
}

swap();
