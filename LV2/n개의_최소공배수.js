function gcd(x,y){return x%y===0 ? y : gcd(y,Math.floor(x%y));} //gcd(6,2) =>2
//gcd(6,8) => gcd(8,2) => 2
//gcd(24,14) =>gcd(14,10) =>gcd(10,4) => gcd(4,6) => gcd(6,4) => gcd(4,2)=>2
function lcm(x,y){return Math.floor(x*y/gcd(x,y));} //Math.floor(2*6/gcd(2,6)) =>12/2 => 6
//return 48/gcd(6,8) 48/2=24
//return 24*14/gcd(24,14) 24*14/2 = 168

function solution(arr) {
    arr=arr.sort((a,b)=>a-b);//[2,6,8,14]
    let answer = arr[0]; //2
    for(let i=1;i<arr.length;i++){
        answer=lcm(answer,arr[i]); //lcm(2,arr[1]=6) answer=6
        //lcm(6,arr[2]=8)  answer=24
        //lcm(24,arr[3]=14)  answer=168
    }
    return answer;
}
console.log(solution([2,6,8,14]));
console.log(solution([1,2,3]));