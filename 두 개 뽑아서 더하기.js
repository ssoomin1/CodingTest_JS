'use strict';

function solution(numbers){
    let answer=[];
    let sum=0; 
    
    //i : 0,1,2,3
    //j : 1,2,3,4
    for(let i=0;i<numbers.length-1;i++){
        for(let j=i+1;j<numbers.length;j++){
            sum=numbers[i]+numbers[j];
            if(!answer.includes(sum)){
                answer.push(sum);
            }
        }
    }
    //a negative value if first argument is less than second argument, zero if they're equal and a positive
    //즉, sort에서 함수를 사용하여 a-b의 값이 음수일 때 1번째 값이 2번째값보다 작다는 의미 : 오름차순 정렬이 된다는 의미이다. 
    answer.sort((a,b)=>a-b);
    return answer;
}

console.log(solution([5,0,2,7]));