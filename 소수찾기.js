//n까지 소수의 개수를 구하기
//점수: ,정확도:
function solution(n) {
    let numbers=[];
    let count=0;
    for(let i=2;i<=n;i++){
        numbers.push(i);
    }
    for(let i=0;i<numbers.length;i++){
        if(isPrime(numbers[i])){
            count+=1;
        }
    }
    return count;
}

function isPrime(num){
    let isP=true;
    for(let i=2;Math.pow(i,2)<=num;i++){
        if(num%i===0){
            isP=false;
        }
    }
    return isP;
}

console.log(solution(10));
console.log(solution(5));