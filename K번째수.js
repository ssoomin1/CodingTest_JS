function solution(array, commands) {
    let answer = [];
    let deletCount=0;
    let startIdx=0;
    
    for(let i=0;i<commands.length;i++){
        let newArr=array.map((e)=>e);
        deletCount=commands[i][1]-commands[i][0]+1;
        startIdx=commands[i][0]-1;
        const arr=newArr.splice(startIdx,deletCount).sort((a,b)=>a-b);
        answer.push(arr[commands[i][2]-1]);
    }
    return answer;
}

console.log(solution([1,5,2,6,3,7,4],[[2,5,3],[4,4,1],[1,7,3]]));
