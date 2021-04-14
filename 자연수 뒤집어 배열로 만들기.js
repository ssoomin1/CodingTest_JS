function solution(n){
    let answer=n.toString().split('').reverse().map((num)=>Number(num));
    return answer;
}

console.log(solution(12345));