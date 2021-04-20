function solution(arr)
{
    const answer = arr.filter((x,idx)=>{
        if(x !== arr[idx]){return x}
    });
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]!==arr[i+1]){
            answer.push(arr[i]);
            answer.push(arr[i+1]);
        }
    }
    const newArr=answer.filter((x,idx)=>{
        if(x!==answer[idx+1]){return x}
    });
    
    return newArr;
}