//s : "abcde" return :"c"
// "qwer" return "we"
//단어의 길이가 짝수라면 가운데 두글자 반환
function solution(s){
    const idx=parseInt(s.length/2,10)
    return s.length%2===0?s[idx-1]+s[idx]:s[idx];
}

console.log(solution('abcde'));
console.log(solution('qwer'));
console.log(solution('day6'));
console.log(solution('zombie'));

