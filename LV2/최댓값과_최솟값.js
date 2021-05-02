function solution(s){
    const num=s.split(' ');
    return Math.min(...num).toString()+' '+Math.max(...num).toString();
}

console.log(solution('1 2 3 4'));
console.log(solution('-1 -2 -3 -4'));
console.log(solution('-1 -1'));