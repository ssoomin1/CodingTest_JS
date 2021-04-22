function solution(arr)
{
    let answer=[];
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]!==arr[i+1]){
            answer.push(arr[i]);
        }
    }
    answer.push(arr[arr.length-1]);
    return answer;
}

console.log(solution([1,1,3,3,0,1,1]));
console.log(solution([4,4,4,3,3]));
console.log(solution([1,5,6,6,6,6,7,7,8,0,1]));