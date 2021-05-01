function solution(n){
    //3
    let answer='';
    let retNum=0; //나머지수
    while(n>0){
        //n===3
        retNum=n%3; //나머지 retNum=0 
        n=parseInt(n/3,10); //몫 1
        if(retNum===0){
            n-=1;
            retNum=4;
        }
        answer=retNum+answer; 
    }
    return answer;
}

console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
console.log(solution(11));