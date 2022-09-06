

function reversibleInclusiveList(num1, num2){
    let arr = []
      
    
    if (num1 > num2) {
        for(i = num1; i >= num2; i--)
        arr.push(i);
        } else {
            for(i = num1; i <= num2; i++)
            arr.push(i);
        }
        return arr;
    }
        
console.log(reversibleInclusiveList(1, 5));
console.log(reversibleInclusiveList(2, 8));
console.log(reversibleInclusiveList(10, 20));
console.log(reversibleInclusiveList(24, 17));


