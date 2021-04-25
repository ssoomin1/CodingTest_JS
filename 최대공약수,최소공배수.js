function solution(n, m) {
    let answer = [];
    let nYaksu=[];
    let mYaksu=[];
    let arr1=[];
    for(let i=1;i<=n;i++){
        if(n%i===0){
            nYaksu.push(i);
        }
    }
    
    for(let i=0;i<=m;i++){
        if(m%i===0){mYaksu.push(i);}
    }
    
    for(let i=0;i<nYaksu.length;i++){
        for(let j=0;j<mYaksu.length;j++){
            if(nYaksu[i]===mYaksu[j]){
                arr1.push(nYaksu[i]);
            }
        }
    }
    const max1=Math.max(...arr1);
    const chleo=parseInt(n/max1,10)*parseInt(m/max1,10)*max1;
    console.log(nYaksu.sort((a,b)=>b-a));
    console.log(mYaksu.sort((a,b)=>b-a));
    return [max1,chleo];
}

console.log(solution(3,12));
console.log(solution(2,5));

/*
function solution(n, m) {
    let nYaksu=[];
    let mYaksu=[];
    let maxArr=[];
    for(let i=1;i<=n;i++){
        if(n%i===0){
            nYaksu.push(i);
        }
    }
    
    for(let i=1;i<=m;i++){
        if(m%i===0){
            mYaksu.push(i);
        }
    }
    
    for(let i=0;i<nYaksu.length;i++){
        for(let j=0;j<mYaksu.length;j++){
            if(nYaksu[i]===mYaksu[i]){
                maxArr.push(nYaksu[i]);
            }
        }
    }
    const maxNum=Math.max(...maxArr);
    return [maxNum,maxNum*Number(n/maxNum)*Number(m/maxNum)];
}
*/