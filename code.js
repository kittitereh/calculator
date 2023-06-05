function calculate() {
    let first_number = Number(document.getElementById("first_input").value);
    let second_number = Number(document.getElementById("second_input").value);
    let sign = document.getElementById("sign").value;
    let result;
    
    switch (sign) {
      case '+':
        result = eval(first_number + second_number);
        break;
      case '-':
        result = eval(first_number - second_number);
        break;
      case '*':
        result = eval(first_number * second_number);
        break;
      case '/':
        result = eval(first_number / second_number);
        break;
    }
    document.getElementById("result").innerHTML = result;
  }

