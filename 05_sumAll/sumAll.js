const sumAll = function(x,y) {
    if (x<0||y<0){
        return "ERROR";
    }
    let b= Math.floor(x);
    if(b!=x){
        return "ERROR";
    }
    if (y.length>1){
        return "ERROR";
    }
    if(x>y){
        [x,y]=[y,x];
    }
    let sum =0;
    for(let i=x;i<=y;i++){
        sum+=i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
