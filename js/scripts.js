function romanNum(number) {
  const symbols = ["I","V","X","L","C","D","M"];
  const values = [1,5,10,50,100,500,1000];
  let output = "";
  // for (let j = 0; j < number; j++) {
  //   if (number < 10) {
  //     if (number < 4) {
  //       output += symbols[0];
  //     } else if (number === 4) {
  //       output = symbol[1]+symbol[0];
  //     }
  //   } else {
  //     for (let i=0; i < values.length; i++) {
  //       if (number === values[i]) {
  //         output = symbols[i];
  //       } 
  //     }
  //   }
  // }
  while (number > 0) {
    if (number >= 1000) {
      output += symbols[6];
      number -= 1000; 
    }
  }
  console.log(output);
  console.log(number);
}