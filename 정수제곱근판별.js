//+4
function solution(n) {
    let number=Math.sqrt(n);
    if(number===parseInt(Math.sqrt(n),10)){
        return Math.pow(number+1,2);
    }else{
        return -1;
    }
}

console.log(solution(121));
console.log(solution(3));