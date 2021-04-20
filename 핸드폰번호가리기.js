function solution(phone_number){
    let answer=phone_number.split('').reverse();
    for(let i=4;i<answer.length;i++){
        answer[i]="*";
    }
    return answer.reverse().join('');
}

console.log(solution("010333344444"));
console.log(solution("027778888"));