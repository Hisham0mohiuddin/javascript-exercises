const removeFromArray = function(array, ...args) {
    let ans=[];
    for (let i=0;i<array.length;i++){
        for(let j of args){
            if(j===array[i]){
                array.splice(i,1);
                i--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
