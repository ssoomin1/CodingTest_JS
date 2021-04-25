//n까지 소수의 개수를 구하기
//점수: ,정확도:
function solution(n) {
    let numArr=[];
    //1부터 그 수까지 배열에 넣기
    for(let i=1;i<=n;i++){
        numArr.push(i);
    }
    //각각 돌면서 약수의 개수가 2개인것만 다른 배열에 넣어서 return arr.length를 하기
    const answer=[];
    let yaksu=[];
    for(let i=0;i<numArr.length;i++){
        if(numArr[i]%(i+1)===0){
            
        }
    }
    //const answer=numArr.filter((e)=>)
    return answer;
}

console.log(solution(10));