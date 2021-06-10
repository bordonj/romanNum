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
    if (number >= values[6]) {
      output += symbols[6];
      number -= values[6]; 
    } else if (number >=  900 ) {
      output += "CM";
      number -= 900;
    } else if (number >= values[5]) {
      output += symbols[5];
      number -= values[5];
    } else if (number >=  400) {
      output += "CD";
      number -= 400;
    } else if (number >= values[4]) {
      output += symbols[4];
      number -= values[4];
    } else if (number >=  90) {
      output += "XC";
      number -= 90;
    } else if (number >= values[3]) {
      output += symbols[3];
      number -= values[3];
    } else if (number >= 40 ) {
      output += "XL";
      number -= 40;
    } else if (number >= values[2]) {
      output += symbols[2];
      number -= values[2];
    } else if (number >= 9 ) {
      output += "IX";
      number -= 9;
    } else if (number >= values[1]) {
      output += symbols[1];
      number -= values[1];
    } else if (number >= 4 ) {
      output += "IV";
      number -= 4;
    } else if (number >= values[0]) {
      output += symbols[0];
      number -= values[0];
    }
  }
  
  console.log("Output: "+output);
  console.log("Number: "+number);
}