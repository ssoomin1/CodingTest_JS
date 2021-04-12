function solution(s){
    let answer=true;
    let sArr=s.toUpperCase().split('');
    let pCount=0;
    let yCount=0;
    console.log('Hello Javascript');
    for(let i=0;i<sArr.length;i++){
        if(sArr[i]==='P'){
            pCount+=1;
        }else if(sArr[i] === 'Y'){
            yCount+=1;
        }
    }

    return answer;

    // if(pCount === yCount){
    //     answer=true;
    // }else{
    //     answer=false;
    // }
    // return answer;
}

console.log(solution('pPoooyY'));