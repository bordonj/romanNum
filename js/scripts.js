function romanNum(number) {
  const symbols = ["I","V","X","L","C","D","M"];
  const values = [1,5,10,50,100,500,1000];
  let output = "";
  for (let i=0; i < values.length; i++) {
    if (number === values[i]) {
      output = symbols[i];
    }
  }
  console.log(output);
}