function solution(n){
    let answer=0;
    for(let i=1;i<=n;i++){
        if(i%1==0 && i%i==0 && i != 1){
            answer+=1;
        }
    }
    return answer;
}

console.log(solution(10));