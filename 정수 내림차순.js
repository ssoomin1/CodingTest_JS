//배열로 바꾸어서 reverse 한 후 join하고 Number로 리턴
function solution(n){
    //toString : Number to String / string => array
    let answer=n.toString(10).split('').sort((a,b)=>b-a).join('');
    return Number(answer);
}

console.log(solution(118372));