function calculate(obj, buttonName) {
  //When AC button is pressed, we will be displaying 0 on screen, so all states go to null.
  if (buttonName === "AC") {
    return {
      result: null,
      nextOperand: null,
      operator: null
    };
  }

  //If Number is pressed.
  if (isNumber(buttonName)) {
    if (buttonName === "0" && obj.nextOperand === "0") {
      return {};
    }
    // If there is an operator pressed, update next with operator and the  number
    if (obj.operator) {
      if (obj.nextOperand) {
        return { nextOperand: obj.nextOperand + buttonName };
      }
      return { nextOperand: buttonName };
    }
    //If there is no operator
    if (obj.nextOperand) {
      return {
        nextOperand: obj.nextOperand + buttonName,
        result: null
      };
    }
    return {
      nextOperand: buttonName,
      result: null
    };
  }

  //If theres a point.
  if (buttonName === ".") {
    if (obj.nextOperand) {
      //cant have more than one decimal point in a number, dont change anything
      if (obj.nextOperand.includes(".")) {
        return {};
      }
      //else append dot to the number.
      return { nextOperand: obj.nextOperand + "." };
    }
    //If the operand is pressed that directly starts with .
    return { nextOperand: "0." };
  }

  if (buttonName === "=") {
    if (obj.nextOperand && obj.operator) {
      return {
        result: performCalculation(obj.result, obj.nextOperand, obj.operator),
        nextOperand: null,
        operator: null
      };
    } else {
      // '=' with no operation, nothing to do
      return {};
    }
  }

  //To toggle +/- simply multiply by -1
  if (buttonName === "+/-") {
    if (obj.nextOperand) {
      return { nextOperand: String(-1 * parseFloat(obj.nextOperand)) };
    }
    if (obj.result) {
      return { result: String(-1 * parseFloat(obj.result)) };
    }
    return {};
  }



//For x²,square root and percentage.
  if(buttonName === "x²" || buttonName === "√" || buttonName === "%"){
      //We pressed x2 after some number and operator i.e we need to get calculation first and then square.
    return moreCalculation(obj,buttonName);
  }

  //For backspace, remove last digit from the display value.
  if(buttonName === "⌫"){
      //We only need to remove the last digit from number if the user is typing the number and its not a result number after any calculations
    if(obj.nextOperand && !obj.result){
        const numResult = String(obj.nextOperand);
        const finalNum = (numResult.length > 1) ? numResult.slice(0,-1) : 0;
        return {
            nextOperand : finalNum,
        };
    }
    return {};
  }

  // The user hasn't typed an operand yet but has entered an operator, just save the operation
  if (!obj.nextOperand) {
    return { operator: buttonName };
  }
  // User pressed an operation button and there is an existing operation
  if (obj.operator) {
    return {
      result: performCalculation(obj.result, obj.nextOperand, obj.operator),
      nextOperand: null,
      operator: buttonName
    };
  }

  //If operator pressed, set it to state and result is next operand to display on screen.
  return {
    result: obj.nextOperand,
    nextOperand: null,
    operator: buttonName
  };
}

//To check the pressed button is a Number
function isNumber(item) {
  return /[0-9]+/.test(item);
}

//To perform calculations of basic operations(plus/minus/multiply/divide)
function performCalculation(firstNum, secondNum, operation) {
  firstNum = parseFloat(firstNum);
  secondNum = parseFloat(secondNum);
  if (operation === "+") return String(firstNum + secondNum);
  if (operation === "-") return String(firstNum - secondNum);
  if (operation === "*") return String(firstNum * secondNum);
  if (operation === "/") {
    if (secondNum === 0) {
      alert("Cant divide by 0");
      return "0";
    } else {
      return String(firstNum / secondNum);
    }
  }
}

function moreCalculation(obj,buttonName){
    //We have done the basic calculations and then doing either of sq root, square
    if(obj.nextOperand && obj.operator){
        const output = performCalculation(obj.result,obj.nextOperand,obj.operator);
        const result = getResult(output,buttonName);
        return {
            result : result,
            nextOperand : null,
            operator : null
        };
      } 
    //Not in between of calculations.  
    if(obj.nextOperand || obj.result){
        const refNum = obj.nextOperand || obj.result;
        const numResult = getResult(refNum , buttonName);    
        return {
            result : numResult,
            nextOperand : numResult,
        };        
    }
    return {};
}

function getResult(number,buttonName){
    if(buttonName === "x²") return String(parseFloat(Math.pow(number,2)));    
    if(buttonName === "√")  return String(parseFloat(Math.sqrt(number)));
    if(buttonName === "%")  return String(parseFloat(number/100));   
}

export default calculate;
