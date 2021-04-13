function solution(n){
    let answer=0;
    //소수의 조건 : 1이 아니여야하고 약수는 1과 자기자신만 갖기
    for(let i=1;i<=n;i++){
        if(i != 1){
            answer+=1;
        }
    }
    return answer;
}

console.log(solution(10));