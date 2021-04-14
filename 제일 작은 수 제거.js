//version1
function solution(arr) {
    let answer = [];
    let min=0;
    
    if(arr.length===1){
        answer.push(-1);
    }else{
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                min=arr[i+1];
                answer.push(arr[i]);
            }
        }
    }
    return answer;
}

console.log(solution([4,3,2,1]));
console.log(solution([10]));