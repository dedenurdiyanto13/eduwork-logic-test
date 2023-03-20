function printDigitValue(value) {
  result = value.match(/\d+/g).join("");
  n = result.length;

  console.log(result);

  result.split("").forEach((element, index) => {
    console.log(element.padEnd(n - index, "0"));
  });
}

printDigitValue("9.86-A5.321");
