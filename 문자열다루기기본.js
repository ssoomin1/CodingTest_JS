//version1
function solution(s){
    let answer=true;
    let number=Number(s);
    if(s.length===4 || s.length===6){
        answer=!isNaN(number)?true:false;
    }else{
        answer=false;
    }
    return answer;
}

console.log(solution('a123'));
console.log(solution('1234'));
console.log(solution('1bcd'));