//점수:1
// 정확도: 100/100
function solution(absolutes, signs) {
    let answer = [];
    for(let i=0;i<absolutes.length;i++){
        if(signs[i]===false){
            answer.push(absolutes[i]*(-1));
        }else{
            answer.push(absolutes[i]);
        }
    }
    return answer.reduce((prev,curr)=>prev+curr);
}

console.log(solution([4,7,12],[true,false,true]));
console.log(solution([1,2,3],[false,false,true]));