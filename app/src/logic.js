function reverseNum(string) {
  let reversedstring = string.split("").reverse().join("");
  return reversedstring;
}

/* function to find if the first three digits is any trig func or log or something like that
 if you find it is something like that remove the first three and store it in a sperate array and the brackets 
  in the resulting string has to be removed and subjected to the same procedure
*/ 

/*  let array = num.split("");

    let functions = [ sin , cos , tan , cosec , sec , cot , arcsin , arccos , arctan , arccosec , arcsec , arccot , log ]
    let string = "";
    for ( i = 0; i < array.length ; i ++ ) {
        string = string.concat(array[i]);

        if ( i == 2 ) {
            
        }
        
    }
 */

// first divide then multiply ...
let i , j , h , d , k , l = 0
function divide(number) {
  let numarray2 = number.toString().split("");
  numarray2 = numarray2.filter((e) => e != " "); // gets rid of any whitespace in the string
  let operators = ["+", "-", "/", "*"];

  for (i = 0; i < numarray2.length; i++) {
    if (numarray2[i] == "/") {
      let backcount = 0;
      for (h = i - 1; h >= 0; h--) {
        if (operators.includes(numarray2[h]) || h === 0) {
          backcount = h === 0 ? 0 : h + 1;
          break;
        }
      }

      let forcount = numarray2.length - 1;
      for (d = i + 1; d < numarray2.length; d++) {
        if (operators.includes(numarray2[d]) || d === numarray2.length - 1) {
          forcount = d === numarray2.length - 1 ? d : d - 1;
          break;
        }
      }

      let firstNum = "";
      for (k = i - 1; k >= backcount; k--) {
        firstNum = firstNum.concat(numarray2[k]);
      }
      let firstNum1 = reverseNum(firstNum);
      let firstNumValue = parseFloat(firstNum1);

      let lastNum = "";
      for (l = i + 1; l <= forcount; l++) {
        lastNum = lastNum.concat(numarray2[l]);
      }
      let lastNumValue = parseFloat(lastNum);

      let newNum = firstNumValue / lastNumValue;

      numarray2.splice(backcount, forcount - backcount + 1, newNum.toString()); // pushing the calculated value in place of the expression
    }
  }

  // Join the array back into a string and check if there are more divisions to perform
  let result = numarray2.join("").toString();
  if (result.includes("/")) {
    return divide(result); // only divide further if there are still /s left 
  } else {
    return multiply(result);
  }
};

function multiply(num1) {

  let numarray2 = num1.toString().split("");

  let operators = ["+", "-", "/", "*"];

  for (i = 0; i < numarray2.length; i++) {
    if (numarray2[i] == "*") {
      let backcount = 0;
      for (h = i - 1; h >= 0; h--) {
        if (operators.includes(numarray2[h]) || h === 0) {
          backcount = h === 0 ? 0 : h + 1;
          break;
        }
      }

      let forcount = numarray2.length - 1;
      for (d = i + 1; d < numarray2.length; d++) {
        if (operators.includes(numarray2[d]) || d === numarray2.length - 1) {
          forcount = d === numarray2.length - 1 ? d : d - 1;
          break;
        }
      }

      let firstNum = "";
      for (k = i - 1; k >= backcount; k--) {
        firstNum = firstNum.concat(numarray2[k]);
      }
      let firstNum1 = reverseNum(firstNum);
      let firstNumValue = parseFloat(firstNum1);

      let lastNum = "";
      for (l = i + 1; l <= forcount; l++) {
        lastNum = lastNum.concat(numarray2[l]);
      }
      let lastNumValue = parseFloat(lastNum);

      let newNum = firstNumValue * lastNumValue;

      numarray2.splice(backcount, forcount - backcount + 1, newNum.toString());
    }
  }
  let result = numarray2.join("").toString();
  if (result.includes("*")) {
    return multiply(result);
  } else {
    return add(result);
  }
};


function add(num1) {

  let numarray2 = num1.toString().split("");

  let operators = ["+", "-", "/", "*"];

  for (i = 0; i < numarray2.length; i++) {
    if (numarray2[i] == "+") {
      let backcount = 0;
      for (h = i - 1; h >= 0; h--) {
        if (operators.includes(numarray2[h]) || h === 0) {
          backcount = h === 0 ? 0 : h + 1;
          break;
        }
      }

      let forcount = numarray2.length - 1;
      for (d = i + 1; d < numarray2.length; d++) {
        if (operators.includes(numarray2[d]) || d === numarray2.length - 1) {
          forcount = d === numarray2.length - 1 ? d : d - 1;
          break;
        }
      }

      let firstNum = "";
      for (k = i - 1; k >= backcount; k--) {
        firstNum = firstNum.concat(numarray2[k]);
      }
      let firstNum1 = reverseNum(firstNum);
      let firstNumValue = parseFloat(firstNum1);

      let lastNum = "";
      for (l = i + 1; l <= forcount; l++) {
        lastNum = lastNum.concat(numarray2[l]);
      }
      let lastNumValue = parseFloat(lastNum);

      let newNum = firstNumValue + lastNumValue;

      numarray2.splice(backcount, forcount - backcount + 1, newNum.toString());
    }
  }
  let result = numarray2.join("").toString();
  if (result.includes("*")) {
    return add(result);
  } else {
    return subtract(result);
  }
};

function subtract(num1) {

  let numarray2 = num1.toString().split("");

  let operators = ["+", "-", "/", "*"];

  for (i = 0; i < numarray2.length; i++) {
    if (numarray2[i] == "-") {
      let backcount = 0;
      for (h = i - 1; h >= 0; h--) {
        if (operators.includes(numarray2[h]) || h === 0) {
          backcount = h === 0 ? 0 : h + 1;
          break;
        }
      }

      let forcount = numarray2.length - 1;
      for (d = i + 1; d < numarray2.length; d++) {
        if (operators.includes(numarray2[d]) || d === numarray2.length - 1) {
          forcount = d === numarray2.length - 1 ? d : d - 1;
          break;
        }
      }

      let firstNum = "";
      for (k = i - 1; k >= backcount; k--) {
        firstNum = firstNum.concat(numarray2[k]);
      }
      let firstNum1 = reverseNum(firstNum);
      let firstNumValue = parseFloat(firstNum1);

      let lastNum = "";
      for (l = i + 1; l <= forcount; l++) {
        lastNum = lastNum.concat(numarray2[l]);
      }
      let lastNumValue = parseFloat(lastNum);

      let newNum = firstNumValue - lastNumValue;

      numarray2.splice(backcount, forcount - backcount + 1, newNum.toString());
    }
  }
  let result = numarray2.join("").toString();
  if (result.includes("*")) {
    return subtract(result);
  } else {
    return result;
  }
};

export default divide ;