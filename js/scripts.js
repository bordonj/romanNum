// function romanNum(number) {
//   const symbols = ["I","V","X","L","C","D","M"];
//   const values = [1,5,10,50,100,500,1000];
//   let output = "";
//   for (let i=0; i < values.length; i++) {
//     if (number === values[i]) {
//       output = symbols[i];
//     } else if (number < 4) {
//       for (let j = 0; j < number; j++) {
//         output += symbols[0];
//       }
//     }
//   }
//   console.log(output);
// }

function romanNum(number) {
  const symbols = ["I","V","X","L","C","D","M"];
  const values = [1,5,10,50,100,500,1000];
  let output = "";
  for (let j = 0; j < number; j++) {
    if (number < 4) {
      output += symbols[0];
    } else
    for (let i=0; i < values.length; i++) {
      if (number === values[i]) {
        output = symbols[i];
      }
    }
  }
  console.log(output);
}


