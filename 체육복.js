// function solution(n, lost, reserve) {
//     //let answer = n.toString().split('').map(e=>parseInt(e,10));
//     let answer=[]; //[1,2,3,4,5] [2,4]
//     for(let i=1;i<=n;i++){
//         answer.push(i);
//     }
//     let haveArr=[];
//     // for(let i=0;i<answer.length;i++){
//     //     for(let j=0;j<lost.length;j++){
//     //         if(answer){
//     //             haveArr.push(answer[i]);
//     //         }
//     //     }
//     // }

//     for(let i=0;i<lost.length;i++){
//         if(answer.includes(lost[i])===true){
//            answer.splice(lost[i],1);
//         }
//     }
//     return answer;
// }

function solution(n, lost, reserve) {
    let answer=[];
    for(let i=1;i<=n;i++){
        answer.push(i);
    }
    if()

    return answer;
}

//console.log(solution(5,[2,4],[1,3,5]))
console.log(solution(5,[2,4],[1,3,5]));
console.log(solution(5,[2,4],[3]));
console.log(solution(3,[3],[1]));