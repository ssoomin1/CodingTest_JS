function solution(strings,n){
    const sArr=strings.map((e,idx)=>{
        return [idx,e[n]];
    })
    //sArr
    //[0,"u"]
    //[1,"e"]
    //[2,"a"]

    /*
    [0,"c"]
    [1,"c"]
    [2,"x"]
    */
    const sortArr=strings.map((e)=>e[n]).sort();
    //sortArr : ["a","e","u"] ["c","c","x"]
    //answer : [2,1,0] [0,0]
    //sortArr[1]===sArr[0][1] c===
    let answer=[];
    for(let i=0;i<sortArr.length;i++){
        for(let j=0;j<sArr.length;j++){
            if(sortArr[i]===sArr[j][1]){
                answer.push(sArr[j][0]);
            }
        }
    }
    let a=[];
    for(let i=0;i<answer.length;i++){
        a.push(strings[answer[i]]);
    }

    return answer;
}


console.log(solution(["sun","bed","car"],1));
console.log(solution(["abcd","abcd","cdx"],2));