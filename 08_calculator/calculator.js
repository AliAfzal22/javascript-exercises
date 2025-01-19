const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(list) {
	return list.reduce((acc,curr) => 
  acc+= curr
  ,0)
};

const multiply = function(list) {
  return list.reduce((acc,curr) => 
    acc*=curr
  ,1)
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
  if(num == 0){
    return 1;
  }
  if (num == 1){
    return 1;
  }
  else {
    return num * factorial(num-1);
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
