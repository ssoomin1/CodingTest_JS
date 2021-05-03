function gcd(x,y){return x%y===0 ? y : gcd(y,Math.floor(x%y));}
function lcm(x,y){return Math.floor(x*y/gcd(x,y));}

function solution(arr) {
    arr=arr.sort((a,b)=>a-b);
    let answer = arr[0];
    for(let i=1;i<arr.length;i++){
        answer=lcm(answer,arr[i]);
    }
    return answer;
}
console.log(solution([2,6,8,14]));
console.log(solution([1,2,3]));