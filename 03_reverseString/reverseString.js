const reverseString = function(w) {
    let n = w.length;
    let ans="";
    for (let i=n-1;i>=0;i--){
        ans+=w[i];
    }
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
