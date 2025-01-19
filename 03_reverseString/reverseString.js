const reverseString = function(string) {
   let array = string.split("");
   let newArray = []
   let j = array.length
   for(let i = 0; i< array.length;i++){
        newArray[i] = array[j-1];
        j--
   }
   let finalWord = newArray.join('');
   return finalWord
};

// Do not edit below this line
module.exports = reverseString;
