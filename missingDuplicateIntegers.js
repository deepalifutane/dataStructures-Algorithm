// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    A.sort();
    var newArr = [];
    newArr.push(A[0])
    if(A[A.length-1] > 1000000 || A[A.length-1]<0){
        return 1;
    }else{
        for(var i=0; i<A.length; i++){
            if(newArr[newArr.length-1] != A[i] && A[i] > 0){
                newArr.push(A[i])
            }
        }
        for(var i=0; i<newArr.length; i++){
         if(newArr[i]+1 != newArr[i+1]){
             return newArr[i]+1;
         }
        }
        if(newArr[newArr.length-1] == newArr[newArr.length-2]+1){
            return newArr[newArr.length-1]+1;
        }
    }
    return 1;
}
