//reduce 공부하기
function solution(arr){
    return arr.reduce((prev,curr)=>prev+curr)/arr.length;
}

console.log(solution([1,2,3,4]));
console.log(solution([5,5]));