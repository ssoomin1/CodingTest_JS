function solution(n,lost,reserve){
    let answer=[];
    for(let i=0;i<n;i++){answer.push(1); } //기본적으로 모든 학생들에게 1개씩 부여
    for(let i=0;i<answer.length;i++){
        lost.includes(i+1)?answer[i]-=1:answer[i];
        reserve.includes(i+1)?answer[i]+=1:answer[i];
    }
    for(let i=0;i<answer.length;i++){
        if(answer[i]===0 && answer[i-1]===2){
            answer[i-1]-=1;
            answer[i]+=1;
        }else if(answer[i]===0 && answer[i+1]===2){
            answer[i+1]-=1;
            answer[i]+=1;
        }
    }
    const canArr=answer.filter((e)=>e>=1);
    return canArr.length;
}


console.log(solution(5,[2,4],[1,3,5]));
console.log(solution(5,[2,4],[3]));
console.log(solution(3,[3],[1]));