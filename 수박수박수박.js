function solution(n){
    let answer=[];
    let subak=['수','박'];
    for(let i=0;i<n;i++){
        if(i%2===0){
            answer.push(subak[0]);
        }else{
            answer.push(subak[1]);
        }
    }
    return answer.join('');
}

console.log(solution(3));