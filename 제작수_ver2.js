//version2
function solution(arr) {
    let myArr=[];
    for(let i=0;i<arr.length;i++){
        myArr.push(arr[i]);
    }
    let newArr=myArr.sort((a,b)=>a-b);
    let answer=arr.filter((number)=>number!==newArr[0]);
    if(answer.length === 0){
        answer.push(-1);
    }
    return answer;
}

console.log(solution([4,3,2,1]));
console.log(solution([10]));