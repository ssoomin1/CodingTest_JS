//1
function solution(x){
    let answer = true;
    let numArr = x.toString().split('');
    const number = numArr.map((e)=>parseInt(e,10));
    let sum=number.reduce((prev,curr)=>prev+curr);
    x%sum===0?answer:answer=false;
    return answer;
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));