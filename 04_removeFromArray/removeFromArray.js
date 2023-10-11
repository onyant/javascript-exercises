const removeFromArray = function(list,...numbers) {
    let newlist=[];
    
    list.forEach(element => {
        if(!list.includes(element)){
            newlist.push(element)
        }
    }
    )

    return newlist;
}

// Do not edit below this line
module.exports = removeFromArray;
