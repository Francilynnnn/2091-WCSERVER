//Estanislao, Francilyn Bernadette P.
//Hands-On Quiz 1: Understanding Exporting Modules Quiz
//WD 201

var calc = {
  add: function(a, b) //Function for Addition
  { 
    let x = a + b;
    return x;
  },
  
  subtract: function(a, b) //Function for Subtraction
  {
    let x = a - b;
    return x;
  },
  
  multiply: function(a, b) //Function for Multiplication
  {
    let x = a * b;
    return x;
  },
  
  divide: function(a, b) //Function for Division
  {
    let x = a / b;
    return x;
  }

}

module.exports = calc;
