const sumAll = function(min, max) {
    let result=0
    if(min>0 && max>0 &&typeof min === 'number' &&typeof max === 'number'){
        if(min<max){
        for(let i=min; i<=max; i++){
        result+=i;
    }
}
    else if (max<min){
        for(let i=max; i<=min; i++){
            result+=i;
        }
    }
}
    else{
        result='ERROR'
    }
    
    return result;
};

// Do not edit below this line
module.exports = sumAll;
