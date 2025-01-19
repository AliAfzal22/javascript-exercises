const repeatString = function(str,n) {
    if(n<0){
        return "ERROR"
    }
    let string = ""
    for(let i = 0; i < n; i++){
        string+=str;
    }
    return string
};

// Do not edit below this line
module.exports = repeatString;
