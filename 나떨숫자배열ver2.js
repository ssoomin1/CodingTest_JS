//filter사용해서 풀어보기  map과 filter의 차이는?
/* map은 콜백함수가 적용된 새 요소, filter는 조건문을 만족한 요소를 반환
*/
function solution(arr, divisor) {
    let answer=arr.filter((a)=>a%divisor===0);
    answer.length !==0 ? answer.sort((a,b)=>a-b):answer.push(-1);
    return answer;
}

console.log(solution([5,9,7,10],5));
console.log(solution([2,36,1,3],1));
console.log(solution([3,2,6],10));