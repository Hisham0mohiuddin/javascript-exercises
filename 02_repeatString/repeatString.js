const repeatString = function(w,n) {
    if (n<0) return "ERROR";
    let sol ="";
    for(let i =0;i<n;i++){
        sol +=w;
    } 
    return sol;
};

// Do not edit below this line
module.exports = repeatString;
