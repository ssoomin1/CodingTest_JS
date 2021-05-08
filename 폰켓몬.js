function solution(num){
    let answer=0;
    let numArr=num.filter((e,idx)=>{
        if(idx===num.indexOf(e)){
            return e;
        }
    })

    let len=num.length/2;
    if(len>numArr.length){
        answer=numArr.length;
    }else{
        answer=len;
    }

    return answer;
}

console.log(solution([3,1,2,3]));
console.log(solution([3,3,3,2,2,4]));
console.log(solution([3,3,3,2,2,2]));
