function solution(numbers){
    //e+'':문자열 
    //sort 활용하기
    let answer=numbers.map((e)=>e+'').sort((a,b)=>(b+a)-(a+b)).join('');
    return answer[0]===0?'0':answer;
}

console.log(solution([6,10,2]));
console.log(solution([3,30,34,5,9]));