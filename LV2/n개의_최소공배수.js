function gcd(a,b){
    if(a%b===0){
        return b;
    }
    gcd(b,a%b);
}

function solution(arr){
    //최소공배수는 두 수의 곱/최대공약수
    const answer=arr.reduce((prev,conn)=>{
        
    })
    return answer;
}

console.log(solution([2,6,8,14]));
console.log(solution([1,2,3]));