function solution(answers){
    const s1=[1,2,3,4,5]; //length:5
    const s2=[2,1,2,3,2,4,2,5]; //length:8
    const s3=[3,3,1,1,2,2,4,4,5,5]; //length:10

    let total1=0;
    let total2=0;
    let total3=0;
    //5=>0 6=>1 7=>2 따라서 5%5=0 6%5=1 7%5=2 8%5=3 9%5=4
    for(let i=0;i<answers.length;i++){
        if(answers[i]===s1[i%s1.length]){total1+=1;}
        if(answers[i]===s2[i%s2.length]){total2+=1;}
        if(answers[i]===s3[i%s3.length]){total3+=1;}
    }
    let answer=[];
    const totalArr=Array.of(total1,total2,total3);
    let totalNum=Math.max(total1,total2,total3);
    for(let i=0;i<totalArr.length;i++){
        if(totalArr[i]===totalNum){
            answer.push(i+1);
        }
    }
    return answer;
}

console.log(solution([1,2,3,4,5]));
console.log(solution([1,3,2,4,2]));