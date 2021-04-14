function solution(n)
{
    //reduce 공부하기
    let answer=n.toString().split('');
    for(let i=0;i<answer.length;i++){
        answer[i]=Number(answer[i]);
    }
    return answer.reduce((prev,curr)=>prev+curr);
}

console.log(solution(123));
console.log(solution(987));