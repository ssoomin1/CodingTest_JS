function solution(n){
    let answer=0;
    let numArr=[];
    for(let i=1;i<=n;i++){
        numArr.push(i);
    }

    for(let i=0;i<numArr.length;i++){
        let sum=0;
        for(let j=i;j<numArr.length;j++){
            sum+=numArr[j];
            if(sum===n){answer+=1; break;}
            else if(sum>n){break;}
        }
    }
    return answer;
}

console.log(solution(15));