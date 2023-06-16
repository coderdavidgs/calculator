import React from "react";

export const Calc = (str) => {
    
  let newStr = str.split(' ');
  let elements = [];
  let aux = 0;
  let auxOperator = 0;
  let operator = [];
  
  //split elements of my operation
  for(let i = 0; i < newStr.length; i++){
    if(
    newStr[i] == '+'
    || newStr[i] == '*'
    || newStr[i] == '/'
    || newStr[i] == '^'
    || newStr[i] == '-'
    || newStr[i] == 'v'
    ){
      operator[auxOperator] = newStr[i];
      auxOperator++;
    }else {
      elements[aux] = parseFloat(newStr[i]);
      aux += 1;
    }
  }

  //calcs here and results of operation
  let result = 0;
  aux = 0;

  //verify elements quantity
  if(elements.length % 2 == 0){
    for(let i = 0; i < operator.length; i++){

      //its operator is a sum
      if(operator[i] == '+'){
        if(aux == 0){
          result = elements[aux] + elements[aux + 1];
          aux += 2;
        }else{
          result = result + elements[aux]
          aux++;
        }
      }

      //its operator is a substract
      if(operator[i] == '-'){
        if(aux == 0){
          result = elements[aux] - elements[aux + 1];
          aux += 2;
        }else{
          result = result - elements[aux]
          aux++;
        }
      }

      //its operator is a multiplicate
      if(operator[i] == '*'){
        if(aux == 0){
          result = elements[aux] * elements[aux + 1];
          aux += 2;
        }else{
          result = result * elements[aux]
          aux++;
        }
      }

      //its operator is a divisor
      if(operator[i] == '/'){
        if(aux == 0){
          result = elements[aux] / elements[aux + 1];
          aux += 2;
        }else{
          result = result / elements[aux]
          aux++;
        }
      }

      //its operator is a power
      if(operator[i] == '^'){
        if(aux == 0){
          result = Math.pow(elements[aux], elements[aux + 1]);
          aux += 2;
        }else{
          alert('Err: A power can only have one base and one exponent.');
          result = 0;
        }
      }

    }
  }

  if(elements.length % 2 != 0){
    for(let i = 0; i < operator.length; i++){
      
      //verify operator is a sum
      if(operator[i] == '+'){
        if(aux == 0){
          result = elements[aux] + elements[aux + 1];
          aux += 2
        }else {
          result = result + elements[aux];
          aux++;
        }
      }

      //verify operator is a subtract
      if(operator[i] == '-'){
        if(aux == 0){
          result = elements[aux] - elements[aux + 1];
          aux += 2
        }else {
          result = result - elements[aux];
          aux++;
        }
      }

      //verify operator is a multiplicate
      if(operator[i] == '*'){
        if(aux == 0){
          result = elements[aux] * elements[aux + 1];
          aux += 2
        }else {
          result = result * elements[aux];
          aux++;
        }
      }

      //verify operator is a divisor
      if(operator[i] == '/'){
        if(aux == 0){
          result = elements[aux] / elements[aux + 1];
          aux += 2
        }else {
          result = result / elements[aux];
          aux++;
        }
      }

      //verify operator is a power
      if(operator[i] == '^'){
        if(aux == 0){
          result = Math.pow(elements[aux], elements[aux + 1]);
          aux += 2
        }else {
          alert('Err: A power can only have one base and one exponent.');
          result = 0;
        }
      }
    }
  }
  
  if(operator[0] == 'v'){
    console.log('V');
    result = Math.sqrt(elements[1]);
  }

  return result;
}