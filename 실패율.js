function solution(N, stages) {
    let answer = [];
    //1단계부터 5단계까지 수행
    for(let i=1;i<=N;i++){
        for(let j=0;j<stages.length;j++){
            if(stages[j]>=i){
                let dodal=0;
                let fail=0;
                dodal+=1;
                if(stages[j]===i){
                    fail+=1;
                    stages.splice(j,fail);
                }
                answer.push(parseInt(fail/dodal,10));
            }
        }
    }
    return answer;
}

console.log(solution(5,[2,1,2,6,2,4,3,3]));
console.log(solution(4,[4,4,4,4]));