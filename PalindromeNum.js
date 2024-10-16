var isPalindrome = function(x) {
    var strNum = x.toString().split("")
    var result = []

    for(let x  = strNum.length-1 ; x >= 0 ; x-- ){
        result.push(strNum[x])
    }

    if(result.join("") === strNum.join("")){
        return true
    }
    return false
};

console.log(isPalindrome(123))