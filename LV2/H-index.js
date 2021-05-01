//내가 푼 문제 테스트 16번빼고는 모든 테케 실패
function solution(citations) {
    let answer=[];
    //몇번 인용되었는지 확인
    for(let i=0;i<citations.length;i++){
        let count=0;
        for(let j=0;j<citations.length;j++){
            if(citations[j]>=citations[i] && citations[i]!==0){
                count+=1;
            }
        }
        answer.push(count);
    }
    
    for(let i=0;i<answer.length;i++){
        if(answer[i]<=citations[i]){
            return citations[i];
        }
    }
}

console.log(solution([3,0,6,1,5]));